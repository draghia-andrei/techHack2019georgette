export class Employee {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public username: string,
    public isActive: boolean,
    public isAdmin: boolean
  ) { }
}
