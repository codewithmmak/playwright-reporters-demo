const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('homepage has title', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io');
  await expect(page).toHaveTitle(/Your Store/);
});

test('special offer has title', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/special');
  await expect(page).toHaveTitle(/Special Offers/);
});

test('register account has title', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
  await expect(page).toHaveTitle(/Register Account/);
});