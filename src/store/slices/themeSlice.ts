import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
	theme: string
}

const initialState: ThemeState = {
	theme: 'light',
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		switchTheme: state => {
			if (state.theme === 'light') {
        state.theme = 'dark'
      } else {
        state.theme = 'light'
      }
		},
	},
})

export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer
