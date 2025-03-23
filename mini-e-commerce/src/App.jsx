import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Product.css'
import Header from './components/Header'
import PageContainer from './container/PageContainer'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'

function App() {
   

  return (
   <>
   <PageContainer>
    <Loading></Loading>
      <Header>
        
      </Header>
        <RouterConfig/>
   </PageContainer>
   </>
      
  )
}

export default App
