/**
 * 
 * Package: git-apis
 * Author: Ganesh B
 * Description: Git APIs allows you to search git repositories and other important functions for git not generally available
 * Install: npm i git-apis --save
 * Github: https://github.com/ganeshkbhat/git-apis
 * npmjs Link: https://www.npmjs.com/package/git-apis
 * File: index.js
 * File Description: Main index file for for git-apis with all package functions
 * https://docs.github.com/en/rest/repos/contents#get-repository-content
 * https://docs.gitlab.com/ee/api/repository_files.html
 * https://developer.atlassian.com/cloud/bitbucket/rest/
 * https://www.softwaretestinghelp.com/github-rest-api-tutorial/#:~:text=Log%20in%20to%20your%20GitHub,and%20click%20on%20Create%20Token.
 * git-rest: https://www.softwaretestinghelp.com/github-rest-api-tutorial/#:~:text=Log%20in%20to%20your%20GitHub,and%20click%20on%20Create%20Token.
 * 
*/

/* eslint no-console: 0 */

'use strict';

const path = require('path');
const fs = require('fs');

const { _getRoot, _getGitRoot } = require("root-dirs");

const {
    _isValidURL, _getProtocol, _checkHttpsProtocol,
    _fetch, _deleteRequest, _getRequest,
    _postRequest, _putRequest, _patchRequest,
    _request
} = require("request-apis");

const _getter = require("lodash").get;
const _setter = require("lodash").set;
const _has = require("lodash").has;


/** New Structure for Revamped version of index.js with better isolation, and independent functions */


function _createRequestOptions(request, options) {
    // options = _createRequestOptions(request, options);
    options = { ...options, ...new URL(request) };
    options["Accept"] = options["Accept"] || options["accept"] || "application/vnd.github+json";
    options["Authorization"] = options["Authorization"] || options["authorization"] || undefined;
    options["headers"] = options.headers || {}
    options.headers["User-Agent"] = options.headers["User-Agent"] || options.headers["user-agent"] || "[require-urls] - npmjs.com/package/require-urls";
    // options["key"] = (!!options) ? fs.readFileSync(options.key) : "";
    // options["cert"] = (!!options) ? fs.readFileSync(options.cert) : "";
    options = { ...options, method: options.method };
    return options;
}


/**
 *
 *
 * @return {*} 
 */
function _getGitURLs() {
    var url = {
        git: {
            github: {
                docs: "https://docs.github.com/en/rest/search",
                repo: "https://api.github.com/repos/${owner}/${repo}",
                tree: "https://api.github.com/repos/${owner}/${repo}/git/trees/${sha}",
                treeRecursive: "https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1",
                searchTags: "https://api.github.com/repos/${owner}/${repo}/tags",
                searchCommits: "https://api.github.com/repos/${owner}/${repo}/commits?q=${querystring}",
                searchCommitSha: "https://api.github.com/repos/${owner}/${repo}/commits/${sha}",
                searchContents: "https://api.github.com/repos/${owner}/${repo}/contents/${path}",
                searchCode: "https://api.github.com/search/code?q=${querystring}",
                searchIssues: "https://api.github.com/search/issues?q=${querystring}",
                searchLabels: "https://api.github.com/search/labels?q=${querystring}",
                searchRepositories: "https://api.github.com/search/repositories?q=${querystring}",
                searchTopics: "https://api.github.com/search/topics?q=${querystring}",
                searchUsers: "https://api.github.com/search/users?q=${querystring}",
                listUserRepos: "https://api.github.com/users/${owner}/repos?q=${querystring}"
            },
            gitlab: {
                docs: "",
                repo: "",
                tree: "",
                treeRecursive: "",
                searchTags: "",
                searchCommits: "",
                searchCommitSha: "",
                searchContents: "",
                searchCode: "",
                searchIssues: "",
                searchLabels: "",
                searchRepositories: "",
                searchTopics: "",
                searchUsers: "",
                listUserRepos: ""
            },
            bitbucket: {
                docs: "",
                repo: "",
                tree: "",
                treeRecursive: "",
                searchTags: "",
                searchCommits: "",
                searchCommitSha: "",
                searchContents: "",
                searchCode: "",
                searchIssues: "",
                searchLabels: "",
                searchRepositories: "",
                searchTopics: "",
                searchUsers: "",
                listUserRepos: ""
            },
            template: {
                docs: "",
                repo: "",
                tree: "",
                treeRecursive: "",
                searchTags: "",
                searchCommits: "",
                searchCommitSha: "",
                searchContents: "",
                searchCode: "",
                searchIssues: "",
                searchLabels: "",
                searchRepositories: "",
                searchTopics: "",
                searchUsers: "",
                listUserRepos: ""
            }
        }
    }

    /**
     *
     *
     * @param {*} urlname
     * @param {*} owner
     * @param {*} repo
     * @param {*} branch
     * @param {*} sha
     * @param {*} path
     * @param {*} querystring
     * @return {*} 
     */
    function get(urlname, owner, repo, branch, sha, path, querystring) {
        let u = _getter(url, urlname)
            .replace(/\$\{owner\}/g, owner || "")
            .replace(/\$\{repo\}/g, repo || "")
            .replace(/\$\{branch\}/g, branch || "")
            .replace(/\$\{sha\}/g, sha || "")
            .replace(/\$\{path\}/g, path || "")
            .replace(/\$\{querystring\}/g, querystring || "");
        if (!querystring || querystring === "") {
            u = u.replace("?q=", "")
        }
        return u;
    }

    /**
     *
     *
     * @param {*} urlname
     * @return {*} 
     */
    function has(urlname) {
        return _has(url, urlname);
    }

    /**
     *
     *
     * @param {*} urlname
     * @param {*} value
     * @return {*} 
     */
    function set(urlname, value) {
        return _setter(url, urlname);
    }

    return { set, get, has }
}


module.exports.createRequestOptions = _createRequestOptions;
module.exports.getRoot = _getRoot;
module.exports.getGitRoot = _getGitRoot;

module.exports.getGitURLs = _getGitURLs;


// Make requests
module.exports._deleteRequest = _deleteRequest;
module.exports._getRequest = _getRequest;
module.exports._postRequest = _postRequest;
module.exports._putRequest = _putRequest;
module.exports._patchRequest = _patchRequest;
module.exports._request = _request;


// Make http checks
module.exports._isValidURL = _isValidURL;
module.exports._getProtocol = _getProtocol;
module.exports._checkHttpsProtocol = _checkHttpsProtocol;
module.exports._fetch = _fetch;

