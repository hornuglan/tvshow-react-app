import { ASC_ORDER, DESC_ORDER, applySortRules } from '../components/Table';

it('sort shows by year in ascending order', () => {
    expect(applySortRules([{show: {year: 2005}}, {show: {year: 2000}}, {show: {year: 2019}}, {show: {year: 2015}}, {show: {year: 2011}}], "year",  ASC_ORDER)).toEqual(
        [{show: {year: 2000}}, {show: {year: 2005}}, {show: {year: 2011}}, {show: {year: 2015}}, {show: {year: 2019}}],
    );
});

it('sort shows by year in descending order', () => {
    expect(applySortRules([{show: {year: 2005}}, {show: {year: 2000}}, {show: {year: 2019}}, {show: {year: 2015}}, {show: {year: 2011}}], "year",  DESC_ORDER)).toEqual(
        [{show: {year: 2019}}, {show: {year: 2015}}, {show: {year: 2011}}, {show: {year: 2005}}, {show: {year: 2000}}],
    );
});

it('sort shows by title in ascending order', () => {
    expect(applySortRules([{show: {title: "B"}}, {show: {title: "A"}}, {show: {title: "E"}}, {show: {title: "C"}}, {show: {title: "D"}}], "title",  ASC_ORDER)).toEqual(
        [{show: {title: "A"}}, {show: {title: "B"}}, {show: {title: "C"}}, {show: {title: "D"}}, {show: {title: "E"}}]
    );
});

it('sort shows by title in descending order', () => {
    expect(applySortRules([{show: {title: "B"}}, {show: {title: "A"}}, {show: {title: "E"}}, {show: {title: "C"}}, {show: {title: "D"}}], "title",  DESC_ORDER)).toEqual(
        [{show: {title: "E"}}, {show: {title: "D"}}, {show: {title: "C"}}, {show: {title: "B"}}, {show: {title: "A"}}]
    );
});



