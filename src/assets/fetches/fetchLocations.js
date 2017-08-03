const http    = "http://"
const baseURL = "localhost:4400/"
const prefix  = "bucketLibrary/"
const version = "v1/"

export const googlAPI     = 'https://www.googleapis.com/books/v1/volumes?q='
export const createUser   = `${http}${baseURL}${prefix}${version}createuser`;
export const deleteUser   = `${http}${baseURL}${prefix}${version}deleteUser`;
export const logInUser    = `${http}${baseURL}${prefix}${version}getuser`;
export const userLibrary  = `${http}${baseURL}${prefix}${version}user/library`;
