import React,{Component} from 'react';
import {GrNotification} from "react-icons/gr";
import {IoIosNotifications} from "react-icons/io";
import axios from 'axios';
import './notification.css';
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
axios.get("https://api.covid19india.org/updatelog/log.json")
.then(res => {
this.setState({
noti: res.data,
loading: false,
})
})
}
render(){
return(
<>
<div className="sta891NotificationBell" onClick={()=>this.showNoti()}><IoIosNotifications style={{color:"white",fontSize:"30px"}}/></div>
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
const  mainData=this.state.noti
return(
<>
{this.state.loading ?null :this.state.noti.slice(0).reverse().map(item=>{
const date=new Date(item.timestamp*1000)
const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
const dates = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
const finalDate=(`${dates} ${month}`);
return (<><div className="mapL"><li className="Maplist">{finalDate}</li></div>
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