import { configureStore } from '@reduxjs/toolkit'
import app from './slices/app'
import homePage from './slices/homePage'

export const store = configureStore({
    reducer: {
        app,
        homePage
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
