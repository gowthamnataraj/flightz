import React, { useEffect, useState } from "react";
import "./FlightSeat.css"
import { useNavigate } from "react-router-dom";

const FlightSeat=(prop)=>
{
  const navigator=useNavigate();

  console.log(prop.value);
  const [temp1,settemp1]=useState(prop.value.SeatAvailable[0].split(","))
  
  
  console.log(temp1)
  const[SaveChangedSeat1,setSaveChangedSeat]=useState(prop.value.SeatAvailable[0].split(","));
  function SaveChangedSeat(event)
  {
    console.log(event.target.id)
   
    if(SaveChangedSeat1.includes(event.target.id) )
    {
      const SelectedSeat=SaveChangedSeat1.filter((id)=>id!=event.target.value)
      setSaveChangedSeat(SelectedSeat)
    }
    else{
      const SelectedSeat=[...SaveChangedSeat1,event.target.id]
      setSaveChangedSeat( SelectedSeat)
    }
    
    
   
   
  }

  useEffect(()=>
  {
    
  },[])
 var temp=[prop.value._id]

 console.log(temp)
  function PasangerDetails()
    {
        navigator("/PasangerDetails",{state:{value:{"id":temp,"list":SaveChangedSeat1,"class":"Secondaray"}}})
    }
    return(
      

    
  
   

<>

    <div className="plane">
        
      <div className="fuselage">
        
      </div>
      <ol className="cabin fuselage">
        <li className="row row--1">
          <ol className="seats" type="A">
            {temp1.includes("1A")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1A" onClick={SaveChangedSeat} />
            <label for="1A">1A</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1A" onClick={SaveChangedSeat} />
              <label for="1A">1A</label>
            </li>)}
            
          {temp1.includes("1B")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1B" onClick={SaveChangedSeat} />
            <label for="1B">1B</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1B" onClick={SaveChangedSeat} />
              <label for="1B">1B</label>
            </li>)}  
            {temp1.includes("1C")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1C" onClick={SaveChangedSeat} />
            <label for="1C">1C</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1C" onClick={SaveChangedSeat} />
              <label for="1C">1C</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="1C" />
              <label for="1C">1C</label>
            </li> */}
             {temp1.includes("1D")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1D" onClick={SaveChangedSeat} />
            <label for="1D">1D</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1D" onClick={SaveChangedSeat} />
              <label for="1D">1D</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" disabled id="1D" />
              <label for="1D">Occupied</label>
            </li> */}
             {temp1.includes("1E")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1E" onClick={SaveChangedSeat} />
            <label for="1E">1E</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1E" onClick={SaveChangedSeat} />
              <label for="1E">1E</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="1E" />
              <label for="1E">1E</label>
            </li> */}
             {temp1.includes("1F")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="1F" onClick={SaveChangedSeat} />
            <label for="1F">1F</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="1F" onClick={SaveChangedSeat} />
              <label for="1F">1F</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="1F" />
              <label for="1F">1F</label>
            </li> */}
          </ol>
        </li>
        <li className="row row--2">
          <ol className="seats" type="A">
          {temp1.includes("2A")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2A" onClick={SaveChangedSeat} />
            <label for="2A">2A</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2A" onClick={SaveChangedSeat} />
              <label for="2A">2A</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2A" />
              <label for="2A">2A</label>
            </li> */}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2B" />
              <label for="2B">2B</label>
            </li> */}
             {temp1.includes("2B")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2B" onClick={SaveChangedSeat} />
            <label for="2B">2B</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2B" onClick={SaveChangedSeat} />
              <label for="2B">2B</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2C" />
              <label for="2C">2C</label>
            </li> */}
             {temp1.includes("2C")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2C" onClick={SaveChangedSeat} />
            <label for="2C">2C</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2C" onClick={SaveChangedSeat} />
              <label for="2C">2C</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2D" />
              <label for="2D">2D</label>
            </li> */}
             {temp1.includes("2D")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2D" onClick={SaveChangedSeat} />
            <label for="2D">2D</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2D" onClick={SaveChangedSeat} />
              <label for="2D">2D</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2E" />
              <label for="2E">2E</label>
            </li> */}
             {temp1.includes("2E")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2E" onClick={SaveChangedSeat} />
            <label for="2E">2E</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2E" onClick={SaveChangedSeat} />
              <label for="2E">2E</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="2F" />
              <label for="2F">2F</label>
            </li> */}
             {temp1.includes("2F")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="2F" onClick={SaveChangedSeat} />
            <label for="2F">2F</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="2F" onClick={SaveChangedSeat} />
              <label for="2F">2F</label>
            </li>)}
          </ol>
        </li>
        <li className="row row--3">
          <ol className="seats" type="A">
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3A" />
              <label for="3A">3A</label>
            </li> */}
             {temp1.includes("3A")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3A" onClick={SaveChangedSeat} />
            <label for="3A">3A</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3A" onClick={SaveChangedSeat} />
              <label for="3A">3A</label>
            </li>)}

            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3B" />
              <label for="3B">3B</label>
            </li> */}
             {temp1.includes("3B")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3B" onClick={SaveChangedSeat} />
            <label for="3B">3B</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3B" onClick={SaveChangedSeat} />
              <label for="3B">3B</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3C" />
              <label for="3C">3C</label>
            </li> */}
             {temp1.includes("3C")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3C" onClick={SaveChangedSeat} />
            <label for="3C">3C</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3C" onClick={SaveChangedSeat} />
              <label for="3C">3C</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3D" />
              <label for="3D">3D</label>
            </li> */}
             {temp1.includes("3D")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3D" onClick={SaveChangedSeat} />
            <label for="3D">3D</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3D" onClick={SaveChangedSeat} />
              <label for="3D">3D</label>
            </li>)}
            {temp1.includes("3E")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3E" onClick={SaveChangedSeat} />
            <label for="3E">3E</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3E" onClick={SaveChangedSeat} />
              <label for="3E">3E</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3E" />
              <label for="3E">3E</label>
            </li> */}
             {temp1.includes("3F")?
            (<li className="seat">
              
            <input type="checkbox" disabled id="3F" onClick={SaveChangedSeat} />
            <label for="3F">3F</label>
          </li>):(<li className="seat">
              
              <input type="checkbox"  id="3F" onClick={SaveChangedSeat} />
              <label for="3F">3F</label>
            </li>)}
            {/* <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="3F" />
              <label for="3F">3F</label>
            </li> */}
          </ol>
        </li>
        <li className="row row--4">
          <ol className="seats" type="A">
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4A" />
              <label for="4A">4A</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4B" />
              <label for="4B">4B</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4C" />
              <label for="4C">4C</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4D" />
              <label for="4D">4D</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4E" />
              <label for="4E">4E</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="4F" />
              <label for="4F">4F</label>
            </li>
          </ol>
        </li>
        <li className="row row--5">
          <ol className="seats" type="A">
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5A" />
              <label for="5A">5A</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5B" />
              <label for="5B">5B</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5C" />
              <label for="5C">5C</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5D" />
              <label for="5D">5D</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5E" />
              <label for="5E">5E</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="5F" />
              <label for="5F">5F</label>
            </li>
          </ol>
        </li>
        <li className="row row--6">
          <ol className="seats" type="A">
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="6A" />
              <label for="6A">6A</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="6B" />
              <label for="6B">6B</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="6C" />
              <label for="6C">6C</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="6D" />
              <label for="6D">6D</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="6E" />
              <label for="6E">6E</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="6F" />
              <label for="6F">6F</label>
            </li>
          </ol>
        </li>
        <li className="row row--7">
          <ol className="seats" type="A">
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="7A" />
              <label for="7A">7A</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="7B" />
              <label for="7B">7B</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="7C" />
              <label for="7C">7C</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="7D" />
              <label for="7D">7D</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="7E" />
              <label for="7E">7E</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="7F" />
              <label for="7F">7F</label>
            </li>
          </ol>
        </li>
        <li className="row row--8">
          <ol className="seats" type="A">
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="8A" />
              <label for="8A">8A</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="8B" />
              <label for="8B">8B</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="8C" />
              <label for="8C">8C</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="8D" />
              <label for="8D">8D</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="8E" />
              <label for="8E">8E</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="8F" />
              <label for="8F">8F</label>
            </li>
          </ol>
        </li>
        <li className="row row--9">
          <ol className="seats" type="A">
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="9A" />
              <label for="9A">9A</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="9B" />
              <label for="9B">9B</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="9C" />
              <label for="9C">9C</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="9D" />
              <label for="9D">9D</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="9E" />
              <label for="9E">9E</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="9F" />
              <label for="9F">9F</label>
            </li>
          </ol>
        </li>
        <li className="row row--10">
          <ol className="seats" type="A">
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="10A" />
              <label for="10A">10A</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="10B" />
              <label for="10B">10B</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="10C" />
              <label for="10C">10C</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="10D" />
              <label for="10D">10D</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="10E" />
              <label for="10E">10E</label>
            </li>
            <li className="seat">
              <input onClick={SaveChangedSeat} type="checkbox" id="10F" />
              <label for="10F">10F</label>
            </li>
          </ol>
        </li>
      </ol>
      <div className="fuselage">
        
      </div>
    </div>
    <button onClick={PasangerDetails}>Next</button>
  </>
    )
}
export default FlightSeat;