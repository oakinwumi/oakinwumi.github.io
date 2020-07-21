import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import About from './components/About'
import Rental from './components/Rental'
import Faq from './components/Faq'
import carInfo from './components/carInfo'
import confirmation from './components/confirmation'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={About}/>
              <Route path='/rental' component={Rental}/>
              <Route path='/Faq' component={Faq}/>
              <Route path='/confirmation' component={confirmation}/>
              <Route path='/cars/:car_id' component={carInfo}/>
              
            </Switch>
          

        </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
