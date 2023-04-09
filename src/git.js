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
 * @param {*} requestOptions
 * @param {*} [data=null]
 * @param {*} options
 * @return {*} 
 * 
 * 
        // 
        //
        // STRUCTURE WITH AUTHORIZATION
        //
        // GET REQUEST WITH CURL
        // 
        // curl \
        // -u <USERNAME>:<TOKEN>
        // -H "User-Agent": <USERNAME>
        // -H "Accept: application/vnd.github+json" \
        // -H "Authorization: Bearer <YOUR-TOKEN>" \
        // https://api.github.com/repos/OWNER/REPO/contents/PATH
        // 
        // GET REQUEST WITHOUT CURL
        // 
        // let s = search(
        //     { hostname: "https://api.github.com/repos/ganeshkbhat/requireurl/contents/test/test-require.js", port: 80, path: "", method: "GET" },
        //     { "User-Agent": "${username}", "Accept": "application/vnd.github+json", 'Authorization': 'Basic ' + btoa('${username}:${token}') },
        //     null,
        //     "git"
        // );
        //
        // 
        //
        // STRUCTURE WITHOUT AUTHORIZATION
        //
        // GET REQUEST WITH CURL
        // 
        // curl \
        // -H "User-Agent": <USERNAME>
        // -H "Accept: application/vnd.github+json" \
        // https://api.github.com/repos/OWNER/REPO/contents/PATH
        //
        // GET REQUEST WITHOUT CURL
        // 
        // let s = search(
        //     { hostname: "https://api.github.com/repos/ganeshkbhat/requireurl/contents/test/test-require.js", port: 80, path: "", method: "GET" },
        //     { "User-Agent": "${username}", "Accept": "application/vnd.github+json" },
        //     null,
        //     "git"
        // );
        //
        //
 * 
 */
function _searchGit(requestOptions, data = null, options) {
    options["Accept"] = options["Accept"] || options["accept"] || "application/vnd.github+json";
    options["Authorization"] = options["Authorization"] || options["authorization"] || undefined;
    options.headers["User-Agent"] = options.headers["User-Agent"] || options.headers["user-agent"] || "require-urls - npmjs.com/package/require-urls";
    options = { ...options, method: "GET" };

    // 
    // if (options.baseType === "git") {
    //     throw new Error("[require-urls] index.js: gitlab: Not yet implemented.");
    // } else if (options.baseType === "gitlab") {
    //     throw new Error("[require-urls] index.js: gitlab: Not yet implemented.");
    // } else if (options.baseType === "bitbucket") {
    //     throw new Error("[require-urls] index.js: bitbucket: Not yet implemented.");
    // } else {
    //     throw new Error("[require-urls] index.js: generic request: Not yet implemented.");
    // }
    // 

    return _getRequest(options, data, options.protocol || "https").then(function (result) {
        return result;
    });
}


function _findGitRemoteFileUrl(remoteUrl, searchOptions, options) {
    // Implement _getRoot logic into remote url with concurrency
}


function _findGitRemoteRootUrl(remoteUrl, searchOptions, options) {
    // Implement _getRoot logic into remote url with concurrency
}


function _findGitRemotePackageJsonUrl(remoteUrl, options) {
    // Implement _getRoot logic and find the package.json url into remote package.json url with concurrency
}


/**
 *
 *
 * @param {*} results
 * @param {*} options
 * @return {*} 
 */
function _searchGitFilesResultsModifier(results, options) {
    // 
    // each item should be of the structure 
    // {  path, html_url, repository: { id, html_url, tags_url, git_tags_url, git_commits_url, contents_url, releases_url } }
    // 
    // let opt = {
    //     hostname: "api.github.com",
    //     path: `/search/${searchtype}?q=user:${username}+repo:${repo}+extension:${extension}+path:${pathtofile}`,
    //     headers: { "User-Agent": "${username}" }
    // }
    // 

    let items = JSON.parse(results).items;
    let contents;
    for (let i = 0; i < items.length; i++) {
        contents = {
            path: items[i].path, html_url: items[i].html_url,
            repository: {
                id: items[i].repository.id,
                html_url: items[i].repository.html_url,
                tags_url: items[i].repository.tags_url,
                git_tags_url: items[i].repository.git_tags_url,
                git_commits_url: items[i].repository.git_commits_url,
                contents_url: items[i].repository.contents_url,
                releases_url: items[i].repository.releases_url
            }
        }
        // console.log(contents);
    }
    return contents;
}


