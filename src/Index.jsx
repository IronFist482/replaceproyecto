import { useState } from 'react'
import './css/index.css'
import ButtonLogin from './components/ButtonLogin.jsx'
import ButtonSignin from './components/ButtonSignin.jsx'

function Index() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="circulo-verde00"></div>
      <div className="circulo-morado00"></div>
      <div className="container">

        <div className="logo-completo">
          <div className="logo-figura"></div>
          <div className="logo-texto"></div>
        </div>
        <div className="login-signin">
          <ButtonLogin></ButtonLogin>
          <ButtonSignin></ButtonSignin>
        </div>
      </div>
    </>
  )
}

export default Index
