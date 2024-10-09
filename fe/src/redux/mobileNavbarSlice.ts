import { createSlice } from '@reduxjs/toolkit'

interface State {
  isOpen: boolean
  menuDetail: JSX.Element | undefined | string
}

const initialState:State = {
  isOpen: false,
  menuDetail: undefined
}

const mobileNavbarSlice = createSlice({
  name: 'mobileNavbar',
  initialState,
  reducers: {
    setCloseDetailMenu: (state) => {
      state.isOpen = false
      state.menuDetail = undefined
    },
    setToggleDetailMenu: (state) => {
      state.isOpen = !state.isOpen
    },
    setDetailMenu: (state, action) => {
      state.menuDetail = action.payload
    }
  }
})

export const { setCloseDetailMenu, setToggleDetailMenu, setDetailMenu } = mobileNavbarSlice.actions
export default mobileNavbarSlice.reducer