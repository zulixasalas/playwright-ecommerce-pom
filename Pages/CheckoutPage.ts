import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly botonCheckout: Locator;
    readonly inputNombre: Locator;
    readonly inputApellido: Locator;
    readonly inputCodigoPostal: Locator;
    readonly botonContinuar: Locator;
    readonly botonFinalizar: Locator;
    readonly mensajeConfirmacion: Locator;

    constructor(page: Page) {
        this.page = page;
        // Mapeamos los elementos del carrito y del formulario de pago
        this.botonCheckout = page.getByTestId('checkout');
        this.inputNombre = page.getByTestId('firstName');
        this.inputApellido = page.getByTestId('lastName');
        this.inputCodigoPostal = page.getByTestId('postalCode');
        this.botonContinuar = page.getByTestId('continue');
        this.botonFinalizar = page.getByTestId('finish');
        this.mensajeConfirmacion = page.getByTestId('complete-header');
    }

    // Acciones agrupadas por lógica de negocio
    async iniciarCheckout() {
        await this.botonCheckout.click();
    }

    async llenarFormularioEnvio(nombre: string, apellido: string, codigoPostal: string) {
        await this.inputNombre.fill(nombre);
        await this.inputApellido.fill(apellido);
        await this.inputCodigoPostal.fill(codigoPostal);
        await this.botonContinuar.click();
    }

    async finalizarCompra() {
        await this.botonFinalizar.click();
    }
}