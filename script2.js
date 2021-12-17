'use strict';

const files = ['text.docx', 'index.html', 'document.pdf', 'script.js', 'style.css', 'summary.pdf', 'Harry_Potter.pdf', 'report.pdf'];

let arr = [];

files.filter((elem) => {
    let sepArr = elem.split(".");
    if (sepArr[sepArr.length - 1] ==="pdf") {
        arr.push(elem);
    }
});

console.log(arr);
