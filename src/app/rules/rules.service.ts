import { SelectedSubCriteria, SubCriteria } from './../models/rules.models';
import { CriteriaReference } from './../models/criteria-reference.models';
import Rules from 'src/rules.json';
import allReferences from 'src/references.json';
import { Injectable } from '@angular/core';
import { Topic } from '../models/rules.models';

@Injectable({
  providedIn: 'root',
})
export class RulesService {
  //TODO salvar as Rules com alterações
  rules: Topic[] = localStorage.getItem('rules') == null?
    Rules as Topic[]
    :
    JSON.parse(localStorage.getItem('rules') as string);
  selectedReferences: Map<number, CriteriaReference> = new Map(
    allReferences.map((item) => [item.id, { ...item, selected: true }])
  );

  constructor() {}

  updateRules(): Topic[] {
    this.rules = Rules.filter((rule) =>
      rule.criterias.filter((criteria) =>
        criteria.subcriterias.filter((subcriteria) =>
          subcriteria.references.some(
            (referenceId) =>
              this.selectedReferences.get(referenceId)?.selected == true
          )
        )
      )
    );

    return this.rules;
  }

  clearRules() {
    this.rules = Rules as Topic[]
    localStorage.removeItem('rules');
  }

  calculateTopicRating(topic: Topic): Array<number> {
    let ratings = [0, 0, 0, 0, 0];
    for (const criteria of topic.criterias) {
      for (const subcriteria of criteria.subcriterias) {
        if (!this.isSubcriteriaDisabled(subcriteria)) {
          ratings[subcriteria.rating ?? 4]++;
        }
      }
    }
    return ratings;
  }

  calculateTopicSize(topic: Topic): number {
    let size = 0;
    for (const criteria of topic.criterias) {
      for (const subcriteria of criteria.subcriterias) {
        if (!this.isSubcriteriaDisabled(subcriteria)) {
          size++
        }
      }
    }
    return size;
  }

  setTopicRatingsSize(topic: Topic): void {
    topic.ratings = [0, 0, 0, 0, 0];
    topic.size = 0;
    for (const criteria of topic.criterias) {
      for (const subcriteria of criteria.subcriterias) {
        if (!this.isSubcriteriaDisabled(subcriteria)) {
          topic.ratings[subcriteria.rating ?? 4]++;
          topic.size++;
        }
      }
    }
  }

  isSubcriteriaDisabled(subcriteria: SubCriteria): boolean {
    return subcriteria.references.every(
      (referenceId) =>
        this.selectedReferences.get(referenceId)?.selected != true
    );
  }

  toggleReference(referenceId: number, isSelected: boolean) {
    if (this.selectedReferences.get(referenceId)) {
      this.selectedReferences.get(referenceId)!.selected = isSelected;
    }

    this.updateRules();
  }

  selectSubcriteriaRating(
    topicId: number,
    criteriaId: number,
    subcriteriaId: number,
    rating: number
  ) {
    this.rules[topicId].criterias[criteriaId].subcriterias[
      subcriteriaId
    ].rating = rating;
    this.saveRules();
  }

  filterTitles(text: string) {
    const words = text.split(' ');
    return this.rules.filter((rule) =>
      rule.criterias.some((criteria) =>
        words.every((word) => criteria.criteria_title.includes(word))
      )
    );
  }

  saveRules() {
    localStorage.setItem(
      'rules',
      JSON.stringify(this.rules)
    );
  }

  loadRules() {
    this.rules = JSON.parse(
      localStorage.getItem('rules') as string
    )
  }
}
