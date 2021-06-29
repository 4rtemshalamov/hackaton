const scraperObject = {
    url: 'http://google.com',
    search: this.search,
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);

        await page.type('input[name="q"]', this.search);

        await page.$eval('input[name=btnK]', button => button.click());

        await page.waitForSelector('div[id=search]');

        let array = []
        let currentPage = 1
        let i = 10

        while (currentPage <= i) {
            //Find all div elements with class 'bkWMgd'
            const searchResults = await page.$$eval('div[id=rso]', results => {
                //Array to hold all our results
                let data = [];
                console.log(data)
                //Iterate over all the results
                results.forEach(parent => {
                    //Check if parent has h2 with text 'Web Results'
                    debugger
                    const ele = parent.querySelector('h2');
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
                        // const title = result.querySelector('div[class=rcnt] > div[class=r] > a >  h3').innerText;

                        //Target the url
                        // const url = result.querySelector('div[class=rc] > div[class=yuRUbf] > a').href;
                        const url = result.querySelector('div[class=tF2Cxc] > div[class=yuRUbf] > a').href;


                        //Target the description
                        // const description = result.querySelector('div[class=rcnt] > div[class=s] > div > span[class=st]').innerText;

                        //Add to the return Array
                        data.push({url});
                    });
                });
                //Return the search results
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
        }
        await page.screenshot({path: 'example.png'});

        return array

    }
}

module.exports = scraperObject;