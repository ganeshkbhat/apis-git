/**
 * 
 * Package: git-apis
 * Author: Ganesh B
 * Description: Git APIs allows you to search git repositories and other important functions for git not generally available
 * Install: npm i git-apis --save
 * Github: https://github.com/ganeshkbhat/git-apis
 * npmjs Link: https://www.npmjs.com/package/git-apis
 * File: get.js
 * File Description: Main index file for for git-apis with all package functions
 * 
*/

/* eslint no-console: 0 */

'use strict';

const _getRequireOrImport = require("./require_import");

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _getRequest(options, data, protocol) {
    return new Promise((resolve, reject) => {
        const { get } = (protocol === "https") ? _getRequireOrImport("https") : _getRequireOrImport("http");
        let req = get(options, (res) => {
            let result = '';
            res.on('data', (chunk) => result += chunk);
            res.on('end', () => resolve(JSON.parse(result)));
        }).on('error', (err) => reject(err));
    });
}
