import Job from "../Models/Job.js";

let _state = {
  jobs: [new Job({
    career: "Web Design",
    salary: 0,
    location: "Boston"
    imgUrl: "Crowdz.io"
    discription: "s"
  })]
}

export default class JobServices {
  constructor() {
    console.log("hello from services")
  }
}