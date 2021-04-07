export const distArray=(cardData,reuseMatchID)=>{
  const arrr=[]
     for (let obj in cardData){

     	
        const distdata={
          confirmed:cardData[reuseMatchID].total.confirmed
          
        }

        arrr.push(distdata)
       
     }

     const t=arrr.map(item=>{
      return cardData[reuseMatchID].districts
     })
     console.log("t",t)

     return t;

}