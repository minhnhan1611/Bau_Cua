import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { choiLaiAction } from '../Redux/Actions/BaiTapGameBauCuaAction';

export default function DiemCuoc(props) {

    const tongDiem = useSelector(state => state.BaiTapGameBauCuaReducer.tongDiem)
    const dispatch = useDispatch();

    return (
        <div>
            <h3 style={{ color: 'red', textShadow: '2px 2px white', fontSize: '40px' }} className='text-center mt-0'>GAME BẦU CUA CYBERLEARN</h3>

            <div className="text-center mt-4">
                <span style={{ fontSize: '20px', borderRadius: '5%', backgroundColor: 'rgba(252,2,0,255)' }} className='p-3 text-warning'>Tiền Thưởng:
                    <span className='text-white' style={{ fontSize: '35px' }}> {tongDiem.toLocaleString()}</span> <i className='text-warning'>$</i>
                </span>
            </div>

            <div className="text-center mt-5">
                <button onClick={() => {
                    dispatch(choiLaiAction())
                }} className='p-3 text-white' style={{ fontSize: 15, backgroundColor: 'rgba(239,5,209,255)', border: 'none', borderRadius: '5%' }}>Chơi Lại</button>
            </div>
        </div >
    )
}
