import React from 'react'

const GovtDashboard=()=>{

    const [location, setLocation] = React.useState('')
    const [data, setData] = React.useState([])

    React.useEffect(()=>{

    },[location])
    

    return(
        <>
          
          <h2>Choose Location</h2>

          <select onChange= {(e)=>setLocation(e.target.value)}>
              <option  value = '' >--- Choose Location ---</option>
              <option value = 'bangalore'> Bangalore </option>
              <option value = 'delhi'> Delhi </option>
          </select>

          {
              location.length > 0 && <div >

                  <table border='1' style={{borderCollapse: 'collapse',tableLayout: 'fixed', width: '90%', textAlign:'center', margin:'10px auto'}}>
                      <thead>
                          <tr>
                              <th style={{ padding:'10px'}}>Store Name</th>
                              <th>Product</th>
                              <th>Supply</th>
                              <th>Received</th>
                              <th>Dispatch Details</th>
                              <th>Owner Details</th>
                              <th>Total Purchase</th>
                              <th>Buffer</th>
                          </tr>
                      </thead>
                  </table>

              </div>
          }


        </>
    )
}

export {GovtDashboard}

//Store name, product, supply, received, dispatch details, owner details,Total Purchase, Buffer