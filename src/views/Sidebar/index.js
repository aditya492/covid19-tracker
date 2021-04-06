import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {FaBars,FaGithub,FaHackerrank,FaLinkedinIn,FaInstagram} from "react-icons/fa";
import {AiOutlineClose,AiOutlineHome} from 'react-icons/ai';
import State_List from '../../helper/Statelist';
import {ThemeChanger} from '../../common/themeChanger'
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
   
       
       const showsidebar=()=>{
       
      this.setState(prevState=>({
                 sidebar:!prevState.sidebar,
      }))
      console.log(this.state.sidebar)
      
  }
   
	return(  //make different function
		<>
    <div className="sta891Nav shadow-5">

     <div className="sta891Navbar">
      <Link to="#" className="menu-bars" style={{color:"white"}}>
      <FaBars style={{background:"#1e1e30"}} onClick={showsidebar}/>
      </Link>
     
    </div>


    
    <div className="sta891Navbar">
      <Link to="/" className="menu-bars" style={{color:"white"}}>
      <AiOutlineHome style={{background:"#1e1e30"}}/>
      </Link>
     
    </div>


     

    <div className="sta891Navbar">
      <a href="https://github.com/aditya492" target="_blank" className="menu-bars" style={{color:"white"}}>
      <FaGithub style={{background:"#1e1e30"}}/>
      </a>  
    </div>
    

    <div className="sta891Navbar">
      <a href="https://www.hackerrank.com/adityabarve96" target="_blank" className="menu-bars" style={{color:"white"}}>
      <FaHackerrank style={{background:"#1e1e30"}}/>
      </a>  
    </div>
    

    <div className="sta891Navbar">
      <a href="https://www.linkedin.com/in/aditya-barve-52002115b/" target="_blank" className="menu-bars" style={{color:"white"}}>
      <FaLinkedinIn style={{background:"#1e1e30"}}/>
      </a>  
    </div>

     

   
    

     <nav className={this.state.sidebar ? "nav-menu active":"nav-menu"}>   //change classname
	   <ul className="nav-menu-items"  onClick={showsidebar} >
          <li className="navbar-toggle">
             <Link to="#">
             <AiOutlineClose style={{background:"#1e1e30"}}/>
             </Link> 
          </li>
             {this.sideinput()}
	    </ul>
	  </nav>
    </div>
		</>
		)
}

 

sideinput=()=>{
    return(
    <>
    <div className="navt">
	   <Link to="/stateschart"> <h3 style={{background: "#060b26",color:"white",textDecoration:"none"}}>Go to States Chart</h3></Link>
     </div>
    </>
)
}

}

export default Sidebar;