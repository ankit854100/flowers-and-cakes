import React from 'react'
import { useSelector } from 'react-redux'

import NavBar from '../home/NavBar'
import ItemCard from './ItemCard'

import './itemContainer.css'
import Footer from '../home/Footer'

function FlowerContainer() {

    const flowers = useSelector((state) => state.items.flowers);
    const category = useSelector((state) => state.items.flowerCategory);

    return (
        <React.Fragment>
            <NavBar />
            <div className="itemContainer">
                <div className="itemContainer-cardWrapper">
                    {flowers.map((flower) => {
                        if(category === "All"){
                            return <ItemCard key={flower._id} item={flower} />
                        }
                        else if(category === flower.category){
                            return <ItemCard key={flower._id} item={flower} />
                        }
                        else{
                            return null;
                        }
                    })}
                </div>
            </div>
            <Footer />
       </React.Fragment>
    )
}

export default FlowerContainer