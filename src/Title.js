import React from 'react';

const Title = (props) => {
  const handleClickOnTitle = (event) => console.log('Hello World');
  return (
    <h1 onClick={handleClickOnTitle}>{props.title}</h1>
  );
};

export default Title;