// // const puppeteer = require('puppeteer');
// //
// // const searchGoogle = async (searchQuery) => {
// //     const browser = await puppeteer.launch({headless: false});
// //
// //     const page = await browser.newPage();
// //     await page.goto('https://google.com');
// //     //Finds input element with name attribue 'q' and types searchQuery
// //     await page.type('input[name="q"]', searchQuery);
// //     await page.$eval('input[name=btnK]', button => button.click());
// //     await page.waitForSelector('div[id=search]');
// //     // await page.click('#pnnext');
// //     //Find all div elements with class 'bkWMgd'
// //         const searchResults = await page.$$eval('div[id=rso]', results => {
// //             //Array to hold all our results
// //             let data = [];
// //             //Iterate over all the results
// //             results.forEach(parent => {
// //                 //Check if parent has h2 with text 'Web Results'
// //                 const ele = parent.querySelector('h2');
// //                 // If element with 'Web Results' Title is not found  then continue to next element
// //                 if (ele === null) {
// //                     return;
// //                 }
// //                 //Check if parent contains 1 div with class 'g' or contains many but nested in div with class 'srg'
// //                 let gCount = parent.querySelectorAll('div[class=g]');
// //                 console.log(gCount)
// //                 // If there is no div with class 'g' that means there must be a group of 'g's in class 'srg'
// //                 if (gCount.length === 0) {
// //                     //Targets all the divs with class 'g' stored in div with class 'srg'
// //                     gCount = parent.querySelectorAll('div[class=srg] > div[class=g]');
// //                 }
// //                 //Iterate over all the divs with class 'g'
// //                 gCount.forEach(result => {
// //                     //Target the title
// //                     const title = result.querySelector('div[class=rc] > div[class=yuRUbf] > a >  h3').innerText;
// //                     //Target the url
// //                     const url = result.querySelector('div[class=rc] > div[class=yuRUbf] > a').href;
// //                     //Target the description
// //                     const desciption = result.querySelector('div[class=rc] > div[class=IsZvec] > div > span[class=aCOpRe]').innerText;
// //                     //Add to the return Array
// //                     data.push({title, desciption, url});
// //                 });
// //             });
// //
// //             //Return the search results
// //             return data;
// //             console.log(searchResults)
// //
// //         });
// //         await page.click('#pnnext');
// //
// //
// //
// //
// //
// //     await page.screenshot({path: 'example.png'});
// //
// //     // await browser.close();
// //     return array;
// // };
// //
// // //Exports the function so we can access it in our server
// // module.exports = searchGoogle;
// //
// // searchGoogle('dogs');
// // const puppeteer = require('puppeteer');
// //
// // const searchGoogle = async (searchQuery) => {
// //     const browser = await puppeteer.launch();
// //
// //     const page = await browser.newPage();
// //
// //     await page.goto('https://google.com');
// //
// //     //Finds input element with name attribue 'q' and types searchQuery
// //     await page.type('input[name="q"]', searchQuery);
// //
// //     //Finds an input with name 'btnK', after so it executes .click() DOM Method
// //     await page.$eval('input[name=btnK]', button => button.click());
// //
// //     //Wait for one of the div classes to load
// //     await page.waitForSelector('div[id=search]');
// //
// //     //Find all div elements with class 'bkWMgd'. These divs contain the information we need
// //     const searchResults = await page.$$eval('div[class=bkWMgd]', results => {
// //         //Array to hold all our results
// //         let data = [];
// //
// //         //Iterate over all the divs found with class 'bkWMgd'
// //         results.forEach(parent => {
// //
// //             //Check if parent has h2 with text 'Web Results'
// //             const ele = parent.querySelector('h2');
// //
// //             //If element with 'Web Results' Title is not found  then continue to next element
// //             if (ele === null) {
// //                 return;
// //             }
// //
// //             //Check if parent contains 1 div with class 'g' or contains many but nested in div with class 'srg'
// //             let gCount = parent.querySelectorAll('div[class=g]');
// //
// //             //If there is no div with class 'g' that means there must be a group of 'g's in class 'srg'
// //             if (gCount.length === 0) {
// //                 //Targets all the divs with class 'g' stored in div with class 'srg'
// //                 gCount = parent.querySelectorAll('div[class=srg] > div[class=g]');
// //             }
// //
// //             //Iterate over all the divs with class 'g'
// //             gCount.forEach(result => {
// //                 //Target the title
// //                 const title = result.querySelector('div[class=rc] > div[class=r] > a >  h3').innerText;
// //
// //                 //Target the url
// //                 const url = result.querySelector('div[class=rc] > div[class=r] > a').href;
// //
// //                 //Target the description
// //                 const desciption = result.querySelector('div[class=rc] > div[class=s] > div > span[class=st]').innerText;
// //
// //                 //Add to the return Array
// //                 data.push({title, desciption, url});
// //             });
// //         });
// //
// //         //Return the top results
// //         return data;
// //     });
// //
// //     await browser.close();
// //
// //     return searchResults;
// // };
// //
// // module.exports = searchGoogle;

