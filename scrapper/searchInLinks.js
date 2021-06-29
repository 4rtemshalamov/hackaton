const puppeteer = require('puppeteer');

const searchInPage = async (link) => {

    let dataObj = {};
    // console.log(dataObj)
    // const array = []
    // console.log(array)
    // array.push(dataObj)

    try {
        const browser = await puppeteer.launch({headless: true});
        let newPage = await browser.newPage();
        await newPage.goto(link);
        dataObj.headers = await newPage.$eval( 'h1', text => text.textContent);
        dataObj.text = await newPage.$eval('p', text => text.textContent);
        console.log('выполнил')
        await newPage.close();

    }
    catch (e) {
        console.log(e)
    }

return dataObj
}

// const searchForLinks = async (urls) => {
//     debugger
//     console.log(urls)
//     for(let link of urls){
//         debugger
//         let currentPageData = await pagePromise(link.url);
//         // scrapedData.push(currentPageData);
//         console.log(currentPageData);
//     }
// }

module.exports = searchInPage;




