import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import "./assets/css/style.css";
import "./assets/css/responsive.css";
import SimpleReactLightbox from "simple-react-lightbox";

// PAGES
import Home from "./../src/components/home";
import About from "./../src/components/about";
import Events from "./../src/components/events";
import MassScheduleMain from "./components/massschedule";
import VirtualTour from "./components/virtualtour";
import Donate from "./components/donate";
import DoneDonate from "./components/donedonate";
import RequestPage from "./components/request";
import Posts from "./components/posts";

// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { fetchPosts } from "./api/FirebaseHelper";

initializeApp({
  apiKey: "AIzaSyCDZTLgld2lnDQfqwfWekAu-kq3uXEYKAk",
  authDomain: "church-backend-dbf84.firebaseapp.com",
  projectId: "church-backend-dbf84",
  storageBucket: "church-backend-dbf84.appspot.com",
  messagingSenderId: "538646634207",
  appId: "1:538646634207:web:e6d2b622a427e27be1d36a",
  measurementId: "G-65LDJQ1TCK",
});

export const firestore = getFirestore();

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(async () => setPosts(await fetchPosts()), []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home posts={posts} {...props} />}
        />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route exact path="/events" render={(props) => <Events {...props} />} />
        <Route
          exact
          path="/massschedule"
          render={(props) => <MassScheduleMain {...props} />}
        />
        <Route
          exact
          path="/virtualtour"
          render={(props) => <VirtualTour {...props} />}
        />
        <Route exact path="/donate" render={(props) => <Donate {...props} />} />
        <Route
          exact
          path="/donedonate"
          render={(props) => <DoneDonate {...props} />}
        />
        <Route
          exact
          path="/request"
          render={(props) => <RequestPage {...props} />}
        />
        <Route
          exact
          path="/posts"
          render={(props) => <Posts posts={posts} {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
