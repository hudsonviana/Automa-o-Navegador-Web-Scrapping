const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.portaldoestudantenatal.com.br/index.aspx');
    await page.waitForSelector('#txtDataNascimento');
    await page.type('#txtRU', 'hudson1206', {delay:200});
    await page.type('#txtDataNascimento', 'ser2323', {delay:200});
    
    // await page.keyboard.press('Enter');
    const [response] = await Promise.all([
        page.waitForNavigation({waitUntil: ['domcontentloaded', 'networkidle2']}),
        page.click('#btnConsultar')
    ]);

    // Screenshot
    await page.waitForTimeout(2500);
    
    await page.screenshot({
        path: 'usuario_estudante.png', 
        fullPage: true
    });

    await browser.close();

})();
