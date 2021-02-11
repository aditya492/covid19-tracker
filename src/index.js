import React from 'react';
import ReactDOM   from 'react-dom';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Home from './views/Home';
import Errorr from './views/Errorr';
import District from './views/District'


ReactDOM.render(<BrowserRouter>
           <div>
           <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/state/:id" component={District}/>           
           <Route component={Errorr}/>
           </Switch>
           </div>
          </BrowserRouter>
	,document.getElementById('root'));


