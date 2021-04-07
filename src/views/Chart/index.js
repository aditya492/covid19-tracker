import React,{useState,useEffect} from 'react'
import {Line,Bar,Radar,Pie} from 'react-chartjs-2'
import axios from 'axios'
import {tabledatatoarr} from '../../utils/MaptoArr'
import getCovidData from '../../utils/Storage'
import './chart.css'



const Chart=()=>{
	const[dailyData,setDailyData]=useState([])

useEffect(()=>{

  const fetchapi=async()=>{
         
          const fetchdata=await axios.get('https://api.covid19india.org/v4/min/data.min.json')
        setDailyData(tabledatatoarr(fetchdata.data))  
        
	}
       console.log(dailyData)
	fetchapi()
})

 const lineChart=(

        dailyData.length ? (<Line
        	 width={1800}
        	 height={1800}
      	     data={{ 
      	     	labels:dailyData.map((item)=> item.name),
      	     	datasets:[{
      	     		data:dailyData.map((item)=>item.confirmed),
      	     		label:'confirmed',
      	     		borderColor:'red',
                    fill:true,

      	     	},{
      	     		data:dailyData.map((item)=>item.deceased),
      	     		label:'deceased',
      	     		borderColor:'blue',
                    fill:true,
                },{
      	     		data:dailyData.map((item)=>item.tested),
      	     		label:'tested',
      	     		borderColor:'green',
                    fill:true,
                },{
      	     		data:dailyData.map((item)=>item.recovered),
      	     		label:'recovered',
      	     		borderColor:'orange',
                    fill:true,
                }],
                 options:{responsive:true, height:'10'},
                
      	    
      	     }}
      	/>):null
            
      

   
      	
       )


 const barchart=(

        dailyData.length ? (<Radar
        	 width={1800}
        	 height={1800}
      	     data={{ 
      	     	labels:dailyData.map((item)=> item.name),
      	     	datasets:[{
      	     		data:dailyData.map((item)=>item.confirmed),
      	     		label:'confirmed',
      	     		borderColor:'red',
                    fill:true,

      	     	},{
      	     		data:dailyData.map((item)=>item.deceased),
      	     		label:'deceased',
      	     		borderColor:'blue',
                    fill:true,
                },{
      	     		data:dailyData.map((item)=>item.tested),
      	     		label:'tested',
      	     		borderColor:'green',
                    fill:true,
                },{
      	     		data:dailyData.map((item)=>item.recovered),
      	     		label:'recovered',
      	     		borderColor:'orange',
                    fill:true,
                }],
                 options:{responsive:true, height:'10'},
                
      	    
      	     }}
      	/>):null
            
      

   
      	
       )
       
    
      const bubblechart=(

        dailyData.length ? (<Pie
        	 width={1800}
        	 height={1800}
      	     data={{ 
      	     	labels:dailyData.map((item)=> item.name),
      	     	datasets:[{
      	     		data:dailyData.map((item)=>item.confirmed),
      	     		label:'confirmed',
      	     		borderColor:'red',
                    fill:true,

      	     	},{
      	     		data:dailyData.map((item)=>item.deceased),
      	     		label:'deceased',
      	     		borderColor:'blue',
                    fill:true,
                },{
      	     		data:dailyData.map((item)=>item.tested),
      	     		label:'tested',
      	     		borderColor:'green',
                    fill:true,
                },{
      	     		data:dailyData.map((item)=>item.recovered),
      	     		label:'recovered',
      	     		borderColor:'orange',
                    fill:true,
                }],
                 options:{responsive:true, height:'10'},
                
      	    
      	     }}
      	/>):null
            
      	
       )
       

 
return(


	<>
    <div style={{textAlign:"center",color:"white"}}><h1>Graph Representation</h1><small>StateWise Data</small></div>
    <div className="chartss">{lineChart}</div>
    <div className="chartss">{barchart}</div>
    <div className="chartss">{bubblechart}</div>
	</>
	)


}




export default Chart;
















// class Chart extends Component{

// 	constructor(props){
// 		super(props);
// 		this.state={
// 			dailyData:[]
// 		}
// 	}
   
//     componentDidMount(){
//         const fetchAPI=async()=>{
//             const fetchData=await getCovidData()
//           const final= tabledatatoarr(fetchData.data)
//            this.setState({
//               dailyData:final
//            })
// 			console.log(this.state.dailyData)
// 		}

// 		fetchAPI()

//     }


//        lineChart=()=>{

//       	 const line= <Line
//       	     data={{ 
//       	     	labels:this.state.dailyData.map((item)=>{ return item.name}),
//       	     	datasets:[{
//       	     		data:this.state.dailyData.map((item)=>{ return item.confirmed}),
//       	     		label:'confirmed',
//       	     		borderColor:'red',
//                     fill:true,
//       	     	},{
//       	     		data:this.state.dailyData.map((item)=>item.deceased),
//       	     		label:'deceased',
//       	     		borderColor:'blue',
//                     fill:true,
//                 }]
//       	     }}
//       	/>

      	
//       }

//   render(){

//   	return(
//   		<>
//            <h1>Charts</h1>
//            {this.lineChart}
//   	     </>	
//   		)
//   }


// }




    
	

