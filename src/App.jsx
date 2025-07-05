import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import{Routes,Route} from 'react-router-dom';
import Container from './components/container'
import Front from './components/frontpage'
import Quiz from './components/questions';

function App() {

  return (
    <div id="root">
    
    <center>
     <Container className="children">
           

<Routes>
  <Route path="/" element={<Front/>}></Route>
   <Route path="/quiz/:domain" element={<Quiz/>}></Route>
</Routes>

     
     </Container>
     </center>
     </div>
    
  )
}

export default App;
