//rfce
import React from 'react'

function Navbar(props) {
    const { lastname } = props
    return (
        <>
            <div>Navbar</div><br />
            <h1>{lastname}</h1>
        </>

    )
}

export default Navbar