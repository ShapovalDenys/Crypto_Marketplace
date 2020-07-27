import { createStore, AnyAction } from 'redux';

// Action types - is just a constant. MUST have a unique value.
const LOGIN = 'LOGIN';

// Action creators - a function returning an action object
export const loginSuccess = () => ({ type: LOGIN });

// Selectors - a function receiving Redux state and returning some data from it
export const isLogin = (state: RootState) => state.login;

// Initial state
export type RootState = {
  login: boolean;
};

const initialState: RootState = {
  login: false,
};

// rootReducer - this function is called after dispatching an action
const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, login: true };

    default:
      return state;
  }
};

// The `store` should be passed to the <Provider store={store}> in `/src/index.tsx`
const store = createStore(
  rootReducer,
);

export default store;
