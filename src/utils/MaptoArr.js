import STATECODES from "../helper/Statelist";

export const tabledatatoarr = (data) => {
  const fullData = [];
  for (let obj in data) {
    if (obj === "TT") continue;

    const statedata = {
      id: obj,
      name: STATECODES[obj],
      data: data[obj],
      confirmed: data[obj].total.confirmed,
      tested: data[obj].total.tested,
      deceased: data[obj].total.deceased,
      recovered: data[obj].total.recovered,
      vaccinated: data[obj].total.vaccinated,
      districts: data[obj].districts,
    };
    fullData.push(statedata);
  }

  return fullData;
};

export const districtItem = (cardData, reuseMatchid) => {
  const Datareal = cardData[reuseMatchid];
  const stateData = [];
  for (let data in Datareal["districts"]) {
    const Districtobjects = {
      id: data,
      name: data,
      // Data: Datareal[ 'districts' ][ data ],
      confirmed: Datareal["districts"][data].total.confirmed,
      tested: Datareal["districts"][data].total.tested,
      recovered: Datareal["districts"][data].total.recovered,
      deceased: Datareal["districts"][data].total.deceased,
      vaccinated: Datareal["districts"][data].total.vaccinated,
    };
    stateData.push(Districtobjects);
  }
  return stateData;
};
