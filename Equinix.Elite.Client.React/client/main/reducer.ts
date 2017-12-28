import { combineReducers } from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import todos from '../todos';
import testDrive from '../test_drive';

const rootReducer = asyncInitialState.outerReducer(combineReducers({
  todosState: todos,
  testDriveState: testDrive,
  asyncInitialState: asyncInitialState.innerReducer,
}));

export default rootReducer;