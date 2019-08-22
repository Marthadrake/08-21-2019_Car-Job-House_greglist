import JobServices from "../services/JobServices.js"

let _jobServices = new JobServices()

function _draw() {
  // make template in the html next
  let template = ''
  let jobs = _jobServices.jobs

  jobs.forEach((job, index) => {
    template += job.template
  })

  document.querySelector("#jobs").innerHTML = template
}

export default class JobControllers {
  constructor() {
    console.log("hello from job contoller")
    _draw()
  }

  deleteJob(id) {
    _jobServices.deleteJob(id)
  _draw()
  
  } 
  addJob(event) {
    event.preventDefault()
    
    let form = event.target
    let newJob = {
      career: form.career.value,
      salary: form.salary.value,
      location: form.location.value,
      imgUrl: form.imgUrl.value,
      description: form.discription.value, 
    }
      
      _jobServices.addJob(newJob)
      _draw()
  }
}