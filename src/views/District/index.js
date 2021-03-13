import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStart, districtData } from '../../store/actions';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';


import State_List from '../../helper/Statelist';
import getCovidData from '../../utils/Storage';
import { distArray } from '../../utils/distArray'


import Card from '../../common/Card';

import Sidebar from '../Sidebar'

import 'tachyons';
import './district.css';




class District extends Component {
  constructor(props) {

    super(props);
    this.state = {
      arr: null,
      loading: true,
      error: false,
      statedata: [],
      searchterm: '',
      isAsc: false

    }
  }


  componentDidMount() {
    this.props.fetchStart(this.props.match.params.id)

  }
  // componentDidMount(){

  //  this.props.fetchStart(this.props.match.params.id )
  // }


  render() {


    const loadingg = this.props.covidData.loading
    const reduxData = this.props.covidData
    const cardData = this.props.covidData.dataObject
    const {
      error,
      arr,
      loading
    } = this.state;

    const reuseMatchid = this.props.match.params.id



    const confirmed=loadingg ?null:cardData[reuseMatchid].total.confirmed;
    const recovered=loadingg ? null:cardData[reuseMatchid].total.recovered;
    const deceased=loadingg ? null:cardData[reuseMatchid].total.deceased;
    const tested=loadingg ? null:cardData[reuseMatchid].total.tested;
    const vaccinated=loadingg ? null:cardData[reuseMatchid].total.vaccinated;
    

    if (!reduxData.error) {
      return (
        <>
          <Sidebar />
          <h1 className="sta891Cardh1C1">{State_List[this.props.match.params.id]}</h1>



            <Card
     confirmed={confirmed}
     recovered={recovered}
     tested={tested}
     deceased={deceased}
     vaccinated={vaccinated}         
    />    


          <div className="sta891Statediv28">

            <input className="sta891stateInput shadow-5" onChange={(e) => this.inputHandler(e)} placeholder="&#128269; Enter Your State here" style={{ color: "white" }}></input>

            <div className="sta891SearchResult">
              <div className="sta891SearchResult"><h3 className="sta891ResultsRow">{loadingg ? <h1 style={{ textAlign: "center", color: "white" }}><BeatLoader color='white' /></h1> : this.filterInputUI()}</h3></div>
            </div>

          </div>


          <div className="sta891color_State_body">
            <li className="sta891Table_Header_">
              <div className="sta891Col sta891Col-0" onClick={() => this.headerClick('district')}>Districts</div>
              <div className="sta891Col sta891Col-1" onClick={() => this.headerClick('confirm')}>Confirmed</div>
              <div className="sta891Col sta891Col-2" onClick={() => this.headerClick('tested')}>Tested</div>
              <div className="sta891Col sta891Col-3" onClick={() => this.headerClick('recover')}>Recovered</div>
              <div className="sta891Col sta891Col-4" onClick={() => this.headerClick('deceased')}>Deceased</div>

            </li>
          </div>
          {loadingg ? null : this.getDistrictUI()}

        </>
      )
    }
    else {
      return <h1 style={{ textAlign: "center", color: "white" }}>404 Error Not Found!!</h1>
    }
  }



  headerClick = (sortKey) => {
   
     const def=true
    const cardData = this.props.covidData.district
    const object = this.props.covidData.dataObject
    const homeData = this.props.covidData.data
    const{sortBy}=this.props.covidData
     const{isAsc}=this.state
    this.setState(prev => ({
      isAsc: !prev.isAsc
    }))
 
     

    this.props.districtData(cardData, object, homeData,isAsc,sortKey)

    // if(sortKey==sortBy){


    //  this.props.districtData(cardData,object,homeData,!isAscc,sortBy)
    // }
    //  else{
    //        this.props.districtData(cardData,object,homeData,isAscc,sortBy)

    //  }   
  }



  inputHandler = (e) => {
    this.setState({ searchterm: e.target.value })
  }


  //FUNCTION TO SHOW DISTRICT DATA
  getDistrictUI = () => {


  
    console.log("befire",this.props.covidData.district)
    const final = this.props.covidData.district ?? []
    { console.log("after", final) }

    return (
      <>
        {final.map(item => {

          return <div style={{ marginLeft: "110px" }}>
            <ul className="sta891responsive-table">
              <li className="sta891Statedata_table_row link dim black b shadow-5" >
                <div className="sta891Col  sta891Col-0">{item.id}</div>
                <div className="sta891Col  sta891Col-1">{isNaN(item.confirmed) ? "N/A" : <NumberFormat value={item.confirmed} displayType={'text'} thousandSeparator={true} />}</div>
                <div className="sta891Col  sta891Col-2">{isNaN(item.tested) ? "N/A" : <NumberFormat value={item.tested} displayType={'text'} thousandSeparator={true} />}</div>
                <div className="sta891Col  sta891Col-3">{isNaN(item.recovered) ? "N/A" : <NumberFormat value={item.recovered} displayType={'text'} thousandSeparator={true} />}</div>
                <div className="sta891Col  sta891Col-4">{isNaN(item.deceased) ? "N/A" : <NumberFormat value={item.deceased} displayType={'text'} thousandSeparator={true} />}</div>

              </li>
            </ul>
          </div>
        })}
      </>
    )
  }

  filterInputUI = () => {

    const statearray = Object.keys(State_List)
    const statemapping = statearray.filter((val, i) => {
      const value = State_List[val]
      if (this.state.searchterm == "") {
        return;
      }
      else if (value.toLowerCase().includes(this.state.searchterm.toLowerCase())) {
        return (
          <>value</>
        )

      }
    }).map((val, i) => {

      return <Link to={val} style={{ color: "white", textDecoration: "none" }}><div className="sta891Box">
        {State_List[val]}
      </div></Link>

    })
    return (
      <>
        {statemapping}


      </>

    )
  }

}




const mapStateToProps = state => {
  return { covidData: state.covidData };
}


const mapDispatchToProps = (dispatch) => {
  return {

    fetchStart: (d) => dispatch(fetchStart(d)),
    districtData: (district, object, homeData,isAsc,sort) => dispatch(districtData(district, object, homeData,isAsc,sort)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(District);


   

 //  <Card
               //  confirmed={confirmed}
               //  recovered={recovered}
               //  tested={tested}
               //  deceased={deceased}
               //  vaccinated={vaccinated}         
               // />





