import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import { setFlowerCategory } from '../../redux/items/actionContainer';
import './cakesCategory.css'

function FlowersCategory() {

    const history = useHistory();
    const dispatch = useDispatch();

    const allFlowers = () => {
        dispatch(setFlowerCategory("All"));
        history.push("/flower-items");
    }

    const lilyFlowers = () => {
        dispatch(setFlowerCategory("Lily"));
        history.push("/flower-items");
    }

    const RoseFlowers = () => {
        dispatch(setFlowerCategory("Rose"));
        history.push("/flower-items");
    }

    const tulipFlowers = () => {
        dispatch(setFlowerCategory("Tulip"));
        history.push("/flower-items");
    }

    return (
        <div className="itemCategory">
            <h2 className="itemCategory-title">Flowers online</h2>
            <div className="itemCategory-items-wrapper">
                <div className="itemCategory-left">
                    <div className="itemCategory-left-first">
                        <img 
                            className="itemCategory-largeImages" 
                            src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                            alt="all cakes"
                            onClick={allFlowers}
                        />
                        <div className="itemCategory-caption">
                            <h2>All flowers</h2>
                            <p>Celebration ready</p>
                        </div>
                    </div>
                    <div className="itemCategory-left-second">
                        <img 
                            className="itemCategory-smallImages" 
                            src="https://images.unsplash.com/photo-1518701005037-d53b1f67bb1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHVsaXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                            alt="all cakes"
                            onClick={lilyFlowers}
                            />
                        <div className="itemCategory-caption">
                            <h2>Lily</h2>
                            <p>Birthday special</p>
                        </div>
                    </div>
                </div>
                <div className="itemCategory-right">
                    <div className="itemCategory-right-first">
                        <img 
                            className="itemCategory-smallImages" 
                            src="https://images.unsplash.com/photo-1586968295564-92fd7572718b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" 
                            alt="all cakes"
                            onClick={tulipFlowers}    
                        />
                        <div className="itemCategory-caption">
                            <h2>Tulips</h2>
                            <p>Best in town</p>
                        </div>
                    </div>
                    <div className="itemCategory-right-second">
                        <img 
                            className="itemCategory-largeImages" 
                            src="https://images.unsplash.com/photo-1503652601-557d07733ddc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                            alt="all cakes"
                            onClick={RoseFlowers}    
                        />
                        <div className="itemCategory-caption">
                            <h2>Roses</h2>
                            <p>Party special</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowersCategory;
