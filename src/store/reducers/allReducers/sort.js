import { UPDATE_SORT_RULES } from '../../actions/allActions/sortActions';

const initialState = {
    fieldName: null,
    type: null
}

export const sort = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SORT_RULES: 
            return {
                ...state,
                ...action.payload,
            }
            
        default: 
            return state; 
    }
}

