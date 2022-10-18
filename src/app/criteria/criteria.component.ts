import { RulesService } from './../rules/rules.service';
import { Criteria } from './../models/rules.models';
import { Component, Input, OnInit } from '@angular/core';
import { faCircle, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  @Input() criteria!: Criteria;
  @Input() topicId!: number;
  @Input() criteriaId!: number;
  faCircle = faCircle;
  faCheck = faCheck;

  constructor(private rulesService: RulesService) { }

  ngOnInit(): void {
  }

  calculateCriteriaRating(criteria: Criteria) {
    return this.rulesService.calculateCriteriaRating(criteria);
  }
}
