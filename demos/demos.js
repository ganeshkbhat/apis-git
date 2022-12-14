/**
 * 
 * Package: git-apis
 * Author: Ganesh B
 * Description: Git APIs allows you to search git repositories and other important functions for git not generally available
 * Install: npm i git-apis --save
 * Github: https://github.com/ganeshkbhat/git-apis
 * npmjs Link: https://www.npmjs.com/package/git-apis
 * File: .js
 * File Description: Main index file for for git-apis with all package functions
 * 
*/

/* eslint no-console: 0 */

'use strict';

const gitjs = require("../index");
let r = gitjs._getGitURLs(owner = "ganeshkbhat", repo = "cgijs", querystring = "", path = "").git.github.searchCommits;
console.log(String.raw(r, ["ganeshkbhat","cgijs","",""]));

console.log(gitjs._getGitCommit(r, {}));

