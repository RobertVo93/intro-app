import { configureStore } from '@reduxjs/toolkit'
import mobileNavbarSlice from './mobileNavbarSlice'

export const store = configureStore({
  reducer: {
    navbar: mobileNavbarSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch