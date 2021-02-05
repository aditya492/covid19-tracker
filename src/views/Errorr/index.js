import React,{Component} from 'react';
import './errorr.css';
import {VscError} from "react-icons/vsc";

class Errorr extends Component{
	render(){
		return(

			<>
			<div className="mainerror003">
			<div className="errorr004">
			<h1><VscError/></h1>
			<h1>Oops!! Wrong URL</h1>
			</div>
			</div>
			</>

			)
	}
}

export default Errorr;
