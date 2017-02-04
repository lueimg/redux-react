/**
*
* Navigator
*
*/

import React from 'react';


import styles from './styles.css';

function Navigator({ topics }) {
  return (
    <div className={styles.navigator}>
      We have {topics.length} topics in the app
    </div>
  );
}

Navigator.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigator;
