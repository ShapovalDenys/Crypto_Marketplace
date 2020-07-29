import { createStore, AnyAction } from 'redux';

// Action types - is just a constant. MUST have a unique value.
const LOGIN = 'LOGIN';

// Action creators - a function returning an action object
export const loginSuccess = ( response = {}) => ({ type: LOGIN, response });

// Selectors - a function receiving Redux state and returning some data from it
export const getResponse = (state: RootState) => state.response;

// Initial state
export type RootState = {
  response: object;
};

const initialState: RootState = {
  response: {}
};

// rootReducer - this function is called after dispatching an action
const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN:
      return { ...state,
        response: action.response,
      };

    default:
      return state;
  }
};

// The `store` should be passed to the <Provider store={store}> in `/src/index.tsx`
const store = createStore(
  rootReducer,
);

export default store;
