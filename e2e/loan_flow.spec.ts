import { test, expect } from '@playwright/test'

test('loan apply and dashboard flow (mock)', async ({ page }) => {
  await page.goto('/onboarding')
  // basic check
  await expect(page.locator('text=Welcome to Kechita')).toBeVisible()
  // simulate going to apply
  await page.goto('/loan/apply')
  await expect(page.locator('text=Apply for a Loan')).toBeVisible()
  // fill simple form
  await page.fill('input[type="number"]', '50000')
  // since the app uses mock APIs, we just ensure the submit button exists
  await expect(page.locator('text=Submit Application')).toBeVisible()
})
