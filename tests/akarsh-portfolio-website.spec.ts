import { test, expect } from '@playwright/test';
import * as http2 from "http2";

test('has title', async ({ page }) => {
    await page.goto('https://akarsh.github.io/');
    await expect(page).toHaveTitle('Akarsh SEGGEMU');
});
