import React from 'react';
import './Button.scss';
import classNames from 'classnames';


function Button({children,size,color,layout,...rest}) {
  
    return <button className={classNames(['Button',size,color,{...layout}])} {...rest}>{children}</button>
}   


export default Button;