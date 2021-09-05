import { Link } from "react-router-dom";
import ErrorImage from '../../assets/404Image.png'
import './errorPage.scss'

export default function ErrorPage(){
  return(
    <div className="error-container">
      <img src={ErrorImage} alt="404 Error"/>
      <Link to="/">Voltar para Home</Link>
    </div>
  )
}