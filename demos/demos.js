
const gitjs = require("../index");
let r = gitjs._getGitURLs(owner = "ganeshkbhat", repo = "cgijs", querystring = "", path = "").git.github.searchCommits;
console.log(String.raw(r, ["ganeshkbhat","cgijs","",""]));

console.log(gitjs._getGitCommit(r, {}));

