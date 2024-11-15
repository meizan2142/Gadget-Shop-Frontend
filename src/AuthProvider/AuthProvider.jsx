/* eslint-disable no-unused-vars */
import { createContext } from "react"
import auth from "../FirebaseConfig/firebase.config"

export const AuthProvider = () => {
  const AuthContext = createContext(auth)
  return (
    <div>AuthProvider</div>
  )
}
