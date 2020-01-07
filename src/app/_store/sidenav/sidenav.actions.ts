import { Action } from '@ngrx/store';

export const SHOW = '[sidenav] show';
export const HIDE = '[sidenav] hide';

export class ShowAction implements Action {
    readonly type = SHOW;
}

export class HideAction implements Action {
    readonly type = HIDE;
}

export type actions = ShowAction |
                     HideAction;
