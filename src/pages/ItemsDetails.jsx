import { useParams } from "react-router-dom";
import React from 'react'
import './ItemsDetails.css'
const ItemsDetails = () => {
    const {id} = useParams()
    console.log(id)

    return(
        <div>ItemsDetails</div>
    )
}
export default ItemsDetails;

// cd 