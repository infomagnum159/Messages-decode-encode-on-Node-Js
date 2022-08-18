import {
    ENCODE_SUCCESS,
    DECODE_SUCCESS,
    REQUEST_FAILURE,
} from '../actions/actions';

const initialState = {
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ENCODE_SUCCESS:
        return {...state, loading: true};
      case DECODE_SUCCESS:
        return {...state, loading: false, };
      case REQUEST_FAILURE:
        return {...state, loading: false, error: action.payload};
      default:
        return state;
    }
  };
  
  export default reducer;