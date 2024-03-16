import { useState } from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import RecipiesContainer from './Components/RecipiesContainer/RecipiesContainer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Header/>
      <main>
       <Banner/>
       <RecipiesContainer/>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
