import  { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [User, setUser] = useState(null);
    return (

        <UserContext.Provider value={{User, setUser}}>
            {children}
        </UserContext.Provider>

    )
}

export default UserContextProvider