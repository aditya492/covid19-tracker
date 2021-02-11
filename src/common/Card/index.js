import React,{Component} from 'react';
import './card.css';
import NumberFormat from 'react-number-format';
import {FaApple} from "react-icons/fa";
import {RiDeviceRecoverLine} from "react-icons/ri";
import {GiHypodermicTest,GiConfirmed,GiAbstract033} from "react-icons/gi";
import {AiFillMedicineBox} from "react-icons/ai";
import 'tachyons';

class Card extends Component{
	
	render(){

		return(
			<>
      
			<div className="sta891CardMain">

              
             <div className="sta891CommonInAll sta891pardsprimary1 shadow-5">
              <div className="sta891InsideCard"><h2>Confirmed</h2></div>
              <div className="sta891InsideCard" style={{fontSize:"27px"}}><GiConfirmed/></div>
             <div className="sta891InsideCard"><h3 className="sta891card1"> <NumberFormat value={this.props.confirmed} displayType={'text'} thousandSeparator={true}></NumberFormat></h3></div>
            

             </div>
             <div className="sta891CommonInAll sta891pardsprimary2 shadow-5">
              <div className="sta891InsideCard"><h2 className="cpinfo">Tested</h2></div>
               <div className="sta891InsideCard" style={{fontSize:"27px"}}><GiHypodermicTest/></div>
             <div className="sta891InsideCard"><h3  className="sta891card2"> <NumberFormat value={this.props.tested} displayType={'text'} thousandSeparator={true}></NumberFormat></h3></div>

             </div>
             <div className="sta891CommonInAll sta891pardsprimary3 shadow-5">
               <div className="sta891InsideCard"> <h2 className="cpinfo">Deceased</h2></div>
                <div className="sta891InsideCard" style={{fontSize:"27px"}}><GiAbstract033/></div>
             <div className="sta891InsideCard"><h3  className="sta891card3"> <NumberFormat value={this.props.deceased} displayType={'text'} thousandSeparator={true}></NumberFormat></h3></div>
            </div>

             <div className="sta891CommonInAll sta891pardsprimary4 shadow-5">
            <div className="sta891InsideCard"> <h2 className="cpinfo">Recovered</h2></div>
              <div className="sta891InsideCard" style={{fontSize:"27px"}}><RiDeviceRecoverLine/></div>
              <div className="sta891InsideCard"><h3  className="sta891card4"> <NumberFormat value={this.props.recovered} displayType={'text'} thousandSeparator={true}></NumberFormat></h3></div>
            </div>

            <div className="sta891CommonInAll sta891pardsprimary5 shadow-5">
            <div className="sta891InsideCard"> <h2 className="cpinfo">Vaccinated</h2></div>
              <div className="sta891InsideCard" style={{fontSize:"27px"}}><AiFillMedicineBox/></div>
              <div className="sta891InsideCard"><h3  className="sta891card5"> <NumberFormat value={this.props.vaccinated} displayType={'text'} thousandSeparator={true}></NumberFormat></h3></div>
            </div>
            
               
             </div>
            
			</>
			)

	}
}

export default Card;