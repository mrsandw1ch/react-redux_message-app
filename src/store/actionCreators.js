import { ADD } from './actions';

export const addMessage = (message) => {
    return {
      type: ADD,
      message: message
    }
  };