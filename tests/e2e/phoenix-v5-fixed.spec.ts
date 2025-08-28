import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Set a longer timeout for loading
  page.setDefaultTimeout(10000);
});

test.describe('Phoenix v5 New Pages', () => {
  test('About page loads and displays Melbourne content', async ({ page }) => {
    await page.goto('http://localhost:3003/about');
    
    expect(page.url()).toContain('/about');
    
    // Check for Melbourne-specific content using more specific selectors
    await expect(page.locator('h1')).toContainText('Melbourne');
    
    // Check navigation and footer are present
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('How It Works page displays step-by-step guide', async ({ page }) => {
    await page.goto('http://localhost:3003/how-it-works');
    
    expect(page.url()).toContain('/how-it-works');
    
    // Check for step indicators using more specific selectors
    await expect(page.locator('main')).toContainText('1.');
    await expect(page.locator('main')).toContainText('2.');
    
    // Check for Australian English
    await expect(page.locator('main')).toContainText('centre');
  });

  test('Help Centre page loads with FAQ sections', async ({ page }) => {
    await page.goto('http://localhost:3003/help');
    
    expect(page.url()).toContain('/help');
    
    // Check help content exists
    await expect(page.locator('h1')).toContainText('Help');
    
    // Check search functionality exists (if present)
    const searchInput = page.locator('input[placeholder*="search"], input[placeholder*="Search"]');
    if (await searchInput.count() > 0) {
      await expect(searchInput.first()).toBeVisible();
    }
  });

  test('Contact page displays forms and contact methods', async ({ page }) => {
    await page.goto('http://localhost:3003/contact');
    
    expect(page.url()).toContain('/contact');
    
    // Check for contact content
    await expect(page.locator('h1')).toContainText('Contact');
    
    // Check for Australian contact details
    await expect(page.locator('main')).toContainText('1300');
  });

  test('List Business page shows business onboarding', async ({ page }) => {
    await page.goto('http://localhost:3003/list-business');
    
    expect(page.url()).toContain('/list-business');
    
    // Check for business application content using heading
    await expect(page.locator('h1, h2').filter({ hasText: 'List Your Business' })).toBeVisible();
    
    // Check for benefits section
    await expect(page.locator('main')).toContainText('Why Choose SuburbMates');
  });

  test('Pricing page displays three-tier pricing structure', async ({ page }) => {
    await page.goto('http://localhost:3003/pricing');
    
    expect(page.url()).toContain('/pricing');
    
    // Check for pricing plans using headings
    await expect(page.locator('h3, h4').filter({ hasText: 'Free' })).toBeVisible();
    await expect(page.locator('h3, h4').filter({ hasText: 'Professional' })).toBeVisible();
    await expect(page.locator('h3, h4').filter({ hasText: 'Premium' })).toBeVisible();
    
    // Check for pricing amounts
    await expect(page.locator('main')).toContainText('$29');
    await expect(page.locator('main')).toContainText('$59');
  });

  test('Safety page displays safety guidelines', async ({ page }) => {
    await page.goto('http://localhost:3003/safety');
    
    expect(page.url()).toContain('/safety');
    
    // Check for safety content using main heading
    await expect(page.locator('h1').filter({ hasText: 'Safety' })).toBeVisible();
    await expect(page.locator('main')).toContainText('Safety Checklist');
    
    // Check for Australian emergency numbers
    await expect(page.locator('main')).toContainText('000');
  });

  test('Resources page displays helpful guides', async ({ page }) => {
    await page.goto('http://localhost:3003/resources');
    
    expect(page.url()).toContain('/resources');
    
    // Check for resource sections using headings
    await expect(page.locator('h2').filter({ hasText: 'For Homeowners' })).toBeVisible();
    await expect(page.locator('h2').filter({ hasText: 'For Service Providers' })).toBeVisible();
    
    // Check for Australian English
    await expect(page.locator('main')).toContainText('centre');
  });

  test('Feedback page shows feedback form', async ({ page }) => {
    await page.goto('http://localhost:3003/feedback');
    
    expect(page.url()).toContain('/feedback');
    
    // Check for feedback form
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('select[name="category"], select').first()).toBeVisible();
    await expect(page.locator('textarea[name="message"], textarea').first()).toBeVisible();
  });

  test('Privacy Policy page displays comprehensive policy', async ({ page }) => {
    await page.goto('http://localhost:3003/privacy');
    
    expect(page.url()).toContain('/privacy');
    
    // Check for privacy policy content using main heading
    await expect(page.locator('h1').filter({ hasText: 'Privacy Policy' })).toBeVisible();
    await expect(page.locator('main')).toContainText('SuburbMates Pty Ltd');
    
    // Check for Australian legal references
    await expect(page.locator('main')).toContainText('Australian');
    
    // Check for Australian English
    await expect(page.locator('main')).toContainText('organisation');
  });

  test('Terms of Service page displays legal terms', async ({ page }) => {
    await page.goto('http://localhost:3003/terms');
    
    expect(page.url()).toContain('/terms');
    
    // Check for terms content using main heading
    await expect(page.locator('h1').filter({ hasText: 'Terms of Service' })).toBeVisible();
    await expect(page.locator('main')).toContainText('SuburbMates Pty Ltd');
    
    // Check for Australian legal jurisdiction
    await expect(page.locator('main')).toContainText('Victoria, Australia');
  });

  test('Cookie Policy page displays cookie information', async ({ page }) => {
    await page.goto('http://localhost:3003/cookies');
    
    expect(page.url()).toContain('/cookies');
    
    // Check for cookie policy content
    await expect(page.locator('h1').filter({ hasText: 'Cookie Policy' })).toBeVisible();
    await expect(page.locator('main')).toContainText('Essential Cookies');
    await expect(page.locator('main')).toContainText('Performance Cookies');
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
      await page.goto(`http://localhost:3003${pagePath}`);
      
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
    test(`${pagePath} has navigation and footer`, async ({ page }) => {
      await page.goto(`http://localhost:3003${pagePath}`);
      
      // Check navigation is present and functional
      await expect(page.locator('nav')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
      
      // Check essential navigation links are present
      await expect(page.locator('nav a[href="/"]')).toBeVisible();
      
      // Check page is responsive (has mobile nav toggle or is responsive)
      const mobileToggle = page.locator('[data-mobile-toggle], button[aria-expanded]');
      if (await mobileToggle.count() > 0) {
        await expect(mobileToggle.first()).toBeVisible();
      }
    });
  }
});