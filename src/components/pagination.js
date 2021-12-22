import React from 'react';

const Pagination = ({ numPages, currentPage, routeURL }) => {
  if (numPages > 1) {
    return (
      <div className="pagination">
        <BackButton routeURL={routeURL} currentPage={currentPage} numPages={numPages} />
        <NextButton routeURL={routeURL} currentPage={currentPage} numPages={numPages} />
      </div>
    )
  }
}

const BackButton = ({ numPages, currentPage, routeURL }) => {
  if ((currentPage - 1) > 0) {

    if ((currentPage - 1) === 1) {
      return (
        <a className="button" href={routeURL}>Previous Page</a>
      );
    } else {
      return (
        <a className="button" href={routeURL + '/' + (currentPage -1)}>Previous Page</a>
      )
    }
  }
}

const NextButton = ({ numPages, currentPage, routeURL }) => {
  if ((currentPage + 1) <= numPages) {
    return (
      <a className="button" href={routeURL + '/' + (currentPage +1)}>Next Page</a>
    )
  }
}


export default Pagination
