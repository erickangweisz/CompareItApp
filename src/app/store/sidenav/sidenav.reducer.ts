import * as actionSidenav from './sidenav.actions';

export function sidenavReducer(
    state: boolean = false, action: actionSidenav.actions) {
    switch (action.type) {
        case actionSidenav.SHOW:
            return true;
        case actionSidenav.HIDE:
            return false;
        default:
            return state;
    }
}
