import { atom } from 'recoil';

export const modalState = atom({
    key: "modalStatus", //open or closed,
    default: false
});