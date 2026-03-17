import { test, expect } from '@playwright/test';

test.describe('Interacciones del Usuario - Noticias y Compartir', () => {

  test('Debe hacer clic en todos los botones de compartir y abrir las pestañas correctas', async ({ page }) => {
    await page.goto('http://localhost:3000/vinculacion/noticias');
    await page.locator('.newsItem').first().click();
    await expect(page).toHaveURL(/.*\/noticias\/.+/);

    const tituloCompartir = page.getByText('Compartir en:');
    await tituloCompartir.scrollIntoViewIfNeeded();

    const redesSociales = [
      { nombre: 'Facebook', urlEsperada: /facebook\.com\/sharer\/sharer\.php/ },
      { nombre: 'Twitter', urlEsperada: /(twitter\.com|x\.com)\/intent\/(tweet|post)/ },
      { nombre: 'LinkedIn', urlEsperada: /linkedin\.com\/(sharing\/share-offsite|uas\/login)/ },
      { nombre: 'WhatsApp', urlEsperada: /api\.whatsapp\.com\/send/ }
    ];
    for (const red of redesSociales) {
      
      const boton = page.locator(`a[aria-label="Compartir en ${red.nombre}"]`);
      await expect(boton).toBeVisible();

      const popupPromise = page.waitForEvent('popup');
      
      await boton.click();
      
      const nuevaPestana = await popupPromise;

      await expect(nuevaPestana).toHaveURL(red.urlEsperada);

      await nuevaPestana.close();
    }
  });

});