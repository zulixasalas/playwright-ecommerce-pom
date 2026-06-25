import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // Mapeamos los elementos tal cual los encontraste
        this.usernameInput = page.getByTestId('username');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
        this.errorMessage = page.getByTestId('error');
    }

    // Acción de navegar
    async navegar() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // Acción de iniciar sesión
    async iniciarSesion(usuario: string, contrasena: string) {
        await this.usernameInput.fill(usuario);
        await this.passwordInput.fill(contrasena);
        await this.loginButton.click();
    }
}