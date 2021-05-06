import React from 'react'
import Image from 'next/image'

export default function about() {
    return (
        <>
     
             <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="page-caption">
                            <h1 className="page-title">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-10 offset-md-1 col-md-10 col-sm-12 col-12  mb60">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="">
                                    <p>Nunc utlacus euismod mollis tortor umaximus mevamus odio quam, efficituret dictum egeteuismodtur temporodn porta dignissim ipsumodio scelerisque felis eget euismod purus quamat acu condimentum tincidunt dui vitae.</p>
                                    <p>Accumsan urna. Donec ut dui idpurus elementum rutrum et rutrum sapien. In hac habitasse platea dictumiam quis metuaecenas finibus euue egetex idlobortis. </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="">
                                    <p>Egeteuismod quis nequurabitur temporodn porta digssim ipsumodio scelerisque felis eget euismod purus quamat antenrcunec utdui idpurus elementum rutrum et rutrum sapien.</p>
                                    <p>Dnhac habitasse platea dictumiam t euismod purus quamat antenrcunec utdui idpurus elequis metuaecenas finibus eu dolorac blandiorbi congue egetex idlobortis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="container">
                <div className="row">
                  
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div className="well-block">
                           
                            <div className="feature-left">
                                <div className="feature-icon"><Image layout="fill" src="/images/calendar.png" alt=""/></div>
                                <div className="feature-content">
                                    <h4>Everything’s on Schedule</h4>
                                    <p>Cras porttitor tortor erateget accumsan is feltumsit.</p>
                                </div>
                            </div>
                            
                            <div className="feature-left">
                                <div className="feature-icon"><Image layout="fill" src="/images/adventure.png" alt=""/></div>
                                <div className="feature-content">
                                    <h4>Destination Variety</h4>
                                    <p>Pellentesque imperdiet esmpus finibusse euismunc.</p>
                                </div>
                            </div>
                           
                            <div className="feature-left">
                                <div className="feature-icon"><Image layout="fill" src="/images/hotel.png" alt=""/></div>
                                <div className="feature-content">
                                    <h4>Comfortable Housing</h4>
                                    <p>Vestiulum sodales tempudin one erlctus iedate. </p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                   
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <div className="well-block">
                            <div className="counter-block">
                                <h1 className="counter-numbers">689+</h1>
                                <div className="counter-content">
                                    <h4>Tours</h4>
                                    <p>Cras porttitor tortor erateget taccumsan.</p>
                                </div>
                            </div>
                            <div className="counter-block">
                                <h1 className="counter-numbers">320+</h1>
                                <div className="counter-content">
                                    <h4>Destinations</h4>
                                    <p>Pellentesque luctus felisnon nib its consecteuis.</p>
                                </div>
                            </div>
                            <div className="counter-block">
                                <h1 className="counter-numbers">60+</h1>
                                <div className="counter-content">
                                    <h4>Countries</h4>
                                    <p>Sed gravida eleequenec fringilla dolonteger.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
