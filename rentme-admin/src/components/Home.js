import React from 'react'
import  Cars from './Cars'
import Searchform from './Searchform'
// import TopImage from './TopImage'

export default function Home(props) {
  return (
    <div className='container'>
        {/* <Searchform /> */}
        <Cars link={props.link} city_id={props.city_id}/>
      {/* <TopImage /> */}
      {/* <Cars link={props.link} name={props.name} watchFunction={props.watchFunction} descFunction={props.descFunction} progressFunction={props.progressFunction} /> */}
    </div>
  )
}
