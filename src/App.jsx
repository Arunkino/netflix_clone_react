import NavBar from "./Components/NavBar/NavBar"
import './App.css'
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost"
import { API_KEY } from "./constans/constans"
import {originalsUrl,actionUrl, horrerUrl, romanceUrl, documentariesUrl} from './urls'

function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Originals" url={originalsUrl} />
      <RowPost title="Action" isSmall url={actionUrl} />
      <RowPost title="Horrer" isSmall url={horrerUrl} />
      <RowPost title="Romance" isSmall url={romanceUrl} />
      <RowPost title="Documentaries" isSmall url={documentariesUrl} />
    </>
  )
}

export default App
