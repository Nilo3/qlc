import { MdEmail } from "react-icons/md"
import { AiFillLock } from "react-icons/ai"
import { GoCrossReference } from "react-icons/go"
import './register.css';
import { postUser } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux"
import { useState } from "react";


const Register = () => {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        u_username: '',
        u_email: '',
        u_password: '',
        u_referralCode: '',
    })

    const { u_email, u_username, u_password, u_referralCode } = user;

    const submitHandler = (e) => {
        e.preventDefault();

        const newUser = {
            u_username,
            u_email,
            u_password,
            u_referralCode
        }

        dispatch(postUser(newUser))
    }

    return (
        <section className="section">
            <div className="container">
                <div className="form">
                    <form action="#" onSubmit={submitHandler}>
                        <h2 className="init">Registrate</h2>
                        <div className="inputcontainer">
                            <input type="text" required onChange={(e) => setUser({...user, u_username: e.target.value})} />
                            <label className="label" htmlFor="#">Nombre</label>
                        </div>

                        <div className="inputcontainer">
                            <MdEmail className="item" />
                            <input type="email" required onChange={(e) => setUser({...user, u_email: e.target.value})} />
                            <label className="label" htmlFor="#">Email</label>
                        </div>
                        <div className="inputcontainer">
                            <AiFillLock className="item" />
                            <input type="password" required onChange={(e) => setUser({...user, u_password: e.target.value})} />
                            <label className="label" htmlFor="#">Contraseña</label>
                        </div>
                        <div className="inputcontainer">
                            <GoCrossReference className="item" />
                            <input type="text" required onChange={(e) => setUser({...user, u_referralCode: e.target.value})} />
                            <label className="label" htmlFor="#">Codigo de Referido</label>
                        </div>

                        <button type="submit" className="btn">Registrarse</button>


                    </form>

                    <div>
                       

                        <div className="register">
                            <p>Ya tengo Cuenta <a href="/login">Iniciar Sesion</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Register