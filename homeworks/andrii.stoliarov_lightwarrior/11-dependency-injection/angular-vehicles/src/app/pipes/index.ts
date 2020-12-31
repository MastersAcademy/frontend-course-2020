import { MakesExpressionShort } from './makes-expression-short.pipe';
import { SearchLinkPost } from './search-link-post.pipe';

export const appPipes = [
  MakesExpressionShort,
  SearchLinkPost
];

export * from './makes-expression-short.pipe';
export * from './search-link-post.pipe';
