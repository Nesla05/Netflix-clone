import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {trandings , action} from './urls'

function App() {
  return (
    <div>
      < NavBar />
      < Banner />
      <RowPost url={trandings} title='Trendings' />
      <RowPost url={action} title='Action' isSmall />
    </div>
  )
}

export default App

