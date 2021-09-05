import { Link } from 'react-router-dom'
import LogoImage from '../../assets/logo.png'
import './logo.scss'

export default function Logo(){
  return (
    <Link to="/">
      <img className="logo" src={LogoImage} alt="Star Wars Logo"/>
    </Link>  
  )
}