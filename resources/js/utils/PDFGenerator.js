const puppeteer = require("puppeteer");

async function PDFGenerator(url, res) {
   (!url)? url = "http://127.0.0.1:8000": url = "http://127.0.0.1:8000" + url;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.emulateMediaType("screen");

    const pdfBuffer = await page.pdf({
      format: "A4",
      path: "./my_file.pdf",
      printBackground: true, // print background colors
      width: "612px", // match the css width and height we set for our PDF
      height: "792px",
    });

    // res.send(pdfBuffer);

    await browser.close();
}

export default PDFGenerator;
