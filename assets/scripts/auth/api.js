'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createProject = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/projects/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const createTasks = (data) => {
//   console.log('createTasks data is', data)
//   return $.ajax({
//     url: config.apiOrigin + '/tasks/',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

const getProject = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/projects/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const signInGetProject = (data) => {
//   console.log('signInGetProject fired')
//   return $.ajax({
//     url: config.apiOrigin + '/projects/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const updateProject = (data, newProject) => {
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/projects/' + newProject,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteProject = (id) => {
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/projects/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createProject,
  getProject,
  updateProject,
  deleteProject
  // ,
  // signInGetProject
}
