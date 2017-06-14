'use strict'

const store = require('../store.js')

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

const createProjectSuccess = (response) => {
  console.log('createProjectSuccess is', response)
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
  createTasksFailure
}
