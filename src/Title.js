import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  const handleClickOnTitle = (event) => console.log('Hello World');
  return (
    <h1 onClick={handleClickOnTitle}>{props.title}</h1>
  );
};

Title.propTypes = {
  title: PropTypes.string
};

export default Title;