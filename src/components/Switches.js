import React, {useContext} from 'react';
import {ContextData} from "../context/ContextData";

const Switches = () => {

    const {change,setChange} = useContext(ContextData)
    const changeHandler = () => {
        setChange(!change)
    }
    return (
        <div className="switch" style={{marginTop:30,marginLeft:20}}>
            <label>
                Выключить изменения
                <input type="checkbox" onChange={changeHandler}/>
                <span className="lever"/>
                Включить изменения
            </label>
        </div>
    );
};

export default Switches;