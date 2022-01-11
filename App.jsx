import React, { useEffect, useState } from 'react'

function App() {

    // const [active,setActive]=useState('');
    // const [recovered,setRecoevered]=useState('');
    // const [total,setTotal]=useState('');
    // const [death,setDeath]=useState('');
    const [country,setCountry]=useState('');
    const [datas,setDatas]=useState('')
    //  useEffect(() => {
    //  Covid();
    //  }, []);

    const Covid=()=>{
        const url=`https://corona.lmao.ninja/v2/countries/${country}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setDatas(data);
            // setActive(data.active);
            // setRecoevered(data.recovered);
            // setTotal(data.cases);
            // setDeath(data.deaths);
            
        })
    }

    // const newCovid=()=>{
    //     Covid();
    // }


    return (
      <>
      <div className="container">
      <h1>Covid Tracker</h1>
          <input type="text" placeholder='Country' value={country} onChange={(e)=>setCountry(e.target.value)}  />
          <button onClick={Covid}>Check</button>
         
        <div className="boxes">    <div className="box" id="box-1">
              <h3>Active Cases</h3>
              <p>{datas.active}</p>
          </div>
          <div className="box" id="box-2">
              <h3>Recovered Cases</h3>
              <p>{datas.recovered}</p>
          </div>
          <div className="box" id="box-3">
              <h3>Total Cases</h3>
              <p>{datas.cases}</p>
          </div>
          
          <div className="box" id="box-4">
              <h3>Total Deaths</h3>
              <p>{datas.deaths}</p>
          </div></div>

         
        
          
       </div>
          </>
    )
}

export default App




