import * as pdf from "https://unpkg.com/pdfjs-dist@4.5.136/build/pdf.min.mjs";

// const pdfjsWorker = await import("https://unpkg.com/pdfjs-dist@4.5.136/build/pdf.worker.mjs");
// console.log(pdfjsWorker);

// pdf.GlobalWorkerOptions.workerSrc = pdfjsWorker;
pdf.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@4.5.136/build/pdf.worker.mjs";

pdf.getDocument("http://127.0.0.1:3000/Resume.pdf");

const resume = await pdf.getDocument("./Resume.pdf").promise;
console.log(resume);

const page = await resume.getPage(1);
const scale = 1.5;
const viewport = page.getViewport(scale);
const canvas = document.getElementById("resumeCanvas");
const context = canvas.getContext("2d");
// canvas.height = viewport.height;
// canvas.width = viewport.width;
const renderContext = {
    canvasContext: context,
    viewport: viewport,
};

page.render(renderContext);
