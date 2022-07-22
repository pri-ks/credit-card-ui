import React from 'react';

const inputbox=(props) =>{
    let inputElement=null
    switch(props.elementType)
    {
        case ('input') :
            inputElement=<input
            className='inputElement'
                {...props.elementConfig}
                value={props.value.toUpperCase()}
                onChange={props.changed}
                onFocus={ props.focus } 
                />;
            break;
        
        case ('select') :
                inputElement=(
                    <select className='inputElement' defaultValue='default' 
                    onChange={props.changed}
                    onFocus={ props.focus } 
                    >
                        <option value='default' disabled>
                            {props.elementConfig.default}
                        </option>
                        {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                    </select>
                );
            break;
        default: 
        inputElement=<input
        className='inputElement'
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            onFocus={ props.focus } 
            />;
        break;
    }

    return(
        <div className='inputWrap'>
            <label className='inputLabel'>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default inputbox
