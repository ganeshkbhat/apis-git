
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


