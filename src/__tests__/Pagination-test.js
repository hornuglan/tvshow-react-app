import { pageRange } from '../components/Pagination';

it('pageRange works if pageCount > 10', () => {
    expect(pageRange(1, 1, 10, 15)).toEqual({
        "leftBorder": 1, 
        "range": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
        "rightBorder": 10});
}); 

it('pageRange works if pageCount == 10', () => {
    expect(pageRange(1, 1, 10, 10)).toEqual({
        "leftBorder": 1, 
        "range": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
        "rightBorder": 10});
});

it('test shift to one position left', () => {
    expect(pageRange(17,17,26,30)).toEqual({
        "leftBorder": 16,
        "range": [16,17,18,19,20,21,22,23,24,25], 
        "rightBorder": 25})
});

it('test shift to one position right', () => {
    expect(pageRange(17,8,17,30)).toEqual({
        "leftBorder": 9,
        "range": [9,10,11,12,13,14,15,16,17,18], 
        "rightBorder": 18})
});

it('no shift if current page is the last one', () => {
    expect(pageRange(17,8,17,17)).toEqual({
        "leftBorder": 8,
        "range": [8,9,10,11,12,13,14,15,16,17], 
        "rightBorder": 17})
});




