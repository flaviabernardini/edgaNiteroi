export interface SubCriteria {
  references: number[];
  subcriteria_id: number;
  subcriteria_title: string;
}

export interface SelectedSubCriteria extends SubCriteria {
  rating?: number
}

export interface Criteria {
  criteria_id: number;
  criteria_title: string;
  subcriterias: SelectedSubCriteria[];
  ratings?: Array<number>;
}

export interface Topic {
  topic: string;
  criterias: Criteria[];
  ratings?: Array<number>;
  size?: number;
}
