import React from 'react'
import { useSelector } from 'react-redux'
import Chat from '../chatbot/Chat'
import Footer from '../home/Footer'
import NavBar from '../home/NavBar'
import ItemCard from './ItemCard'

import './itemContainer.css'

function CakeContainer() {

    const cakes = useSelector((state) => state.items.cakes);
    const category = useSelector((state) => state.items.cakeCategory)

    return (
       <React.Fragment>
            <NavBar />
            <div className="itemContainer">
                <div className="itemContainer-cardWrapper">
                    {cakes.map((cake) => {
                        if(cake.quantity <= 0){
                            return null;
                        }
                        else if(category === "All"){
                            return <ItemCard key={cake._id} item={cake} />
                        }
                        else if(cake.category === category){
                            return <ItemCard key={cake._id} item={cake} />
                        }
                        else{
                            return null
                        }
                    })}
                </div>
            </div>
            <Chat />
            <Footer />
       </React.Fragment>
    )
}

export default CakeContainer
