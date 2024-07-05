import { crawlPage } from "./crawl.js";
import { printReport } from "./report.js";

main()
async function main() {

    if (process.argv.length < 3) {
        console.log("BASE_URL argument is not provided");
        return
    }
    if (process.argv.length > 3) {
        console.log('Too many arguments provided');
        return
    }
    const baseURL = process.argv[2]

    console.log(`Starting crawling process at: ${baseURL}`)
    const pages = await crawlPage(baseURL, baseURL, {})
    printReport(pages)

}