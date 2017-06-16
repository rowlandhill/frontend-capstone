'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
      // .then(() => {
      //   api.getProject()
      //   .then(ui.getProjectSuccess)
      //   .catch(ui.getProjectFailure)
      // })
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateProject = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createProject(data)
    .then(ui.createProjectSuccess)
    .catch(ui.createProjectFailure)
    // .then(() => {
    //   api.createTasks(data)
    //     .then(ui.createTasksSuccess)
    //     .catch(ui.createTasksFailure)
    // })
}

// const addAnotherInput = function () {
//   $('<br><div class="form-group"><input class="form-control" name="task[name]" type="text" placeholder="tasks"></div><div class="form-group" id="more-tasks"><textarea class="form-control" name="task[description]" rows="3" type="text" placeholder="add task description here"></textarea></div>').appendTo('#createProject')
// }

// const onCreateTasks = function (event) {
//   console.log(event)
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.createTasks(data)
//     .then(ui.createTasksSuccess)
//     .catch(ui.createTasksFailure)
// }

const onGetProject = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getProject(data)
    .then(ui.getProjectSuccess)
    .catch(ui.getProjectFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#createProject').on('submit', onCreateProject)
  // $('#more-task-inputs').on('click', addAnotherInput)
  $('#getProjectButton').on('click', onGetProject)
}

module.exports = {
  addHandlers
}
