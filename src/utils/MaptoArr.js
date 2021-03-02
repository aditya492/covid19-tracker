import STATECODES from '../helper/Statelist'


export const tabledatatoarr = data => {
  const fullData = [];

  for (let obj in data) {

     if(obj==='TT')
       continue;
  

    const statedata = {
      id:obj,
      name:STATECODES[obj],
      data: data[obj],
      confirmed:data[obj].total.confirmed,
      tested:data[obj].total.tested,
      deceased:data[obj].total.deceased,
      recovered:data[obj].total.recovered,
      vaccinated:data[obj].total.vaccinated
    }
    fullData.push(statedata);
  }
  return fullData;
}