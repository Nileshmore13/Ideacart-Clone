import { useState } from "react";
import { Children, createContext } from "react"


export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    const [books, setBooks] = useState([]);
    console.log('books: ', books);
    const [state, setState] = useState({
        isAuth: false,
    })

    const toggleLogin = () => {
        setState({
            isAuth: true,
        })
    }


    const toggleLogOut = () => {
        setState({
            isAuth: false,
        })
    }
    return (
        <div>
            <AuthContext.Provider value={{state,toggleLogOut,toggleLogin,books,setBooks}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthContextProvider