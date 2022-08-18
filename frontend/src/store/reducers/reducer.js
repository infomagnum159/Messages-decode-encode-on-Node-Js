import {
    ENCODE_SUCCESS,
    DECODE_SUCCESS,
    ENCODE_REQUEST, ENCODE_FAILURE, DECODE_FAILURE, DECODE_REQUEST,
} from '../actions/actions';

const initialState = {
    loading: false,
    error: null,
    data: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ENCODE_REQUEST:
            return {...state, loading: false};
        case ENCODE_SUCCESS:
        return {...state, loading: true, data: action.payload.encoded};
        case ENCODE_FAILURE:
            return {...state, loading: false, error: action.payload};
        case DECODE_REQUEST:
            return {...state, loading: false};
      case DECODE_SUCCESS:
        return {...state, loading: false,data: action.payload.decoded};
      case DECODE_FAILURE:
        return {...state, loading: false, error: action.payload};
      default:
        return state;
    }
  };
  
  export default reducer;