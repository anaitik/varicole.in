import React from 'react'
import "./css/Getnews.css"
import axios from "axios"
import { useState } from 'react'
import Accordian from './Accordian'
const Getnews = () => {
  const [data, setdata] = useState([])
  let y=new Date().getFullYear
  let m=new Date().getMonth
  let d=new Date().getDate
  const fetch = () => {
    axios.get("https://newsapi.org/v2/everything?q=india&language=hi&from="+{y}+"-"+{m}+"-"+{d}+"&to="+{y}+"-"+{m}+"-"+{d}+"&sortBy=popularity&apiKey=eb9ad71eb7394843a5b7055d847a1054")
      .then((response) => {
        // console.log(response)
        setdata(response.data.articles)
      })
  }
  return (
    <div className="col-xl-7 Getnews_box me-auto">
      <div className="d-flex justify-content-between">
      <h1>Today's Headlines</h1>
      <button className="btn btn-primary Get_button " onClick={fetch}>Get</button>
      </div>
      {
        data.map((value,id) => {
          return (
            <Accordian
            key={id} {...value}
            />
          )
        })
      }
    </div>
  )
}

export default Getnews