import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const AuthContext = createContext();

const initialState = {user:null};

const reducer =(state,action) =>{
    switch (action.type) {
        case "login":
            return {...state, user:action.payload};

        case "logout":
            return {...state, user:null}
        
        default:
            return state;
    }
}

const AuthProvider = ({children})=> {

    const [state,dispatch] = useReducer(reducer,initialState);

    const login =(userData)=> {
        localStorage.setItem("Token",JSON.stringify(userData.token));

        dispatch({
            type:"login",
            payload:userData.userData
        });
    }

    const logout = ()=> {
        localStorage.removeItem("Token");

        dispatch({
            type:"logout"
        })
    }

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("Token"));

        if(!token) return console.log("User Token not found");

        const verifyToken =async()=>{
            try {

                const response =await axios.post("http://localhost:4000/api/v1/verify", {token:token});

                if(response.data.sucess){
                    dispatch({
                        type:"login",
                        payload:response.data.userData
                    });
                }
                else{
                    console.log(response.data.message);
                }
                
            } catch (error) {
                if(!error.response.data.sucess){
                    console.log(error.response.data.message);
                }
            }
        }

        verifyToken();
    },[])


    return(
        <>
            <AuthContext.Provider value={{state,login,logout}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider;