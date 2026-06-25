import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import { InventarioPage } from '../../Pages/InventarioPage';
import { CheckoutPage } from '../../Pages/CheckoutPage';

test('Login E-commerce (Exitoso)', async ({ page }) => {
    const loginPage = new LoginPage(page); // Activamos el mapa
    
    await loginPage.navegar();
    await loginPage.iniciarSesion('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
}); 

test('Failed Login E-commerce', async ({ page }) => {
    const loginPage = new LoginPage(page); 
    
    await loginPage.navegar();
    // Le pasamos la contraseña mala intencionalmente
    await loginPage.iniciarSesion('standard_user', 'secret_sauce*'); 
    
    // Validamos usando el elemento guardado en el mapa
    await expect(loginPage.errorMessage).toBeVisible();
});

// Asegúrate de importar esto arriba del todo o usar el truco de VS Code

test('Add to cart E-commerce', async ({ page }) => {
    // 1. Preparamos nuestros mapas
    const loginPage = new LoginPage(page);
    const inventarioPage = new InventarioPage(page);

    // 2. Iniciamos sesión primero (Precondición)
    await loginPage.navegar();
    await loginPage.iniciarSesion('standard_user', 'secret_sauce');

    // 3. Hacemos las acciones del inventario
    await inventarioPage.agregarMochilaAlCarrito();
    await inventarioPage.irAlCarrito();

    // 4. Validamos que llegamos al carrito y vemos el producto
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(inventarioPage.tituloProductoEnCarrito).toBeVisible(); 
});

test('Flujo E-commerce E2E (Compra Completa)', async ({ page }) => {
    // 1. Preparamos todos nuestros mapas
    const loginPage = new LoginPage(page);
    const inventarioPage = new InventarioPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 2. Login
    await loginPage.navegar();
    await loginPage.iniciarSesion('standard_user', 'secret_sauce');

    // 3. Selección de Productos
    await inventarioPage.agregarMochilaAlCarrito();
    await inventarioPage.irAlCarrito();
    
    // Validamos punto de control del carrito
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(inventarioPage.tituloProductoEnCarrito).toBeVisible(); 

    // 4. Proceso de Pago (Checkout)
    await checkoutPage.iniciarCheckout();
    await checkoutPage.llenarFormularioEnvio('Omar', 'Sánchez', '12345');
    
    // Validamos punto de control del resumen de compra
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    
    // 5. Finalizar y Confirmar
    await checkoutPage.finalizarCompra();
    await expect(checkoutPage.mensajeConfirmacion).toContainText('Thank you for your order!');
});