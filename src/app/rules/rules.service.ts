import Rules from 'src/rules.json';
import { Injectable } from '@angular/core';
import { Topic } from '../models/rules.models';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rules: Topic[] = Rules as Topic[];
  constructor() { }

  filterReferences(references: number[]) {
    return this.rules.filter(rule =>
      rule.criterias.filter(criteria =>
        criteria.references.some(reference =>
          references.includes(reference)
        )
      )
    )
  }

  filterTitles(text: string) {
    const words = text.split(' ');
    return this.rules.filter(rule =>
      rule.criterias.some(criteria =>
        words.every(word => criteria.criteria_title.includes(word))
      )
    )
  }
}
