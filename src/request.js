/**
 * 
 * Package: git-apis
 * Author: Ganesh B
 * Description: Git APIs allows you to search git repositories and other important functions for git not generally available
 * Install: npm i git-apis --save
 * Github: https://github.com/ganeshkbhat/git-apis
 * npmjs Link: https://www.npmjs.com/package/git-apis
 * File: request.js
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
module.exports = function _request(options, data, protocol) {
    return new Promise((resolve, reject) => {
        const { request } = (protocol === "https") ? _getRequireOrImport("https") : _getRequireOrImport("http");
        const querystring = _getRequireOrImport('querystring');

        let req = request(options, (res) => {
            let result = '';
            res.on('data', (chunk) => result += chunk);
            res.on('end', () => resolve(JSON.parse(result)));
        }).on('error', (err) => reject(err));

        let out_text = querystring.escape(JSON.stringify(data));
        req.write(out_text);
        req.on('connect', (res, socket, head) => { });
        req.on('error', (e) => { console.error(e); });
        req.on('upgrade', (res, socket, upgradeHead) => {
            socket.end();
            process.exit(0);
        });
        req.end();
    });
}
