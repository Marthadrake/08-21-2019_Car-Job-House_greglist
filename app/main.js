import JobControllers from "./controllers/JobControllers.js";


class App {
  constructor() {
    this.controllers = {
      jobControllers: new JobControllers()
    }
  }
}

window["app"] = new App()