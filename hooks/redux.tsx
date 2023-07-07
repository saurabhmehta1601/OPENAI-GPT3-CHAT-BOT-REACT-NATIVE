import { useDispatch, useSelector } from "react-redux"
import { store } from "../redux/store"

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export const useAppSelector: <T>(selector: (state: RootState) => T) => T = useSelector // Export a hook that can be reused to resolve types