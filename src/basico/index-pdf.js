const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://github.com/hudsonviana');
    await page.pdf({
        path: 'meugit.pdf',
        format: 'A4'
    });

    await browser.close();
})();