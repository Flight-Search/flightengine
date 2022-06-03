import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';

const Home: NextPage = () => {
  var now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const yyyy = now.getFullYear();
  let today = yyyy + '-' + mm + '-' + dd;


  const [airports, setAirports] = useState(null);
  const [ tripType, setTripType ] = useState('Round trip');
  const [ fareType, setFareType ] = useState('Economy');
  const [ passengers, setPassengers ] = useState(1);
  const [ origin, setOrigin ] = useState(null);
  const [ destination, setDestination ] = useState(null);
  const [ startDate, setStartDate ] = useState(today);
  const [ endDate, setEndDate ] = useState(null);

  return (
    <div>
      <div className='flex-col'>
        <div className='flex'>
          <div>
            <select>
              <option>Round trip</option>
              <option>One way</option>
            </select>
          </div>
          <div>
            <select>
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First</option>
            </select>
          </div>
          <div>
            <Image src='/person.svg' alt='person icon' width={20} height={20}/>
          </div>
        </div>
        <div className='flex justify-around'>
          <input value='Where from?'></input>
          <input value='Where to?'></input>
          <input type='date' value={startDate}></input>
          <input type='date'></input>
        </div>
      </div>
    </div>
  )
}

export default Home
