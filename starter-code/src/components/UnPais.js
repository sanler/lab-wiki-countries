import React from 'react';
import {Link} from 'react-router-dom'
const UnPais=(props)=>{

    return (
    
        <Link className="list-group-item list-group-item-action" to={`/${props.oneCountry.cca2}`}>{props.oneCountry.cca2} {props.oneCountry.name.common}</Link>
    );

}

export default UnPais;