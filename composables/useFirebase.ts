import { initializeApp, type FirebaseApp } from 'firebase/app'
import { 
  getAuth, 
  type Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { 
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
} from 'firebase/auth'

let app: FirebaseApp
let auth: Auth

export const useFirebase = () => {
  const config = useRuntimeConfig().public.firebase

  if (!app) {
    app = initializeApp(config)
    auth = getAuth(app)
  }

  const login = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const register = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    return await signOut(auth)
  }
  const googleLogin = async (isMobile = false) => {
    const provider = new GoogleAuthProvider()
    
    try {
      if (isMobile) {
        // Для мобильных устройств
        await signInWithRedirect(auth, provider)
        const result = await getRedirectResult(auth)
        return result
      } else {
        // Для десктопа
        const result = await signInWithPopup(auth, provider)
        return result
      }
    } catch (error) {
      console.error('Google login error:', error)
      throw error
    }
  }

  return {
    auth,
    login,
    register,
    logout,
    googleLogin,
  }
}