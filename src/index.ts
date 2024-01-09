import { Builder, By, Key, until, WebDriver } from 'selenium-webdriver';

async function searchGoogle(searchTerm: string, driver: WebDriver) {
  try {
    await driver.get('https://www.google.com');

    const buttons = await driver.findElements(By.css('button'));

    await buttons[4].click();
    
    await driver.findElement(By.name('q')).sendKeys(searchTerm, Key.RETURN);

    await driver.wait(until.elementLocated(By.id('search')), 5000);
    
    const fieldSearch = await driver.findElement(By.id('search'))
    const links = await fieldSearch.findElement(By.css('div')).findElement(By.css('div')).findElements(By.css('div'))

    for (let i = 0; i < Math.min(10, links.length); i++) {
      const linkText = await links[i].getText();
      console.log(`Link ${i + 1}: ${linkText}`);
      console.log(`--------------------------`);
    }
  } finally {
    await driver.quit();
  }
}

async function run() {
  const searchTerm = process.argv[2];

  if (!searchTerm) {
    console.error('Please provide a search term.');
    return;
  }

  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await searchGoogle(searchTerm, driver);
  } catch (error) {
    console.error('An error has occurred:', error);
  }
}

run()