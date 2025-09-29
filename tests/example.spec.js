// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('herbert@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click({timeout: 6000});
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible({timeout: 6000});
});

test('get started link', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('herbert@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
});
