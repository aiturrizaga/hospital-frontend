export class PersonType {
  personTypeId: number;
  name: string;
  status: string;

  constructor(personTypeId: number, name: string, status: string) {
    this.personTypeId = personTypeId;
    this.name = name;
    this.status = status;
  }
}
