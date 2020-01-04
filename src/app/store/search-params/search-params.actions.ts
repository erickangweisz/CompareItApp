import { Action } from '@ngrx/store';

export const SEARCH_INPUT = '[searchParams] searchInput';

export class SearchInputAction implements Action {
    readonly type = SEARCH_INPUT;
    constructor(public payload: string) {}
}

export type actions = SearchInputAction
