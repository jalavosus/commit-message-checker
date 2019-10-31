const core = require('@actions/core');

try {
  let checkString = core.getInput('check-string')
  let commitsList = core.getInput('commits')

  let lastCommit = commitsList[commitsList.length-1]

  let foundString = lastCommit.message.includes(checkString)
} catch (error) {
  core.setFailed(error.message)
}
