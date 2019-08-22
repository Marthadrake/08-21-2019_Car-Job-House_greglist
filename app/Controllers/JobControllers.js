import JobServices from "../Services/JobServices.js"

let _jobService = new JobServices()

function _draw() {
  // make template in the html next
  let template = ``
  let jobs = _jobService.Jobs

  jobs.forEach((job, index) => {
    template += job.template
  })

  document.querySelector("#jobs").innerHTML = template
}

export default class JobControllers {
  constructor() {
    console.log("hello from job contoller")

  }
  deleteJob(id) {
    _jobService.deleteJob(id)
    _draw()
  }

  addJob(event) {
    event.preventDefault()

  }
}