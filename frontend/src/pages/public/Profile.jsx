import React from 'react'
import Button from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  return (
    <div className='flex w-full h-full items-center justify-center'>
      <Button onClick={()=>navigate('/login')}>Login</Button>
    </div>
  )
}

export default Profile