import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/TodoListConsts";

const initialState = {
    isLoading: false
}

export const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_LOADING:
            return { ...state, isLoading: true };

        case HIDE_LOADING:
            state.isLoading = false;
            return { ...state, isLoading: false };

        default:
            return state;
    }
}