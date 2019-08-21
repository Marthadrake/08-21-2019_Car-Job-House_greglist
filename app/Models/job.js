
// after entering data, add data to JobServices
export default class Job {
  constructor(data) {
    this._id = data._id
    this.career = data.career
    this.salary = data.salary
    this.location = data.location
    this.imgUrl = data.imgUrl
    this.description = data.discription
  }
  get template() {
    return `
      <div class="col-4 border">
        <h1>${this.career}</h1 >
        <h3>${this.salary}</h3>
        <img src="${this.imgUrl}" alt="">
          <h3>${this.location}</h3>
          <p>${this.description}</p>
          <button class="btn btn-danger" onclick="app.controllers.JobControllers.deleteJob('${this._id}')">Delete Job</button>
      </div>
  `
  }
}