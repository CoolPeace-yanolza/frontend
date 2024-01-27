import { atom } from 'recoil';

const currentPageState = atom({
    key: 'currentPageState',
    default: 1,
});

export default currentPageState;