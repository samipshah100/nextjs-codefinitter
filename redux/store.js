import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice'
export default configureStore({
  reducer: {
    post: postReducer,
  },
  // state:{post:{

  //   value: 0, //state.post.value,
  //   listOfPosts: {},
  //   newValue: 0,
  //   myName: 'samip',
  //   myAddress: {
  //     street: 'a',
  //     city: 'b',
  //   },

  // }}
})
