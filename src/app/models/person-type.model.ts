export class PersonType {
  personTypeId: number | null;
  name: string;
  status: string;

  constructor(personTypeId: number | null, name: string, status: string) {
    this.personTypeId = personTypeId;
    this.name = name;
    this.status = status;
  }
}
