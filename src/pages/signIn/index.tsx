import { useState } from "react"
import { GoogleLogo } from "phosphor-react"

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth"
import { auth } from "../../services/firebase"

import "./styles.scss"

export const SignIn: React.FC = () => {
  const [user, setUser] = useState<User>({} as User)

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then(({ user: userGoogle }) => setUser(userGoogle))
      .catch(console.error)
  }

  return (
    <div className="container">
      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}

        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>Utilizando autenticação com a Google</span>

      <button className="button" type="button" onClick={handleGoogleSignIn}>
        <GoogleLogo />
        Entrar com Google
      </button>
    </div>
  )
}
