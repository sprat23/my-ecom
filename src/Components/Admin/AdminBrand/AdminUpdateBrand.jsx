import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// import Breadcrum from "../../Partials/Breadcrum"

import Sidebar from '../Sidebar'
import formValidator from "../../FormValidators/formValidator"
import imageValidator from "../../FormValidators/imageValidator"

import { getBrand, updateBrand } from "../../../Redux/Actioncreators/BrandActionCreators"
export default function AdminUpdateBrand() {
    let [allData, setAllData] = useState([])
    let [data, setData] = useState({
        name: "",
        pic: "",
        active: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "",
        pic: ""
    })
    let [show, setShow] = useState(false)
    let navigate = useNavigate()
    let { id } = useParams()

    let dispatch = useDispatch()
    let BrandStateData = useSelector(state => state.BrandStateData)

    function getInputData(e) {
        var name = e.target.name
        var value = e.target.files ? "/brands/" + e.target.files[0].name : e.target.value
        if (name !== "active") {
            setErrorMessage((old) => {
                return {
                    ...old,
                    [name]: name === "pic" ? imageValidator(e) : formValidator(e)
                }
            })
        }
        setData((old) => {
            return {
                ...old,
                [name]: name === "active" ? (value === "1" ? true : false) : value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find((x) => x !== "")
        if (error)
            setShow(true)
        else {
            let item = allData.find((x) => x.name?.toLocaleLowerCase() === data.name.toLocaleLowerCase() && x.id !== id)
            if (item) {
                setShow(true)
                setErrorMessage((old) => {
                    return {
                        ...old,
                        'name': "Brand Name is Already Exist"
                    }
                })
            }
            else {
                dispatch(updateBrand({ ...data }))
                navigate("/admin/brand")
            }
        }
    }
    useEffect(() => {
        (() => {
            dispatch(getBrand())
            if (BrandStateData.length) {
                setAllData(BrandStateData)
                setData(BrandStateData.find((x) => x.id === id))
            }
            else
                setAllData([])
        })()
    }, [BrandStateData.length])
    return (
        <>
            {/* <Breadcrum title="Admin"/> */}

            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-xl-2 col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-xl-10 col-md-9">
                        <h5 className='bg-primary text-center p-2 text-light'>Brand <Link to="/admin/brand"><i className='fa fa-arrow-left text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Name*</label>
                                    <input type="text" name="name" value={data.name} onChange={getInputData} placeholder='Brand Name' className={`form-control ${show && errorMessage.name ? "border-danger" : "border-primary"} border-2`} />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : ""}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Pic</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.name ? "border-danger" : "border-primary"} border-2`} />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : ""}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Active*</label>
                                    <select name="active" value={data.active ? "1" : "0"} onChange={getInputData} className='form-control border-primary border-2'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <button type="submit" className='btn btn-primary w-100'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
