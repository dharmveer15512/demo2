import React from 'react'

export default function ViewProduct() {
    return (
        <div className="modal fade" id="modalQuickview" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered" role="document">
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
                            <div className="col-md-6">
                                <div className="product-details-gallery-area">
                                    <div className="product-large-image modal-product-image-large">
                                        <div className="product-image-large-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_1.jpg" alt=""/>
                                        </div>
                                        <div className="product-image-large-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_2.jpg" alt=""/>
                                        </div>
                                        <div className="product-image-large-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_3.jpg" alt=""/>
                                        </div>
                                        <div className="product-image-large-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_4.jpg" alt=""/>
                                        </div>
                                        <div className="product-image-large-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_5.jpg" alt=""/>
                                        </div>
                                        <div className="product-image-large-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_6.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="product-image-thumb modal-product-image-thumb">
                                        <div className="zoom-active product-image-thumb-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_1.jpg" alt=""/>
                                        </div>
                                        <div className="product-image-thumb-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_2.jpg" alt=""/>
                                        </div>
                                        <div className="product-image-thumb-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_3.jpg" alt=""/>
                                        </div>
                                        <div className="product-image-thumb-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_4.jpg" alt=""/>
                                        </div>
                                        <div className="product-image-thumb-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_5.jpg" alt=""/>
                                        </div>
                                        <div className="product-image-thumb-single">
                                            <img className="img-fluid" src="assets/images/products_images/aments_products_image_6.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-details-content-area">
                                   
                                    <div className="product-details-text">
                                        <h4 className="title">Nonstick Dishwasher PFOA</h4>
                                        <div className="price"><del>$70.00</del>$80.00</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam, reiciendis maiores quidem aperiam, rerum vel recusandae</p>
                                    </div> 
                                    <div className="product-details-variable">
                                    
                                        <div className="variable-single-item">
                                            <span>Color</span>
                                            <div className="product-variable-color">
                                                <label htmlFor="modal-product-color-red">
                                                    <input name="modal-product-color"
                                                     id="modal-product-color-red" 
                                                     className="color-select" type="radio" defaultChecked/>
                                                    <span className="product-color-red"></span>
                                                </label>
                                                <label htmlFor="modal-product-color-tomato">
                                                    <input name="modal-product-color" id="modal-product-color-tomato" className="color-select" type="radio"/>
                                                    <span className="product-color-tomato"></span>
                                                </label>
                                                <label htmlFor="modal-product-color-green">
                                                    <input name="modal-product-color" id="modal-product-color-green" className="color-select" type="radio"/>
                                                    <span className="product-color-green"></span>
                                                </label>
                                                <label htmlFor="modal-product-color-light-green">
                                                    <input name="modal-product-color" id="modal-product-color-light-green" className="color-select" type="radio"/>
                                                    <span className="product-color-light-green"></span>
                                                </label>
                                                <label htmlFor="modal-product-color-blue">
                                                    <input name="modal-product-color" id="modal-product-color-blue" className="color-select" type="radio"/>
                                                    <span className="product-color-blue"></span>
                                                </label>
                                                <label htmlFor="modal-product-color-light-blue">
                                                    <input name="modal-product-color" 
                                                    id="modal-product-color-light-blue" 
                                                    className="color-select" type="radio"/>
                                                    <span className="product-color-light-blue"></span>
                                                </label>
                                            </div>
                                        </div>
                                       
                                        <div className="variable-single-item ">
                                            <span>Quantity</span>
                                            <div className="product-variable-quantity">
                                                <input min="1" max="100" defaultValue="1" type="number"/>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="product-details-meta mb-20">
                                        <ul>
                                            <li><a href=""><i className="icon-heart"></i>Add to wishlist</a></li>
                                            <li><a href=""><i className="icon-repeat"></i>Compare</a></li>
                                            <li><a href="#" data-toggle="modal" data-target="#modalQuickview"><i className="icon-shopping-cart"></i>Add To Cart</a></li>
                                        </ul>
                                    </div> 
                                   
                                    <ul className="modal-product-details-social">
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                        <li><a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
