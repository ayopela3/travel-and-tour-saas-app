import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Travel & Tour/);
  });

  test("should have navigation links", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("navigation").getByRole("link", { name: /login/i })
    ).toBeVisible();
    await expect(
      page.getByRole("navigation").getByRole("link", { name: /get started/i })
    ).toBeVisible();
  });

  test("should navigate to login page", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation")
      .getByRole("link", { name: /login/i })
      .click();
    await expect(page).toHaveURL(/\/login/);
  });

  test("should navigate to signup page", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("navigation")
      .getByRole("link", { name: /get started/i })
      .click();
    await expect(page).toHaveURL(/\/signup/);
  });
});

test.describe("Login Page", () => {
  test("should display login form", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByText("Login").first()).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /login/i })).toBeVisible();
  });
});

test.describe("Signup Page", () => {
  test("should display signup form", async ({ page }) => {
    await page.goto("/signup");
    await expect(page.getByText("Create an account")).toBeVisible();
    await expect(page.getByLabel(/full name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
  });
});
