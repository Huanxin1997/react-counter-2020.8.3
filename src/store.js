import { createStore } from 'redux';
import redux from './reducers/index';

const store = createStore(redux);

export default store