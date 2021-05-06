import React from 'react'
import Link from 'next/link'
export default function Header({children}) {
    return (
        <>
    <header style={{zIndex:9999}} className="header-section d-lg-block d-none">
   
        <div className="header-top">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-6">
                        <div className="header-top--left">
                            <span>Welcome to our store!</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header-top--right">
                           
                            <ul className="header-user-menu">
                                <li className="has-user-dropdown">
                                    <a href="">Setting</a>
                                  
                                    <ul className="user-sub-menu">
                                        <li><a href="">Checkout</a></li>
                                        <li><a href="">My Account</a></li>
                                        <li><a href="">Shopping Cart</a></li>
                                        <li><a href="">Wishlist</a></li>
                                    </ul>
                                </li>
                                <li className="has-user-dropdown">
                                    <a href="">$ USD</a>
                                   
                                    <ul className="user-sub-menu">
                                        <li><a href="">EUR – Euro</a></li>
                                        <li><a href="">GBP – British Pound</a></li>
                                        <li><a href="">INR – India Rupee</a></li>
                                    </ul>
                                </li>
                                <li className="has-user-dropdown">
                                    <a href="">English</a>
                                   
                                    <ul className="user-sub-menu">
                                        <li><a href=""><img className="user-sub-menu-in-icon" src="assets/images/icon/lang-en.png" alt=""/> English</a></li>
                                        <li><a href=""><img className="user-sub-menu-in-icon" src="assets/images/icon/lang-gr.png" alt=""/> Germany</a></li>
                                    </ul>
                                </li>
                                <li><a href=""><i className="icon-repeat"></i> Compare (0)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div className="header-center">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-3">
                       
                        <div className="header-logo">
                            <a href="index.html"><img src="assets/images/logo/logo.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-6">
                       
                        <div className="header-search">
                            <form action="#" method="post">
                                <div className="header-search-box default-search-style d-flex">
                                    <input className="default-search-style-input-box border-around border-right-none" type="search" placeholder="Search entire store here ..." required/>
                                    <button className="default-search-style-input-btn" type="submit"><i className="icon-search"></i></button>
                                </div>
                            </form>
                        </div> 
                    </div>
                    <div className="col-3 text-right">
                       
                        <ul className="header-action-icon">
                            <li>
                                <a href="#offcanvas-wishlish" className="offcanvas-toggle">
                                    <i className="icon-heart"></i>
                                    <span className="header-action-icon-item-count">3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                                    <i className="icon-shopping-cart"></i>
                                    <span className="header-action-icon-item-count">3</span>
                                </a>
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>

      
        <div className="header-bottom sticky-header">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                       
                        <div className="main-menu">
                            <nav>
                                <ul>
                                    <li className="has-dropdown">
                                        <a className="active main-menu-link" href="index.html">Home <i className="fa fa-angle-down"></i></a>
                                      
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown has-megaitem">
                                        <a href="product-details-default.html">Shop <i className="fa fa-angle-down"></i></a>
                                       
                                        <div className="mega-menu">
                                            <ul className="mega-menu-inner">
                                                
                                                <li className="mega-menu-item">
                                                    <a href="#" className="mega-menu-item-title">Shop Layouts</a>
                                                    <ul className="mega-menu-sub">
                                                        <li><a href="shop-grid-sidebar-left.html">Grid Left Sidebar</a></li>
                                                        <li><a href="shop-grid-sidebar-right.html">Grid Right Sidebar</a></li>
                                                        <li><a href="shop-full-width.html">Full Width</a></li>
                                                        <li><a href="shop-list-sidebar-left.html">List Left Sidebar</a></li>
                                                        <li><a href="shop-list-sidebar-right.html">List Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                               
                                                <li className="mega-menu-item">
                                                    <a href="#" className="mega-menu-item-title">Other Pages</a>
                                                    <ul className="mega-menu-sub">
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="compare.html">Compare</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="login.html">Login</a></li>
                                                        <li><a href="my-account.html">My Account</a></li>
                                                    </ul>
                                                </li>
                                                
                                                <li className="mega-menu-item">
                                                    <a href="#" className="mega-menu-item-title">Product Types</a>
                                                    <ul className="mega-menu-sub">
                                                        <li><a href="product-details-default.html">Product Default</a></li>
                                                        <li><a href="product-details-variable.html">Product Variable</a></li>
                                                        <li><a href="product-details-affiliate.html">Product Referral</a></li>
                                                        <li><a href="product-details-group.html">Product Group</a></li>
                                                        <li><a href="product-details-single-slide.html">Product Slider</a></li>
                                                    </ul>
                                                </li>
                                               
                                                <li className="mega-menu-item">
                                                    <a href="#" className="mega-menu-item-title">Product Types</a>
                                                    <ul className="mega-menu-sub">
                                                        <li><a href="product-details-tab-left.html">Product Tab Left</a></li>
                                                        <li><a href="product-details-tab-right.html">Product Tab Right</a></li>
                                                        <li><a href="product-details-gallery-left.html">Product Gallery Left</a></li>
                                                        <li><a href="product-details-gallery-right.html">Product Gallery Right</a></li>
                                                        <li><a href="product-details-sticky-left.html">Product Sticky Left</a></li>
                                                        <li><a href="product-details-sticky-right.html">Product Sticky right</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="menu-banner">
                                                <a href="" className="menu-banner-link">
                                                    <img className="menu-banner-img" src="assets/images/banner/menu-banner.jpg" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="blog-single-sidebar-left.html">Blog <i className="fa fa-angle-down"></i></a>
                                       
                                        <ul className="sub-menu">
                                            <li><a href="blog-grid-sidebar-left.html">Blog Grid Sidebar left</a></li>
                                            <li><a href="blog-grid-sidebar-right.html">Blog Grid Sidebar Right</a></li>
                                            <li><a href="blog-full-width.html">Blog Full Width</a></li>
                                            <li><a href="blog-single-sidebar-left.html">Blog Single Sidebar left</a></li>
                                            <li><a href="blog-single-sidebar-right.html">Blog Single Sidebar Right</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-dropdown">
                                        <a href="#">Pages <i className="fa fa-angle-down"></i></a>
                                     
                                        <ul className="sub-menu">
                                            <li><a href="service.html">Service</a></li>
                                            <li><a href="faq.html">Frequently Questions</a></li>
                                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="contact-us.html">Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div> 
                    </div>
                </div>
            </div>
        </div> 
    </header>
    <div className="mobile-header-section d-block d-lg-none">
        
        <div className="mobile-header-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <div className="mobile-header--left">
                            <a href="" className="mobile-logo-link">
                                <img src="assets/images/logo/logo.png" alt="" className="mobile-logo-img"/>
                            </a>
                        </div>
                        <div className="mobile-header--right">
                            <a href="#mobile-menu-offcanvas" className="mobile-menu offcanvas-toggle">
                                <span className="mobile-menu-dash"></span>
                                <span className="mobile-menu-dash"></span>
                                <span className="mobile-menu-dash"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>

    <div id="mobile-menu-offcanvas" className="offcanvas offcanvas-leftside offcanvas-mobile-menu-section">
      
        <div className="offcanvas-header text-right">
            <button className="offcanvas-close"><i className="fa fa-times"></i></button>
        </div> 
     
        <div className="offcanvas-mobile-menu-wrapper">
           
            <div className="mobile-menu-top">
                <span>Welcome to our store!</span>
               
                <ul className="mobile-menu-user-menu">
                    <li><a className="header-user-menu-link" href=""><i className="icon-repeat"></i>Compare (0)</a></li>
                    <li className="has-mobile-user-dropdown">
                        <a className="mobile-user-menu-link" href="">Setting</a>
                       
                        <ul className="mobile-user-sub-menu">
                            <li><a href="">Checkout</a></li>
                            <li><a href="">My Account</a></li>
                            <li><a href="">Shopping Cart</a></li>
                            <li><a href="">Wishlist</a></li>
                        </ul>
                    </li>
                    <li className=" has-mobile-user-dropdown">
                        <a className="mobile-user-menu-link" href="">$ USD</a>
                       
                        <ul className="mobile-user-sub-menu">
                            <li><a href="">EUR – Euro</a></li>
                            <li><a href="">GBP – British Pound</a></li>
                            <li><a href="">Shopping Cart</a></li>
                            <li><a href="">INR – India Rupee</a></li>
                        </ul>
                    </li>
                    <li className="has-mobile-user-dropdown">
                        <a className="mobile-user-menu-link" href="">English</a>
                      
                        <ul className="mobile-user-sub-menu">
                            <li><a href=""><img className="user-sub-menu-link-icon" src="assets/images/icon/lang-en.png" alt=""/> English</a></li>
                            <li><a href=""><img className="user-sub-menu-link-icon" src="assets/images/icon/lang-gr.png" alt=""/> Germany</a></li>
                        </ul>
                    </li>
                </ul> 
            </div> 
          
            <div className="mobile-menu-center">
                <form action="#" method="post">
                    <div className="header-search-box default-search-style d-flex">
                        <input className="default-search-style-input-box border-around border-right-none"
                         type="search" placeholder="Search entire store here ..." required/>
                        <button className="default-search-style-input-btn" type="submit"><i className="icon-search"></i></button>
                    </div>
                </form>
                <div className="mobile-menu-customer-support">
                    <div className="mobile-menu-customer-support-icon">
                        <img src="assets/images/icon/support-icon.png" alt=""/>
                    </div>
                    <div className="mobile-menu-customer-support-text">
                        <span>Customer Support</span>
                        <a className="mobile-menu-customer-support-text-phone" href="tel:(08)123456789">(08) 123 456 789</a>
                    </div>
                </div>
               
                <ul className="mobile-action-icon">
                    <li className="mobile-action-icon-item">
                        <a href="wishlist.html" className="mobile-action-icon-link">
                            <i className="icon-heart"></i>
                            <span className="mobile-action-icon-item-count">3</span>
                        </a>
                    </li>
                    <li className="mobile-action-icon-item">
                        <a href="cart.html" className="mobile-action-icon-link">
                            <i className="icon-shopping-cart"></i>
                            <span className="mobile-action-icon-item-count">3</span>
                        </a>
                    </li>
                </ul>
            </div> 
          
            <div className="mobile-menu-bottom">
              
                <div className="offcanvas-menu">
                    <ul>
                        <li>
                            <a href="#"><span>Home</span></a>
                            <ul className="mobile-sub-menu">
                                <li><a href="index.html">Home 1</a></li>
                                <li><a href="index-2.html">Home 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><span>Shop</span></a>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <a href="#">Shop Layout</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="shop-grid-sidebar-left.html">Grid Left Sidebar</a></li>
                                        <li><a href="shop-grid-sidebar-right.html">Grid Right Sidebar</a></li>
                                        <li><a href="shop-full-width.html">Full Width</a></li>
                                        <li><a href="shop-list-sidebar-left.html">List Left Sidebar</a></li>
                                        <li><a href="shop-list-sidebar-right.html">List Right Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <a href="#">Shop Pages</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="compare.html">Compare</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="404.html">Error 404</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <a href="#">Product Single</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="product-details-default.html">Product Default</a></li>
                                        <li><a href="product-details-variable.html">Product Variable</a></li>
                                        <li><a href="product-details-affiliate.html">Product Referral</a></li>
                                        <li><a href="product-details-group.html">Product Group</a></li>
                                        <li><a href="product-details-single-slide.html">Product Slider</a></li>
                                        <li><a href="product-details-tab-left.html">Product Tab Left</a></li>
                                        <li><a href="product-details-tab-right.html">Product Tab Right</a></li>
                                        <li><a href="product-details-gallery-left.html">Product Gallery Left</a></li>
                                        <li><a href="product-details-gallery-right.html">Product Gallery Right</a></li>
                                        <li><a href="product-details-sticky-left.html">Product Sticky Left</a></li>
                                        <li><a href="product-details-sticky-right.html">Product Sticky right</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><span>Blogs</span></a>
                            <ul className="mobile-sub-menu">
                                <li>
                                    <a href="#">Blog Grid</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="blog-grid-sidebar-left.html">Blog Grid Sidebar left</a></li>
                                        <li><a href="blog-grid-sidebar-right.html">Blog Grid Sidebar Right</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog-full-width.html">Blog Full Width</a>
                                </li>
                                <li>
                                    <a href="#">Blog Single</a>
                                    <ul className="mobile-sub-menu">
                                        <li><a href="blog-single-sidebar-left.html">Blog Single Sidebar left</a></li>
                                        <li><a href="blog-single-sidebar-right.html">Blog Single Sidebar Right</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><span>Pages</span></a>
                            <ul className="mobile-sub-menu">
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="service.html">Service</a></li>
                                <li><a href="faq.html">Frequently Questions</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="404.html">404 Page</a></li>
                            </ul>
                        </li>
                        <li><a href="contact-us.html">Contact Us</a></li>
                    </ul>
                </div>

                <a className="mobile-menu-email icon-text-right" href="mailto:info@yourdomain.com"><i className="fa fa-envelope-o"> info@yourdomain.com</i></a>

              
                <ul className="mobile-menu-social">
                    <li><a href="" className="facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="" className="twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="" className="youtube"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="" className="instagram"><i className="fa fa-instagram"></i></a></li>
                </ul>
            </div> 
        </div> 
    </div>
    <div id="offcanvas-add-cart" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
        
        <div className="offcanvas-header text-right">
            <button className="offcanvas-close"><i className="fa fa-times"></i></button>
        </div>

        
        <div className="offcanvas-add-cart-wrapper">
            <h4 className="offcanvas-title">Shopping Cart</h4>
            <ul className="offcanvas-cart">
                <li className="offcanvas-cart-item-single">
                    <div className="offcanvas-cart-item-block">
                        <a href="" className="offcanvas-cart-item-image-link">
                            <img src="assets/images/products_images/aments_products_image_6.jpg"
                             alt="" className="offcanvas-cart-image"/>
                        </a>
                        <div className="offcanvas-cart-item-content">
                            <a href="" className="offcanvas-cart-item-link">Car Wheel</a>
                            <div className="offcanvas-cart-item-details">
                                <span className="offcanvas-cart-item-details-quantity">1 x </span>
                                <span className="offcanvas-cart-item-details-price">$49.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-cart-item-delete text-right">
                        <a href="#" className="offcanvas-cart-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
                <li className="offcanvas-cart-item-single">
                    <div className="offcanvas-cart-item-block">
                        <a href="" className="offcanvas-cart-item-image-link">
                            <img src="assets/images/categories_images/aments_categories_08.jpg"
                             alt="" className="offcanvas-cart-image"/>
                        </a>
                        <div className="offcanvas-cart-item-content">
                            <a href="" className="offcanvas-cart-item-link">Car Vails</a>
                            <div className="offcanvas-cart-item-details">
                                <span className="offcanvas-cart-item-details-quantity">3 x </span>
                                <span className="offcanvas-cart-item-details-price">$500.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-cart-item-delete text-right">
                        <a href="#" className="offcanvas-cart-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
                <li className="offcanvas-cart-item-single">
                    <div className="offcanvas-cart-item-block">
                        <a href="" className="offcanvas-cart-item-image-link">
                            <img src="assets/images/products_images/aments_products_image_2.jpg" 
                            alt="" className="offcanvas-cart-image"/>
                        </a>
                        <div className="offcanvas-cart-item-content">
                            <a href="" className="offcanvas-cart-item-link">Shock Absorber</a>
                            <div className="offcanvas-cart-item-details">
                                <span className="offcanvas-cart-item-details-quantity">1 x </span>
                                <span className="offcanvas-cart-item-details-price">$350.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-cart-item-delete text-right">
                        <a href="#" className="offcanvas-cart-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
            </ul>
            <div className="offcanvas-cart-total-price">
                <span className="offcanvas-cart-total-price-text">Subtotal:</span>
                <span className="offcanvas-cart-total-price-value">$170.00</span>
            </div>
            <ul className="offcanvas-cart-action-button">
                <li className="offcanvas-cart-action-button-list"><a href="" className="offcanvas-cart-action-button-link">View Cart</a></li>
                <li className="offcanvas-cart-action-button-list"><a href="" className="offcanvas-cart-action-button-link">Checkout</a></li>
            </ul>
        </div> 
    </div>
    <div id="offcanvas-wishlish" className="offcanvas offcanvas-rightside offcanvas-add-cart-section">
        
        <div className="offcanvas-header text-right">
            <button className="offcanvas-close"><i className="fa fa-times"></i></button>
        </div> 

       
        <div className="offcanvas-wishlist-wrapper">
            <h4 className="offcanvas-title">Wishlist</h4>
            <ul className="offcanvas-wishlist">
                <li className="offcanvas-wishlist-item-single">
                    <div className="offcanvas-wishlist-item-block">
                        <a href="" className="offcanvas-wishlist-item-image-link">
                            <img src="assets/images/products_images/aments_products_image_6.jpg" 
                            alt="" className="offcanvas-wishlist-image"/>
                        </a>
                        <div className="offcanvas-wishlist-item-content">
                            <a href="" className="offcanvas-wishlist-item-link">Car Wheel</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$49.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-wishlist-item-delete text-right">
                        <a href="#" className="offcanvas-wishlist-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
                <li className="offcanvas-wishlist-item-single">
                    <div className="offcanvas-wishlist-item-block">
                        <a href="" className="offcanvas-wishlist-item-image-link">
                            <img src="assets/images/categories_images/aments_categories_08.jpg" 
                            alt="" className="offcanvas-wishlist-image"/>
                        </a>
                        <div className="offcanvas-wishlist-item-content">
                            <a href="" className="offcanvas-wishlist-item-link">Car Vails</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">3 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$500.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-wishlist-item-delete text-right">
                        <a href="#" className="offcanvas-wishlist-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
                <li className="offcanvas-wishlist-item-single">
                    <div className="offcanvas-wishlist-item-block">
                        <a href="" className="offcanvas-wishlist-item-image-link">
                            <img src="assets/images/products_images/aments_products_image_2.jpg" 
                            alt="" className="offcanvas-wishlist-image"/>
                        </a>
                        <div className="offcanvas-wishlist-item-content">
                            <a href="" className="offcanvas-wishlist-item-link">Shock Absorber</a>
                            <div className="offcanvas-wishlist-item-details">
                                <span className="offcanvas-wishlist-item-details-quantity">1 x </span>
                                <span className="offcanvas-wishlist-item-details-price">$350.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-wishlist-item-delete text-right">
                        <a href="#" className="offcanvas-wishlist-item-delete"><i className="fa fa-trash-o"></i></a>
                    </div>
                </li>
            </ul>
            <ul className="offcanvas-wishlist-action-button">
                <li className="offcanvas-wishlist-action-button-list"><a href="" className="offcanvas-wishlist-action-button-link">View wishlist</a></li>
            </ul>
        </div> 

    </div> 
    <div className="offcanvas-overlay"></div>

    <button style={{zIndex:9999}} className="material-scrolltop" type="button"></button>

    </>
    )
}
