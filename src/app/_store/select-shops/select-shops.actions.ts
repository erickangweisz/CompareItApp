import { Action } from '@ngrx/store';

export const SET_SHOP = '[selectShops] setShop';

export class SelectShopsAction implements Action {
    readonly type = SET_SHOP;
    constructor(public payload: string) {}
}

export type actions = SelectShopsAction;