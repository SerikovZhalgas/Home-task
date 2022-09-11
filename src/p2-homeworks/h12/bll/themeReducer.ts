const CHANGE_THEME = 'CHANGE_THEME'

export type ThemeType = {
    theme: string;
}
const initState: ThemeType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ActionType): ThemeType => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: action.theme
            };
        }
        default:
            return state;
    }
};

type ActionType = ReturnType<typeof changeThemeC>

export const changeThemeC = (theme: string) => {
    return {
        type: CHANGE_THEME,
        theme
    } as const
}