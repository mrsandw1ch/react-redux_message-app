import { addMessage } from './actionCreators';

export const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message))
      }
    }
  };