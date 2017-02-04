/**
*
* Navigator
*
*/

import React from 'react';


import styles from './styles.css';

function Navigator({ topics, selectTopic }) {
  const topicNodes = topics.map(t => (
    <div
      key={t.name}
      onClick={() => selectTopic(t)}
    >
      {t.name}
      </div>
  ));

  return (
    <div className={styles.navigator}>
      {topicNodes}
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
  selectTopic: React.PropTypes.func.isRequired,
};

export default Navigator;
