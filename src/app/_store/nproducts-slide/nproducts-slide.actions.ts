import { Action } from '@ngrx/store';

export const SET_VALUE = '[nProductsSlide] setValue';

export class NProductsSlideAction implements Action {
    readonly type = SET_VALUE;
    constructor(public payload: number) {}
}

export type actions = NProductsSlideAction;