import Job from "../Models/Job.js";

//added after data in job.js
//go to controller draw the state
let _state = {
  Jobs: [new Job({
    career: "Web Design",
    salary: 0,
    location: "Boston",
    imgUrl: "https://crowdz.io",
    discription: "s"
  })]
}

export default class JobServices {
  constructor() {
    console.log("hello from services")
  }
}