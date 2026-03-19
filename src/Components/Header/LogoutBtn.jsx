import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../../store/AuthSlice'
import authService from '../../appwrite/auth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            await authService.logout()
            dispatch(logout())
            toast.success('Logout successful')
            navigate("/login")
        } catch (error) {
            toast.error('Logout failed')
        }
    }

    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-[#DCC7AA] rounded-full' onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn
