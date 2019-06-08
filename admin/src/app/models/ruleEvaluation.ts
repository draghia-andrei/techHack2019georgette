import { Rule } from './rules';

export class ruleEvaluation {
  constructor(
    public id: number,
    public score: number,
    public evaluatedTime: string
  ) { }
}
