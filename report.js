function printReport(pages) {
    const sortedPages = Object.fromEntries(Object.entries(pages).sort(([, a], [, b]) => b - a))
    console.log("------------------------------")
    console.log("---- Start of the report -----")
    console.log("------------------------------")
    for (let page in sortedPages) {
        console.log(`Found ${sortedPages[page]} internal links to ${page}`)
    }
    console.log("------------------------------")
    console.log("----- End of the report ------")
    console.log("------------------------------")
}

export { printReport }