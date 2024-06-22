import '@testing-library/jest-dom';
import "regenerator-runtime"
declare global {
    var $RefreshReg$: () => void;
    var $RefreshSig$: () => () => void;
}
global.$RefreshReg$ = () => { };
global.$RefreshSig$ = () => () => { };
