import React, { useEffect, useState } from 'react'
import "./LoginView.css"
import MoriningVideo from "../../src/assets/Afternoon.mp4"
import NightVideo from "../../src/assets/morning.mp4"

const LoginView = () => {

  const [time, setTime] = useState("");
  const [background, setBackGround] = useState({
    moring: MoriningVideo,
    afternoon : NightVideo
  })



  // console.log('counter :>> ', time);
  useEffect(() => {
    // Function to be executed every second
    const intervalId = setInterval(() => {
      let time = getLiveTime()
      setTime(time)
      // setTime(prevCounter => prevCounter + 1);
    }, 1000);
    console.log('time :>> ', time);


    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [time])
  const [state, setState] = useState(false)
  const handleVideoChanges = () => {
    setState(!state)
  }

  const getLiveTime = () => {
    let date = new Date()
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var second = date.getSeconds()
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      second = second < 10 ? '0'+ second : second
      var strTime = hours + ':' + minutes + ':'+ second + " " +ampm;
      return strTime;
  }

  return (
    <>
      <div className='main'>
        {/* <button onClick={()=> handleVideoChanges()}>change video</button> */}
        <video src={`${time.includes("am")  ? MoriningVideo : NightVideo}`} id="background-video" loop muted autoPlay />
      </div>
    </>
  )
}

export default LoginView
