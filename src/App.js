import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import './assets/css/style.css';
import './assets/css/responsive.css';
import SimpleReactLightbox from 'simple-react-lightbox';

// PAGES
import Home from './../src/components/home';
import About from './../src/components/about';
import Events from './../src/components/events';
import MassScheduleMain from './components/massschedule';
import VirtualTour from './components/virtualtour';
import Donate from './components/donate';
import DoneDonate from './components/donedonate';
import RequestPage from './components/request';
import Posts from './components/posts';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post #1", body: "This is just a sample post for the National Shrine of Our Lady of Sorrows. There's nothing much in it. Just a sample post for the posts section of the home page", date: "April 4, 2021" },
    { id: 2, title: "Post #2", body: "This is just a sample post for the National Shrine of Our Lady of Sorrows. There's nothing much in it. Just a sample post for the posts section of the home page", date: "April 4, 2021" },
    { id: 3, title: "Post #3", body: "This is just a sample post for the National Shrine of Our Lady of Sorrows. There's nothing much in it. Just a sample post for the posts section of the home page", date: "April 4, 2021" },
    { id: 4, title: "Post #5", body: "This is just a sample post for the National Shrine of Our Lady of Sorrows. There's nothing much in it. Just a sample post for the posts section of the home page", date: "April 4, 2021" },
])

  return (
   <Router>
     <Switch>
       <Route exact path="/" render={props => <Home posts={posts} {...props} /> } />
       <Route exact path="/about" render={props => <About {...props} /> } />
       <Route exact path="/events" render={props => <Events {...props} /> } />
       <Route exact path="/massschedule" render={props => <MassScheduleMain {...props}/>} />
       <Route exact path="/virtualtour" render={props => <VirtualTour {...props} />} />
       <Route exact path="/donate" render={props => <Donate {...props} /> }/>
       <Route exact path="/donedonate" render={props => <DoneDonate {...props}/>} />
       <Route exact path="/request" render={props => <RequestPage {...props}/>} />
       <Route exact path="/posts" render={props => <Posts posts={posts} {...props}/>} />
       
       
     </Switch>
   </Router>
  );
}

export default App;
