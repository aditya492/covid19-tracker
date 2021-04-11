import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCovidData,
  districtData,
  setDistrictData,
} from "../../store/actions";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import {
  BsSearch,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
} from "react-icons/bs";

import State_List from "../../helper/Statelist";
import { distArray } from "../../utils/distArray";

import Chart from "../Chart";

import Card from "../../common/Card";
import StateSearchBar from "../../common/StateSearchBar";
import Sidebar from "../Sidebar";

import "tachyons";
import "./district.css";

class District extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: null,
      loading: true,
      error: false,
      statedata: [],
      searchterm: "",
      isAsc: false,
    };
  }

  componentDidMount() {
    this.props.fetchCovidData(this.props.match.params.id);
    console.log("covidDataa", this.props.covidData);
    // this.props.districtData( this.props.match.params.id,this.props.covidData.dataObject)
  }

  render() {
    const setColor = localStorage.getItem("isAscDist");
    const colorconvert = JSON.parse(setColor);
    const setOrder = localStorage.getItem("sortByDist");
    const convert = JSON.parse(setOrder);

    const loadingg = this.props.covidData.loading;
    const reduxData = this.props.covidData;
    const cardData = this.props.covidData.dataObject;
    const { error, arr, loading } = this.state;

    const reuseMatchid = this.props.match.params.id;
    const { sortBy, isAsc } = this.props.covidData;

    const confirmed = loadingg ? null : cardData[reuseMatchid].total.confirmed;
    const recovered = loadingg ? null : cardData[reuseMatchid].total.recovered;
    const deceased = loadingg ? null : cardData[reuseMatchid].total.deceased;
    const tested = loadingg ? null : cardData[reuseMatchid].total.tested;
    const vaccinated = loadingg
      ? null
      : cardData[reuseMatchid].total.vaccinated;

    if (!reduxData.error) {
      return (
        <>
          <Sidebar />
          <h1 className="sta891Cardh1C1">
            {State_List[this.props.match.params.id]}
          </h1>

          <Card
            confirmed={confirmed}
            recovered={recovered}
            tested={tested}
            deceased={deceased}
            vaccinated={vaccinated}
          />

          {/* <div className="sta891Statediv28">

            <input className="sta891stateInput shadow-5" onChange={(e) => this.inputHandler(e)} placeholder="&#128269; Enter Your State here" style={{ color: "white" }}></input>

            <div className="sta891SearchResult">
              <div className="sta891SearchResult"><h3 className="sta891ResultsRow">{loadingg ? <h1 style={{ textAlign: "center", color: "white" }}><BeatLoader color='white' /></h1> : this.filterInputUI()}</h3></div>
            </div>

          </div> */}

          <div className="sta891color_State_body">
            <li className="sta891Table_Header_">
              <div
                className="sta891Col sta891Col-0"
                style={
                  convert === "states"
                    ? { cursor: "pointer", color: "green" }
                    : { cursor: "pointer", color: "red" }
                }
                onClick={() => this.headerClick("states")}
              >
                Districts{" "}
                {"states" === convert && colorconvert ? (
                  <BsFillCaretUpFill color="green" />
                ) : (
                  <BsFillCaretDownFill color="red" />
                )}
              </div>
              <div
                className="sta891Col sta891Col-1"
                style={
                  convert === "confirm"
                    ? { cursor: "pointer", color: "green" }
                    : { cursor: "pointer", color: "red" }
                }
                onClick={() => this.headerClick("confirm")}
              >
                Confirmed{" "}
                {"confirm" === convert && colorconvert ? (
                  <BsFillCaretUpFill color="green" />
                ) : (
                  <BsFillCaretDownFill color="red" />
                )}
              </div>
              <div
                className="sta891Col sta891Col-2"
                style={
                  convert === "tested"
                    ? { cursor: "pointer", color: "green" }
                    : { cursor: "pointer", color: "red" }
                }
                onClick={() => this.headerClick("tested")}
              >
                Tested{" "}
                {"tested" === convert && colorconvert ? (
                  <BsFillCaretUpFill color="green" />
                ) : (
                  <BsFillCaretDownFill color="red" />
                )}
              </div>
              <div
                className="sta891Col sta891Col-3"
                style={
                  convert === "recover"
                    ? { cursor: "pointer", color: "green" }
                    : { cursor: "pointer", color: "red" }
                }
                onClick={() => this.headerClick("recover")}
              >
                Recovered{" "}
                {"recover" === convert && colorconvert ? (
                  <BsFillCaretUpFill color="green" />
                ) : (
                  <BsFillCaretDownFill color="red" />
                )}
              </div>
              <div
                className="sta891Col sta891Col-4"
                style={
                  convert === "deceased"
                    ? { cursor: "pointer", color: "green" }
                    : { cursor: "pointer", color: "red" }
                }
                onClick={() => this.headerClick("deceased")}
              >
                Deceased{" "}
                {"deceased" === convert && colorconvert ? (
                  <BsFillCaretUpFill color="green" />
                ) : (
                  <BsFillCaretDownFill color="red" />
                )}
              </div>
            </li>
          </div>
          {loadingg ? null : this.getDistrictUI()}
        </>
      );
    } else {
      return (
        <h1 style={{ textAlign: "center", color: "white" }}>
          404 Error Not Found!!
        </h1>
      );
    }
  }

  headerClick = (sortKey) => {
    const { district, dataObject, data, isAsc, sortBy } = this.props.covidData;

    if (sortKey == sortBy) {
      this.props.districtData(district, dataObject, data, !isAsc, sortKey);
    } else {
      this.props.districtData(district, dataObject, data, isAsc, sortKey);
    }
  };

  inputHandler = (e) => {
    this.setState({ searchterm: e.target.value });
  };

  //FUNCTION TO SHOW DISTRICT DATA
  getDistrictUI = () => {
    const final = this.props.covidData.district ?? [];
    return (
      <>
        {final.map((item) => {
          return (
            <div style={{ marginLeft: "110px" }}>
              <ul className="sta891responsive-table">
                <li className="sta891Statedata_table_row link dim black b shadow-5">
                  <div className="sta891Col  sta891Col-0">{item.id}</div>
                  <div className="sta891Col  sta891Col-1">
                    {isNaN(item.confirmed) ? (
                      "N/A"
                    ) : (
                      <NumberFormat
                        value={item.confirmed}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    )}
                  </div>
                  <div className="sta891Col  sta891Col-2">
                    {isNaN(item.tested) ? (
                      "N/A"
                    ) : (
                      <NumberFormat
                        value={item.tested}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    )}
                  </div>
                  <div className="sta891Col  sta891Col-3">
                    {isNaN(item.recovered) ? (
                      "N/A"
                    ) : (
                      <NumberFormat
                        value={item.recovered}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    )}
                  </div>
                  <div className="sta891Col  sta891Col-4">
                    {isNaN(item.deceased) ? (
                      "N/A"
                    ) : (
                      <NumberFormat
                        value={item.deceased}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    )}
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </>
    );
  };

  filterInputUI = () => {
    const statearray = Object.keys(State_List);
    const statemapping = statearray
      .filter((val, i) => {
        const value = State_List[val];
        if (this.state.searchterm == "") {
          return;
        } else if (
          value.toLowerCase().includes(this.state.searchterm.toLowerCase())
        ) {
          return <>value</>;
        }
      })
      .map((val, i) => {
        return (
          <Link to={val} style={{ color: "white", textDecoration: "none" }}>
            <div className="sta891Box">{State_List[val]}</div>
          </Link>
        );
      });
    return <>{statemapping}</>;
  };
}

const mapStateToProps = (state) => {
  return { covidData: state.covidData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCovidData: (matchID) => dispatch(fetchCovidData(matchID)),
    districtData: (district, object, homeData, isAsc, sort) =>
      dispatch(districtData(district, object, homeData, isAsc, sort)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(District);

// setDistrictData:(matchID,dataObject)=>dispatch(setDistrictData(matchID,dataObject))
