import React from 'react';
import XucXac from './XucXac';
import { useSelector, useDispatch } from 'react-redux';
import { choiGameAction } from '../Redux/Actions/BaiTapGameBauCuaAction';

export default function DanhSachXucXac(props) {

    const dispatch = useDispatch();
    const mangXucXac = useSelector(state => state.BaiTapGameBauCuaReducer.mangXucXac);

    return (
        <div className="ml-5" >
            <div className="bg-white" style={{ width: 300, height: 300, borderRadius: 150, paddingLeft: 10 }}>
                <div className="row">
                    <div className="col-12 text-center" style={{ marginLeft: 70, marginTop: -15 }}>
                        <XucXac xucXacItem={mangXucXac[0]} />
                    </div>
                </div>
                <div className="row" style={{ marginTop: -20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }} className="col-4 text-right">
                        <XucXac xucXacItem={mangXucXac[1]} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginLeft: 25 }} className="col-4 text-right" >
                        <XucXac xucXacItem={mangXucXac[2]} />
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: '15%', marginTop: '6%' }}>
                <button onClick={() => {
                    dispatch(choiGameAction())
                }} style={{ backgroundColor: 'rgba(234,24,44,255)', color: 'rgba(255,235,44,255)', border: '2px solid rgba(251,196,110,255)', borderRadius: '10px', fontSize: '25px', width: 170 }}>Xốc</button>
            </div>
        </div>
    )
}
