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
const increment = (targetPage, pageCount, changePage, leftBorder, rightBorder) => {
    if(targetPage < pageCount)
    changePage(targetPage + 1, leftBorder, rightBorder);
  }

//moving to the previous page
  const decrement = (targetPage, pageCount, changePage, leftBorder, rightBorder) => {
    if(targetPage < pageCount)
    changePage(targetPage - 1, leftBorder, rightBorder);
  }


const Pagination = (props) => {
    const { leftBorder, rightBorder, range } = pageRange(props.pageState.pageNumber, props.pageState.leftBorder, props.pageState.rightBorder, props.pageCount);
    return (<ul className='pagination'>
        <li>
            <a href='#' className='first-page' onClick={() => props.changePage(1, 1, 10)}>&#8810;</a>
        </li>
        <li>
            <a href='#' className='prev' onClick={() => decrement(props.pageState.pageNumber, props.pageCount, props.changePage, leftBorder, rightBorder)}>&#60;</a>
        </li>
        {range.map((pageNumber) => (
            <li>
                <a href='#' onClick={() => props.changePage(pageNumber, leftBorder, rightBorder)}>{pageNumber}</a>
            </li>
        ))}
        <li>
            <a href='#' className='next' onClick={() => increment(props.pageState.pageNumber, props.pageCount, props.changePage, leftBorder, rightBorder)}>&#62;</a>
        </li>
        <li>
            <a href='#' className='last-page' onClick={() => props.changePage(props.pageCount, (props.pageCount - 10 > 0 ? props.pageCount - 10 : 1), props.pageCount)}>&#8811;</a>
        </li>
    </ul>
    )}

export { pageRange, Pagination };