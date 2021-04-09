 //import React, { Component } from 'react'
import React,{useState, useEffect} from 'react';
import  './topScrollBar.css'



const TopScrollBar=()=>{
  
  const[scrollTop,setScrollTop]=useState(0);

  const onScrollPage=()=>{
      const winScroll=window.scrollY
      const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

       const scrolled=(winScroll/height)*100;
    
       setScrollTop(scrolled);
  };

  useEffect(()=>{
      window.addEventListener("scroll",onScrollPage);

     return () => window.removeEventListener("scroll",onScrollPage);

    
  },[]);

  
  return(
    
         <div className="App">
        <div className="progressMainWrapper">
        <div className="progressMainStyle" style={{width:`${scrollTop}%`}}>  </div>
        </div>
      </div>
    
  )
}


export default TopScrollBar;
































// class TopScrollBar extends Component{

//   constructor(props){
//     super(props);
//     this.state={
//       scrollTop:0,
//      }
//   }

//    onScrollPage=()=>{
//        const winScroll=document.documentElement.scrollTop
//       const height=document.documentElement.scrollHeight-document.documentElement.clientHeight

//        const scrolled=(winScroll/height)*100;

//        this.setState({
//          scrollTop:scrolled,
//        })

//        }

      //  componentDidMount(){

      //    window.addEventListener("scroll",this.onScrollPage())

      //    return()=>window.removeEventListener("scroll",this.onScrollPage())
      //  }


     

//   render(){
//     return(
//       <>
//       <div className="App">
//         <div className="progressMainWrapper">
//         <div className="progressMainStyle" style={{width:`$(this.state.scrollTop)%`}}>  </div>
//         </div>
//       </div>
//       </>
//     )
//   }
// }

// export default TopScrollBar;
