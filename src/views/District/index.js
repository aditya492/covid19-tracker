import React,{Component} from 'react';
import  {connect } from 'react-redux';      
import  {fetchStart,districtData} from '../../store/actions';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import axios from  'axios';
import {BeatLoader} from 'react-spinners';


import State_List from '../../helper/Statelist';
import getCovidData from '../../utils/Storage';
import {distArray} from '../../utils/distArray'


import Card from '../../common/Card';

import Sidebar from '../Sidebar'

import 'tachyons';
import './district.css';




class District extends Component{
    constructor(props){

      super(props);
      this.state={
            arr:null,
            loading:true,
            error:false,
            statedata:[],
            searchterm:'',
            isAsc:false

      }
    }


   componentWillMount(){
        this.props.fetchStart(this.props.match.params.id )

   }
  // componentDidMount(){
    
  //  this.props.fetchStart(this.props.match.params.id )
  // }
   
 
	render(){  
   
  
  const loadingg=this.props.covidData.loading
  const reduxData=this.props.covidData
  const cardData=this.props.covidData.dataObject
console.log("dataobject",this.props.covidData.dataObject)
       const{
             error,
             arr,
             loading
        } =this.state;
     
          const reuseMatchid= this.props.match.params.id 
    
          
     
          // const confirmed=loadingg ?null:cardData[reuseMatchid].total.confirmed;
          // const recovered=loadingg ? null:cardData[reuseMatchid].total.recovered;
          // const deceased=loadingg ? null:cardData[reuseMatchid].total.deceased;
          // const tested=loadingg ? null:cardData[reuseMatchid].total.tested;
          // const vaccinated=loadingg ? null:cardData[reuseMatchid].total.vaccinated;
          //  <Card
               //  confirmed={confirmed}
               //  recovered={recovered}
               //  tested={tested}
               //  deceased={deceased}
               //  vaccinated={vaccinated}         
               // />    
          
    
      if(!reduxData.error){
  		return(
			<>
			        <Sidebar/>
             <h1 className="sta891Cardh1C1">{State_List[this.props.match.params.id]}</h1>
         
                 
          
             

        <div className="sta891Statediv28">
            
            <input className="sta891stateInput shadow-5" onChange={(e)=>this.inputHandler(e)} placeholder="&#128269; Enter Your State here" style={{color: "white"}}></input> 
              
              <div className="sta891SearchResult">
                 <div className="sta891SearchResult"><h3 className="sta891ResultsRow">{loadingg ?  <h1 style={{textAlign:"center",color:"white"}}><BeatLoader color='white'/></h1>: this.filterInputUI()}</h3></div>            
              </div>
                   
        </div> 

     
              <div className="sta891color_State_body">
                <li className="sta891Table_Header_">
                   <div className="sta891Col sta891Col-0" onClick={()=>this.headerClick()}>Districts</div>
                   <div className="sta891Col sta891Col-1">Confirmed</div>
                   <div className="sta891Col sta891Col-2">Tested</div>
                   <div className="sta891Col sta891Col-3">Recovered</div>
                   <div className="sta891Col sta891Col-4">Deceased</div>
                  
                </li>
          </div>
          {loadingg ? null :this.getDistrictUI()}
         
			</>
			)
    }
    else{
      return <h1 style={{textAlign:"center",color:"white"}}>404 Error Not Found!!</h1>
    }
	}



headerClick=()=>{
    //   const cardData=this.props.covidData.dataObject
    // const reuseMatchid= this.props.match.params.id 


// const Datareal=cardData[reuseMatchid]
//  const stateData = [];
//       for (let data in Datareal[ 'districts' ]) {
//         const Districtobjects = {
//           id: data,
//           name: data,                                       
//           Data: Datareal[ 'districts' ][ data ],
//           confirmed:Datareal[ 'districts' ][ data ].total.confirmed,
//           tested:Datareal[ 'districts' ][ data ].total.tested,
//           recovered:Datareal[ 'districts' ][ data ].total.recovered,
//           deceased:Datareal[ 'districts' ][ data ].total.deceased,
//           vaccinated:Datareal[ 'districts' ][ data ].total.vaccinated,
//         }
//         stateData.push(Districtobjects);
//       }

const cardData=this.props.covidData.district
  const object=this.props.covidData.dataObject
  const homeData=this.props.covidData.data
 
this.setState(prev=>({
  isAsc:!prev.isAsc
}))

 console.log("prev",this.state.isAsc)
this.props.districtData(cardData,object,homeData)

   // if(sortKey==sortBy){


   //  this.props.districtData(cardData,object,homeData,!order,sortBy)
   // }
   //  else{
   //        this.props.districtData(cardData,object,homeData,order,sortBy)

   //  }   ye mera home pae haiii ab ki b state pr click kriga to usko jana chaye na district pge pr vo id ke sth pr vo error degs
}













