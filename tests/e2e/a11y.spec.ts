import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('no serious a11y violations on home', async ({ page }) => {
  await page.goto('/');
  
  // Wait for animations to complete
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000); // Wait for framer motion animations
  
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a','wcag2aa'])
    .analyze();
  const serious = results.violations.filter(v => v.impact === 'serious' || v.impact === 'critical');
  if (serious.length) {
    console.log(JSON.stringify(serious, null, 2));
  }
  expect(serious.length, 'serious/critical violations').toBe(0);
});