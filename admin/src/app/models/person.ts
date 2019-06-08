import { RuleEvaluation } from './ruleEvaluation';

export class Person {
  constructor(
    public id: string,
    public rules: RuleEvaluation[],
    public score: number,
    public evaluatedTime: string
  ) {
  }
}

