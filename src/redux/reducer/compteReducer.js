import { ADD_COMPTE_FAIL, ADD_COMPTE_SUCCESS, DELETE_COMPTE_FAIL, DELETE_COMPTE_SUCCESS, EDIT_COMPTE_FAIL, EDIT_COMPTE_SUCCESS, GET_COMPTE_FAIL, GET_COMPTE_SUCCESS } from "../ActionTypes";


const init = {
    compte: [],
   
    error: null,
  
};

export const compteReducer = (state = init, { type, payload }) => {
    switch (type) {
      
       
            case EDIT_COMPTE_FAIL:
                case ADD_COMPTE_FAIL:
       case DELETE_COMPTE_FAIL:
           case GET_COMPTE_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };

       
            case GET_COMPTE_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    compte: payload,
                };
       
            case EDIT_COMPTE_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    compte: state.compte.map((el) =>
                        el.rib === payload.rib ? payload : el
                    ),
                };
                case DELETE_COMPTE_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        compte: state.compte.filter((el) => el.rib !== payload),
                        error: null,
                    };

                    case ADD_COMPTE_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            error: null,
                            compte: [...state.compte, payload],
                        };
       
        default:
            return state;
    }
};
export default compteReducer;
