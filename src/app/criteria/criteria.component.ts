import { Topic } from './../models/rules.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  @Input() topic!: Topic;
  @Input() topicId!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
