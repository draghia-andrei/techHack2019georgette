import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { RuleEvaluation } from '../models/ruleEvaluation';


const evalP: Person[] = [
  {
    id: '12315151',
    rules: [
      new RuleEvaluation('age', true),
      new RuleEvaluation('ok', true)
    ],
    score: 55,
    evaluatedTime: '1235'
  },
  {
    id: '12315151',
    rules: [
      new RuleEvaluation('age', false),
      new RuleEvaluation('ok', true)
    ],
    score: 22,
    evaluatedTime: '1235'
  },
  {
    id: '12315151',
    rules: [
      new RuleEvaluation('age', false),
      new RuleEvaluation('ok', true)
    ],
    score: 79,
    evaluatedTime: '1235'
  }
];
@Injectable({
  providedIn: 'root'
})
export class EvaluatedPersonsService {
  evaluatedPersons: Person[] = evalP;
  constructor() { }

  set(evaluatedPersons: Person[]): void {
    this.evaluatedPersons = evaluatedPersons;
  }

  get(): Person[] {
    return this.evaluatedPersons;
  }
}
