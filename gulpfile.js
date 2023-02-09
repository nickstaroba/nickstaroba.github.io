const data = require("gulp-data");
const del = require("del");
const ejs = require("gulp-ejs");
const fs = require("fs");
const htmlmin = require("gulp-html-minifier-terser");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const { dest, series, src, watch } = require("gulp");
const pkg = require("./package.json");

function buildDocument() {
  return src("./src/index.ejs")
    .pipe(
      data(() => ({
        version: pkg.version,
        ...JSON.parse(fs.readFileSync("./src/data.json")),
      }))
    )
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./docs/"));
}

function buildStyles() {
  return src("./src/styles/index.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(postcss())
    .pipe(dest("./docs"));
}

function cleanDocument() {
  return del("./docs/index.html");
}

function cleanStyles() {
  return del("./docs/index.css");
}

exports.build = series(cleanDocument, cleanStyles, buildDocument, buildStyles);

exports.default = function dev() {
  watch("./src/**/*.scss", buildStyles);
  watch("./src/**/*.{ejs,json}", buildDocument);
};
