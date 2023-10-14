import React from "react";
import { MdEmail } from "react-icons/md"
import { AiFillLock } from "react-icons/ai"

import './login.css';


const Login = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="form">
                    <form action="#">
                        <h2 className="init">Iniciar Sesion</h2>
                        <div className="inputcontainer">
                            <MdEmail className="item" />
                            <input type="email" required />
                            <label className="label" htmlFor="#">Email</label>
                        </div>
                        <div className="inputcontainer">
                            <AiFillLock className="item" />
                            <input type="password" required />
                            <label className="label" htmlFor="#">Contraseña</label>
                        </div>

                        <div className="forgot">
                            <label htmlFor="#">

                                <a href="#" className="forgota"> Olvide la contraseña</a>
                            </label>
                        </div>
                    </form>

                    <div>
                        <button className="btn">Acceder</button>

                        <div className="register">
                            <p>No tengo Cuenta <a href="/register">Crear una</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Login