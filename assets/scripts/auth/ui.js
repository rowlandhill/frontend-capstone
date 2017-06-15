'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showProjectTemplate = require('../templates/get-project.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  console.log(data + 'sign-up success')
}

const signUpFailure = (error) => {
  console.log(error)
}

const signInSuccess = (data) => {
  console.log('sign in success')
  store.user = data.user
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (response) => {
  console.log('response is ', response)
}

const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (response) => {
  console.log('response is', response)
  console.log('signedout')
}

const signOutFailure = (error) => {
  console.error(error)
}

const refreshProject = (data) => {
  const showProjectHtml = showProjectTemplate({ projects: store.projectList })
  $('.content').append(showProjectHtml)
  // $('.update').on('submit', onUpdateProject)
  // $('.destroy').on('click', onDeleteProject)
}

const createProjectSuccess = (response) => {
  store.project = response.project
  console.log('createProjectSuccess is', response)
  $('#creation-content').html('response is ' + store.project.title)
}

const createProjectFailure = (error) => {
  console.error(error)
}

const createTasksSuccess = (response) => {
  console.log('createTasksSuccess is', response)
}

const createTasksFailure = (error) => {
  console.error(error)
}

const getProjectSuccess = (data) => {
  console.log('we made it')
  // console.log('getAllRecipesSuccess fired')
  store.projectList = data.projects
  refreshProject(data)
  console.log('data is ', data)
  console.log('data.projects is ', data.projects)
  console.log('refreshProject() is ', refreshProject)
}

const getProjectFailure = (error) => {
  console.error('getProject failure is ', error)
}

const deleteProjectSuccess = (response) => {
  console.log(response)
}

const deleteProjectFailure = (error) => {
  console.error(error)
}

const updateProjectSuccess = (response) => {
  console.log(response)
}

const updateProjectFailure = (error) => {
  console.error(error)
}

const noEmptyUpdates = (input) => {
  if (/[a-z]/.test(input.toLowerCase()) === false) { return false }
  return true
}

const onUpdateProject = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  const newProject = $(event.target).attr('data-id')
  // console.log('event.target is ' + data)
  console.log(newProject)
  $('.update').trigger('reset')
  refreshProject()
  if (noEmptyUpdates(data.project.title) === true) {
    api.updateProject(data, newProject)
    .then(updateProjectSuccess)
    .then(() => {
      api.getProject()
        .then(getProjectSuccess)
        .catch(getProjectFailure)
    })
  } else {
    updateProjectFailure
  }
}

const onDeleteProject = (event) => {
  event.preventDefault()
  const removeProject = $(event.target).attr('data-id')
  store.projectList = store.projectList.filter((project) => {
    return String(project.id) !== String(removeProject)
  })
  refreshProject()
  api.deleteProject(removeProject)
    .then(deleteProjectSuccess)
    .catch(deleteProjectFailure)
    .then(() => {
      api.getProject()
        .then(getProjectSuccess)
        .catch(getProjectFailure)
    })
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createProjectSuccess,
  createProjectFailure,
  createTasksSuccess,
  createTasksFailure,
  getProjectSuccess,
  getProjectFailure,
  onDeleteProject,
  onUpdateProject
}
