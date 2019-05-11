import { combineReducers } from 'redux';

import chatReducer from './components/list/ChatReducer';

const rootReducer = combineReducers({
  chatReducer: chatReducer
});

export default rootReducer;
