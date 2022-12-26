import puppeteer from 'puppeteer'

export const crumblScraper = async (): Promise<void> => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://crumblcookies.com/')

  const weeklyFlavorList = await page.$('#weekly-cookie-flavors')
  const flavors = await weeklyFlavorList?.$$eval('h3', nodes => {
    return nodes.map(node => { return node.innerText })
  })

  console.log(flavors)
  await browser.close()
}
