export const PAGE_LOADING = 'PAGE_LOADING';
export const PAGE_LOADED = 'PAGE_LOADED';
export const PAGE_FAILED = 'PAGE_FAILED';


export const setPage = (pageNumber, leftBorder, rightBorder, query) => {
    return function (dispatch) {
        dispatch({
            type: PAGE_LOADING,
            payload: null,
        })

        //request for show data and then to show posters
        return fetch(createUrl(pageNumber, query), headers())
            .then(
                (response) => {
                    const pageCount = response.headers.get('X-Pagination-Page-Count');
                    const pageCountPromise = new Promise((resolve) => resolve(pageCount));
                    return Promise.all([pageCountPromise, response.json()])
                },
                (error) => console.log('ERROR IN REDUX FETCH', error)
            )
            .then(([pageCount, response]) => {
                    const urls = response.map(item => (
                        createPosterUrl(item.show.ids.tvdb)
                    ));
                    const pageCountAndResponse = [
                        new Promise((resolve) => resolve(pageCount)), 
                        new Promise((resolve) => resolve(response))
                    ];
                    const promises = pageCountAndResponse.concat(urls.map((url) => fetch(url).then((resp) => resp.json())))
                    return Promise.all(promises)
                }
            )
            .then(([pageCount, data, ...responses]) => {
                responses.forEach((posterData) => {
                    if (posterData.tvposter) {
                        const showRecord = data.find(element => element.show.ids.tvdb === +posterData.thetvdb_id);
                        showRecord.poster = posterData.tvposter[0].url;
                    }
                })
                dispatch({
                    type: PAGE_LOADED,
                    payload: {
                        pageNumber: pageNumber,
                        leftBorder: leftBorder,
                        rightBorder: rightBorder,
                        pageCount: +pageCount,
                        query: query,
                        data: data
                    }
                })
            })
    }
}

const createUrl = (pageNumber, query) => {
    //generating search request, adding page number or query for search if necessary
    //to the first if - || query !== undefined
    if (pageNumber && (query !== '')) {
        return `https://api.trakt.tv/search/show?extended=full&page=${pageNumber}&limit=15&query=${query}`
    } else if (query) {
        return `https://api.trakt.tv/search/show?extended=full&query=${query}`
    } else if (pageNumber) {
        return `https://api.trakt.tv/shows/watched?extended=full&page=${pageNumber}&limit=15`
    } else {
        return `https://api.trakt.tv/shows/watched?extended=full&page=1&limit=15`
    }
}

const headers = () => {
    return {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "trakt-api-key": "57e8bf0c5577c8bd768ff34d11b4338b78f56fba6ced125f36bd017d79a968b6",
            "trakt-api-version": "2"
        }
    }
}

//generating URL for show posters request
const createPosterUrl = (id) => {
    const imagesApiKey = 'ddc2447b6b87e0d850a8c2f4136ffe12';
    const url = `https://webservice.fanart.tv/v3/tv/${id}?api_key=${imagesApiKey}`;
    return url;
}