const puppeteer = require('puppeteer');

const searchGoogle = async (searchQuery) => {
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://google.com');

    //Finds input element with name attribue 'q' and types searchQuery
    await page.type('input[name="q"]', searchQuery);

    await page.$eval('input[name=btnK]', button => button.click());

    await page.waitForSelector('div[id=search]');
    let array = []
    let currentPage = 1
    let i = 14
    while (currentPage <= i) {
        //Find all div elements with class 'bkWMgd'
        const searchResults = await page.$$eval('div[id=rso]', results => {
            //Array to hold all our results
            let data = [];
            //Iterate over all the results
            results.forEach(parent => {
                //Check if parent has h2 with text 'Web Results'
                const ele = parent.querySelector('h2');
                console.log(ele)
                // If element with 'Web Results' Title is not found  then continue to next element
                if (ele === null) {
                    return;
                }
                //Check if parent contains 1 div with class 'g' or contains many but nested in div with class 'srg'
                let gCount = parent.querySelectorAll('div[class=g]');
                console.log(gCount)

                // If there is no div with class 'g' that means there must be a group of 'g's in class 'srg'
                if (gCount.length === 0) {
                    //Targets all the divs with class 'g' stored in div with class 'srg'
                    gCount = parent.querySelectorAll('div[class=srg] > div[class=g]');
                }

                //Iterate over all the divs with class 'g'
                gCount.forEach(result => {
                    //Target the title
                    const title = result.querySelector('div[class=rc] > div[class=yuRUbf] > a >  h3').innerText;

                    //Target the url
                    const url = result.querySelector('div[class=rc] > div[class=yuRUbf] > a').href;

                    //Target the description
                    const desciption = result.querySelector('div[class=rc] > div[class=IsZvec] > div > span[class=aCOpRe]').innerText;

                    //Add to the return Array
                    data.push({title, desciption, url});
                });
            });
            //Return the search results
            console.log(data)
            return data;
        });
        array = array.concat(searchResults)
        if (currentPage < i){
            await Promise.all([
                await page.click('#pnnext'),
                await page.waitForSelector('div[id=search]')
            ])
        }
        currentPage++
        // console.log(searchResults)
        // return searchResults;
    }

    // await page.screenshot({path: 'example.png'});
    // await browser.close();
    console.log(array)
    return array


};

//Exports the function so we can access it in our server
module.exports = searchGoogle;

// searchGoogle('кот');
// const puppeteer = require('puppeteer');
// function run (pagesToScrape) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if (!pagesToScrape) {
//                 pagesToScrape = 1;
//             }
//             const browser = await puppeteer.launch();
//             const page = await browser.newPage();
//             await page.goto("https://news.ycombinator.com/");
//             let currentPage = 1;
//             let urls = [];
//             while (currentPage <= pagesToScrape) {
//                 let newUrls = await page.evaluate(() => {
//                     let results = [];
//                     let items = document.querySelectorAll('a.storylink');
//                     items.forEach((item) => {
//                         results.push({
//                             url:  item.getAttribute('href'),
//                             text: item.innerText,
//                         });
//                     });
//                     return results;
//                 });
//                 urls = urls.concat(newUrls);
//                 if (currentPage < pagesToScrape) {
//                     await Promise.all([
//                         await page.click('a.morelink'),
//                         await page.waitForSelector('a.storylink')
//                     ])
//                 }
//                 currentPage++;
//             }
//             browser.close();
//             return resolve(urls);
//         } catch (e) {
//             return reject(e);
//         }
//     })
// }
// run(5).then(console.log).catch(console.error);