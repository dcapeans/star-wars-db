import Logo from '../Logo'
import SearchBar from '../SearchBar'
import './home.scss'

export default function Home(){
  return(
    <div className="home-container">
      <Logo />
      <SearchBar />
    </div>
  )
}