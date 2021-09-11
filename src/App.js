import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Detail from './components/Detail.js'
import Admin from './components/Admin.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import db from './firebase'

function App() {

  const [allVideos, setAllVideos] = useState();


  useEffect(() => {

       db.collection("videos")
       .onSnapshot((snapshot) => {
          const newVids = snapshot.docs.map((doc) => ({
            id: doc.id, 
            ...doc.data()
          }))
          setAllVideos(newVids)
        })


  }, [])


  return (
    <div className="App">
      <Router>
        <Header/>
 
          <Switch>

            <Route path="/detail"> 
              <Detail/>
            </Route>  

            <Route path="/admin"> 
              <Admin/>
            </Route>  
            <Route path="/"> 
              <Home allVideos={allVideos}/>
            </Route>   

          </Switch>
     
      </Router>
    </div>
  );
}

export default App;
