import { useReducer, createContext } from "react";


export const LocalStateContext = createContext();

const initialState = {          // InitialState
    notifications: [],
    fileList: []
}

const reducer = (state, action) => {   // reducer function
    switch (action.type) {

        case "ADD_NOTIFICATION":
            return {
                ...state,
                notifications: [...state.notifications, action.payload]
            }
        case "REMOVE_NOTIFICATION":
            return {
                ...state,
                notifications: state.notifications.filter((notification) => notification.id !== action.payload.id)
            }
        case "ADD_FILE":
            let flag = 0;
            const { name, size, contentType } = action.payload;
            state.fileList.forEach((file) => {
                if (file.name === name && file.size === size && file.contentType === contentType) {
                    flag = 1;
                }
            })
            if (flag !== 1) {
                return {
                    ...state,
                    fileList: [...state.fileList, action.payload]
                }
            }
            return state;
        case "DELETE_A_FILE":
            return {
                ...state,
                fileList: state.fileList.filter((file) => file.id !== action.payload.id)
            }
            break;
        default:
            return state;

    }
}

export default function LocalStateContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);  // useReducer Hook

    console.log(state.fileList);


    return (
        <LocalStateContext.Provider value={[state, dispatch]}>
            {
                props.children
            }
        </LocalStateContext.Provider>
    )
}