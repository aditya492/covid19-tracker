import React,{Component} from 'react';
import {IoNotificationsOffSharp} from "react-icons/io5";
import {IoIosNotifications} from "react-icons/io";
import axios from 'axios';

import './notification.css';
import Time from '../../helper/Time';

import  {connect } from 'react-redux';      //redux part
import  {fetchNotiData} from '../../store/actions/NotificationAction';


class Notification extends Component{
constructor(props){
super(props);
this.state={
toggle:false,
}
}

   componentDidMount() {
          this.props.fetchNotiData()

      }


render(){

const reduxData=this.props.NotiData

if(!reduxData.error){
return(

<>
<div className="sta891NotificationBell" onClick={()=>this.showNoti()}> 


{this.state.toggle ? <IoNotificationsOffSharp style={{color:"white",fontSize:"39px"}}/> : <IoIosNotifications style={{color:"white",fontSize:"43px"}}/>}

</div>

<div className={this.state.toggle ?  "sta891NotiMain" : "sta891NotiMainOn"} onClick={()=>this.showNoti()}>{this.mapNotiData()}</div>

</>

)}

else{
      return <span style={{float:"right",color:"white"}}> :( Bad Response</span>
}
}



  showNoti=()=>{
    this.setState(prev=>({
    toggle:!prev.toggle,
}))
}


  mapNotiData=()=>{
      
    const  reduxData=this.props.NotiData.data.data

   return(
   <>

   {this.props.NotiData.loading ? null : reduxData.slice(0).reverse().map(item=>{

   const notificationTimestamp = Time(item.timestamp*1000);

   const date=new Date(item.timestamp*1000)

   const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);

   const dates = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

   const finalDate=(`${dates} ${month}`);

   return (<><div className="sta891mapListOut"><li className="sta891MapListIn">{finalDate}</li> <br/> {notificationTimestamp} ago</div>
        
       <div className="sta891MapDivOuter"><li className="sta891MaplistInner">{item.update}</li></div></>)

})}

</>
)
}

}



const mapStateToProps=(state)=>{
return {NotiData:state.NotiData}
}

export  default connect(mapStateToProps,{fetchNotiData})(Notification);