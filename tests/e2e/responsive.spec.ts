import { test, expect } from '@playwright/test';

const widths = [375, 768, 1440];

for (const w of widths) {
  test(`homepage screenshot at ${w}px`, async ({ page }) => {
    await page.setViewportSize({ width: w, height: 900 });
    await page.goto('/');
    await page.screenshot({ path: `tests/screenshots/${w}/home.png`, fullPage: true });
    await expect(page).toHaveTitle(/.+/);
  });
}