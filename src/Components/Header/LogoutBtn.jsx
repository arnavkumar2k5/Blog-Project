import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/AuthSlice'
import authService from '../../appwrite/auth'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate("/login")
        })
    }

    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-[#DCC7AA] rounded-full' onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn
