// higher order component = a component that renders a component
//reuse code
//render hijacking
// props manipulation
//abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = () => (
    <div>
        <h1>Info</h1>
        <p>the info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props)=> (
        <div>
            {props.isAdmin && <p>private info</p>}
            <WrappedComponent {...props /*here the props that are set below in 
            the rendered component are given to the child component to use, Info in our case*/
                                        }/> 
        </div>
    )
}

const requiredAuth = (WrappedComponent) => {
    return (props)=> (
        <div>
            {props.isAuth ? (
                <WrappedComponent {...props} />
            ): (
                <p>pls log in</p>
            )}
        </div>
    )
}
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requiredAuth(Info)
ReactDOM.render(<AuthInfo isAuth={false} info="there is the in"/>,document.getElementById('app'))