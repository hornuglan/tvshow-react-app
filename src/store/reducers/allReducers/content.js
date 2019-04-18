import { PAGE_LOADING, PAGE_LOADED, PAGE_FAILED } from '../../actions/allActions/contentAction';

export const initialState = {
    query: '',
    data: [],
    pageNumber: 1,
    leftBorder: 1,
    rightBorder: 10,
    pageCount: null,
    isLoading: true
};

export const content = (state = initialState, action) => {
    switch(action.type) {
        case PAGE_LOADING: 
            return {
                ...state,
                isLoading: true,
            }
          
        case PAGE_LOADED: 
            return {
                ...state,
                data: action.payload.data,
                pageNumber: action.payload.pageNumber,
                leftBorder: action.payload.leftBorder,
                rightBorder: action.payload.rightBorder,
                query: action.payload.query,
                pageCount: action.payload.pageCount,
                isLoading: false
            }
            
        case PAGE_FAILED:
            // TODO: Create error message components. 
            return console.error('SOMETHING WENT WRONG IN PAGINATION');

            
        default: 
            return state; 
    }
}

