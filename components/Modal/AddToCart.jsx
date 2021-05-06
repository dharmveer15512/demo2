import React from 'react'

export default function AddToCart() {
    return (
        <div className="modal fade" id="modalAddcart" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered modal-xl" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col text-right">
                                <button type="button" className="close modal-close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"> <i className="fa fa-times"></i></span>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="modal-add-cart-product-img">
                                            <img className="img-fluid" 
                                            src="assets/images/products_images/aments_products_image_1.jpg"
                                             alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="modal-add-cart-info"><i className="fa fa-check-square"></i>Added to cart successfully!</div>
                                        <div className="modal-add-cart-product-cart-buttons">
                                            <a href="cart.html">View Cart</a>
                                            <a href="checkout.html">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 modal-border">
                                <ul className="modal-add-cart-product-shipping-info">
                                    <li> <strong><i className="icon-shopping-cart"></i> There Are 5 Items In Your Cart.</strong></li>
                                    <li> <strong>TOTAL PRICE: </strong> <span>$187.00</span></li>
                                    <li className="modal-continue-button"><a href="#" data-dismiss="modal">CONTINUE SHOPPING</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
