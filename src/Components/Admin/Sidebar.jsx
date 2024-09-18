import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/admin" className="list-group-item list-group-item-action mb-1 active" aria-current="true"><i className='fa fa-home'></i><span className='float-end'>Home</span></Link>
                <Link to="/admin/maincategory" className="list-group-item list-group-item-action mb-1 active" aria-current="true"><i className='fa fa-list'></i><span className='float-end'>Maincategory</span></Link>
                <Link to="/admin/subcategory" className="list-group-item list-group-item-action mb-1 active" aria-current="true"><i className='fa fa-list'></i><span className='float-end'>Subcategory</span></Link>
                <Link to="/admin/brand" className="list-group-item list-group-item-action mb-1 active" aria-current="true"><i className='fa fa-list'></i><span className='float-end'>Brand</span></Link>
                <Link to="/admin/product" className="list-group-item list-group-item-action mb-1 active" aria-current="true"><i className='fa fa-list'></i><span className='float-end'>Product</span></Link>
                <Link to="/admin/testimonial" className="list-group-item list-group-item-action mb-1 active" aria-current="true"><i className='fa fa-star'></i><span className='float-end'>Testimonial</span></Link>
                <Link to="/admin/users" className="list-group-item list-group-item-action mb-1 active" aria-current="true"><i className='fa fa-users'></i><span className='float-end'>Users</span></Link>
                <Link to="/admin/newsletter" className="list-group-item list-group-item-action mb-1 active" aria-current="true"><i className='fa fa-envelope'></i><span className='float-end'>Newsletter</span></Link>
                <Link to="/admin/contactus" className="list-group-item list-group-item-action mb-1 active" aria-current="true"><i className='fa fa-phone'></i><span className='float-end'>Contactus</span></Link>
                <Link to="/admin/checkouts" className="list-group-item list-group-item-action mb-1 active" aria-current="true"><i className='fa fa-shopping-bag'></i><span className='float-end'>Checkouts</span></Link>
            </div>
        </>
    )
}
