import Job from "../Models/Job.js";

//added after data in job.js
//go to controller draw the state
let _state = {
  jobs: [new Job({
    career: "Web Design",
    salary: 0,
    location: "Boston",
    imgUrl: "https://crowdz.io",
    discription: "s"
  })]
}

export default class JobServices {
  deleteJob(id) {
    _state.jobs.forEach(job, i) => {
      if (job._id == id) {
        _state.jobs.splice(i, 1)
      }

    })
  }
}
