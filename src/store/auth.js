import {getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default {
  actions:{
    async login({email,password }){
      try{
        const auth = getAuth();
        await signInWithEmailAndPassword(auth,email, password)
      }catch(e){
        throw e
      }
    }
  }
}
