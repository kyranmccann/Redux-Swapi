import {
  FETCHING_CHARACTERS,
  FETCHING_CHARACTERS_SUCCESS,
  FETCHING_CHARACTERS_FAILURE,
} from '../actions';


const initialState = {
    characters: [],
    isFetching: false,
    error: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      return { ...state, isFetching: true };

    case FETCHING_CHARACTERS_SUCCESS:
    console.log('inside success action', action.payload)
      return {
        ...state,
        isFetching: false,
        characters: [...state.characters, ...action.payload]
      };

    case FETCHING_CHARACTERS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };

    default:
      return state;
  }
};
