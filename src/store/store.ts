import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
  //   // appReducer,
  //   // offersReducer,
  //   // [apiReducer.reducerPath]: apiReducer.reducer,
  },
//   middleware: (gDM) => gDM({
//     thunk: {
//       // extraArgument: apiReducer,
//     // }}).concat(redirect, apiReducer.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
