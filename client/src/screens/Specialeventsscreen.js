import React from 'react';
import TextSection from '../components/TextSection';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import eventmenu from '../images/eventmenu.jpg';
import { Link } from 'react-router-dom';
import Photos from '../components/Photos';
import '../components/Photos.css';
import event from '../video/event.MP4';
import eventone from '../images/eventone.jpg';
import eventtwo from '../images/eventtwo.jpg';
import eventthree from '../images/eventthree.jpg';
import eventfour from '../images/eventfour.jpg';
import VideoPlayer from "react-video-js-player";


const Specialeventsscreen = () => {

  const galleryImages = [
    {
      img: 'https://i.postimg.cc/BZy2Nps9/event.jpg'
    },
    {
      img: 'https://i.postimg.cc/nhPPK5T8/eventtwoo.jpg'
    },
    {
      img: 'https://i.postimg.cc/N00QFWMW/eventthreee.jpg'
    }
    
  ]

  const pastryImages = [
    {
      img: 'https://i.postimg.cc/Vkj9cHwG/cake1.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/0QN7DkwF/cake2.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/fWpYShTq/cake3.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/0ydS4MGh/cake4.jpg'
    }, 

  ]

  return (
    <>
      <br />
      <br />
      <br />
      <h1>Special Events & Celebrations</h1>
      <h1 style={{ textAlign: 'center', verticalAlign: 'middle', marginBottom: '4rem', color: 'darkorange' }}>Check out our upcoming events!</h1>
      <section stle={{ fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0', paddingBottom: '0', marginLeft: '1rem', marginRight: '1rem', width: '50%', height: 'auto' }}>

        {/* {/* <div style={{ display: 'block', flexDirection: 'row' }}>
        <Photos galleryImages={pastryImages} />
        <div className='demo' id='demo' style={{ backgroundColor: 'darkorange' }}>
          <div className='container'>
            <div className='col-1'>
              <img className="smallimgthree" src="https://i.postimg.cc/25wGRXYd/grandopening.jpg" alt="menu" />
            </div>
            <div className='col-1'>
              <br />
              <p>Little Heaven Cafe's Grand Opening!</p>
              <p style={{ fontSize: '30px' }}>
                Come and try our DELICIOUS pastries! You will leave wanting more! Bring all your loved ones for a very sweet evenening.</p>
              <br />
              <button style={{ backgroundColor: 'black' }} className='btn-primary'><a style={{ color: 'white', textDecoration: "none" }} href="https://www.facebook.com/share/v/KNyPFEf5VcWWAV8k/?mibextid=WC7FNe" >Go to Facebook Event</a></button>
            </div>
          </div>
        </div> */}
        
        <div className='demo' id='demo' style={{ backgroundColor: 'darkorange' }}>
          <div className='container'>
            <div className='col-1'>
              <img className="smallimgthree" src="https://i.postimg.cc/90p03cSn/giveaway.jpg" alt="menu" />
            </div>
            <div className='col-1'>
              <br />
              <p>TWO NIGHTS GIVEAWAY</p>
              <p style={{ fontSize: '30px' }}>How you would like to have 2 nights stay for you to enjoy or for someone else as a gift to them at Little Heaven?
                Well, that is very easy! I Just follow these 3 steps 👇and get an entry for the raffle every day !</p>
              <br />
              <button style={{ backgroundColor: 'black' }} className='btn-primary'><a style={{ color: 'white', textDecoration: "none" }} href="https://www.facebook.com/story.php?story_fbid=312966005044049&id=100089919546738&mibextid=I6gGtw">Go to Facebook Event</a></button>
            </div>
          </div>
        </div>
          <div className='demo' id='demo' style={{ backgroundColor: 'darkorange' }}>
            <div className='container'>
              <div className='col-1'>
                <br />
                <p>Wine Tasting In Little Heaven</p>
                <p style={{ fontSize: '30px' }}>Pease give us a call for more details!❤️</p>
                <br />
              
              </div>
              <div className='col-1'>
                <img className="smallimgthree" src='https://i.postimg.cc/qq0cXMyb/winetasting.jpg' alt="menu" />
              </div>
            </div> 
            </div>
        
        <div className='demo' id='demo' style={{ backgroundColor: 'darkorange' }}>
          <div className='container'>
         
            <div className='col-1'>
              <img className="smallimgthree" src="https://i.postimg.cc/5yFgpkRy/singles.jpg" alt="menu" />
            </div>
            <div className='col-1'>
              <br />
              <p>Give us a call for more details</p>
            </div>
          </div>
        </div> 
        <div className='demo' id='demo' style={{ backgroundColor: 'darkorange' }}>
          <div className='container'>
          <div className='col-1'>
              <br />
              <p>Give us a call for more details.</p>
            </div>
            <div className='col-1'>
              <img className="smallimgthree" src="https://i.postimg.cc/sXZy93sh/winetwo.jpg" alt="menu" />
            </div>
            
          </div>
        </div> 
        <div className='demo' id='demo' style={{ backgroundColor: 'darkorange' }}>
          <div className='container'>
          
            <div className='col-1'>
              <img className="smallimgthree" src="https://i.postimg.cc/wTRxccxr/winethree.jpg" alt="menu" />
            </div>
            <div className='col-1'>
              <br />
              <p>Give us a call for more details.</p>
            </div>
          </div>
        </div> 

        


          {/* <br /> */}

          {/* <div className='demo' id='demo'> */}
            {/* <div className='container'>
              <div className='col-1'> */}
            <br />
            {/* <p style={{ fontSize: '50px', textAlign: 'center', textDecoration: 'bold' }}>Christmas Dinner Party</p>
            <p style={{ fontSize: '30px', textAlign: 'center', textDecoration: 'bold' }}>Come join the fun and celebration!</p> */}
            {/* <VideoPlayer
              src={event}
              width="30%"
              height="auto"
            /> */}
            {/* <div style={{ paddingBottom: "56.25%", paddingRight: '0', paddingLeft: '0', position: "relative", display: "block", width: "100%" }}>
                  <iframe width="100%" height="100%"
                    src={event} frameborder="0" allowfullscreen="" style={{ position: "absolute", top: "0", right: '0', bottom: '0', left: "0" }}>
                  </iframe>
                </div> */}
{/* 
            <br />
            <div className="section-title">
              <img className=".video-js" src={eventmenu} alt="menu" />
            </div>
            <div className="section-title">
              <button className="btn-primary" style={{ backgroundColor: 'black' }}><a style={{ color: 'white', textDecoration: "none" }} href="https://www.facebook.com/events/1494191691393241/?acontext=%7B%22event_action_history%22%3A[]%7D">Go to Facebook Event</a></button>
            </div>*/}
          {/* </div>
        </div>  */}

        {/* <br /> */}


{/* <div className='demo' id='demo' style={{ backgroundColor: 'darkorange' }}>
          <div className='container'>
           
            <div className='col-1'>
              <br />
              <p>Valentine's Date Night</p>
              <p style={{ fontSize: '30px' }}>Valentine's Date Night at Little Heaven!
                make your "Reservation" before is too late!!
                Limited space, call now</p>
              <br />
              <button style={{ backgroundColor: 'black' }} className='btn-primary'><a style={{ color: 'white', textDecoration: "none" }} href="https://www.facebook.com/100089919546738/posts/pfbid035eM3jhCXbGVS2jeYjaFxsnswEstN5GXBc7r5pncPcX2ZXwD8mEiTv3tst2nv5Ubvl/?mibextid=I6gGtw" >Go to Facebook Event</a></button>
            </div>
            <div className='col-1'>
              <img className="smallimgthree" src={eventthree} alt="menu" />
            </div>
          </div>
        </div> */}
        <br />
        {/* <div className='demo' id='demo'>
          <div className='container'>
            
            <div className='col-1'>
              <img className="smallimgthree" src="https://i.postimg.cc/150kfKwY/406848998-311892685151381-719094809553344902-n.jpg" alt="menu" />
            </div>
            <div className='col-1'>
              <br />
              <p>Be My Date </p>
              <p style={{ fontSize: '30px' }}>Are you ready to join our single mingle party??
                Reserve your spot!!</p>
              <br />
              <button style={{ backgroundColor: 'black' }} className='btn-primary'><a style={{ color: 'white', textDecoration: "none" }} href="https://www.facebook.com/story.php?story_fbid=311892721818044&id=100089919546738&mibextid=I6gGtw">Go to Facebook Event</a></button>
            </div>
          </div>
        </div> */}

        {/* <br />
        <br /> */}

        {/*<div className='demo' id='demo' style={{ backgroundColor: 'darkorange' }}>
            <div className='container'>
              <div className='col-1'>
                <img className="smallimgthree" src={eventone} alt="menu" />
              </div>
              <div className='col-1'>
                <br />
                <p>J. Lou Beauty Boutique</p>
                <p style={{ fontSize: '30px' }}>Brides and Quinceañeras, mark your CALENDAR !! Grand Opening celebration!!
                  December 16th !!! The first 50 people will receive a little gift from us for your special day!!</p>
                <br />
                <button style={{ backgroundColor: 'black' }} className='btn-primary'><a style={{ color: 'white', textDecoration: "none" }} href="https://www.facebook.com/story.php/?id=100083150506135&story_fbid=324124030369278&paipv=0&eav=AfYr-oqTha45ECm-5I9mGkzOpSRD7fVEvAR0xBytlcCPOrMzIfUpwvEYQ39G3WgVeH0&_rdr">Go to Facebook Event</a></button>
              </div>
            </div>
              </div>*/}

        {/* <br />
        <br /> */}

        {/*<div className='demo' id='demo' style={{ backgroundColor: 'darkorange' }}>
            <div className='container'>
              <div className='col-1'>
                <img className="smallimgthree" src={eventone} alt="menu" />
              </div>
              <div className='col-1'>
                <br />
                <p>J. Lou Beauty Boutique</p>
                <p style={{ fontSize: '30px' }}>Brides and Quinceañeras, mark your CALENDAR !! Grand Opening celebration!!
                  December 16th !!! The first 50 people will receive a little gift from us for your special day!!</p>
                <br />
                <button style={{ backgroundColor: 'black' }} className='btn-primary'><a style={{ color: 'white', textDecoration: "none" }} href="https://www.facebook.com/story.php/?id=100083150506135&story_fbid=324124030369278&paipv=0&eav=AfYr-oqTha45ECm-5I9mGkzOpSRD7fVEvAR0xBytlcCPOrMzIfUpwvEYQ39G3WgVeH0&_rdr">Go to Facebook Event</a></button>
              </div>
            </div>
              </div>*/}

        

        {/* <br /> */}

        <div className='demo' id='demo'>
          <div className='container'>
          
            <div className='col-1'>
              <img className="smallimgthree" src={eventtwo} alt="menu" />
            </div>
            <div className='col-1'>
              <br />
              <p>Little Heaven's Bed & Breakfast Gift Certificate</p>
              <p style={{ fontSize: '30px' }}>Come and get your Gift Certificates and make someone SMILE with Joy and gratitude!</p>
             
              <br />
              <button style={{ backgroundColor: 'black' }} className='btn-primary'><a style={{ color: 'white', textDecoration: "none" }} href="https://www.facebook.com/100089919546738/posts/pfbid02Yd7JbWJSsCwAveMEN7m1V4cc47F1m5faqcHRvUU3nDSsjocbwiit8U7rxsEDabdol/?mibextid=I6gGtw">Go to Facebook Event</a></button>
            </div>
          </div>
        </div>
        <br />





        <br />
        <br />
        <br />
        <h4 style={{ textAlign: 'center', color: 'darkorange' }}>It is a high honor to be able to host your celebration with your loved ones.</h4>
        <TextSection paragraph="Whether you are having a birthday party or a big celebration, let us host your event here! Little Heaven Bed & Breakfast is secluded so you can enjoy your party to the biggest. We have a conference room, a commercial kitchen with seating, outdoor space, a pond, and of course six guest rooms with six guest bathrooms. Check out our conference room below! Call the cabin to reserve your special day now." />
      </section>
      <Photos galleryImages={galleryImages} />
      <br />
      <br />
      <h2 style={{ textAlign: 'center', marginBottom: '4rem', color: 'rgba(240, 116, 8, 0.848)' }}>Don't miss out on the fun! We look forward to seeing you at the Cabin. Thank you!</h2>
      <br />
      <br />
    </>
  )
}

export default Specialeventsscreen
