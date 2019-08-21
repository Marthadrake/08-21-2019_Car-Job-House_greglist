import JobServices from "../Services/JobServices.js"

let _jobServices = new JobServices()

function _draw() {
  // make template in the html next
  let template = ''
  let Job = _jobServices.Job

  Job.forEach((job, index) => {
    template += Job.template
  })
  debugger
  document.querySelector("#Job").innerHTML = template
}

export default class JobControllers {
  constructor() {
    console.log("hello from job contoller")
    _draw();
  }
}