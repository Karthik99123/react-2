import React from 'react'

import { mobiles } from "./mobiles.js"
import mobilesStyles from "./Mobiles.modules.css"

function Mobiles(){
    return (
        <div className={mobilesStyles.mobiles}>
            {mobiles.map(({id,name,image,price})=>
            {
                return <div key={id} className={mobilesStyles.mobiles}>
                    <img src={image}  alt=""/>
                    <h4>Price: {price}</h4>
                    </div>
             })}
        </div>
    )
}