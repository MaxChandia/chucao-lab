import { test, expect } from '@playwright/test';

const rutasEstaticas = [
  '/', 
  '/quienes-somos',
  '/docencia/cursos',
  '/docencia/tesis-y-practicas',
  '/investigacion/infraestructura-y-equipamiento',
  '/investigacion/proyectos',
  '/investigacion/publicaciones',
  '/vinculacion/caminatas-sonoras',
  '/vinculacion/contacto',
  '/vinculacion/divulgacion-cientifica',
  '/vinculacion/eventos-y-actividades',
  '/vinculacion/noticias'
];

test.describe('Prueba de humo - Navegación de páginas', () => {
  
  for (const ruta of rutasEstaticas) {
    test(`Debe cargar la ruta: ${ruta} sin errores`, async ({ page }) => {
      
      const respuesta = await page.goto(`http://localhost:3000${ruta}`);

      expect(respuesta?.status()).toBe(200);
      
      const bodyText = await page.locator('body').innerText();
      expect(bodyText).not.toContain('404');
    });
  }
});