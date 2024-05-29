import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { SelectPicker } from 'rsuite';
import moment from 'moment';

const Home = () => {
  // let param = useParams()
  // const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
  //   item => ({ label: item, value: item })
  // );
  // let temp = Array.from({length: 24}, (_, hour) =>console.log('hour :>> ', hour))
  // console.log('temp :>> ', temp);
  // let hours = Array.from({length: 48}, (_, hour) =>moment({ hour: Math.floor(hour / 2),minutes: (hour % 2 === 0 ? 0 : 30)}).format('HH:mm A'));
  // hours = hours.map(item => ({ label: item, value: item }))
  // console.log(hours);
  // console.log('param :>> ', data);

  // Import Moment.js library
  // const moment = require('moment');

  // Function to generate time slots at every hour and half hour
  //   function generateTimeSlots() {
  //   const timeSlots = [];
  //   const startTime = moment('00:00', 'HH:mm');
  //   const endTime = moment('23:59', 'HH:mm');

  //   // Loop through each time slot from start to end time
  //   let currentTime = startTime.clone();
  //   console.log('currentTime :>> ', currentTime);
  //   while (currentTime <= endTime) {
  //     // Add current time to timeSlots array
  //     timeSlots.push(currentTime.format('h:mm A'));

  //     // Increment current time by 30 minutes
  //     currentTime.add(30, 'minutes');

  //     // If current time is exactly on the hour, increment by another 30 minutes
  //     if (currentTime.minutes() === 0) {
  //       currentTime.add(30, 'minutes');
  //     }
  //   }

  //   return timeSlots;
  // }
  function getCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var meridiem = hours >= 12 ? "PM" : "AM";
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    // Add leading zeros to minutes if necessary
    minutes = minutes < 10 ? "0" + minutes : minutes;
    // Construct the time string
    var timeString = hours + ":" + `${minutes > 30 ? "30" : "00"}` + " " + meridiem;
    return timeString;
  }
  const [currentTime, setCurrentTime] = useState(getCurrentTime())
  function generateTimeArray() {
    var times = [];
    for (var hour = 0; hour <= 23; hour++) {
      for (var minute = 0; minute < 60; minute += 30) {
        var hour12 = hour % 12 || 12; // Convert hour to 12-hour format
        var amPm = hour < 12 ? "AM" : "PM"; // Determine AM or PM
        var hourStr = (hour12 < 10 ? "0" : "") + hour12;
        var minuteStr = (minute === 0 ? "00" : minute);
        var timeStr = hourStr + ":" + minuteStr + " " + amPm;
        times.push(timeStr);
      }
    }

    return times;
  }
  let timeArray = generateTimeArray();
  console.log("🐒 ~ file: Home.jsx:77 ~ Home ~ timeArray:", timeArray)
  let crenttime = timeArray.indexOf(getCurrentTime())
  let finalArray = timeArray.slice(timeArray.indexOf(getCurrentTime()))
  console.log("🐒 ~ file: Home.jsx:79 ~ Home ~ finalArray:",crenttime , finalArray)
  timeArray = timeArray?.map(item => ({ label: item, value: item }))
  
  return (
    <div className='row'>
      <h1>Home Page</h1>
      <div className='col-12 mt-3'>

        <SelectPicker
          searchable={false}
          style={{ width: 224 }}
          placeholder="Select without search"
          className='custom-select-picker'
          data={timeArray}
          value={currentTime}
          onChange={(e) => setCurrentTime(e)}
        />
      </div>
      <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contacts </Link> */}


      </nav>
    </div>
  )
}

export default Home
