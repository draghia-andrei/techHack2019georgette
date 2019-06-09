import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { RuleEvaluation } from '../models/ruleEvaluation';


const evalP: Person[] = [
  {
    id: '1930924050029',
    rules: [
      new RuleEvaluation('age', true),
      new RuleEvaluation('ok', true)
    ],
    score: 55,
    evaluatedTime: '15 sep, 8:56 PM'
  },
  {
    id: '1930924050023',
    rules: [
      new RuleEvaluation('age', false),
      new RuleEvaluation('ok', true)
    ],
    score: 22,
    evaluatedTime: '15 sep, 8:56 PM'
  },
  {
    id: '1930924050048',
    rules: [
      new RuleEvaluation('age', false),
      new RuleEvaluation('ok', true),
      new RuleEvaluation('aloha', true),
      new RuleEvaluation('vidal', true),
      new RuleEvaluation('fara cal', false),
    ],
    score: 79,
    evaluatedTime: '15 sep, 8:56 PM'
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
