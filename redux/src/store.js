import { createStore, applyMiddleware, compose } from 'redux'; // Import applyMiddleware and compose if needed
import reducer from './assets/Reducer';
const store = createStore(reducer);

export default store;