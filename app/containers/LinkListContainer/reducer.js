/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  links: [
    {
      description: 'this is thelink description',
      url: 'http',
      topicName: 'links',
      id: 'fake',
    },
  ],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default linkListContainerReducer;
