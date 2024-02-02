import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { counterActions } from '../Store/Counter';
import { privacyActions } from '../Store/Privacy';

const Controls = () => {

    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }
    const handlePrivacyToggle = () => {
        dispatch(privacyActions.toggle());
    }
    const handleAdd = () => {
       dispatch(counterActions.add(inputElement.current.value))
        inputElement.current.value = "";
    }
    const handleSubtract = () => {
        dispatch(counterActions.subtract(inputElement.current.value))
        inputElement.current.value = "";
    }

    return (
        <div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button onClick={handleIncrement} type="button" className="btn btn-primary">+1</button>
                <button onClick={handleDecrement} type="button" className="btn btn-success">-1</button>
                <button onClick={handlePrivacyToggle} type="button" className="btn btn-warning">Privacy Toggle</button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
                <input ref={inputElement} type="text" placeholder="Enter your no." className="p-2" />
                <button onClick={handleAdd} type="button" className="btn btn-info">Add</button>
                <button onClick={handleSubtract} type="button" className="btn btn-danger">Substract</button>
            </div>
        </div>
    )
}

export default Controls
