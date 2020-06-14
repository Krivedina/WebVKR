export class CheckTaskViewModel {
  public id: any;
  public name: any;
  public deadline: any;
  public currentScore: any;
  public status: any;
  public requirementList: any;
  public descriptionText: any;
  public input: any;
  public maxScore: any;

  public fillModel(data = {}) {
    for (let element in data) {
      if (element !== undefined) {
        this[element] = data[element];
      }
    }
  }
}
