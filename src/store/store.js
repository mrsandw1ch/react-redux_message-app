import { messagesReducer } from './reducers';
import { legacy_createStore as createStore} from 'redux';

export const store = createStore(messagesReducer);
