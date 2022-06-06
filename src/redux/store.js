import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import projectRedux from './reducers/getGreetingSlice';

const reducer = combineReducers({
  greeting: projectRedux,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
