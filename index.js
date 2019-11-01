const core = require('@actions/core');

try {
  let checkString = core.getInput('check-string')
  let commitsList = JSON.parse(core.getInput('commits'))

  let lastCommit = commitsList[commitsList.length-1]

  let foundString = lastCommit.message.includes(checkString)

  core.setOutput('checkSkip', foundString)

  console.log(`Output: ${foundString}`)
} catch (error) {
  core.setFailed(error.message)
}
