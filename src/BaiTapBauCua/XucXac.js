import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

export default function XucXac(props) {
    const { xucXacItem } = props;

    const [propsDice, set] = useSpring(() => ({
        to: {
            xyz: [1800, 1800, 1800]
        },
        from: {
            xyz: [0, 0, 0]
        },
        config: {
            duration: 1000
        },
        reset: true
    }));

    set({ xyz: [1800, 1800, 1800] });

    return (
        <Fragment>
            <div className="scene ml-5">
                <animated.div
                    className="cube"
                    style={{
                        transform: propsDice.xyz
                            ? propsDice.xyz.interpolate((x, y, z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
                            : 'none'
                    }} >
                    <div className="cube__face front">
                        <img src={xucXacItem.hinhAnh} style={{ width: '100%' }} alt={xucXacItem.ma} />
                    </div>
                    <div className="cube__face back">
                        <img src="./img/cua.png" style={{ width: '100%' }} alt="123" />
                    </div>
                    <div className="cube__face right">
                        <img src="./img/tom.png" style={{ width: '100%' }} alt="123" />
                    </div>
                    <div className="cube__face left">
                        <img src="./img/ca.png" style={{ width: '100%' }} alt="123" />
                    </div>
                    <div className="cube__face top">
                        <img src="./img/ga.png" style={{ width: '100%' }} alt="123" />
                    </div>
                    <div className="cube__face bottom">
                        <img src="./img/nai.png" style={{ width: '100%' }} alt="123" />
                    </div>
                </animated.div>
            </div>
        </Fragment>
    );
}
