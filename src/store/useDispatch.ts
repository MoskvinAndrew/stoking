import {useDispatch as _useDispatch} from "react-redux";
import {AuthACType} from "store/actions/authActions";

type RootActionCreators = AuthACType

export function useDispatch() {
    const dispatch = _useDispatch();
    return (ActionCreator: RootActionCreators) => dispatch(ActionCreator);
}