import { test, chromium } from "@playwright/test";

test("Close cookies", async ({ page }) => {
  await page.goto("https://www.lr.org/");
  await page.getByRole("button", { name: "Allow selection" }).click();
});

test("Is the cookie banner still present?", async ({ page }) => {
  await page.goto("https://www.lr.org/");
  await page.pause();
});

test("Browser fixture", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto("https://www.lr.org/");
});

test("Create page manually", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.lr.org/");
});
