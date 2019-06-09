import { Injectable } from '@angular/core';
import { Rule } from '../models/rule';

const rules: Rule[] = [
  {
    code: 'age-18-21',
    descriptionArr: 'age between 18 and 21',
    score: 25,
    isActive: true,
  },
  {
    code: 'spendsOnBets',
    descriptionArr: 'spends bets >= 300 RON',
    score: 40,
    isActive: true,
  },
  {
    code: 'male',
    descriptionArr: 'sex is male',
    score: 10,
    isActive: false,
  },
  {
    code: 'movies',
    descriptionArr: 'mooovies',
    score: 20,
    isActive: false
  }
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
