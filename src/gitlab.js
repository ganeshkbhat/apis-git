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
 * https://docs.gitlab.com/ee/api/repository_files.html
 * 
*/

/* eslint no-console: 0 */

'use strict';

const path = require('path');
const fs = require('fs');




function _searchGitlab(requestOptions, data = null, options) {

}


function _findGitlabRemoteFileUrl(remoteUrl, searchOptions, options) {
    // Implement _getRoot logic into remote url with concurrency
}


function _findGitlabRemoteRootUrl(remoteUrl, searchOptions, options) {
    // Implement _getRoot logic into remote url with concurrency
}


function _findGitlabRemotePackageJsonUrl(remoteUrl, options) {
    // Implement _getRoot logic and find the package.json url into remote package.json url with concurrency
}


/**
 *
 *
 * @param {*} results
 * @param {*} options
 * @return {*} 
 */
function _searchGitlabFilesResultsModifier(results, options) {

}


/**
 *
 *
 * @param {*} request
 * @param {string} [options={ owner: "", repo: "", sha: "", path: "", branch: "", querystring: "" }]
 * @return {*} 
 */
function _getGitlabAction(request, options, repository = { owner: "", repo: "", branch: "", sha: "", path: "", querystring: "" }, action) {

}

/**
 *
 *
 * @param {*} request
 * @param {string} [options={ owner: "", repo: "", sha: "", path: "", branch: "", querystring: "" }]
 * @return {*} 
 */
function _setGitlabAction(request, options, repository = { owner: "", repo: "", branch: "", sha: "", path: "", querystring: "" }, action) {
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
function _getGitlabCommit(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchCommits");
}

function _getGitlabSHAHash(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchCommitSha");
}

function _getGitlabTagName(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchTags");
}

function _getGitlabBranchName(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchUsers");
}

function _getGitlabContentFile(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchTags");
}

function _getGitlabContentDir(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchContents");
}

function _getGitlabContentDirRecursive(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchContents");
}

function _getGitlabTree(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "tree");
}

function _getGitlabTreeRecursive(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "treeRecursive");
}

function _getGitlabRepositories(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "repo");
}

function _getGitlabRepository(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "repo");
}

function _getGitlabIssues(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchIssues");
}

function _getGitlabLabels(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchLabels");
}

function _getGitlabTopics(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchTopics");
}

function _getGitlabUsers(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchUsers");
}

function _getGitlabUserRepositories(request, option, repository) {
    return _getGitlabAction(request, options, respository, action = "searchUsers");
}

function _getGitlabRoot() {

}

module.exports._getGitlabRoot = _getGitlabRoot;


module.exports.searchGitlab = _searchGitlab;
module.exports.findGitlabRemoteFileUrl = _findGitlabRemoteFileUrl;
module.exports.findGitlabRemoteRootUrl = _findGitlabRemoteRootUrl;
module.exports.findGitlabRemotePackageJsonUrl = _findGitlabRemotePackageJsonUrl;
module.exports.searchGitlabFilesResultsModifier = _searchGitlabFilesResultsModifier;


module.exports.getCommit = _getGitlabCommit;
module.exports.getSHAHash = _getGitlabSHAHash;
module.exports.getTagName = _getGitlabTagName;
module.exports.getBranchName = _getGitlabBranchName;
module.exports.getContentFile = _getGitlabContentFile;
module.exports.getContentDir = _getGitlabContentDir;
module.exports.getContentDirRecursive = _getGitlabContentDirRecursive;
module.exports.getTree = _getGitlabTree;
module.exports.getTreeRecursive = _getGitlabTreeRecursive;
module.exports.getRepositories = _getGitlabRepositories;
module.exports.getRepository = _getGitlabRepository;
module.exports.getIssues = _getGitlabIssues;
module.exports.getLabels = _getGitlabLabels;
module.exports.getTopics = _getGitlabTopics;
module.exports.getUsers = _getGitlabUsers;
module.exports.getUserRepositories = _getGitlabUserRepositories;


