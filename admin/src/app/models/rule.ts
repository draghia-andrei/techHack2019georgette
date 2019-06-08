export class Rule {
  constructor(
    public code: string,
    public descriptionArr: object[],
    public score: number,
    public isActive: boolean
  ) { }
}
