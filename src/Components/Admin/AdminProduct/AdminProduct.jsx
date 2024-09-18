import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import $ from "jquery"
import "datatables.net"
import 'datatables.net-dt/css/dataTables.dataTables.css';

// import Breadcrum from "../../Partials/Breadcrum"

import Sidebar from '../Sidebar'
import { getProduct, deleteProduct } from "../../../Redux/Actioncreators/ProductActionCreators"
export default function AdminProduct() {
    let [data, setData] = useState([])

    let dispatch = useDispatch()
    let ProductStateData = useSelector(state => state.ProductStateData)

    function deleteItem(id) {
        if (window.confirm("Did you really want to delete that item ")) {
            dispatch(deleteProduct({ id: id }))
            getAPIData()
        }
    }

    function getAPIData() {
        dispatch(getProduct())
        if (ProductStateData.length) {
            setData(ProductStateData)
            setTimeout(() => {
                $('#dataTable').DataTable();
            }, 1000)
        }
        else
            setData([])
    }
    useEffect(() => {
        getAPIData()
    }, [ProductStateData.length])
    return (
        <>
            {/* <Breadcrum title="Admin"/> */}

            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-xl-2 col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-md-9">
                        <h5 className='bg-primary text-center p-2 text-light'>Product <Link to="/admin/product/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>

                        <div className="table-responsive">
                            <table className='table table-bordered display' id='dataTable' style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Maincategory</th>
                                        <th>Subcategory</th>
                                        <th>Brand</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Base Price</th>
                                        <th>Discount</th>
                                        <th>Final Price</th>
                                        <th>Stock</th>
                                        <th>Stock Quantity</th>
                                        <th>Pic</th>
                                        <th>Active</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.maincategory}</td>
                                                <td>{item.subcategory}</td>
                                                <td>{item.brand}</td>
                                                <td>{item.color}</td>
                                                <td>{item.size}</td>
                                                <td>&#8377;{item.basePrice}</td>
                                                <td>{item.discount}%</td>
                                                <td>&#8377;{item.finalPrice}</td>
                                                <td className={`${item.stock ? "text-success" : "text-danger"}`}>{item.stock ? "Yes" : "No"}</td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                    <div style={{ width: 300 }}>
                                                        {
                                                            item.pic.map((img, index) => {
                                                                return <Link key={index} to={`${img}`} target="_blank" rel='noreferrer'>
                                                                    <img src={`${img}`} height={50} width={50} alt="Product Pic" />
                                                                </Link>
                                                            })
                                                        }
                                                    </div>
                                                </td>
                                                <td className={`${item.active ? "text-success" : "text-danger"}`}>{item.active ? "Yes" : "No"}</td>
                                                <td><Link to={`/admin/product/update/${item.id}`} className='btn'><i className='fa fa-edit text-primary'></i></Link></td>
                                                <td><button className='btn' onClick={() => deleteItem(item.id)}><i className='fa fa-trash text-danger'></i></button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
