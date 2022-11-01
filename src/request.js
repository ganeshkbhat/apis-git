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

/**
 *
 *
 * @param {*} module_name
 * @return {*} 
 */
 module.exports._getRequireOrImport = function _getRequireOrImport(module_name) {
    if (process.versions.node.split('.')[0] > "14") {
        return import(module_name);
    }
    return require(module_name);
}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
 function _deleteRequest(options, data, protocol) {

}

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

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _patchRequest(options, data, protocol) {

}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _postRequest(options, data, protocol) {

}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _putRequest(options, data, protocol) {

}

/**
 *
 *
 * @param {*} options
 * @param {*} data
 * @return {*} 
 */
function _request(options, data, protocol) {
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

module.exports._deleteRequest = _deleteRequest;
module.exports._getRequest = _getRequest;
module.exports._postRequest = _postRequest;
module.exports._putRequest = _putRequest;
module.exports._patchRequest = _patchRequest;
module.exports._request = _request;
