import * as actionSidenav from './sidenav.actions';

export function SidenavReducer(
    state: boolean = true, action: actionSidenav.actions) {
    switch (action.type) {
        case actionSidenav.SHOW:
            return true;
        case actionSidenav.HIDE:
            return false;
        default:
            return state;
    }
}
