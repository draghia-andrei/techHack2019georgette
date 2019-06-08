import { Injectable } from '@angular/core';
import { Rule } from '../models/rule';

const rules: Rule[] = [
  {
    code: 'age-18-21',
    descriptionArr: [],
    score: 25,
    isActive: true,
  },
  {
    code: 'spendsOnBets',
    descriptionArr: [],
    score: 40,
    isActive: true,
  },
  {
    code: 'male',
    descriptionArr: [],
    score: 10,
    isActive: false,
  },
];

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rules: Rule[] = rules;
  constructor() { }

  set(rules: Rule[]): void {
    this.rules = rules;
  }

  get(): Rule[] {
    return this.rules;
  }
}
