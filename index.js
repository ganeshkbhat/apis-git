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
 * 
 * https://docs.github.com/en/rest/repos/contents#get-repository-content
 * https://docs.gitlab.com/ee/api/repository_files.html
 * https://developer.atlassian.com/cloud/bitbucket/rest/
 * https://www.softwaretestinghelp.com/github-rest-api-tutorial/#:~:text=Log%20in%20to%20your%20GitHub,and%20click%20on%20Create%20Token.
 * git-rest: https://www.softwaretestinghelp.com/github-rest-api-tutorial/#:~:text=Log%20in%20to%20your%20GitHub,and%20click%20on%20Create%20Token.
 * 
*/

/* eslint no-console: 0 */

'use strict';

const {
    getCommit, getSHAHash, getTagName, getBranchName, getContentFile, getContentDir,
    getContentDirRecursive, getTree, getTreeRecursive, getRepositories, getRepository, getIssues,
    getLabels, getTopics, getUsers, getUserRepositories,
    _getRoot, _getGitRoot,
    _searchGit, _findGitRemoteFileUrl, _findGitRemoteRootUrl, _findGitRemotePackageJsonUrl,
    _searchGitFilesResultsModifier, _getDirContentResultsModifier, _getGitCommit,
    _getGitSHAHash, _getGitTagName, _getGitBranchName, _getGitURLs, _getGitContentFile, _getGitContentDir,
    _getGitContentDirRecursive, _getGitTree, _getGitTreeRecursive, _getGitRepositories, _getGitIssues,
    _getGitLabels, _getGitTopics, _getGitUsers, _getGitUserRepositories, _getGitRepository,
    _isValidURL, _getProtocol, _checkHttpsProtocol,
    _fetch, _deleteRequest, _getRequest, _postRequest, _putRequest, _patchRequest, _request
} = require("./src/git.js");


module.exports._getRoot = _getRoot;
module.exports._getGitRoot = _getGitRoot;

// git.js

module.exports._searchGit = _searchGit;
module.exports._findGitRemoteFileUrl = _findGitRemoteFileUrl;
module.exports._findGitRemoteRootUrl = _findGitRemoteRootUrl;
module.exports._findGitRemotePackageJsonUrl = _findGitRemotePackageJsonUrl;
module.exports._searchGitFilesResultsModifier = _searchGitFilesResultsModifier;
module.exports._getDirContentResultsModifier = _getDirContentResultsModifier;
module.exports._getGitURLs = _getGitURLs;
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
module.exports._getGitIssues = _getGitIssues;
module.exports._getGitLabels = _getGitLabels;
module.exports._getGitTopics = _getGitTopics;
module.exports._getGitUsers = _getGitUsers;
module.exports._getGitUserRepositories = _getGitUserRepositories;
module.exports._getGitRepository = _getGitRepository;


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


module.exports.getCommit = getGitCommit;
module.exports.getSHAHash = getGitSHAHash;
module.exports.getTagName = getGitTagName;
module.exports.getBranchName = getGitBranchName;
module.exports.getContentFile = getGitContentFile;
module.exports.getContentDir = getGitContentDir;
module.exports.getContentDirRecursive = getGitContentDirRecursive;
module.exports.getTree = getGitTree;
module.exports.getTreeRecursive = getGitTreeRecursive;
module.exports.getRepositories = getGitRepositories;
module.exports.getRepository = getGitRepository;
module.exports.getIssues = getGitIssues;
module.exports.getLabels = getGitLabels;
module.exports.getTopics = getGitTopics;
module.exports.getUsers = getGitUsers;
module.exports.getUserRepositories = getGitUserRepositories;

