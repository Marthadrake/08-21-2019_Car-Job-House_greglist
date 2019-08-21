import JobServices from "../Services/JobServices.js"

let _jobServices = new JobServices()

export default class JobControllers {
  constructor() {
    console.log("hello from job contoller")
  }
}