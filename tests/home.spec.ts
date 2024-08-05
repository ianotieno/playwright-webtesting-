import {test, expect } from '@playwright/test';

test("Open home page and verify title", async ({page})=>{
    await page.goto("https://www.premierleague.com/")

  await  expect (page).toHaveTitle('Premier League Football News, Fixtures, Scores & Results');
})