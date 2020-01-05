import * as ActionNProductsSlide from './nproducts-slide.actions';

export function NProductsSlideReducer(
    state: number = 3,
    action: ActionNProductsSlide.actions) {

    if (action.type === ActionNProductsSlide.SET_VALUE) {
        return action.payload;
    }
    return state;
}
