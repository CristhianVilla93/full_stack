import React from 'react'
import './styles/Login.css'


const Login = () => {
  return (
    <>
    
    <section class="contenedorlogin">
        <div class="cuadrologin1">
            <p><img src="imagen/devchallenges.svg" alt=""/></p>

            <h1>Login</h1>

        </div>


        <form action="/api/" method="post" class="cuadrologin2">
            <div class="correo">
                <label for="email"></label>
                <input type="email" id="email" placeholder="Email" name="email" />
                <img src="imagen\envelope-fill.svg" alt="" />
            </div>

            <div class="contrasena">
                <label for="password"></label>
                <input type="password"  id="password" placeholder="Password" name="contrase" />
                <img src="imagen/lock-fill.svg" alt="" />
           
            </div>

            <input id='submit' type="submit" value="Login" />

        </form>

        <div class="cuadrologin3">
            <p>or continue with these social profile</p>
            <div class="iconos">
                <a href="https://www.google.com/" target="_blank"><img src="imagen/Google.svg" alt=""/></a>
                <a href="https://es-la.facebook.com/" target="_blank"><img src="imagen/Facebook.svg" alt=""/></a>
                <a href="https://twitter.com/" target="_blank"><img src="imagen/Twitter.svg" alt=""/></a>
                <a href="https://github.com/" target="_blank"><img src="imagen/Gihub.svg" alt=""/></a>

            </div>
            <p> Dont' have an account yet? <a href="">Register</a></p>
        </div>
    </section>
    </>
  )
}

export default Login