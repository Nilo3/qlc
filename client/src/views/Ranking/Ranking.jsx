import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../Redux/actions/actions"

const Ranking = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const usuarios = useSelector((state) => state.users)

    console.log(usuarios);

    return (
        <div>
            <h1>Este es Ranking</h1>
            {
                usuarios.map((user)=>(
                   
                   <img src={user.u_icon} alt="icon" />
                ))
            }
        </div>
    )
}


export default Ranking