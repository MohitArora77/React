import { createContext } from "react";

export const AuthContext = createContext()

const Context = ({children}) => {

    function isLoggedIn(){
        return true;
    }
    return(
        <AuthContext.Provider value={isLoggedIn}>{children}</AuthContext.Provider>
    )
}
export default Context
// children to use App