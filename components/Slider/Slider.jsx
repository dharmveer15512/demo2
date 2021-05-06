import React from 'react'
import Image from 'next/image'
export default function Slider() {
    return (
        <>
      <div className="banner-and-hero-area-section">
        <div className="container-fluid">
            <div className="row flex-column-reverse flex-lg-row">
                <div className="col-lg-4">
                    <div className="banner-sidebar mt-30">
                       
                        <div className="banner-single mb-30">
                            <a href="product-details-default.html" className="banner-img-link">
                                <img className="banner-img" src="assets/images/banner_images/aments_banner_01.jpg" 
                                alt=""/>
                            </a>
                            <div className="banner-content">
                                <span className="banner-text-tiny">Car Tyres</span>
                                <h3 className="banner-text-large">30% Off</h3>
                                <a href="product-details-default.html" className="banner-link">Shop Now</a>
                            </div>
                        </div> 
                        
                        <div className="banner-single">
                            <a href="product-details-default.html" className="banner-img-link">
                                <img className="banner-img" 
                                src="assets/images/banner_images/aments_banner_01.jpg" alt=""/>
                            </a>
                            <div className="banner-content">
                                <span className="banner-text-tiny">Bike Tyres</span>
                                <h3 className="banner-text-large">40% Off</h3>
                                <a href="product-details-default.html" className="banner-link">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                   
                    <div className="hero-area-wrapper hero-slider-dots fix-slider-dots">
                       
                        <div className="hero-area-single">
                            <div className="hero-area-bg-2">
                                <img className="hero-img-2" 
                                src="assets/images/slider_images/home_2/aments_home_2_slider_1.jpg" alt=""/>
                            </div>
                            <div className="hero-content hero-content-2">
                                <div className="row">
                                    <div className="col-10 col-md-8 col-xl-6 offset-1">
                                        <h5>World Best Quality</h5>
                                        <h2>Tyres</h2>
                                        <p className="hero-text">Lorem ipsum dolor sit amet consectet</p>
                                        <a href="product-details-default.html" className="hero-button">Shopping Now</a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        
                        <div className="hero-area-single">
                            <div className="hero-area-bg-2">
                                <img className="hero-img-2" 
                                src="assets/images/slider_images/home_2/aments_home_2_slider_2.jpg" alt=""/>
                            </div>
                            <div className="hero-content hero-content-2">
                                <div className="row">
                                    <div className="col-10 col-md-8 col-xl-6 offset-1">
                                        <h5>World Best Quality</h5>
                                        <h2>Tyres</h2>
                                        <p>Lorem ipsum dolor sit amet consectet</p>
                                        <a href="product-details-default.html" className="hero-button">Shopping Now</a>
                                    </div>
                                </div>
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
