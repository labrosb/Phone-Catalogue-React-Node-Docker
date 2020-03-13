/* eslint-disable */
const puppeteer = require('puppeteer')

const timeout = 10000;
const pageURL = 'http://localhost:3000';
// In Visual env we don't need to fake the slider waiting time
const sliderOpenTime = process.env.MODE === 'visual' ? 0 : 600;
// Delay in Visual env to avoid shutting down right after the last action
const finishDelay = process.env.MODE === 'visual' ? 1000 : 0;

const isDebugging = () => {
  const debugging_mode = {
    headless: false,
    slowMo: 100,
    devtools: false,
  }
  return process.env.MODE === 'visual' ? debugging_mode : {}
}

describe('Phones Catalogue - End to end tests', () => {
  let page;
  let browser;
  let phoneElem
  let detailsElem;
  const phoneCard = {};
  // Html selection queries
  // If UI changes often, consider adding divs or tag references to be change tolerant
  const queryPhoneElem = '[data-index="0"]'
  const queryCardImg = "[data-index='0'] > div > div:nth-child(1) > img"
  const queryCardTitle = "[data-index='0'] > div > div:nth-child(2) > p:nth-child(1)";
  const queryCardPrice= "[data-index='0'] > div > div:nth-child(2) > p:nth-child(2)";

  const querySideImg = "#drawer-content > div:nth-child(1) > div:nth-child(1) > img";
  const querySideTitle = "#drawer-content > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)";
  const querySidePrice = "#drawer-content > div:nth-child(1) > div:nth-child(2) > p:nth-child(3)";

  beforeAll(async () => {
    browser = await puppeteer.launch(isDebugging());
    page = await browser.newPage();
    await page.goto(pageURL);
  });

  it('loads Page without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Mobile Phones');
  });

  it('returned at least one phone item', async () => {
    phoneElem = await page.waitForSelector(queryPhoneElem);
  });

  it('checks if the item has an img-src', async () => {
    phoneCard.img = await page.$eval(queryCardImg, e => e.getAttribute("src"));
    expect(phoneCard.img).toBeTruthy();
  });

  it('checks if the item has a title', async () => {
    phoneCard.title = await page.$eval(queryCardTitle, e => e.innerHTML);
    expect(phoneCard.title).toBeTruthy();
  });

  it('checks if the item has a price', async () => {
    phoneCard.price = await page.$eval(queryCardPrice, e => e.innerHTML);
    expect(phoneCard.price && phoneCard.price !== ' €').toBe(true);
  });

  it('mouse over the first item', async () => {
    await phoneElem.hover();
  });

  it('clicks on first item', async () => {
    await phoneElem.hover();
    await phoneElem.tap();
  });

  it('checks if side menu is rendered after item clicked', async () => {
    detailsElem = await page.waitForSelector('#drawer-content');
  });

  it('checks side menu data corresponds to the item data', async () => {
    const sideImage = await page.$eval(querySideImg, e => e.getAttribute("src"));
    const sideTitle = await page.$eval(querySideTitle, e => e.innerHTML);
    const sidePrice = await page.$eval(querySidePrice, e => e.innerHTML);

    const sideTitleOrig = sideTitle.split(': &nbsp; ')[1];
    const sidePriceOrig = sidePrice.split(': &nbsp; ')[1];

    expect(
      phoneCard.img === sideImage &&
      phoneCard.title === sideTitleOrig &&
      phoneCard.price === sidePriceOrig
    ).toBe(true);
  });

  it('clicks the side menu X button', async () => {
    await page.waitFor(600);
    const closeButton = await page.waitForSelector('#xButton');
    await closeButton.tap();
  });

  afterAll(async () => {
    await page.waitFor(finishDelay);
    await browser.close()
  });

}, timeout);
