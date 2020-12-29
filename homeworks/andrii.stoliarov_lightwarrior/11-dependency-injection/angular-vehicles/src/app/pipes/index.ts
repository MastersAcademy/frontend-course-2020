import { ReduceExpressionToSimple } from './reduce-expression-to-simple.pipe';
import { SearchLinkPost } from './search-link-post.pipe';

export const appPipes = [
  ReduceExpressionToSimple,
  SearchLinkPost
];

export * from './reduce-expression-to-simple.pipe';
export * from './search-link-post.pipe';
