import { createSlice } from '@reduxjs/toolkit'

// const data = [
//   { id: '1', name: 'samip', age: 22 },
//   { id: '2', name: 'bhavesh', age: 55 },
// ]
// data = {
//   1: { id: '1', name: 'samip', age: 22 },
//   2: { id: '2', name: 'bhavesh', age: 55 },
//   3: { id: '3', name: 'raj' },
// }

// middleware thunk to fetch data from api.
//  createEntityAdapter,
// createAsyncThunk,
// createSelector,

const postSelector = (item) => {
  Obj.keys(item).map()
}

// adapter.addOne({
//   id:'3', name:'raj',
// })

export const postSlice = createSlice({
  name: 'post', //state.post, state.user, state.profile,
  initialState: {
    value: 0, //state.post.value,
    listOfPosts: {},
    newValue: 0,
    myName: 'samip',
    myAddress: {
      street: 'a',
      city: 'b',
    },
  },
  reducers: {
    addByTwo: (state, action) => {
      state.value += 2
    },
    addByAmount: (state, action) => {
      state.value = state.value + action.payload
    },
    changeValue: function (state, action) {
      state.value = action.payload
    },
    changeName: (state, action) => {
      state.myName = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeName, changeValue } = postSlice.actions

export default postSlice.reducer
