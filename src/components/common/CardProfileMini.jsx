import React from 'react'
import '../../assets/style/global.scss'
import { Link } from 'react-router-dom';

function CardProfileMini({ props }) {
  return (
    <div className='card cardMiniProfile d-flex flex-column justify-content-center align-items-center p-2'>
        <img className='home-profile-pic mt-3' src={props.image_url} alt="" />
        <div className='mt-5 d-flex flex-column justify-content-center align-items-center w-100'>
            <h5 className='textshadow '>{props.first_name} {props.last_name}</h5>

            <Link to={`/profile/${props.user_id}`} className='btn btn-primary'>
              View Profile
            </Link>

            <div className='d-flex justify-content-between w-100 border-top mt-2'>
                <div className='text-center d-flex flex-column w-100 mt-1'>
                  <span className='text-center text-muted font700 textshadow'>9</span>
                  <span className='font700 textshadow'>POST</span>
                 </div>
                 <div className='text-center d-flex flex-column w-100 mt-1'>
                  <span className='text-center text-muted font700 textshadow'>0</span>
                  <span className='font700 textshadow'>FRIENDS</span>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default CardProfileMini