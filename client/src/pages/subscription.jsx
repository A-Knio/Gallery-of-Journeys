import React from "react"

const Subscription = () => {
    return(
        <div >
            <div>
            <div className="container"> 
                <h2>Basic 30 </h2>
                <p>Gives you 30 downloads a month</p>
                <p>Lower quality photos</p>
                <p>$29/month</p>
            </div>
            <button> Subscribe </button>
            </div>


            <div>
            <div>
                <h2>Premium</h2>
                <p>Gives you up to 100 downloads a month</p>
                <p>High quality phots</p>
                <p>$70/month</p>
            </div>
            <button> Subscribe </button>
            </div>
        </div>
        
    ) 
}

export default Subscription;