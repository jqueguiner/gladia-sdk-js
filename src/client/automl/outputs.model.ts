export interface AutoMlTrainOutput {
  model_id: string;
}
export type AutoMlPredictOutput<T = unknown> = T[];
