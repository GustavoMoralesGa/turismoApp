import React from "react";
import Item from "../Item";
import './itemList.css'

const ItemList = ({ data = [] }) => {
    return(
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="mapeocolumnas col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        {
                            data.map(packages => <Item key={packages.id} info={packages} />)
                        }
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ItemList;