  inputHandler=(e)=>{
          this.setState({searchterm:e.target.value})
      }


//FUNCTION TO SHOW DISTRICT DATA
 getDistrictUI=()=>{

   
  //  const matchID=this.props.match.params.id
     
  //   const districtKeys=Object.keys(this.props.covidData.dataObject[matchID].districts)
  //    const reduxData=this.props.covidData.data

  // console.log("dis. pge",reduxData)
  
  //  const loadingg=this.props.covidData.loading

//     const cardData=this.props.covidData.dataObject
//     const reuseMatchid= this.props.match.params.id 


// const Datareal=cardData[reuseMatchid]
//  const stateData = [];
//       for (let data in Datareal[ 'districts' ]) {
//         const Districtobjects = {
//           id: data,
//           name: data,                                       
//           Data: Datareal[ 'districts' ][ data ],
//           confirmed:Datareal[ 'districts' ][ data ].total.confirmed,
//           tested:Datareal[ 'districts' ][ data ].total.tested,
//           recovered:Datareal[ 'districts' ][ data ].total.recovered,
//           deceased:Datareal[ 'districts' ][ data ].total.deceased,
//           vaccinated:Datareal[ 'districts' ][ data ].total.vaccinated,
//         }
//         stateData.push(Districtobjects);
//       }
console.log("isacf",this.props.covidData.isAsc)
     {console.log("final",this.props.covidData)}

  const final=this.props.covidData.districts
  return(
     <>
    {final.map(item=>{ 
                         
      

       return <div style={{marginLeft:"110px"}}>
                    <ul className="sta891responsive-table">
                      <li className="sta891Statedata_table_row link dim black b shadow-5" >                         
                         <div className="sta891Col  sta891Col-0">{item.id}</div>
                         <div className="sta891Col  sta891Col-1">{isNaN(item.confirmed) ? "N/A" : <NumberFormat value={item.confirmed} displayType={'text'} thousandSeparator={true}/>}</div>
                         <div className="sta891Col  sta891Col-2">{isNaN(item.tested)    ? "N/A" : <NumberFormat value={item.tested} displayType={'text'} thousandSeparator={true}/>}</div>
                         <div className="sta891Col  sta891Col-3">{isNaN(item.recovered) ? "N/A" : <NumberFormat value={item.recovered} displayType={'text'} thousandSeparator={true}/>}</div> 
                         <div className="sta891Col  sta891Col-4">{isNaN(item.deceased)  ? "N/A" : <NumberFormat value={item.deceased} displayType={'text'} thousandSeparator={true}/>}</div>                                                                               
                        
                      </li> 
                    </ul>
               </div>
      })} 
    </>  
  )
}

filterInputUI=()=>{
     
   const statearray=Object.keys(State_List)
   
     const statemapping=statearray.filter((val,i)=>{
     const value=State_List[val]
     if(this.state.searchterm==""){
       return ;
     }
     else if(value.toLowerCase().includes(this.state.searchterm.toLowerCase())){
       return (
         <>value</>
         )

     }
   }).map((val,i)=>{
           
         return <Link to={val} style={{color:"white",textDecoration:"none"}}><div className="sta891Box">                     
                     {State_List[val]}                                                                                                                    
              </div></Link>
              
   })
   return(
   <>
      {statemapping}

     
   </>

   )
}

}




const mapStateToProps=state=>{
  return {covidData:state.covidData};
}


const mapDispatchToProps=(dispatch)=>{
  return{
   
    fetchStart:(d)=>dispatch(fetchStart(d)),
    districtData:(district,object,homeData)=>dispatch(districtData(district,object,homeData)),
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(District);




 //  <Card
               //  confirmed={confirmed}
               //  recovered={recovered}
               //  tested={tested}
               //  deceased={deceased}
               //  vaccinated={vaccinated}         
               // />     
          