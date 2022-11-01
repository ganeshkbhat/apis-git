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
 * 
*/

/* eslint no-console: 0 */

'use strict';

const _getRequireOrImport = require("./require_import");


const { _getPackageJsonRoot, _searchGit, _findGitRemoteFileUrl, _findGitRemoteRootUrl, _findGitRemotePackageJsonUrl,
    _searchGitFilesResultsModifier, _getDirContentResultsModifier, _getGitCommitNumber,
    _getGitSHAHash, _getGitTagName, _getGitBranchName, _getGitURLs
} = require("./src/git.js");


const {
    _deleteRequest, _getRequest, _postRequest,
    _putRequest, _patchRequest, _request
} = require("./src/request.js");


// git.js
module.exports._getPackageJsonRoot = _getPackageJsonRoot;
module.exports._searchGit = _searchGit;
module.exports._findGitRemoteFileUrl = _findGitRemoteFileUrl;
module.exports._findGitRemoteRootUrl = _findGitRemoteRootUrl;
module.exports._findGitRemotePackageJsonUrl = _findGitRemotePackageJsonUrl;
module.exports._searchGitFilesResultsModifier = _searchGitFilesResultsModifier;
module.exports._getDirContentResultsModifier = _getDirContentResultsModifier;
module.exports._getGitCommitNumber = _getGitCommitNumber;
module.exports._getGitSHAHash = _getGitSHAHash;
module.exports._getGitTagName = _getGitTagName;
module.exports._getGitBranchName = _getGitBranchName;
module.exports._getGitURLs = _getGitURLs;


// request.js
module.exports._deleteRequest = _deleteRequest;
module.exports._getRequest = _getRequest;
module.exports._postRequest = _postRequest;
module.exports._putRequest = _putRequest;
module.exports._patchRequest = _patchRequest;
module.exports._request = _request;

