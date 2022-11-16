import { RulesService } from './../rules/rules.service';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Topic } from '../models/rules.models';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @Input() topic!: Topic;
  @Input() topicId!: number;
  @Input() topicRating!: Array<number>;
  @Input() topicSize: number = 0;

  constructor(
    private rulesService: RulesService
  ) { }

  ngOnInit(): void {
  }

  isTopicDisabled(topic: Topic): boolean {
    return this.rulesService.isTopicDisabled(topic);
  }

  // Chart
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    animation: {
      duration: 0,
      onComplete: (animation) => {
        animation.chart.options.animation = {
          duration: 400
        };
      }
    }
  };
  public pieChartLabels = [
    "Não encontrei",
    "Encontrei facilmente",
    "Encontrei com dificuldade",
    "Encontrei com muita dificuldade",
    "Não informado"
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
