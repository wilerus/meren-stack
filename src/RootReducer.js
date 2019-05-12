import { combineReducers } from 'redux';

import chatReducer from './components/chat/ChatReducer';

const rootReducer = combineReducers({
  chatReducer: chatReducer
});

export default rootReducer;
