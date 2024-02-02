import { createContext, useEffect, useState } from "react";
import dev from "../assets/Dev.jpeg"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );



  const Login = () => {
    setCurrentUser({
        id: 1,
        name: "Dev Pandey",
        profilePicture: dev,
    })
    // navigate to home


    };


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, Login }}>
      {children}
    </AuthContext.Provider>
  );
};
