import * as actionSearchParams from './search-params.actions';

export function searchParamsReducer(
    state: string = '', action: actionSearchParams.actions) {
    switch (action.type) {
        case actionSearchParams.SEARCH_INPUT:
            return action.payload;
        default:
            return state;
    }
}
