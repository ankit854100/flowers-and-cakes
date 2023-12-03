import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { setCakeCategory } from '../../redux/items/actionContainer';
import './cakesCategory.css'

function CakesCategory() {

    const history = useHistory();

    const dispatch = useDispatch();

    function allCakes(){
        dispatch(setCakeCategory("All"));
        history.push("/cake-items");
    }

    function chocolateCakes(){
        dispatch(setCakeCategory("Chocolate"));
        history.push("/cake-items");
    }

    function butterScotchCakes(){
        dispatch(setCakeCategory("Butterscotch"));
        history.push("/cake-items");
    }

    function vanillaCakes(){
        dispatch(setCakeCategory("Vanilla"));
        history.push("/cake-items");
    }

    return (
        <div className="itemCategory">
            <h2 className="itemCategory-title">Cakes online</h2>
            <div className="itemCategory-items-wrapper">
                <div className="itemCategory-left">
                    <div className="itemCategory-left-first">
                        <img 
                            className="itemCategory-largeImages"
                            src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                            alt="all cakes"
                            onClick={allCakes}/>
                        <div className="itemCategory-caption">
                            <h2>All cakes</h2>
                            <p>Celebration ready</p>
                        </div>
                    </div>
                    <div className="itemCategory-left-second">
                        <img 
                            className="itemCategory-smallImages" 
                            src="https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" 
                            alt="all cakes"
                            onClick={butterScotchCakes}
                        />
                        <div className="itemCategory-caption">
                            <h2>Butterscotch cakes</h2>
                            <p>Birthday special</p>
                        </div>
                    </div>
                </div>
                <div className="itemCategory-right">
                    <div className="itemCategory-right-first">
                        <img 
                            className="itemCategory-smallImages" 
                            src="https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                            alt="all cakes"
                            onClick={chocolateCakes}    
                        />
                        <div className="itemCategory-caption">
                            <h2>Chocolate cakes</h2>
                            <p>Best in town</p>
                        </div>
                    </div>
                    <div className="itemCategory-right-second">
                        <img 
                            className="itemCategory-largeImages" 
                            src="https://images.unsplash.com/photo-1561702856-b4ec96854ed8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                            alt="all cakes"
                            onClick={vanillaCakes}
                        />
                        <div className="itemCategory-caption">
                            <h2>Vanilla cakes</h2>
                            <p>Party special</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CakesCategory
