import React from 'react'
import '../../assets/style/global.scss'
function CardProfileMini() {
  
  return (
    <div className='miniProfile card d-flex flex-column justify-content-center align-items-center mt-2'>
        <img className='mini-profile-pic mt-3' src="https://cdn-icons-png.flaticon.com/512/206/206890.png?w=740&t=st=1678785278~exp=1678785878~hmac=e4d2272b7e8b81e2a4ec530ebbd0003c2fd81d4eb34c5d5ff6add1806bd64130" alt="" />
        <div className='card-body d-flex flex-column justify-content-center align-items-center w-100'>
            <h5>User Name</h5>
           
            <div className='d-flex justify-content-between w-100 border-top'>
                <div className='text-center d-flex flex-column w-100'>Post <span className='text-center text-muted'>0</span></div>
                <div className='text-center d-flex flex-column w-100'>Friends<span className='text-center text-muted'>0</span></div>
            </div>
        </div>
    </div>
  )
}

export default CardProfileMini