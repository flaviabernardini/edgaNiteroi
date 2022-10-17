import { Router } from '@angular/router';
import { CriteriaReference } from '../models/criteria-reference.models';
import { RulesService } from '../rules/rules.service';
import { Component, OnInit } from '@angular/core';
import { Topic, SubCriteria } from '../models/rules.models';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  rules: Topic[];
  selectedReferences: Map<number, CriteriaReference>;

  constructor(
    private router: Router,
    private rulesService: RulesService
  ) {
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

  calculateTopicSize(topic: Topic): number {
    return this.rulesService.calculateTopicSize(topic);
  }

  clearForm() {
    this.rulesService.clearRules();
    this.rules = this.rulesService.rules;
  }

  goTo(component: string) {
    this.router.navigate([component])
  }
}
