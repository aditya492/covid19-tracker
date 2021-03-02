import React from 'react';

const Calculatedata=(datast)=>{

 let confirmed=0
 let recover=0
 let deceased=0
 let tested=0
 let vaccinated=0

   const DataKey=Object.keys(datast)  

   DataKey.map((val,i)=>{

            if(datast[val].total.recovered && datast[val].total.tested && datast[val].total.deceased && datast[val].total.vaccinated!=null){
              confirmed+=datast[val].total.confirmed;                                
              recover+=datast[val].total.recovered;
              deceased+=datast[val].total.deceased;
              tested+=datast[val].total.tested;
              vaccinated+=datast[val].total.tested
          }
     })

  return {confirmed,recover,deceased,tested,vaccinated};
    

}

export default Calculatedata;