import JobServices from "../services/JobServices.js"

let _jobServices = new JobServices()

function _draw() {
  // make template in the html next
  let template = ``
  let jobs = _jobServices.Jobs

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
    _jobServices.deleteJob(index)
  _draw()
} 

  addJob(event) {
  event.preventDefault()

let form = event.target
  newJob = {
career: form.career.value,
  salary: form.salary.value,
  location: form.location.value,
  imgUrl: form.imgUrl.value,
  description: form.discription.value, 
   
          
  _jobServices.addJob(newJob)
raw()

  }
}