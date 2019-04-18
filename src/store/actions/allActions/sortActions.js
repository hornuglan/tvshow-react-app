const ASC_ORDER = "ASC";
const DESC_ORDER = "DESC";

export const UPDATE_SORT_RULES = 'UPDATE_SORT_RULES';

//sort shows by year
export const sortByYear = (fieldName, type) => {
    if (fieldName === "year" && type === ASC_ORDER) {
        return (dispatch) => {
            dispatch({
                type: UPDATE_SORT_RULES,
                payload: {
                    fieldName: 'year',
                    type: DESC_ORDER
                },
            })
        }
    } else {
        return (dispatch) => {
            dispatch({
                type: UPDATE_SORT_RULES,
                payload: {
                    fieldName: 'year',
                    type: ASC_ORDER
                },
            })
        }
    }
}

 //sorting shows by title
 export const sortByTitle = (fieldName, type) => {
    if (fieldName === 'title' && type === ASC_ORDER) {
        return (dispatch) => {
            dispatch({
                type: UPDATE_SORT_RULES,
                payload: {
                    fieldName: 'title',
                    type: DESC_ORDER
                },
            })
        }
    } else {
        return (dispatch) => {
            dispatch({
                type: UPDATE_SORT_RULES,
                payload: {
                    fieldName: 'title',
                    type: ASC_ORDER
                },
            })
        }
    }
}