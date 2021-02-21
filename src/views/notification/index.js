import React,{Component} from 'react';
import {GrNotification} from "react-icons/gr";
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
noti:{},
loading:true
}
}

   componentDidMount() {
          this.props.fetchNotiData()

      }


render(){

    console.log("Notidata",this.props.NotiData.data.data)

return(

<>
<div className="sta891NotificationBell" onClick={()=>this.showNoti()}><IoIosNotifications style={{color:"white",fontSize:"39px"}}/></div>
<div className={this.state.toggle ?  "notimain" : "notimainon" }>{this.mapNotiData()}</div>
</>
)
}



  showNoti=()=>{
    this.setState(prev=>({
    toggle:!prev.toggle,
}))
    console.log(this.state.toggle)
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

   return (<><div className="mapL"><li className="Maplist">{finalDate}</li> <br/> {notificationTimestamp} ago</div>
        
       <div className="mapD"><li className="MaplistD">{item.update}</li></div></>)

})}

</>
)
}
}

const mapStateToProps=(state)=>{
return {NotiData:state.NotiData}
}

export  default connect(mapStateToProps,{fetchNotiData})(Notification);