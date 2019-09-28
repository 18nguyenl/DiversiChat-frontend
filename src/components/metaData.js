import React from 'react';

function metaData({ date, language }) {
  return (
    <ul
      style={{
        listStyle: "none",
        color: "gray",
        display: "flex"
      }}
    >
      <li>{date}</li>
      <li>{language}</li>
    </ul>
  );
}

export default metaData;