'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showProjectTemplate = require('../templates/get-project.handlebars')
const getFormFields = require(`../../../lib/get-form-fields`)

const signInView = () => {
  $('#createProject').removeClass('hidden')
  $('#get-project-modal-button').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-in-modal-button').addClass('hidden')
  $('#sign-in-modal').modal('hide')
  $('#sign-up-modal-button').addClass('hidden')
  $('#creation-content').addClass('hidden')
  $('#messages').removeClass('hidden')
  // console.log('signInView fired')
}

const signOutView = () => {
  $('#get-project-modal-button').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-in-modal-button').removeClass('hidden')
  $('#sign-up-modal-button').removeClass('hidden')
  $('#new-project-modal-button').addClass('hidden')
  $('#creation-content').addClass('hidden')
}

const resetForms = () => {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
  document.getElementById('sign-out').reset()
  document.getElementById('createProject').reset()
}

const signUpSuccess = (data) => {
  $('#sign-up-modal-button').modal('hide')
  $('#sign-up-modal').modal('hide')
  $('#sign-up-modal-button').addClass('hidden')
  $('#sign-up-modal').addClass('hidden')
  resetForms()
}

const signUpFailure = (error) => {
  resetForms()
  console.log(error)
  $('#sign-up-modal-alert').html('<p>username taken or passwords don\'t match, try again!</p>')
}

const signInSuccess = (data) => {
  resetForms()
  signInView()
  // console.log('sign in success')
  // console.log('user type is ', data.user.user_type)
  store.user = data.user
  // api.signInGetProject()
  //   .then(signInGetProjectSuccess)
  $('#messages').html('<h5>welcome! if you\'re working on something <br> click \'your project\'</h5>')

  api.getProject()
    .then(getProjectSuccess)
}

const signInFailure = (error) => {
  resetForms()
  console.error(error)
  $('#sign-in-modal-alert').html('<p>wrong username or password, please try again</p>')
}

// const signInGetProjectSuccess = (data) => {
//   console.log(data)
//   if (data.projects.length === 0)
//     $('#new-project-modal-button').removeClass('hidden')
//   else {
//     $('#new-project-modal-button').addClass('hidden')
//     $('#creation-content').removeClass('hidden')
//     // $('#creation-content').html('Project Title: ' + store.project.title + '<br>' + 'Project Description: ' + store.project.description)
//     $('#creation-content').html('Project Title: ' + data.projects[0].title + '<br>' + 'Project Description: ' + data.projects[0].description)
//   } if (data.projects.length === 1)
//     $('#creation-content').removeClass('hidden')
//   }
//
// const signInGetProjectFailure = (error) => {
//   console.error(error)
// }

const changePasswordSuccess = (response) => {
  resetForms()
  console.log(response)
  $('#messages').html('<h4>you\'ve got a new password!</h4>')
}

const changePasswordFailure = (error) => {
  resetForms()
  console.error(error)
  $('#messages').html('<h4>passwords did not match</h4>')
}

const signOutSuccess = (response) => {
  signOutView()
  resetForms()
  console.log(response)
  $('#sign-in-modal-alert').html('<p>almost there, sign in below</p>')
  $('#sign-up-modal-button').html('<p>sign up!</p>')
  $('#messages').html('<h3>signed out!  thank you for using the app!</h3>')
}

const signOutFailure = (error) => {
  console.error(error)
}

const refreshProject = (data) => {
  const showProjectHtml = showProjectTemplate({ projects: store.projectList })
  resetForms()
  $('.content').empty()
  $('.content').append(showProjectHtml)
  $('.update').on('submit', onUpdateProject)
  $('.destroy').on('click', onDeleteProject)
}

const createProjectSuccess = (response) => {
  store.project = response.project
  // console.log('createProjectSuccess is', response)
  $('#creation-content').html('<h4>Project Title: ' + store.project.title + '</h4><br><h3>' + 'Project Description: ' + store.project.description + '</h3>')
  $('#newprojectmodal').modal('hide')
  api.getProject()
    .then(getProjectSuccess)
}

const createProjectFailure = (error) => {
  console.error(error)
}

const createTasksSuccess = (response) => {
  console.log(response)
}

const createTasksFailure = (error) => {
  console.error(error)
}

const getProjectSuccess = (data) => {
  // console.log('we made it')
  // console.log('getAllRecipesSuccess fired')
  store.projectList = data.projects
  // console.log('data.projects is ', data.projects)
  refreshProject(data)
  // console.log('length is ', data.projects.length)
  // console.log('Log in getProjectSuccesstitle is ', data.projects[0].title)
  // console.log('getProjectSuccesstitle is store.project.title ', store.project.title)
  if (data.projects.length === 0)
    $('#new-project-modal-button').removeClass('hidden')
  else {
    $('#creation-content').removeClass('hidden')    // $('#creation-content').html('Project Title: ' + store.project.title + '<br>' + 'Project Description: ' + store.project.description)
    // $('#creation-content').html('Project Title: ' + data.projects[0].title + '<br>' + 'Project Description: ' + data.projects[0].description)
  }
}

const getProjectFailure = (error) => {
  console.error('getProject failure is ', error)
}

const deleteProjectSuccess = (response) => {
  console.log(response)
  $('#getprojectmodal').modal('hide')
  $('#creation-content').text('')

  // $('#creation-content').addClass('hidden')
}

const deleteProjectFailure = (error) => {
  console.error(error)
}

const updateProjectSuccess = (response) => {
  console.log(response)
  store.project = response.project
  $('#creation-content').html('<h3>Project Title: ' + store.project.title + '</h3><br><h4>' + 'Project Description: ' + store.project.description + '</h4>')
  $('#getprojectmodal').modal('hide')
}

const updateProjectFailure = (error) => {
  console.error(error)
}

const onUpdateProject = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  const newProject = $(event.target).attr('data-id')
  // $('.update').trigger('reset')
  refreshProject()
  api.updateProject(data, newProject)
    .then(updateProjectSuccess)
    .then(() => {
      api.getProject()
        .then(getProjectSuccess)
        .catch(getProjectFailure)
        .catch(updateProjectFailure)
    })
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
  // ,
  // signInGetProjectSuccess,
  // signInGetProjectFailure
}
