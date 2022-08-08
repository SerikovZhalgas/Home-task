import {UserType} from "../HW8";

type ActionType = SortType | CheckType
type SortType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type CheckType = {
    type: | 'check'
    payload: 18
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload == 'up'){
                return [...state].sort((a,b)=>a.age>b.age?-1:1)
            }else if(action.payload == 'down'){
                return [...state].sort((a,b)=>a.age>b.age?1:-1)
            }else {
                return state
            }
        }
        case 'check': {
            if(action.payload == 18){
                return state.filter(el=>el.age>18)
            }else{
                return state
            }
        }
        default: return state
    }
}

