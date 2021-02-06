import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {FaBars,FaGithub,FaHackerrank,FaLinkedinIn,FaInstagram} from "react-icons/fa";
import {AiOutlineClose,AiOutlineHome} from 'react-icons/ai';
import Statelist from '../../utils/Statelist';
import './sidebar.css';
import 'tachyons';

class  Sidebar extends Component{
  
  constructor(props){
  	super(props)
  	this.state={
             sidebar:false,
  	}
  }


	render(){
   
       const key=Object.keys(Statelist)
   
	return(
		<>
    <div className="nav shadow-5">
		
    <div className="navbar">
      <Link to="/" className="menu-bars" style={{color:"white"}}>
      <AiOutlineHome/>
      </Link>
     
    </div>
     

    <div className="navbar">
      <a href="https://github.com/aditya492" target="_blank" className="menu-bars" style={{color:"white"}}>
      <FaGithub/>
      </a>  
    </div>

    <div className="navbar">
      <a href="https://www.hackerrank.com/adityabarve96" target="_blank" className="menu-bars" style={{color:"white"}}>
      <FaHackerrank/>
      </a>  
    </div>

    <div className="navbar">
      <a href="https://www.linkedin.com/in/aditya-barve-52002115b/" target="_blank" className="menu-bars" style={{color:"white"}}>
      <FaLinkedinIn/>
      </a>  
    </div>

    <div className="navbar">
      <a href="https://www.instagram.com/adiityabarve/" target="_blank" className="menu-bars" style={{color:"white"}}>
      <FaInstagram/>
      </a>  
    </div>

     <nav className={this.state.sidebar ? "nav-menu active":"nav-menu"}>
	   <ul className="nav-menu-items"  onClick={this.showsidebar} >
          <li className="navbar-toggle">
             <Link to="#">
             <AiOutlineClose/>
             </Link> 
          </li>
             {this.sideinput()}
	    </ul>
	  </nav>
    </div>
		</>
		)
}

showsidebar=()=>{
     	
			this.setState(prevState=>({
                 sidebar:!prevState.sidebar,
			}))
			console.log(this.state.sidebar)
			
	}

sideinput=()=>{

	const key=Object.keys(Statelist)

    return(
    <>
	{key.map((item,index)=>{
		  const value=Statelist[item]
          	return   <li key={index}>
          		
          		     <Link to={"/state/"+item} className="navt"><FaBars/> {value}</Link>
          		
          		     </li>         	         	
          })}
    </>
)
}

}

export default Sidebar;