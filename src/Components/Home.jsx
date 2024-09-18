import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Testimonials from './Partials/Testimonials'
import Faqs from './Partials/Faqs'
import ProductsContainer from './Partials/ProductsContainer'
import AboutContent from './Partials/AboutContent'
import Features from './Partials/Features'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { getProduct } from "../Redux/Actioncreators/ProductActionCreators"
import { getMaincategory } from "../Redux/Actioncreators/MaincategoryActionCreators"
import BrandSlider from './Partials/BrandSlider'

export default function Home() {
    let [products, setProducts] = useState([])
    let [maincategory, setMaincategory] = useState([])
    let options = {
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    }

    let dispatch = useDispatch()
    let ProductStateData = useSelector(state => state.ProductStateData)
    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)

    useEffect(() => {
        (() => {
            dispatch(getProduct())
            if (ProductStateData.length)
                setProducts(ProductStateData)
        })()
    }, [ProductStateData.length])

    useEffect(() => {
        (() => {
            dispatch(getMaincategory())
            if (MaincategoryStateData.length)
                setMaincategory(MaincategoryStateData)
        })()
    }, [MaincategoryStateData.length])
    return (
        <>
            {/* <!-- Carousel Start --> */}
            <div className="header-carousel">
                <OwlCarousel className='owl-theme' {...options}>
                    <div className="header-carousel-item bg-primary">
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-7 animated fadeInLeft">
                                        <div className="text-sm-center text-md-start">
                                            <h4 className="text-white text-uppercase fw-bold mb-4">Welcome To Ecom</h4>
                                            <h1 className="display-1 text-white mb-4">Latest and Top Brands Products for Men</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                            </p>
                                            <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                                <Link className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2" to="/shop?mc=Male">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 animated fadeInRight">
                                        <div className="calrousel-img" style={{ objectFit: "cover" }}>
                                            <img src="img/carousel-1.png" className="img-fluid w-100" alt="Banner Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-carousel-item bg-primary">
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row gy-4 gy-lg-0 gx-0 gx-lg-5 align-items-center">
                                    <div className="col-lg-5 animated fadeInLeft">
                                        <div className="calrousel-img">
                                            <img src="img/carousel-2.png" className="img-fluid w-100" alt="Banner Image" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 animated fadeInRight">
                                        <div className="text-sm-center text-md-end">
                                            <h4 className="text-white text-uppercase fw-bold mb-4">Welcome To Ecom</h4>
                                            <h1 className="display-1 text-white mb-4">Latest and Top Brands Products for Female</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                            </p>
                                            <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                                <Link className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2" to="/shop?mc=Female">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-carousel-item bg-primary">
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-7 animated fadeInLeft">
                                        <div className="text-sm-center text-md-start">
                                            <h4 className="text-white text-uppercase fw-bold mb-4">Welcome To Ecom</h4>
                                            <h1 className="display-1 text-white mb-4">Latest and Top Brands Products for Kids</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                            </p>
                                            <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                                <Link className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2" to="/shop?mc=Kids">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 animated fadeInRight">
                                        <div className="calrousel-img" style={{ objectFit: "cover" }}>
                                            <img src="img/carousel-3.png" className="img-fluid w-100" alt="Banner Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>;
            </div>
            {/* <!-- Carousel End --> */}

            <ProductsContainer title="Latest Products" data={products.slice(0, 12)} />

            <Features />
            <AboutContent />

            {
                maincategory.map((item, index) => {
                    if (item.active)
                        return <ProductsContainer key={index} title={`${item.name} Products`} data={products.filter(x => x.maincategory === item.name).slice(0, 12)} />
                })
            }
            <BrandSlider/>
            <Faqs />
            <Testimonials />
        </>
    )
}
