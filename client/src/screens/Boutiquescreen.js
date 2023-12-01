import React from 'react'
import TextSection from '../components/TextSection'
import boutique from '../images/boutique.jpg';
import Photos from '../components/Photos';

const Specialeventsscreen = () => {

  const galleryImagesTwo = [
    {
      img: 'https://i.postimg.cc/8zF4gy7H/IMG-0019.jpg'
    },
    {
      img: 'https://i.postimg.cc/dQHGQ2PS/IMG-4888.jpg'
    },
    {
      img: 'https://i.postimg.cc/QxCkc6J3/IMG-0052.jpg'
    },
    {
      img: 'https://i.postimg.cc/HxW7dxSg/IMG-7973.jpg'
    },
    {
      img: 'https://i.postimg.cc/K8LT5CKd/IMG-4907.jpg'
    },
    {
      img: 'https://i.postimg.cc/pr49fBPW/IMG-7974.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/ZRmx34V7/IMG-0036.jpg'
    },
  ]

  return (
    <div style={{textAlign: 'center', justifyContent: 'center'}}>
      <img style={{ width: '70%', height: 'auto', textAlign: 'center', justifyContent: 'center', marginTop: '-26%', marginBottom: '-25%'}} src={boutique} alt="boutiquepic"/>
      <h4 style={{ textAlign: 'center', color: 'darkorange' }}>We are here to help others to discover their unique style through our big variety of clothing.</h4>
      <TextSection paragraph="More photos to come! If you have a special event we have it all from tuxes to dresses. Contact the Boutique at 336-615-5173 for more information."/>
      <Photos galleryImages={galleryImagesTwo} />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h4 style={{ textAlign: 'center', color: 'darkorange' }}>We invite you to come and see the boutique for yourself. You WILL find something that you will fall in love with.</h4>
      <h4 style={{ textAlign: 'center', color: 'darkorange' }}>We want you to feel like you are in "heaven".</h4>
      <h4 style={{ textAlign: 'center', color: 'darkorange' }}>Thank you!</h4>
      <br/>
      <br/>
      <br/>
      <br/>
    <br/>
  </div>
  )
}

export default Specialeventsscreen
