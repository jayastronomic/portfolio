import PreviousMap from 'postcss/lib/previous-map'
import React from 'react'

const Landing = (props) => {

    const goToHome = () => {
        props.history.push("/home")
    }

    return( 
    <div className="landing-container h-screen flex items-center justify-center">
        <button onClick={() => goToHome()} className="landing-enter-button tracking-wider text-white text-2xl hover:opacity-50 bg-transparent border border-white px-12 py-2">Enter</button>
    </div>
    )
}

export default Landing;