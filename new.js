#!/usr/bin/env node
// run with ./new.js "title" or node new "title"

const fs = require('fs');
const slugify = require('slugify');
const title = process.argv[2];
if (!title) {
  throw 'a title is required!';
}
const slug = slugify(title.toLowerCase());

fs.writeFileSync(
  `./content/${slug}.md`,
  `---
title: "${title}"
---`,
  function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`${title} was created!`);
  }
);
