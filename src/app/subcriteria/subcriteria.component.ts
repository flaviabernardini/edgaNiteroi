import { RulesService } from './../rules/rules.service';
import { SelectedSubCriteria } from './../models/rules.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcriteria',
  templateUrl: './subcriteria.component.html',
  styleUrls: ['./subcriteria.component.scss'],
})
export class SubcriteriaComponent implements OnInit {
  @Input() subcriteria!: SelectedSubCriteria;
  @Input() topicIndex!: number;
  @Input() criteriaIndex!: number;
  @Input() subcriteriaIndex!: number;

  constructor(private rulesService: RulesService) {}

  ngOnInit(): void {}

  selectSubcriteriaRating(rating: number) {
    this.rulesService.selectSubcriteriaRating(
      this.topicIndex,
      this.criteriaIndex,
      this.subcriteriaIndex,
      rating
    );
  }

  isSubcriteriaDisabled(): boolean {
    return this.rulesService.isSubcriteriaDisabled(this.subcriteria)
  }
}
