const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance, searchQuery){
    let browser;
    let query
    try{
        browser = await browserInstance;
        query = await searchQuery
        await pageScraper.scraper(browser, query);

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance, searchQuery) => scrapeAll(browserInstance, searchQuery)