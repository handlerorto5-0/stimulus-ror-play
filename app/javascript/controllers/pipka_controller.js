import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ["output"]

  function_add(){
    for(var index in this.outputTargets)
      this.outputTargets[index].textContent = "And Pipla yet"
  }
}
