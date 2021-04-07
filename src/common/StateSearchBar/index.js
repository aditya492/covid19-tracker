import React,{Component} from 'react';
import Statelist from '../../helper/Statelist';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';


class StateSearchBar extends Component{
	 constructor(props){
      super(props);
      this.state={
            statedata:[],
            searchterm:'',
      }
    }
	render(){
		return(
			<>
        <div className="sta891Statediv28">
            
            <input className="sta891stateInput shadow-5" onChange={(e)=>this.setState({searchterm:e.target.value})} placeholder="&#128269; Enter Your State here" style={{color: "white"}}></input>
              
              <div className="sta891SearchResult">
                 <div className="sta891SearchResult"><h3 className="sta891ResultsRow">{this.filterInputUI()}</h3></div>             
        </div>
                   
        </div> 
			</>
			)
	}

	filterInputUI=()=>{
   const statearray=Object.keys(Statelist)
   
     const statemapping=statearray.filter((val,i)=>{
     const value=Statelist[val]
     if(this.state.searchterm==""){
       return ;
     }
     else if(value.toLowerCase().includes(this.state.searchterm.toLowerCase())){
       return (
         <>value</>
         ) 

     }
   }).map((val,i)=>{
           
         return <Link to={"state/"+val} style={{color:"white",textDecoration:"none"}}><div className="sta891Box"> 

                     {Statelist[val]}

             </div></Link>
   })
   return(
   <>
      {statemapping}
   </>

   )
}

}
export default StateSearchBar;