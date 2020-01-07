import * as ActionSelectShops from './select-shops.actions';

export function SelectShopsReducer(
    state: string = '',
    action: ActionSelectShops.actions) {

    if (action.type === ActionSelectShops.SET_SHOP) {
        return action.payload;
    }
    return state;
}
