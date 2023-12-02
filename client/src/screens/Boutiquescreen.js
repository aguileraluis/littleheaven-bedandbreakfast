import React from 'react'
import TextSection from '../components/TextSection';
import Photos from '../components/Photos';

const Specialeventsscreen = () => {

  const galleryImagesTwo = [
    {
      img: 'https://i.postimg.cc/Hn0zB87F/2N3A5789.jpg'
    },
    {
      img: 'https://i.postimg.cc/GhQzDYRy/2N3A5797.jpg'
    },
    {
      img: 'https://i.postimg.cc/W4D7xHkG/2N3A5809.jpg'
    },
    {
      img: 'https://i.postimg.cc/FHzbJBGM/2N3A5819.jpg'
    },
    {
      img: 'https://i.postimg.cc/sXd5qDyz/2N3A5831.jpg'
    },
    {
      img: 'https://i.postimg.cc/SshzVT7N/2N3A5833.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/tJrZqX0Y/2N3A5795.jpg'
    },
    {
      img: 'https://i.postimg.cc/cCJC5VKZ/2N3A5806.jpg'
    },
    {
      img: 'https://i.postimg.cc/L4ynZ67s/2N3A5811.jpg'
    },
    {
      img: 'https://i.postimg.cc/ZYD55sBB/2N3A5836.jpg'
    },
    {
      img: 'https://i.postimg.cc/L6Y6YkLy/2N3A5841.jpg'
    },
    {
      img: 'https://i.postimg.cc/BvsqVdyy/2N3A5844.jpg'
    },
    {
      img: 'https://i.postimg.cc/x1GQM6CP/2N3A5850.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/43Jg5pHR/2N3A5853.jpg'
    },
    {
      img: 'https://i.postimg.cc/RFhzr9TP/2-N3-A5863-2.jpg'
    },
    {
      img: 'https://i.postimg.cc/q7M77PLK/2N3A5870.jpg'
    },
    {
      img: 'https://i.postimg.cc/TwB2CpXj/2N3A5872.jpg'
    },
    {
      img: 'https://i.postimg.cc/G3sm9JkX/2N3A5876.jpg'
    },
    {
      img: 'https://i.postimg.cc/SNhkR0QK/2N3A5878.jpg'
    },
    {
      img: 'https://i.postimg.cc/cL1W7Qny/2N3A5894.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/q7zdS4w1/2N3A5902.jpg'
    },
    {
      img: 'https://i.postimg.cc/rm42yjvW/2N3A5909.jpg'
    },
    {
      img: 'https://i.postimg.cc/GpBZzz3N/2N3A5918.jpg'
    },
    {
      img: 'https://i.postimg.cc/nhr5cTmz/2N3A5920.jpg'
    },
    {
      img: 'https://i.postimg.cc/Gh77NYf1/2N3A5939.jpg'
    },
    {
      img: 'https://i.postimg.cc/xTcyXZ6W/2N3A5942.jpg'
    },
    {
      img: 'https://i.postimg.cc/8CBh8gCr/2N3A5953.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/yx5RhVL2/2N3A5956.jpg'
    },
    {
      img: 'https://i.postimg.cc/Rh36Zkvd/2N3A5958.jpg'
    },
    {
      img: 'https://i.postimg.cc/T2S543c4/2N3A5974.jpg'
    },
    {
      img: 'https://i.postimg.cc/rw20qZ3G/2N3A5979.jpg'
    },
    {
      img: 'https://i.postimg.cc/m2C339Gw/2N3A5984.jpg'
    },
    {
      img: 'https://i.postimg.cc/dV98pK3Z/2N3A5988.jpg'
    },
    {
      img: 'https://i.postimg.cc/bJZkZDT1/2N3A6001.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/W3ZtRM8Y/2N3A6015.jpg'
    },
    {
      img: 'https://i.postimg.cc/m2s1s60Y/2N3A6005.jpg'
    },
    {
      img: 'https://i.postimg.cc/nVvM0GCC/2N3A6028.jpg'
    },
    {
      img: 'https://i.postimg.cc/vHhTd87y/2N3A6054.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/V6PmC294/2N3A6055.jpg'
    },
    {
      img: 'https://i.postimg.cc/PJtH6ZRw/2N3A6059.jpg'
    },
    {
      img: 'https://i.postimg.cc/DZh3ZLFM/2N3A6062.jpg'
    },
    {
      img: 'https://i.postimg.cc/bNrcszcp/2N3A6077.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/DyNVGtns/2N3A6084.jpg'
    },
    {
      img: 'https://i.postimg.cc/ZnqgBLQV/2N3A6086.jpg'
    },
    {
      img: 'https://i.postimg.cc/D0DCW3Lw/2N3A6095.jpg'
    },
    {
      img: 'https://i.postimg.cc/SNBTkqmZ/2N3A6103.jpg'
    },
    {
      img: 'https://i.postimg.cc/KYNJPMBV/2N3A6110.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/0N8CyyFC/2N3A6116.jpg'
    },
    {
      img: 'https://i.postimg.cc/7Z4RSDj5/2N3A6132.jpg'
    },
    {
      img: 'https://i.postimg.cc/dVJWL6Td/2N3A6140.jpg'
    },
    {
      img: 'https://i.postimg.cc/TYfj9wYv/2N3A6152.jpg'
    },
    {
      img: 'https://i.postimg.cc/cJgfHtTw/2N3A6154.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/xCFvTyVv/2N3A6162.jpg'
    },
    {
      img: 'https://i.postimg.cc/kG0WWJ4D/2N3A6173.jpg'
    },
    {
      img: 'https://i.postimg.cc/SKSC6tyL/2N3A6181.jpg'
    },
    {
      img: 'https://i.postimg.cc/Btf1XmYK/2N3A6208.jpg'
    },
    {
      img: 'https://i.postimg.cc/fWJ1sDGd/2N3A6210.jpg'
    }, 
    {
      img: 'https://i.postimg.cc/fTdF35TT/2N3A6229.jpg'
    }
  ]

  return (
    <div style={{textAlign: 'center', justifyContent: 'center'}}>
      <img id="logopic" style={{ width: '30%', height: 'auto', textAlign: 'center', justifyContent: 'center', marginTop: '-3%', marginBottom: '-3%'}} src="https://i.postimg.cc/KvpGY2FL/Attachment-1.png" alt="boutiquepic"/>
      <h5 style={{ textAlign: 'center', color: 'darkorange', marginLeft: '10%', marginRight: '10%' }}> We have a variety of wedding and Quinceañera / Sweet 16 dresses. In addition, we carry dresses for bridesmaids and for prom! Please tell your loved ones about us too, they may find something they love! Thank you.</h5>
      
      <h5 style={{ textAlign: 'center', color: 'darkorange', marginLeft: '10%', marginRight: '10%' }}>Check us out at your page!</h5>
      
      <h5 style={{ textAlign: 'center', color: 'darkorange', marginLeft: '10%', marginRight: '10%' }}><a style={{color: 'black'}}href="//www.jloubridalboutique.com/">J Lou Bridal Boutique</a></h5>
      <TextSection paragraph="If you have a special event we have it all from tuxes to dresses. Contact the Boutique at 336-615-5173 for more information."/>
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
