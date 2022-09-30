import { useState } from "react";
import { Children, createContext } from "react"


export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    const [state, setState] = useState({
        isAuth: false,
    })

    const toggleLogin = () => {
        setState({
            isAuth: true
        })
    }


    const toggleLogOut = () => {

    }
    return (
        <div>
            <AuthContext.Provider value={{state,toggleLogOut,toggleLogin}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthContextProvider