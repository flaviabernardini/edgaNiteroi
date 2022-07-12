import { CriteriaReference } from './../models/criteria-reference.models';
import { RulesService } from './../rules/rules.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criteria-filter',
  templateUrl: './criteria-filter.component.html',
  styleUrls: ['./criteria-filter.component.scss']
})
export class CriteriaFilterComponent implements OnInit {
  selectedReferences: Map<number, CriteriaReference>;
  constructor(private rulesService: RulesService) {
    this.selectedReferences = rulesService.selectedReferences;
  }

  ngOnInit(): void {
  }

  toggleReference = this.rulesService.toggleReference;
}
