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
    id: '2930984750053',
    rules: [
      new RuleEvaluation('age', false),
      new RuleEvaluation('ok', true)
    ],
    score: 22,
    evaluatedTime: '12 sep, 3:52 PM'
  },
  {
    id: '1930424350048',
    rules: [
      new RuleEvaluation('age', false),
      new RuleEvaluation('ok', true),
      new RuleEvaluation('aloha', true),
      new RuleEvaluation('la vida loca', true),
    ],
    score: 79,
    evaluatedTime: '01 Dec, 8:50 PM'
  },
  {
    id: '1830224250048',
    rules: [
      new RuleEvaluation('age-25-40', false),
    ],
    score: 100,
    evaluatedTime: '31 Dec, 8:50 PM'
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
