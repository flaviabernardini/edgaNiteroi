export interface SubCriteria {
  subcriteria_id: number;
  subcriteria_title: string;
}

export interface Criteria {
  references: number[];
  criteria_id: number;
  criteria_title: string;
  subcriterias: SubCriteria[];
}

export interface Topic {
  topic: string;
  criterias: Criteria[];
}
