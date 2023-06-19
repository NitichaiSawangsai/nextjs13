import { createSlice } from '@reduxjs/toolkit'

export enum LANGUAGE {
  TH = 'th',
  EN = 'en',
}

const settingSlice = createSlice({
  name: 'languages',
  initialState: {
    language: LANGUAGE.TH,
  },
  reducers: {
    setupLanguage(state, action) {
      state.language = action.payload
    },
  },
})

export const { setupLanguage } = settingSlice.actions
export default settingSlice.reducer
