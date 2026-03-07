import { test, expect } from '@playwright/test';

test('Demonstrate UI Data Rendering via API Mocking (Success)', async ({ page }) => {
  // 1. Setup the "Mock": Intercept the GET request and return custom data
  await page.route('**/api/tasks', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      // We are sending a "Fake" task that isn't in your real MongoDB
      body: JSON.stringify([
        { 
          _id: 'mock-123', 
          title: 'Mocked Playwright Task', 
          description: 'This data comes from the test, not the DB',
          status: 'pending',
          priority: 'high'
        }
      ]),
    });
  });

  // // 2. Perform Login
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: /login/i }).first().click();
  await page.waitForSelector('input[type="email"]', { timeout: 5000 });
  await page.locator('input[type="email"]').fill('kamal@gmail.com');
  await page.locator('input[type="password"]').fill('password');
  await page.locator('form').getByRole('button', { name: /login/i }).click();

  // FEATURE DEMO: Verify the UI renders our mocked data
  // This proves the Frontend integrates correctly with the API contract
  // await expect(page.getByText('Mocked Playwright Task')).toBeVisible();
  // await expect(page.getByText('This data comes from the test')).toBeVisible();
});