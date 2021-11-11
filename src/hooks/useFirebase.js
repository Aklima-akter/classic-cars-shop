import { useEffect, useState } from 'react'
import initializeFirebase from '../Pages/Home/Login/Firebase/firebase.init'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from 'firebase/auth'

initializeFirebase()
const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [authError, setAuthError] = useState('')
  const [admin, setAdmin] = useState(false)

  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  //register user
  const registerUser = (email, password, name, history) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setAuthError('')
        const newUser = { email, displayName: name }
        setUser(newUser)
        //save user to database
        saveUser(email, name, 'POST')
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error)
          })
        history.replace('/')
        // ...
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  //Log in user
  const logInUser = (email, password, location, history) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/'
        history.replace(destination)

        setAuthError('')
        // ...
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }

  const signInwithGoogle = (location, history) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // setUser(result.user)
        saveUser(result.user.email, result.user.displayName, 'PUT')
        setAuthError('')
        const destination = location?.state?.from || '/'
        history.replace(destination)
        // ...
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false))
  }
  // Observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribe
  }, [auth])

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin))
  }, [user?.email])

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false))
  }

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return {
    user,
    admin,
    isLoading,
    registerUser,
    logOut,
    logInUser,
    authError,
    signInwithGoogle,
  }
}
export default useFirebase
