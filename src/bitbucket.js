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
 * https://developer.atlassian.com/cloud/bitbucket/rest/
 * 
*/

/* eslint no-console: 0 */

'use strict';

const path = require('path');
const fs = require('fs');


// https://bitbucket.org/extendcore/devextendide/src/master/
// https://bitbucket.org/extendcore/devextendide/src/master/index.html
// https://bitbucket.org/extendcore/devextendide/src/develop/index.html
// https://bitbucket.org/extendcore/devextendide/raw/0d84e31689d1190afd15aaee2b22d865e78bd35b/index.html
// https://bitbucket.org/extendcore/devextendide/raw/6148b94dcabda774f8786aad0f47401241b2b09d/index.html
// https://bitbucket.org/extendcore/devextendide/src/706100e9135a8e48fb5391690aeef0692662ed47/index.html?at=master
// https://bitbucket.org/extendcore/devextendide/src/706100e9135a8e48fb5391690aeef0692662ed47/index.html?at=develop
// https://bitbucket.org/extendcore/devextendide/raw/706100e9135a8e48fb5391690aeef0692662ed47/index.html
// https://bitbucket.org/extendcore/devextendide/raw/b5d8b9167140fd86e5ddea5985cf41a7fcdb3599/index.html


// https://bitbucket.org/extendcore/devextendide/commits/
// https://bitbucket.org/extendcore/devextendide/commits/branch/master
// https://bitbucket.org/extendcore/devextendide/commits/branch/develop
// https://bitbucket.org/extendcore/devextendide/commits/6148b94dcabda774f8786aad0f47401241b2b09d
// https://bitbucket.org/extendcore/devextendide/commits/180396b4b54fd9c3a9ca7ef403d95d84ea3715e3


// https://bitbucket.org/extendcore/devextendide/branches/
// https://bitbucket.org/extendcore/devextendide/branch/master
// https://bitbucket.org/extendcore/devextendide/branch/develop
// https://bitbucket.org/extendcore/devextendide/commits/6148b94dcabda774f8786aad0f47401241b2b09d
// https://bitbucket.org/extendcore/devextendide/src/6148b94dcabda774f8786aad0f47401241b2b09d/index.html
// https://bitbucket.org/extendcore/devextendide/raw/6148b94dcabda774f8786aad0f47401241b2b09d/index.html



function _searchBitbucket(requestOptions, data = null, options) {

}


function _findBitbucketRemoteFileUrl(remoteUrl, searchOptions, options) {
    // Implement _getRoot logic into remote url with concurrency
}


function _findBitbucketRemoteRootUrl(remoteUrl, searchOptions, options) {
    // Implement _getRoot logic into remote url with concurrency
}


function _findBitbucketRemotePackageJsonUrl(remoteUrl, options) {
    // Implement _getRoot logic and find the package.json url into remote package.json url with concurrency
}


/**
 *
 *
 * @param {*} results
 * @param {*} options
 * @return {*} 
 */
function _searchBitbucketFilesResultsModifier(results, options) {

}


/**
 *
 *
 * @param {*} request
 * @param {string} [options={ owner: "", repo: "", sha: "", path: "", branch: "", querystring: "" }]
 * @return {*} 
 */
function _getBitbucketAction(request, options, repository = { owner: "", repo: "", branch: "", sha: "", path: "", querystring: "" }, action) {

}

/**
 *
 *
 * @param {*} request
 * @param {string} [options={ owner: "", repo: "", sha: "", path: "", branch: "", querystring: "" }]
 * @return {*} 
 */
function _setBitbucketAction(request, options, repository = { owner: "", repo: "", branch: "", sha: "", path: "", querystring: "" }, action) {
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
function _getBitbucketCommit(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchCommits");
}

function _getBitbucketSHAHash(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchCommitSha");
}

function _getBitbucketTagName(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchTags");
}

function _getBitbucketBranchName(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchUsers");
}

function _getBitbucketContentFile(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchTags");
}

function _getBitbucketContentDir(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchContents");
}

function _getBitbucketContentDirRecursive(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchContents");
}

function _getBitbucketTree(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "tree");
}

function _getBitbucketTreeRecursive(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "treeRecursive");
}

function _getBitbucketRepositories(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "repo");
}

function _getBitbucketRepository(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "repo");
}

function _getBitbucketIssues(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchIssues");
}

function _getBitbucketLabels(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchLabels");
}

function _getBitbucketTopics(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchTopics");
}

function _getBitbucketUsers(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchUsers");
}

function _getBitbucketUserRepositories(request, option, repository) {
    return _getBitbucketAction(request, options, respository, action = "searchUsers");
}

function _getBitbucketRoot() {

}

module.exports._getBitbucketRoot = _getBitbucketRoot;


module.exports.searchBitbucket = _searchBitbucket;
module.exports.findBitbucketRemoteFileUrl = _findBitbucketRemoteFileUrl;
module.exports.findBitbucketRemoteRootUrl = _findBitbucketRemoteRootUrl;
module.exports.findBitbucketRemotePackageJsonUrl = _findBitbucketRemotePackageJsonUrl;
module.exports.searchBitbucketFilesResultsModifier = _searchBitbucketFilesResultsModifier;


module.exports.getCommit = _getBitbucketCommit;
module.exports.getSHAHash = _getBitbucketSHAHash;
module.exports.getTagName = _getBitbucketTagName;
module.exports.getBranchName = _getBitbucketBranchName;
module.exports.getContentFile = _getBitbucketContentFile;
module.exports.getContentDir = _getBitbucketContentDir;
module.exports.getContentDirRecursive = _getBitbucketContentDirRecursive;
module.exports.getTree = _getBitbucketTree;
module.exports.getTreeRecursive = _getBitbucketTreeRecursive;
module.exports.getRepositories = _getBitbucketRepositories;
module.exports.getRepository = _getBitbucketRepository;
module.exports.getIssues = _getBitbucketIssues;
module.exports.getLabels = _getBitbucketLabels;
module.exports.getTopics = _getBitbucketTopics;
module.exports.getUsers = _getBitbucketUsers;
module.exports.getUserRepositories = _getBitbucketUserRepositories;


