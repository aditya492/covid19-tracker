import {combineReducers} from 'redux';
import  mainreducer from './index';
import NotiReducer from './NotiReducer';

export default combineReducers({
	covidData:mainreducer,
	NotiData:NotiReducer
});