import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image from '../images/winetour.jpg';
import image2 from '../images/wineone.jpg';
import image3 from '../images/chocolate.jpg';
import image4 from '../images/snacktray.jpg';

import image6 from '../images/picnic.jpg';
import image7 from '../images/flowers.jpg';
import image8 from '../images/winebottle.jpg';
import cake from '../images/pastel.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Specials & Packages</h1>
            <h2 style={{ color: 'orange' }}>Little Heaven Bed & Breakfast offers you the following packages</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image}
                            text="Visit three of your favorite  local vineyards"
                            label="Wine-Tour"
                            texttwo="* Coming Soon *"
                          
                        />

                        <CardItem
                            src={image2}
                            text="Taste five different wines from six local wineries. Classic Tasting-$25 Reserve Tasting-$38"
                            label="Wine Tasting"
                            // texttwo="* Coming Soon *"
                        
                        />
                        <CardItem
                            src={"https://i.postimg.cc/NM2pMg7x/littleheavencafe.jpg"}
                            text="Enjoy a delicious cake of your choice for that special occasion or just to celebrate the sweetness all around"
                            label="Cake"
                            texttwo="starting at $35"
                         


                        />
                    </ul>
                    <br />

                    <ul className="cards__items">

                        <CardItem

                            src={image7}
                            text="Give that touch of love that a beautiful bouquet of fresh roses can give to one of your loved ones"
                            label="Roses"
                            texttwo="$45.99"
                        

                        />

                        <CardItem
                            src={image3}
                            text="Enjoy a dozen of our delicious strawberries dipped in chocolate of your choice"
                            label="Strawberries"
                            texttwo="$39.55"
                       
                        />
                    </ul>

                    <br />
                    <ul className="cards__items">
                        {/* <CardItem
                            src={image6}
                            text="Enjoy the great outdoors with a perfectly designed picnic basket to crave every desire, from fruit to chocolates to wine, call the Lodge to customize yours today"
                            label="Picnic Basket"
                            texttwo="$79.00"
                          
                        /> */}

                        <CardItem
                            src={"https://i.postimg.cc/NFrVW6zB/littleheavenbasket.jpg"}
                            text="indulge in a charcuterie box full of cheese and deli meats made to enjoy alone or share to curve the afternoon hunger"
                            label="Charcuterie Board"
                            texttwo="$49.00"
                       


                        />
                        <CardItem
                            src={image8}
                            text="* We will soon be offering wine * Whatever the taste you love, we have it. We are working so that you can soon enjoy a delicious bottle of local wine"
                            label=" Bottle of Wine"
                            texttwo="from $20-$125 "
                          
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards