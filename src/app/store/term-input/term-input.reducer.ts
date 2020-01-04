import * as ActionTermInput from './term-input.actions';

export function TermInputReducer(
    state: string = '',
    action: ActionTermInput.actions) {

    if (action.type === ActionTermInput.SET_VALUE) {
        return action.payload;
    }
    return state;
}
