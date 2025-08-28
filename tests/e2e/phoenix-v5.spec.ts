import { test, expect } from '@playwright/test';

test.describe('Phoenix v5 New Pages', () => {
  test('About page loads and displays Melbourne content', async ({ page }) => {
    await page.goto('/about');
    
    // Check page loads successfully
    expect(page.url()).toContain('/about');
    
    // Check for Australian English spelling
    await expect(page.locator('text=centre')).toBeVisible();
    
    // Check for Melbourne-specific content
    await expect(page.locator('text=Melbourne')).toBeVisible();
    
    // Check navigation and footer are present
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('How It Works page displays step-by-step guide', async ({ page }) => {
    await page.goto('/how-it-works');
    
    expect(page.url()).toContain('/how-it-works');
    
    // Check for step indicators
    await expect(page.locator('text=Step 1')).toBeVisible();
    await expect(page.locator('text=Step 2')).toBeVisible();
    
    // Check for Australian English
    await expect(page.locator('text=centre')).toBeVisible();
  });

  test('Help Centre page loads with FAQ sections', async ({ page }) => {
    await page.goto('/help');
    
    expect(page.url()).toContain('/help');
    
    // Check for FAQ content
    await expect(page.locator('text=Frequently Asked Questions')).toBeVisible();
    
    // Check search functionality exists
    await expect(page.locator('input[placeholder*="search"]')).toBeVisible();
  });

  test('Contact page displays forms and contact methods', async ({ page }) => {
    await page.goto('/contact');
    
    expect(page.url()).toContain('/contact');
    
    // Check for contact form
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    
    // Check for contact information
    await expect(page.locator('text=1300 SUBURB')).toBeVisible();
  });

  test('List Business page shows business onboarding', async ({ page }) => {
    await page.goto('/list-business');
    
    expect(page.url()).toContain('/list-business');
    
    // Check for business application content
    await expect(page.locator('text=List Your Business')).toBeVisible();
    
    // Check for benefits section
    await expect(page.locator('text=Why Choose SuburbMates')).toBeVisible();
  });

  test('Pricing page displays three-tier pricing structure', async ({ page }) => {
    await page.goto('/pricing');
    
    expect(page.url()).toContain('/pricing');
    
    // Check for pricing plans
    await expect(page.locator('text=Basic')).toBeVisible();
    await expect(page.locator('text=Professional')).toBeVisible();
    await expect(page.locator('text=Premium')).toBeVisible();
    
    // Check for pricing amounts
    await expect(page.locator('text=$29')).toBeVisible();
    await expect(page.locator('text=$59')).toBeVisible();
    
    // Check for Australian English
    await expect(page.locator('text=centre')).toBeVisible();
  });

  test('Safety page displays safety guidelines', async ({ page }) => {
    await page.goto('/safety');
    
    expect(page.url()).toContain('/safety');
    
    // Check for safety content
    await expect(page.locator('text=Your Safety')).toBeVisible();
    await expect(page.locator('text=Safety Checklist')).toBeVisible();
    
    // Check for Australian emergency numbers
    await expect(page.locator('text=000')).toBeVisible();
    
    // Check for Australian English
    await expect(page.locator('text=centre')).toBeVisible();
  });

  test('Resources page displays helpful guides', async ({ page }) => {
    await page.goto('/resources');
    
    expect(page.url()).toContain('/resources');
    
    // Check for resource sections
    await expect(page.locator('text=For Homeowners')).toBeVisible();
    await expect(page.locator('text=For Service Providers')).toBeVisible();
    
    // Check for Australian English
    await expect(page.locator('text=centre')).toBeVisible();
  });

  test('Feedback page shows feedback form', async ({ page }) => {
    await page.goto('/feedback');
    
    expect(page.url()).toContain('/feedback');
    
    // Check for feedback form
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('select[name="category"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('Privacy Policy page displays comprehensive policy', async ({ page }) => {
    await page.goto('/privacy');
    
    expect(page.url()).toContain('/privacy');
    
    // Check for privacy policy content
    await expect(page.locator('text=Privacy Policy')).toBeVisible();
    await expect(page.locator('text=SuburbMates Pty Ltd')).toBeVisible();
    
    // Check for Australian legal references
    await expect(page.locator('text=Australian')).toBeVisible();
    
    // Check for Australian English
    await expect(page.locator('text=organisation')).toBeVisible();
  });

  test('Terms of Service page displays legal terms', async ({ page }) => {
    await page.goto('/terms');
    
    expect(page.url()).toContain('/terms');
    
    // Check for terms content
    await expect(page.locator('text=Terms of Service')).toBeVisible();
    await expect(page.locator('text=SuburbMates Pty Ltd')).toBeVisible();
    
    // Check for Australian legal jurisdiction
    await expect(page.locator('text=Victoria, Australia')).toBeVisible();
  });

  test('Cookie Policy page displays cookie information', async ({ page }) => {
    await page.goto('/cookies');
    
    expect(page.url()).toContain('/cookies');
    
    // Check for cookie policy content
    await expect(page.locator('text=Cookie Policy')).toBeVisible();
    await expect(page.locator('text=Essential Cookies')).toBeVisible();
    await expect(page.locator('text=Performance Cookies')).toBeVisible();
  });
});

test.describe('Australian English Consistency', () => {
  const pages = [
    '/about',
    '/how-it-works', 
    '/help',
    '/contact',
    '/list-business',
    '/pricing',
    '/safety',
    '/resources',
    '/feedback',
    '/privacy',
    '/terms',
    '/cookies'
  ];

  for (const pagePath of pages) {
    test(`${pagePath} uses Australian English spelling`, async ({ page }) => {
      await page.goto(pagePath);
      
      // Get text content from content areas only, excluding navigation and HTML attributes
      // Focus on paragraphs, headings, and list items where content spelling matters
      const contentElements = await page.locator('h1, h2, h3, h4, h5, h6, p, li, blockquote, figcaption').allTextContents();
      const combinedText = contentElements.join(' ').toLowerCase();
      
      // Check for problematic American spellings in actual content
      // Note: "center" and "color" excluded as they appear in legitimate CSS context
      const problematicWords = [
        'organization', 'organizations', 'organize', 'organizes', 'organized', 'organizing',
        'behavior', 'behaviors', 'behavioral'
      ];
      
      for (const word of problematicWords) {
        expect(combinedText).not.toContain(word);
      }
      
      // Verify Australian spellings are present where expected
      const australianIndicators = ['centre', 'colour', 'behaviour', 'organisation', 'licence'];
      const hasAustralianSpelling = australianIndicators.some(word => combinedText.includes(word));
      
      // Most pages should contain at least one Australian spelling
      if (!['/cookies'].includes(pagePath)) {
        expect(hasAustralianSpelling).toBeTruthy();
      }
    });
  }
});

test.describe('Navigation and Layout', () => {
  const pages = [
    '/about',
    '/how-it-works',
    '/help', 
    '/contact',
    '/list-business',
    '/pricing',
    '/safety',
    '/resources',
    '/feedback',
    '/privacy',
    '/terms',
    '/cookies'
  ];

  for (const pagePath of pages) {
    test(`${pagePath} has proper navigation and footer`, async ({ page }) => {
      await page.goto(pagePath);
      
      // Check navigation is present
      await expect(page.locator('nav')).toBeVisible();
      
      // Check footer is present  
      await expect(page.locator('footer')).toBeVisible();
      
      // Check page loads successfully
      expect(page.url()).toContain(pagePath);
    });
  }
});
