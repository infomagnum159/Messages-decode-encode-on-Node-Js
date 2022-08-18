import axiosApi from '../../axiosApi';

export const DECODE_REQUEST = 'DECODE_REQUEST';
export const DECODE_SUCCESS = 'DECODE_SUCCESS';
export const DECODE_FAILURE = 'DECODE_FAILURE';


export const ENCODE_REQUEST = 'ENCODE_REQUEST';
export const ENCODE_SUCCESS = 'ENCODE_SUCCESS';
export const ENCODE_FAILURE = 'ENCODE_FAILURE';

export const encodeRequest = () => ({ type: ENCODE_REQUEST});
export const encodeSuccess = (encode) => ({ type: ENCODE_SUCCESS, payload: encode });
export const encodeFailure = (error) => ({ type: ENCODE_FAILURE,payload: error });
export const decodeRequest = () => ({type: DECODE_REQUEST})
export const decodeSuccess = (decode) => ({ type: DECODE_SUCCESS,payload: decode });
export const decodeFailure = (error) => ({ type: DECODE_FAILURE,payload: error });

export const sendEncode = (sendData) => {
    return async dispatch => {
        try {
            dispatch(encodeRequest());
           const response =  await axiosApi.post('encode', sendData);
            console.log(response);
            if(response.data) {
                dispatch(encodeSuccess(response.data));
            }
        } catch (error) {
            dispatch(encodeFailure(error));
            throw error;
        }
    }
};

export const sendDecode = (sendData) => {
    return async dispatch => {
        try {
            dispatch(decodeRequest());

           const response =  await axiosApi.post('decode', sendData);
            console.log(response);
            if(response.data) {
            dispatch(decodeSuccess(response.data));
            }

        } catch (error) {
            dispatch(decodeFailure(error));
            throw error;
        }
    }
};