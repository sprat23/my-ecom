import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import $ from "jquery"
import "datatables.net"
import 'datatables.net-dt/css/dataTables.dataTables.css';

// import Breadcrum from "../../Partials/Breadcrum"

import Sidebar from '../Sidebar'
import { getCheckout } from "../../../Redux/Actioncreators/CheckoutActionCreators"
import { Link } from 'react-router-dom';
export default function AdminCheckout() {
    let [data, setData] = useState([])

    let dispatch = useDispatch()
    let CheckoutStateData = useSelector(state => state.CheckoutStateData)

    function getAPIData() {
        dispatch(getCheckout())
        if (CheckoutStateData.length) {
            setData(CheckoutStateData)
            setTimeout(() => {
                $('#dataTable').DataTable();
            }, 1000)
        }
        else
            setData([])
    }
    useEffect(() => {
        getAPIData()
    }, [CheckoutStateData.length])
    return (
        <>
            {/* <Breadcrum title="Admin"/> */}

            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-xl-2 col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-md-9">
                        <h5 className='bg-primary text-center p-2 text-light'>Checkout</h5>

                        <div className="table-responsive">
                            <table className='table table-bordered display' id='dataTable' style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>User</th>
                                        <th>Order Status</th>
                                        <th>Payment Mode</th>
                                        <th>Payment Status</th>
                                        <th>Subtotal</th>
                                        <th>Shipping</th>
                                        <th>Total</th>
                                        <th>Date</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.user}</td>
                                                <td>{item.orderStatus}</td>
                                                <td>{item.paymentMode}</td>
                                                <td>{item.paymentStatus}</td>
                                                <td>&#8377;{item.subtotal}</td>
                                                <td>&#8377;{item.shipping}</td>
                                                <td>&#8377;{item.total}</td>
                                                <td>{new Date(item.date).toLocaleString()}</td>
                                                <td><Link to={`/admin/checkouts/show/${item.id}`} className='btn'><i className='fa fa-eye text-primary'></i></Link></td>
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
