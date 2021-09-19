import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"



export default {
  actions:{
    async login({dispatch, commit},{email,password }){
      try{
        await firebase.auth().signInWithEmailAndPassword(email,password)
      }catch(e){
        commit('setError', e)
        throw e
      }
    }
  },
  async register({dispatch, commit},{email,password,name}){
    try{
      await firebase.auth().createUserWithEmailAndPassword(email,password)
      const uid = await dispatch('getUid')
      await firebase.database().ref(`/users/${uid}/info`).set({
        bill: 10000,
        name
      })
    }catch(e){
      commit('setError', e)
      throw e
    }
  },
  getuUid(){
    const user = firebase.auth().currentUser
    return user? user.uid : null
  },
  async logout({commit}){
    await getAuth().signOut()
    await commit('clearInfo')
  }
}
