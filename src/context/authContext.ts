import {createContext} from "react" ; 
 

 
export const AuthContext =  createContext<{ 
    authStatus:boolean , 
    setauthStatus :(status:boolean)=>void  ; 
}>({
        authStatus:false  , 
        setauthStatus:()=>{}
})   ; 
 
 
export const AuthProvider =  AuthContext.Provider ;  

export default AuthContext ; 
