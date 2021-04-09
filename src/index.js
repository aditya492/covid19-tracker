import React from 'react';
import ReactDOM   from 'react-dom';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combinereducers from './store/reducers/combinereducer';

import Home from './views/Home';
import Errorr from './views/Errorr';
import Chart from './views/Chart';
import District from './views/District';
import ScrollToTop from './views/ScrollToTop';
import TopScrollBar from './views/topScrollBar'


const store=createStore(combinereducers,applyMiddleware(thunk)); 

ReactDOM.render(<Provider store={store}>
	<BrowserRouter>
         
           <div>
           <ScrollToTop/>
           <TopScrollBar/>
           <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/state/:id" component={District}/>
           <Route path="/stateschart" component={Chart}/>                      
           <Route component={Errorr}/>
           
           </Switch>
          
          </div>
          </BrowserRouter>
          </Provider>
	,document.getElementById('root'));


