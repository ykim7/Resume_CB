// import * as pdf from "https://unpkg.com/pdfjs-dist@4.5.136/build/pdf.min.mjs";

// // const pdfjsWorker = await import("https://unpkg.com/pdfjs-dist@4.5.136/build/pdf.worker.mjs");
// // console.log(pdfjsWorker);

// // pdf.GlobalWorkerOptions.workerSrc = pdfjsWorker;
// pdf.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@4.5.136/build/pdf.worker.mjs";

// const resume = await pdf.getDocument("./Resume.pdf").promise;
// console.log(resume);

// const page = await resume.getPage(1);
// const scale = 1.5;
// const viewport = page.getViewport({ scale: scale });
// const canvas = document.getElementById("resumeCanvas");
// const context = canvas.getContext("2d");
// canvas.height = viewport.height;
// canvas.width = viewport.width;
// const renderContext = {
//     canvasContext: context,
//     viewport: viewport,
// };

// page.render(renderContext).promise.then(function () {
//     console.log("Page rendered!");
// });

// Change this to your file location.
const PDF_PATH = "./Resume.pdf";
const PDFJS_VIEWER_URL = "https://mozilla.github.io/pdf.js/web/viewer.html";
const url = new URL(PDF_PATH, window.location.href);

console.log(url);

/**
 * @param {string} url
 */
function renderPdf(url) {
    const iframe = document.createElement("iframe");
    const queryParams = new URLSearchParams({
        file: url.toString(),
    });
    iframe.setAttribute("src", `${PDFJS_VIEWER_URL}?${queryParams}`);
    iframe.setAttribute("id", "pdf-viewer");
    document.body.appendChild(iframe);
}
renderPdf(url);
