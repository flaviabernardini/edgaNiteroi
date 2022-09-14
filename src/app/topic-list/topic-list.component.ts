import { CriteriaReference } from '../models/criteria-reference.models';
import { RulesService } from '../rules/rules.service';
import { Component, OnInit } from '@angular/core';
import { Topic, SubCriteria } from '../models/rules.models';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class CriteriaTableComponent implements OnInit {
  rules: Topic[];
  selectedReferences: Map<number, CriteriaReference>;

  constructor(private rulesService: RulesService) {
    this.selectedReferences = this.rulesService.selectedReferences;
    this.rules = this.rulesService.rules;
  }

  ngOnInit(): void {
  }

  referencesToStr(subCriteria: SubCriteria) {
    let referenceStr = "";
    for(const reference of subCriteria.references) {
      referenceStr = `${referenceStr}[Ref ${reference}]`;
    }
    return referenceStr;
  }

  calculateTopicRating(topic: Topic): Array<number> {
    return this.rulesService.calculateTopicRating(topic);
  }
}
