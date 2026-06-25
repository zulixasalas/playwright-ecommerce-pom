# 🛒 Suite de Pruebas Automatizadas E2E - Swag Labs (E-Commerce)

¡Bienvenido a mi proyecto de portafolio de QA Automation! En este repositorio presento la automatización de los flujos críticos de negocio de una tienda de comercio electrónico, utilizando herramientas modernas y bajo estándares profesionales de desarrollo.

## 🛠️ Tecnologías Utilizadas
* **Framework:** Playwright (Última versión)
* **Lenguaje de Programación:** TypeScript
* **Arquitectura:** Page Object Model (POM)
* **Editor:** Visual Studio Code

## 🏗️ Arquitectura del Proyecto (Page Object Model)
Para garantizar que el proyecto sea mantenible y escalable en el tiempo, apliqué el patrón de diseño **POM**, separando la lógica de las pruebas de los elementos de la interfaz:
* `Pages/`: Contiene los mapas de componentes y selectores (`LoginPage.ts`, `InventarioPage.ts`, `CheckoutPage.ts`).
* `tests/ecommerce/`: Contiene los scripts de prueba puros (`compras.spec.ts`) enfocados en la lógica de negocio.

## 🧪 Escenarios de Prueba Automatizados
La suite incluye los siguientes escenarios de prueba:
1. **Home Page:** Verificación de carga correcta del sitio.
2. **Login Exitoso (Happy Path):** Acceso correcto con credenciales válidas.
3. **Login Fallido (Sad Path):** Validación de mensajes de error ante credenciales incorrectas.
4. **Agregar al Carrito:** Selección e inclusión de productos de forma correcta.
5. **Flujo E2E Completo:** Simulación real desde el inicio de sesión, selección de productos, llenado de formulario de envío y confirmación final de compra.

---
*Proyecto creado por Zulixa Salas - Ingeniera de QA Automation en Crecimiento.*
