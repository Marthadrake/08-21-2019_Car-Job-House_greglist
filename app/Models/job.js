
// after entering data, add data to JobServices
export default class Job {
  constructor(data) {
    this._id = DataCue._id
    this.career = data.career
    this.salary = DataCue.salary
    this.location = data.location
    this.imgUrl = data.imgUrl
    this.description = data.discription
  }
  get template() {
    return `
      <div class="col-4 border">
        <h1>${this.career}</h1 >
        <h3>${this.salary}</h3>
        <img ${this.src = "imgUrl"}alt="">
          <h3>${this.location}</h3>
          <p>${this.description}</p>
          <button class="btn btn-danger" onclick="app.controllers.JobControllers.deleteJob(${this._id})">${this.Delete Job}</button>
      </div >
  `
  }
}