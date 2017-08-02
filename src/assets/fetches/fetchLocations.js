const http    = "https://"
const baseURL = "localhost:4400/"
const prefix  = "bucketLibrary/"
const version = "v1/"


export const createUser = `${http}${baseURL}${prefix}${version}createuser`;
export const deleteUser = `${http}${baseURL}${prefix}${version}deleteUser`;
export const logInUser  = `${http}${baseURL}${prefix}${version}getuser`;
