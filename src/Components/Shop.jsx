import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Breadcrum from "./Partials/Breadcrum"

import { getProduct } from "../Redux/Actioncreators/ProductActionCreators"
import { getMaincategory } from "../Redux/Actioncreators/MaincategoryActionCreators"
import { getSubcategory } from "../Redux/Actioncreators/SubcategoryActionCreators"
import { getBrand } from "../Redux/Actioncreators/BrandActionCreators"
import ProductsContainer from './Partials/ProductsContainer'
import { Link, useLocation } from 'react-router-dom'

export default function Shop() {
  let [products, setProducts] = useState([])
  let [maincategory, setMaincategory] = useState([])
  let [subcategory, setSubcategory] = useState([])
  let [brand, setBrand] = useState([])
  let [mc, setMc] = useState("All")
  let [sc, setSc] = useState("All")
  let [br, setBr] = useState("All")
  let [flag, setFlag] = useState(false)
  let [min, setMin] = useState(0)
  let [max, setMax] = useState(0)
  let [search, setSearch] = useState("")

  let location = useLocation()

  let dispatch = useDispatch()
  let ProductStateData = useSelector(state => state.ProductStateData)
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)

  function filterData(mc, sc, br, min = -1, max = -1) {
    let data = []
    if (mc === "All" && sc === "All" && br === "All")
      data = ProductStateData
    else if (mc !== "All" && sc === "All" && br === "All")
      data = ProductStateData.filter(x => x.maincategory === mc)
    else if (mc === "All" && sc !== "All" && br === "All")
      data = ProductStateData.filter(x => x.subcategory === sc)
    else if (mc === "All" && sc === "All" && br !== "All")
      data = ProductStateData.filter(x => x.brand === br)
    else if (mc !== "All" && sc !== "All" && br === "All")
      data = ProductStateData.filter(x => x.maincategory === mc && x.subcategory === sc)
    else if (mc !== "All" && sc === "All" && br !== "All")
      data = ProductStateData.filter(x => x.maincategory === mc && x.brand === br)
    else if (mc === "All" && sc !== "All" && br !== "All")
      data = ProductStateData.filter(x => x.brand === br && x.subcategory === sc)
    else
      data = ProductStateData.filter(x => x.maincategory === mc && x.brand === br && x.subcategory === sc)

    if (min !== -1 && max !== -1)
      data = data.filter((x) => x.finalPrice >= min && x.finalPrice <= max)
    setProducts(data)
  }

  function sortFilter(option) {
    if (option === "1")
      setProducts(products.sort((x, y) => y.id.localeCompare(x.id)))
    else if (option === "2")
      setProducts(products.sort((x, y) => y.finalPrice - x.finalPrice))
    else
      setProducts(products.sort((x, y) => x.finalPrice - y.finalPrice))

    setFlag(!flag)
  }

  function postSearch(e) {
    e.preventDefault()
    let ch = search.toLowerCase()
    setProducts(ProductStateData.filter((x) => x.name.toLowerCase().includes(ch) || x.maincategory.toLowerCase() === ch || x.subcategory.toLowerCase() === ch || x.brand.toLowerCase() === ch || x.color.toLowerCase() === ch || x.description?.toLowerCase().includes(ch)))
  }
  function searchRecord(search) {
    let ch = search.toLowerCase()
    setProducts(ProductStateData.filter((x) => x.name.toLowerCase().includes(ch) || x.maincategory.toLowerCase() === ch || x.subcategory.toLowerCase() === ch || x.brand.toLowerCase() === ch || x.color.toLowerCase() === ch || x.description?.toLowerCase().includes(ch)))
  }


  function priceFilter(e) {
    e.preventDefault()
    filterData(mc, sc, br, min, max)
  }

  useEffect(() => {
    (() => {
      dispatch(getProduct())
    })()
  }, [ProductStateData.length])

  useEffect(() => {
    (() => {
      dispatch(getMaincategory())
      if (MaincategoryStateData.length)
        setMaincategory(MaincategoryStateData)
    })()
  }, [MaincategoryStateData.length])

  useEffect(() => {
    (() => {
      dispatch(getSubcategory())
      if (SubcategoryStateData.length)
        setSubcategory(SubcategoryStateData)
    })()
  }, [SubcategoryStateData.length])

  useEffect(() => {
    (() => {
      dispatch(getBrand())
      if (BrandStateData.length)
        setBrand(BrandStateData)
    })()
  }, [BrandStateData.length])

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setMc(query.get("mc") ?? "All")
    setSc(query.get("sc") ?? "All")
    setBr(query.get("br") ?? "All")
    if (query.get("search"))
      searchRecord(query.get("search"))
    else
      filterData(query.get("mc") ?? "All", query.get("sc") ?? "All", query.get("br") ?? "All")
  }, [location, ProductStateData.length])
  return (
    <>
      <Breadcrum title="Shop" />

      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-2">
            <div className="list-group mb-3">
              <p className="list-group-item list-group-item-action active" aria-current="true">Maincategory</p>
              <Link to={`/shop?mc=All&sc=${sc}&br=${br}`} className="list-group-item list-group-item-action">All</Link>
              {
                maincategory.map((item, index) => {
                  if (item.active)
                    return <Link key={index} to={`/shop?mc=${item.name}&sc=${sc}&br=${br}`} className="list-group-item list-group-item-action">{item.name}</Link>
                })
              }
            </div>

            <div className="list-group mb-3">
              <p className="list-group-item list-group-item-action active" aria-current="true">Subcategory</p>
              <Link to={`/shop?mc=${mc}&sc=All&br=${br}`} className="list-group-item list-group-item-action">All</Link>
              {
                subcategory.map((item, index) => {
                  if (item.active)
                    return <Link key={index} to={`/shop?mc=${mc}&sc=${item.name}&br=${br}`} className="list-group-item list-group-item-action">{item.name}</Link>
                })
              }
            </div>

            <div className="list-group mb-3">
              <p className="list-group-item list-group-item-action active" aria-current="true">Brand</p>
              <Link to={`/shop?mc=${mc}&sc=${sc}&br=All`} className="list-group-item list-group-item-action">All</Link>
              {
                brand.map((item, index) => {
                  if (item.active)
                    return <Link key={index} to={`/shop?mc=${mc}&sc=${sc}&br=${item.name}`} className="list-group-item list-group-item-action">{item.name}</Link>
                })
              }
            </div>
            <div className="mb-3">
              <h5 className="bg-primary text-center p-2 text-light">Price Filter</h5>
              <form onSubmit={priceFilter}>
                <div className="mb-3">
                  <label>Min Amount</label>
                  <input type="number" name="min" onChange={(e) => setMin(e.target.value)} placeholder='Min Amount' className='form-control border-2 border-primary' />
                </div>
                <div className="mb-3">
                  <label>Max Amount</label>
                  <input type="number" name="max" onChange={(e) => setMax(e.target.value)} placeholder='Max Amount' className='form-control border-2 border-primary' />
                </div>
                <button type="submit" className='btn btn-primary w-100'>Apply Filter</button>
              </form>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-8">
                <form onSubmit={postSearch}>
                  <div className="btn-group w-100">
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} className='search-input form-control border-primary border-2 w-100' placeholder='Enter Name,Color,Brand,Category to Search Products' />
                    <button type="submit" className='btn btn-primary'>Search</button>
                  </div>
                </form>
              </div>
              <div className="col-md-4">
                <select name="sort" onChange={(e) => sortFilter(e.target.value)} className='form-select border-primary border-2'>
                  <option value="1">Latest</option>
                  <option value="2">Price : Hight to Low</option>
                  <option value="3">Price : Low to Hight</option>
                </select>
              </div>
            </div>
            <ProductsContainer data={products} />
          </div>
        </div>
      </div>
    </>
  )
}
