const puppeteer = require('puppeteer');
const HomePage  = require('./HomePage');
const LoginPage  = require('./LoginPage');
var data = require('./data.json');
var homePage = new HomePage();
var loginPage = new LoginPage();
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(data.url);

  await homePage.clickSignIn(page); 
  await page.screenshot({path: 'example.png'});
  await loginPage.typeUserName(page, data.email);
  await loginPage.typePassword(page, data.password);
  await loginPage.clickLogin(page);
  await page.screenshot({path: 'example1.png'});
  await browser.close();
})();