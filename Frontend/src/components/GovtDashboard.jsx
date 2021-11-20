import React from 'react'
import axios from 'axios'

const GovtDashboard=()=>{

    const [state, setState] = React.useState('')
    const [ cityData, setCityData] = React.useState([])
    const [data, setData] = React.useState([])
    const [city, setCity] = React.useState('')
    const [storeDetails, setStoreDetails] = React.useState([])


    React.useEffect(()=>{
        axios.get( 'http://localhost:8080/store')
        .then((res)=> setData( res.data.stores))
        .catch((err)=> console.log(err))
    },[])

    React.useEffect(()=>{
          let res = data.filter((el)=> el.state === state)
          let cities =  new Set( res.map((el)=> el.city) )

          cities= [...cities]
        //   console.log(cities)
          setCityData(cities)
    },[state])

    React.useEffect(()=>{
          let res = data.filter((el)=> el.city === city)
           setStoreDetails( res )
    },[city])
    
    console.log(cityData, storeDetails)

    return(
        <div style={{margin:'100px auto'}}>
          
          <h2>Choose Location</h2>

          <select onChange= {(e)=>setState(e.target.value)}>
              <option  value = '' >--- Choose State ---</option>
              <option value = 'uttar pradesh'> Uttar Pradesh </option>
              <option value = 'Gujarat'> Gujarat </option>
          </select>

          <select onChange= {(e)=>setCity(e.target.value)}>
              <option  value = '' >--- Choose City ---</option>
              {
                  cityData?.map((el)=> <option value = {el} key={el}> {`${el}`} </option>)
              }
             
          </select>


            {
            state.length >  0 && city.length > 0 && storeDetails && 
            <div className="container border">
                <div className="row text-start padding-y-5">
                <h1>Dash Board</h1>
                </div>
                <div className="row m-0 p-0">
                <div className="col-12 border">
                    <div className="row border">
                    <div className="col-2 border py-2">Store Name</div>
                    <div className="col-1 border py-2">Product</div>
                    <div className="col-1 border py-2">Supply (kg)</div>
                    <div className="col-2 border py-2">Received (kg)</div>
                    <div className="col-2 border py-2">Dispatch Details</div>
                    <div className="col-2 border py-2">Owner Details</div>
                    <div className="col-1 border py-2">Total Purchase (kg)</div>
                    <div className="col-1 border py-2">Buffer (kg)</div>

                    </div>
                </div>

        
                <div className="col-12">
                    {storeDetails.map((e,i) => (
                    
                    <div>
                        {e.inventory.map((inv) => (
                        <div className="row">
                            <div className="col-2 py-2 ">{e.name}</div>
                            <div className="col-1 py-2 ">{inv.name}</div>
                            <div className="col-1 py-2 ">{inv.supplied}</div>
                            <div className="col-2 py-2 ">{inv.received}</div>
                            <div className="col-2 py-2 ">Dispatched</div>
                            <div className="col-2 py-2 ">Owner</div>
                            <div className="col-1 py-2 ">{inv.used}</div>
                            <div className="col-1 py-2 ">{inv.remaining}</div>
                        </div>
                        ))}
                    </div>
                    ))}
                </div>
                </div>

                {/* <div className="row padding-y-5">
                <div className="col-4">
                    <h4 className="color-theme">total Price : {1231}</h4>
                </div>
                <div className="offset-4 col-4">
                    <button className="blue-button">Purchase</button>
                </div>
                </div> */}
            </div>
        }


          


        </div>
    )
}

export {GovtDashboard}
