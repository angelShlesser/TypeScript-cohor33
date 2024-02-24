export interface FeedbackProbs {
  onLike: () => void;
  likes: number;
  onDislike: () => void;
  dislikes: number;
  resetResults: () => void;
}
