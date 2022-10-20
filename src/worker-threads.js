/**
 * 
 * Package: git-apis
 * Author: Ganesh B
 * Description: Git APIs allows you to search git repositories and other important functions for git not generally available
 * Install: npm i git-apis --save
 * Github: https://github.com/ganeshkbhat/git-apis
 * npmjs Link: https://www.npmjs.com/package/git-apis
 * File: worker-threads.js
 * File Description: Main index file for for git-apis with all package functions
 * 
*/

/* eslint no-console: 0 */

'use strict';

const _getRequireOrImport = require("./require_import");
const { parentPort } = _getRequireOrImport("worker_threads");

parentPort.on("message", function (contents) {
    return contents.callback(contents);
}.bind(contents, parentPort));
