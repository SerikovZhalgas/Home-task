export type InitStateType = {
    loadingValue: boolean
}

const initState: InitStateType = {
    loadingValue: false
}

export enum ACTION {
    SET_LAOADING = 'SET-LOADING'
}

export const loadingReducer = (state = initState, action: LoadingAC): InitStateType => { // fix any
    switch (action.type) {
        case ACTION.SET_LAOADING: {
            return {
                ...state,
                loadingValue: action.loading
            }
        }
        default: return state
    }
}

export type LoadingAC = ReturnType<typeof loadingAC>
export const loadingAC = (loading:boolean) => {
    return {
        type: ACTION.SET_LAOADING,
        loading
    } as const
} // fix any