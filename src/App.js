import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Detail from './components/Detail.js'
import Admin from './components/Admin.js';
import Contact from './components/Contact.js'
import Loading from './components/Loading.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import db from './firebase'
// import { AuthProvider} from './contexts/AuthContext';

function App() {

  const [allVideos, setAllVideos] = useState();
  const [loading, setLoading] = useState(false);
  // const [reelVidUrl, setReelVidUrl] = useState(null);
  useEffect(() => {
      setLoading(true)
       db.collection("videos")
       .onSnapshot((snapshot) => {
          const newVids = snapshot.docs.map((doc) => ({
            id: doc.id, 
            ...doc.data()
          }))
          // let v = newVids.filter((val)=> val.name === "Director Reel")
          // console.log("V", v)
          // setReelVidUrl(v)
          // console.log("V STATE", reelVidUrl)
          setAllVideos(newVids)
          setLoading(false)
        })
  }, [])


  return (

      <div className="App">
        <Router>
          <Header/>
  
            <Switch>

              <Route path="/detail/:id"> 
                <Detail/>
              </Route>  

              <Route path="/admin"> 
                <Admin allVideos={allVideos}/>
              </Route>  
              <Route path="/contact"> 
                <Contact/>
              </Route>   
              <Route path="/"> 
                <Home loading={loading} allVideos={allVideos}/>   
               {loading ? <Loading/> : null}
              {/* <Loading/> */}
              </Route>   

            </Switch>
      
        </Router>
      </div>

  );
}

export default App;
