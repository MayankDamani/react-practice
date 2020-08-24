import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portals Demo</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo

/*
    React portals provide a way to include the children which is not the part of DOM hierarchy of parent component.
*/
