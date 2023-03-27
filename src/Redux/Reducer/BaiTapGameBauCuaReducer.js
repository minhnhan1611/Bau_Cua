import { CHOI_LAI, DAT_CUOC, PLAY_GAME } from "../Types/BaiTapGameBauCuaType";

const initialState = {
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/ga.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/ca.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/nai.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/cua.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/tom.png', diemCuoc: 0 },
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'nai', hinhAnh: './img/nai.png' },
        { ma: 'cua', hinhAnh: './img/cua.png' },
        { ma: 'tom', hinhAnh: './img/tom.png' }
    ]
}

const BaiTapGameBauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAT_CUOC: {
            let danhSachCuocUpdate = [...state.danhSachCuoc]
            let index = danhSachCuocUpdate.findIndex(quanCuoc => quanCuoc.ma === action.quanCuoc)
            if (index !== -1) {
                if (action.tangGiam) {
                    if (state.tongDiem > 0) {
                        danhSachCuocUpdate[index].diemCuoc += 100;
                        state.tongDiem -= 100;
                    }
                } else {
                    if (danhSachCuocUpdate[index].diemCuoc > 0) {
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem += 100;
                    }
                }
            }
            return { ...state, danhSachCuoc: danhSachCuocUpdate };
        }
        case PLAY_GAME: {
            const mangXucXacNgauNhien = [];

            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                const xucSacNgauNhien = state.danhSachCuoc[soNgauNhien]
                mangXucXacNgauNhien.push(xucSacNgauNhien)
                // Cập nhập lại mảng xúc xắc
                state.mangXucXac = mangXucXacNgauNhien;

                // xử lý tăng điểm thưởng
                mangXucXacNgauNhien.forEach((xucXacNN, index) => {
                    const indexDSCuoc = state.danhSachCuoc.findIndex(quanCuoc => quanCuoc.ma === xucXacNN.ma);
                    if (index !== -1) {
                        state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc;
                    }
                })

                // Xử lý hoàn tiền
                state.danhSachCuoc.forEach((quanCuoc, index) => {
                    let indexXucXacNN = mangXucXacNgauNhien.findIndex(xxnn => xxnn.ma === quanCuoc.ma)
                    if (indexXucXacNN !== -1) {
                        state.tongDiem += quanCuoc.diemCuoc
                    }
                })

                // Xử lý làm mới game
                state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                    return { ...quanCuoc, diemCuoc: 0 }
                })
            }
            return { ...state };
        } case CHOI_LAI: {
            state.tongDiem = 1000;
            state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc, index) => {
                return { ...quanCuoc, diemCuoc: 0 }
            });
            return { ...state }
        } default: return { ...state }
    }
}

export default BaiTapGameBauCuaReducer;
