import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Title from '../components/Title';
import TextSection from '../components/TextSection';
import Tour from '../images/tourlodge.jpg';
import Treats from '../images/cafe.jpg';
import Directions from '../images/directions.jpg';
import Policies from '../images/policy.jpg';
import Announcement from '../components/Announcement';


const About = () => {

  const SliderDataThree = [
    {
        title: "Welcome to Little Heaven Bed & Breakfast", 
        titletwo: 'a true experience of Peace, Joy, Love, Hope, and Faith',
        image: "https://i.postimg.cc/65XrRCVf/littleheavenbedandbreakfast.jpg", 
        alt: 'Lodge'
    }, 
    {
        title: "From Modern Decor to Luxurious Comfort",
        titletwo: 'You will forget where you are',
        image: "https://i.postimg.cc/1Rcgk26D/lodgehero.jpg", 
        alt: 'Lodge', 
    }, 
    {
        title: "Six Unique and Elegant Rooms",
        titletwo: 'for the perfect getaway',
        image: "https://i.postimg.cc/2j2kFDh9/littleheavenb-b.jpg", 
        alt: 'Lodge', 
    }, 
    {
        title: 'Mountain Views Surround You', 
        titletwo: 'relax and let them take your worries away',
        image: "https://i.postimg.cc/432CHJrp/outsidetwo.jpg", 
        alt: 'Lodge'
    }, 
    {
        title: 'An Exquisite, Rustic Experience', 
        titletwo: 'The openness carries itself inside',
        image: "https://i.postimg.cc/D0dBs68R/outsidethree.jpg", 
        alt: 'Lodge'
    }, 
    {
        title: 'We Thank you', 
        titletwo: 'for choosing Little Heaven Bed & Breakfast',
        image: "https://i.postimg.cc/rsQ5MPdy/littleheavenbb.jpg", 
        alt: 'Lodge'
    }, 
]; 

 

  return (
    <>
      <Announcement />
      <Hero slides={SliderDataThree} />
      <Title title="Little Heaven Bed & Breakfast" titletwo="Explore Little Heaven Bed & Breakfast:" paragraph="Stay in the heart of Yadkin County in this elegantly-rustic Yadkin Valley Bed and Breakfast. Little Heaven Bed and Breakfast is less than an hour away from the northwestern Virginia / North Caolina state line, Winston-Salem, Greensboro and High Point and just over an hour away from Charlotte. Views from the Blue Ridge Parkway are within driving distances. There are numerous wineries in the Yadkin Valley that you can enjoy tasing and fine dining. The outdoors will transform your soul when you experience the rawness that the Yadkin Valley has to offer. On the property, there is a pond where you can fish, there is 10 acres full of woods and open space to explore with yourself or your loved ones. Aside from the mountains, we have endless rivers and lakes around the area as well. Little Heaven Bed & Breakfast welcomes you, and thanks you from the bottom of our hearts for the opportunity to provide you with a heavenly experience." />
      <br />
      <TextSection paragraph="The Cabin is a very inviting, warm, spacious, and exquisite space with all of it's brand-new upgrades. Every room has been completely renovated from floor to ceiling. With every detail meticulously thought out, you will feel like arriving home every time you step foot onto the Bed & Breakfast. The comforts and amenities allow you to feel the luxury of fine lodging. The fireplaces in every room warm up your body and soul. The views are spectacular and the nature at your footsteps is why we pride ourselves in our beautiful location. The property has a pond where you can catch fish or just enjoy the view around the campfire.
            
            There is Wi-Fi throughout the cabin so don't worry about being completely off the grid if that's not your thing. For those that do love being off the grid, we have ten pristine acres of wilderness and open fields. The deck on the front overlooks the pond and the endless open skies. Once you've soaked enough wilderness, you can rest your self on the comfortable beds that the Cabin has to offer. 
            
            Every room has either a King or Queen size bed with premium sheets and comforters, a high definition 52in TV, a fireplace, office space, a shower or a tub, your own cooling system and magnificent views of the mountains.
            
            In the main living area you will find an open floor plan that opens up to the second story allowing you to open up to the beautiful views. There is a kitchen bar, a conference room with dining tables, booths, and chairs, and a high definition TV and fireplace in the main living area. 
            
            Give Little Heaven Bed & Breakfast a chance, you will be happy you did! We believe that if you stay ONCE you WILL want to come back time and time again." />
      <br />
    

        <section style={{ fontSize: '1.5rem', color: 'black', textAlign: 'center' }}>

          <div style={{ display: 'block', padding: '0', justifyContent: 'center' }}>

            <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'rgba(240, 116, 8, 0.848)' }}>Experience Little Heaven Bed & Breakfast:</h1>

          </div>
        </section>

        <iframe className="video-js" width="560" height="315" src="https://www.youtube.com/embed/YrphcwOyxUM?si=ez5TNkXR6XwzB4BD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <br />
        <br />

        <div style={{ fontSize: '1.5rem', color: 'black', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0', paddingBottom: '0', marginLeft: '1rem', marginRight: '1rem', height: '100%', width: 'auto' }}>
        <section style={{ fontSize: '1.5rem', color: 'black', textAlign: 'center' }}>

          <div style={{ display: 'block', padding: '0', justifyContent: 'center' }}>

            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Col style={{
                backgroundColor: 'white',
              }}>

                <article className="room" data-aos='zoom-in-down'
                  data-aos-duration='1200'
                  data-aos-anchor-placement='center top'>
                  <h2 className="room-info">Tours & Amenities</h2>
                  <br />
                  <div className="img-container">
                    <img src={Tour} alt="single card" className="smallimg" />
                    <Link to={'/tour'} className="btn-primary room-link">
                      <h2 style={{ color: 'white', textDecoration: 'underline' }}>Tour the Cabin, grounds and view amenities.</h2>
                    </Link>
                  </div>
                </article>

                <Col style={{
                  backgroundColor: 'white',
                }}>

                  <article className="room" data-aos='zoom-in-down'
                    data-aos-duration='1200'
                    data-aos-anchor-placement='center bottom'>
                    <h2 className="room-info">Breakfast & Treats</h2>
                    <br />
                    <div className="img-container">
                      <img src={Treats} alt="single card" className="smallimg" />
                      <Link to={'/breakfast'} className="btn-primary room-link">
                        <h2 style={{ color: 'white', textDecoration: 'underline' }}>Home cooked breakfasts daily and afternoon treats.</h2>
                      </Link>
                    </div>
                  </article>
                </Col>
              </Col>


              <Col style={{
                backgroundColor: 'white',
              }}>

                <article className="room" data-aos='zoom-in-down'
                  data-aos-duration='1200'
                  data-aos-anchor-placement='center bottom'>
                  <h2 className="room-info">Directions</h2>
                  <br />
                  <div className="img-container">
                    <img src={Directions} alt="single card" className="smallimg" />
                    <Link to={'/directions'} className="btn-primary room-link">
                      <h2 style={{ color: 'white', textDecoration: 'underline' }}>We are in the heart of the Yadkin Valley.</h2>
                    </Link>
                  </div>
                </article>


                <Col style={{
                  backgroundColor: 'white',
                }}>

                  <article className="room" data-aos='zoom-in-down'
                    data-aos-duration='1200'
                    data-aos-anchor-placement='center top'>
                    <h2 className="room-info">Policies</h2>
                    <br />
                    <div className="img-container">
                      <img src={Policies} alt="single card" className="smallimg" />
                      <Link to={'/policies'} className="btn-primary room-link">
                        <h2 style={{ color: 'white', textDecoration: 'underline' }}>FAQ and helpful info to plan your stay.</h2>
                      </Link>
                    </div>
                  </article>

                </Col>
              </Col>
            </Row>
            <br />
            <br />

          </div>

        </section>

      </div>



    </>

  )
}

export default About;
