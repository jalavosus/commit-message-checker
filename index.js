const core = require('@actions/core');

try {
  let checkString = core.getInput('check-string')
  let commitsList = JSON.parse(core.getInput('commits'))

  let lastCommit = commitsList[commitsList.length-1]

  let foundString = lastCommit.message.includes(checkString)

  let result = ""

  switch (foundString) {
    case true:
      result = "true"
      break
    case false:
      result = "false"
      break
  }

  core.setOutput('shouldBuild', result)
} catch (error) {
  core.setFailed(error.message)
}
