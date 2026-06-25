import { Page, Locator } from '@playwright/test';

export class InventarioPage {
    readonly page: Page;
    readonly botonAgregarMochila: Locator;
    readonly iconoCarrito: Locator;
    readonly tituloProductoEnCarrito: Locator;

    constructor(page: Page) {
        this.page = page;
        // Mapeamos los elementos del inventario y del carrito
        this.botonAgregarMochila = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.iconoCarrito = page.getByTestId('shopping-cart-link');
        this.tituloProductoEnCarrito = page.getByTestId('item-4-title-link');
    }

    // Acciones de la página
    async agregarMochilaAlCarrito() {
        await this.botonAgregarMochila.click();
    }

    async irAlCarrito() {
        await this.iconoCarrito.click();
    }
}