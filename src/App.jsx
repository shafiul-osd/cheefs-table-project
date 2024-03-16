import { useState } from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import RecipiesContainer from './Components/RecipiesContainer/RecipiesContainer'

function App() {
  return (
    <>
      <Header/>
      <main>
       <Banner/>
       <RecipiesContainer/>
      </main>
    </>
  )
}

export default App
