import { createUrl } from '../store/actions/allActions/contentAction';
 

it('creates default URL for API request', () => {
    expect(createUrl(1, '')).toEqual('https://api.trakt.tv/shows/watched?extended=full&page=1&limit=15');
});

it('creates URL for API request to pageNUmber > 1', () => {
    expect(createUrl(45, '')).toEqual('https://api.trakt.tv/shows/watched?extended=full&page=45&limit=15');
});

it('creates URL for API request with search query', () => {
    expect(createUrl(1, 'abc')).toEqual('https://api.trakt.tv/search/show?extended=full&page=1&limit=15&query=abc');
});

it('creates URL for API request to pageNumber > 1 and search query ', () => {
    expect(createUrl(45, 'abc')).toEqual('https://api.trakt.tv/search/show?extended=full&page=45&limit=15&query=abc');
});

