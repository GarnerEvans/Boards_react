
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { About, Contact, Home, Inventory } from './components'
// import { firebaseConfig } from './firebaseConfig'
// import 'firebase/auth';
import { Provider } from 'react-redux';
// import { store } from './redux/store'
import './styles.css'
import { Forecast } from './components/Forecast';




const temp_props = "Surfboard Inventory"

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}> */}
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/inventory'>
          <Inventory></Inventory>
        </Route>
        <Route path='/forecast'>
          <Forecast></Forecast>
        </Route>

        
        


      </Switch>
    </Router>
    {/* </Provider>
    </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
