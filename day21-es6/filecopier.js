"use strict";

const DIR_NAME = "c://Users//Pavilion//Music//";
const NEW_DIR_NAME = "c://Music//";
const FS = require("fs");

let copyDir = (sourceDir, destinationDir) => new Promise((resolve, reject) => {
  FS.readdir(sourceDir, (err, files) => {
    if (err) {
      reject("Read dir error");
    }
    if (files.length == 0) {
      reject("No files in dir");
    }
    resolve({sourceDir: sourceDir, destinationDir: destinationDir, files: files});
  });
});

let copyFile = data => new Promise((resolve, reject) => {
  if (data.files.length == 0) {
    reject("Copy files complete");
  }
  readFile(data.sourceDir, )
});

let readFile = (sourceDir, destinationDir, files) => new Promise((resolve, reject) => {
  FS.readFile(sourceDir + files[0], (err, data) => {
    if (err) {
      reject("Read file error");
    }
    console.log("read " + files[0]);
    resolve(sourceDir, destinationDir, files, data);
  });
});

let writeFile = (sourceDir, destinationDir, files, data) => new Promise((resolve, reject) => {
  FS.writeFile(destinationDir + files[0], data, (err) => {
    if (err) {
      reject("Write file error");
    }
    console.log("wrote " + files[0]);
    files.splice(0, 1);
    resolve(sourceDir, destinationDir, files);
  });
});

copyDir(DIR_NAME, NEW_DIR_NAME)
  .then(copyFile)
  .then(writeFile)
  .then(readFile)
  .catch((error) => console.log(error));