/**
 *
 *
 * @param {*} results
 * @param {*} options
 * @return {*} 
 */
function _getDirContentResultsModifier(results, options) {
    // 
    // // type:dir
    // let opt = {
    //     hostname: "api.github.com",
    //     path: `/repos/${username}/${repository}/contents/${dirname}`,
    //     headers: { "User-Agent": "${username}" }
    // }
    //
    // // type:file
    // let opt = {
    //     hostname: "api.github.com",
    //     path: `/repos/${username}/${repository}/contents/${filename}`,
    //     headers: { "User-Agent": "${username}" }
    // }
    //

    let items = JSON.parse(results);
    let contents;
    for (let i = 0; i < items.length; i++) {
        contents = {
            name: items[i].name,
            path: items[i].path,
            size: items[i].size,
            url: items[i].url,
            git_url: items[i].git_url,
            html_url: items[i].html_url,
            download_url: items[i].download_url,
            // _links: items[i]._links,
            type: items[i].type,
            sha: items[i].sha
        }
        // console.log(contents);
    }
    return contents;
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

/**
 *
 *
 * @param {*} request
 * @param {string} [options={ owner: "", repo: "", sha: "", path: "", branch: "", querystring: "" }]
 * @return {*} 
 */
function _getGitAction(request, options, repository = { owner: "", repo: "", branch: "", sha: "", path: "", querystring: "" }, action) {
    let { owner, repo, sha, path, branch, querystring } = repository;

    options = { ..._createRequestOptions(request, options) };
    return _request(options, options.data, options.protocol || "https").then(function (result) {
        return result;
    });
}

/**
 *
 *
 * @param {*} request
 * @param {string} [options={ owner: "", repo: "", sha: "", path: "", branch: "", querystring: "" }]
 * @return {*} 
 */
function _setGitAction(request, options, repository = { owner: "", repo: "", branch: "", sha: "", path: "", querystring: "" }, action) {
    let { owner, repo, sha, path, branch, querystring } = repository;

    options = { ..._createRequestOptions(request, options) };
    return _request(options, options.data, options.protocol || "https").then(function (result) {
        return result;
    });
}

/**
 *
 *
 * @param {*} request
 * @param {string} [options={ owner: "", repo: "", sha: "", path: "", branch: "", querystring: "" }]
 * @return {*} 
 */
function _getGitCommit(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchCommits");
}

function _getGitSHAHash(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchCommitSha");
}

function _getGitTagName(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchTags");
}

function _getGitBranchName(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchUsers");
}

function _getGitContentFile(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchTags");
}

function _getGitContentDir(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchContents");
}

function _getGitContentDirRecursive(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchContents");
}

function _getGitTree(request, option, repository) {
    return _getGitAction(request, options, respository, action = "tree");
}

function _getGitTreeRecursive(request, option, repository) {
    return _getGitAction(request, options, respository, action = "treeRecursive");
}

function _getGitRepositories(request, option, repository) {
    return _getGitAction(request, options, respository, action = "repo");
}

function _getGitRepository(request, option, repository) {
    return _getGitAction(request, options, respository, action = "repo");
}

function _getGitIssues(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchIssues");
}

function _getGitLabels(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchLabels");
}

function _getGitTopics(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchTopics");
}

function _getGitUsers(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchUsers");
}

function _getGitUserRepositories(request, option, repository) {
    return _getGitAction(request, options, respository, action = "searchUsers");
}


module.exports._getRoot = _getRoot;
module.exports._getGitRoot = _getGitRoot;


module.exports._searchGit = _searchGit;
module.exports._findGitRemoteFileUrl = _findGitRemoteFileUrl;
module.exports._findGitRemoteRootUrl = _findGitRemoteRootUrl;
module.exports._findGitRemotePackageJsonUrl = _findGitRemotePackageJsonUrl;
module.exports._searchGitFilesResultsModifier = _searchGitFilesResultsModifier;
module.exports._getDirContentResultsModifier = _getDirContentResultsModifier;
module.exports._getGitURLs = _getGitURLs;

module.exports.searchGit = _searchGit;
module.exports.findGitRemoteFileUrl = _findGitRemoteFileUrl;
module.exports.findGitRemoteRootUrl = _findGitRemoteRootUrl;
module.exports.findGitRemotePackageJsonUrl = _findGitRemotePackageJsonUrl;
module.exports.searchGitFilesResultsModifier = _searchGitFilesResultsModifier;
module.exports.getDirContentResultsModifier = _getDirContentResultsModifier;
module.exports.getGitURLs = _getGitURLs;


module.exports._getGitCommit = _getGitCommit;
module.exports._getGitSHAHash = _getGitSHAHash;
module.exports._getGitTagName = _getGitTagName;
module.exports._getGitBranchName = _getGitBranchName;
module.exports._getGitContentFile = _getGitContentFile;
module.exports._getGitContentDir = _getGitContentDir;
module.exports._getGitContentDirRecursive = _getGitContentDirRecursive;
module.exports._getGitTree = _getGitTree;
module.exports._getGitTreeRecursive = _getGitTreeRecursive;
module.exports._getGitRepositories = _getGitRepositories;
module.exports._getGitRepository = _getGitRepository;
module.exports._getGitIssues = _getGitIssues;
module.exports._getGitLabels = _getGitLabels;
module.exports._getGitTopics = _getGitTopics;
module.exports._getGitUsers = _getGitUsers;
module.exports._getGitUserRepositories = _getGitUserRepositories;

module.exports.getCommit = _getGitCommit;
module.exports.getSHAHash = _getGitSHAHash;
module.exports.getTagName = _getGitTagName;
module.exports.getBranchName = _getGitBranchName;
module.exports.getContentFile = _getGitContentFile;
module.exports.getContentDir = _getGitContentDir;
module.exports.getContentDirRecursive = _getGitContentDirRecursive;
module.exports.getTree = _getGitTree;
module.exports.getTreeRecursive = _getGitTreeRecursive;
module.exports.getRepositories = _getGitRepositories;
module.exports.getRepository = _getGitRepository;
module.exports.getIssues = _getGitIssues;
module.exports.getLabels = _getGitLabels;
module.exports.getTopics = _getGitTopics;
module.exports.getUsers = _getGitUsers;
module.exports.getUserRepositories = _getGitUserRepositories;



// module.exports._setGitCommit = _setGitCommit;
// module.exports._setGitSHAHash = _setGitSHAHash;
// module.exports._setGitTagName = _setGitTagName;
// module.exports._setGitBranchName = _setGitBranchName;
// module.exports._setGitContentFile = _setGitContentFile;
// module.exports._setGitContentDir = _setGitContentDir;
// module.exports._setGitContentDirRecursive = _setGitContentDirRecursive;
// module.exports._setGitTree = _setGitTree;
// module.exports._setGitTreeRecursive = _setGitTreeRecursive;
// module.exports._setGitRepositories = _setGitRepositories;
// module.exports._setGitRepository = _setGitRepository;
// module.exports._setGitIssues = _setGitIssues;
// module.exports._setGitLabels = _setGitLabels;
// module.exports._setGitTopics = _setGitTopics;
// module.exports._setGitUsers = _setGitUsers;
// module.exports._setGitUserRepositories = _setGitUserRepositories;

// module.exports.setCommit = _setGitCommit;
// module.exports.setSHAHash = _setGitSHAHash;
// module.exports.setTagName = _setGitTagName;
// module.exports.setBranchName = _setGitBranchName;
// module.exports.setContentFile = _setGitContentFile;
// module.exports.setContentDir = _setGitContentDir;
// module.exports.setContentDirRecursive = _setGitContentDirRecursive;
// module.exports.setTree = _setGitTree;
// module.exports.setTreeRecursive = _setGitTreeRecursive;
// module.exports.setRepositories = _setGitRepositories;
// module.exports.setRepository = _setGitRepository;
// module.exports.setIssues = _setGitIssues;
// module.exports.setLabels = _setGitLabels;
// module.exports.setTopics = _setGitTopics;
// module.exports.setUsers = _setGitUsers;
// module.exports.setUserRepositories = _setGitUserRepositories;



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

