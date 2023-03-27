import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { datCuocAction } from '../Redux/Actions/BaiTapGameBauCuaAction';
import { useSpring, animated } from 'react-spring';

export default function QuanCuoc(props) {

    const dispatch = useDispatch();

    const [propsUseSpringInCrease, setInCrease] = useSpring(() => {
        return {
            to: { scale: 1 },
            from: { scale: 0.75 },
            reset: true
        }
    })

    const [propsUseSpringDeCrease, setDeCrease] = useSpring(() => {
        return {
            to: { scale: 1 },
            from: { scale: 0.75 },
            reset: true
        }
    })

    const { quanCuocProps } = props;

    const handleIncrease = () => {
        setInCrease({ scale: 0.75 });
        setInCrease({ scale: 1 });

        dispatch(datCuocAction(quanCuocProps.ma, true));
    };

    const handleDecrease = () => {
        setDeCrease({ scale: 0.75 });
        setDeCrease({ scale: 1 });

        dispatch(datCuocAction(quanCuocProps.ma, false));
    };

    return (
        <div className='mt-3'>
            <img style={{ width: 160, marginLeft: 20 }} src={quanCuocProps.hinhAnh} alt={quanCuocProps.ma} />

            <div style={{ backgroundColor: 'rgba(29,108,7,255)', borderRadius: '10px', width: 180, marginLeft: 10 }} className='mt-2 pb-2 text-center' >
                <animated.button style={{ transform: propsUseSpringInCrease?.scale?.interpolate(scale => `scale(${scale})`) }} onClick={handleIncrease} className='btn btn-primary'><i className='fa fa-plus'></i></animated.button>
                <span className='text-warning m-3' style={{ fontSize: 25 }}>{quanCuocProps.diemCuoc}</span>
                <animated.button style={{ transform: propsUseSpringDeCrease?.scale?.interpolate(scale => `scale(${scale})`) }} onClick={handleDecrease} className='btn btn-primary'><i className="fa fa-minus"></i></animated.button>
            </div>
        </div>
    );
}
