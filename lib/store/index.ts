import { combineReducers, configureStore } from '@reduxjs/toolkit'

export const makeStore = () =>
  configureStore({
    reducer: combineReducers({}),
    ...(process.env.NODE_ENV !== 'production' && {
      devTools: {
        name: 'Disruptions'
      }
    })
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
