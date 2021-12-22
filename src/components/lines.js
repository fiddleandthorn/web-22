import React from 'react';

const Lines = ({ flipped }) => {
  if (flipped) {
    return (
      <div className="lines">
        <div className="container flipped">
          <span className="vertical top"></span>
          <span className="vertical"></span>
          <span className="vertical"></span>
          <span className="horizontal"></span>
        </div>
      </div>
    )
  } else {
    return (
      <div className="lines">
        <div className="container">
          <span className="vertical top"></span>
          <span className="vertical"></span>
          <span className="vertical"></span>
          <span className="horizontal"></span>
        </div>
      </div>
    )
  }
}



export default Lines
