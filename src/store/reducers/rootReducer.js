import { combineReducers } from 'redux';

import { content } from './allReducers/content';
import { sort } from './allReducers/sort';

export const rootReducer = combineReducers({
    content,
    sort
});

// export function rootReducer(state = initialState) {
//     return state
// }