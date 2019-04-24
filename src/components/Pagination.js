/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

//function to define when to renew pagination line
const pageRange = (targetPage, leftBorder, rightBorder, pageCount) => {
    let range = [];
    let threshold = Math.min(pageCount, leftBorder + 9);
    if(targetPage === leftBorder && targetPage !== 1) {
        leftBorder--;
        rightBorder--;
        threshold--;
    } else if(targetPage === rightBorder && targetPage !== pageCount) {
        leftBorder++;
        rightBorder++;
        threshold++;
    }
    for (let pageNumber = leftBorder; pageNumber <= threshold; pageNumber++) {
        range.push(pageNumber);
    } console.log(targetPage, leftBorder, rightBorder, range);

    return { leftBorder, rightBorder, range };
}

//moving to the next page
const increment = (targetPage, pageCount, setPage, leftBorder, rightBorder, query) => {
    if(targetPage < pageCount)
    setPage(targetPage + 1, leftBorder, rightBorder, query);
  }

//moving to the previous page
  const decrement = (targetPage, pageCount, setPage, leftBorder, rightBorder, query) => {
    if(targetPage < pageCount)
    setPage(targetPage - 1, leftBorder, rightBorder, query);
  }

//rendering pagination list - page numbers, next and prev page arrows, the first and the last page arrows
const Pagination = (props) => {
    const { leftBorder, rightBorder, range } = pageRange(props.content.pageNumber, props.content.leftBorder, props.content.rightBorder, props.content.pageCount);
    return (<ul className='pagination'>
        <li>
            <a href='#' className='first-page' onClick={() => props.setPage(1, 1, 10, props.content.query)}>&#8810;</a>
        </li>
        <li>
            <a href='#' className='prev' onClick={() => decrement(props.content.pageNumber, props.content.pageCount, props.setPage, leftBorder, rightBorder, props.content.query)}>&#60;</a>
        </li>
        {range.map((pageNumber) => (
            <li key={pageNumber.toString()}>
                <a href='#'
                style={pageNumber === props.content.pageNumber ? {backgroundColor: 'rgba(255,255,255,.85)', color: 'rgba(38, 50, 56, 0.8)'} : {}}
                onClick={() => props.setPage(pageNumber, leftBorder, rightBorder, props.content.query)}>{pageNumber}</a>
            </li>
        ))}
        <li>
            <a href='#' className='next' onClick={() => increment(props.content.pageNumber, props.content.pageCount, props.setPage, leftBorder, rightBorder, props.content.query)}>&#62;</a>
        </li>
        <li>
            <a href='#' className='last-page' onClick={() => props.setPage(props.content.pageCount, (props.content.pageCount - 10 > 0 ? props.content.pageCount - 10 : 1), props.content.pageCount, props.content.query)}>&#8811;</a>
        </li>
    </ul>
    )}

export { pageRange, Pagination };