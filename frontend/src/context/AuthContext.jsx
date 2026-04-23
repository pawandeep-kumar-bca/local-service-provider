import { useNavigate } from "react-router-dom"


const AuthContext = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    if(!token){
       navigate('/')
    }
    navigate('/user')
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext