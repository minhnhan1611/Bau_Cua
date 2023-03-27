import { CHOI_LAI, DAT_CUOC, PLAY_GAME } from "../Types/BaiTapGameBauCuaType";

export const datCuocAction = (maquanCuoc, tangGiam) => ({
    type: DAT_CUOC,
    quanCuoc: maquanCuoc,
    tangGiam
})
export const choiGameAction = () => ({
    type: PLAY_GAME
})
export const choiLaiAction = () => ({
    type: CHOI_LAI
})
