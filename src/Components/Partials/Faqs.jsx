import React from 'react'

export default function Faqs() {
    return (
        <>
            {/* <!-- FAQs Start --> */}
            <div className="container-fluid faq-section bg-light">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div className="h-100">
                                <div className="mb-5">
                                    <h4 className="text-primary">Some Important FAQ's</h4>
                                    <h1 className="display-4 mb-0">Common Frequently Asked Questions</h1>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Q: what is your refund policy?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show active" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body rounded">
                                                A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem in ullam quibusdam cumque dolorum nulla commodi optio! Ex nulla iure cumque aut tempore sapiente esse quaerat dolor at numquam distinctio, nihil dolorum a doloremque veritatis iusto nam reprehenderit. Nam odio architecto eius, animi id dolorum possimus perferendis non officia!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Q: is there all products are genuine?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus doloribus quibusdam eum tempora id iste excepturi necessitatibus beatae accusamus! Illum, illo corrupti. Nisi, tenetur itaque eaque animi laboriosam iste nulla in quo eligendi cupiditate error possimus explicabo aspernatur doloribus facilis magni blanditiis impedit, natus minima libero. Assumenda tempore earum possimus.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Q: Why should I buy products from ecom?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus doloribus quibusdam eum tempora id iste excepturi necessitatibus beatae accusamus! Illum, illo corrupti. Nisi, tenetur itaque eaque animi laboriosam iste nulla in quo eligendi cupiditate error possimus explicabo aspernatur doloribus facilis magni blanditiis impedit, natus minima libero. Assumenda tempore earum possimus.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
                            <img src="img/carousel-2.png" className="img-fluid w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FAQs End --> */}
        </>
    )
}
