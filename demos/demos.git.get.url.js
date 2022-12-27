/**
 * 
 * Package: git-apis
 * Author: Ganesh B
 * Description: Git APIs allows you to search git repositories and other important functions for git not generally available
 * Install: npm i git-apis --save
 * Github: https://github.com/ganeshkbhat/git-apis
 * npmjs Link: https://www.npmjs.com/package/git-apis
 * File: .js
 * File Description: Main index file for for git-apis with all package functions
 * 
*/

/* eslint no-console: 0 */

'use strict';

const gitjs = require("../index");

let r = gitjs._getGitURLs().get("git.github.docs", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.repo", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.tree", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.treeRecursive", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.searchTags", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.searchCommits", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.searchCommitSha", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.searchContents", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.searchCode", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.searchIssues", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.searchLabels", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.searchRepositories", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.searchTopics", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.searchUsers", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);

r = gitjs._getGitURLs().get("git.github.listUserRepos", "ganeshkbhat", "cgijs", "main");
console.log("[git-apis] URL Generation examples - ", r);


