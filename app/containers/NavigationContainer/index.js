/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigator from '../../components/Navigator';

import { requestTopics, selectTopic, toggleDrawer } from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestTopics: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.requestTopics();
  }

  render() {
    return (
      <div>
        <Navigator {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: (topic) => dispatch(selectTopic(topic)),
    toggleDrawer: () => dispatch(toggleDrawer()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
