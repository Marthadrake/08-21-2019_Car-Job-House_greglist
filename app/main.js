import JobControllers from "./Controllers/JobControllers.js";


class App {
  constructor() {
    this.controllers = {
      jobControllers: new JobControllers()
    }
  }
}

window["app"] = new App()