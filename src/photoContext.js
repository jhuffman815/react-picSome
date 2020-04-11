import React from "react"
const {Provider, Consumer} = React.createContext()

class PhotoContextProvider extends React.Component {
    render() {
        return (
            <Provider>
                {this.props.children}
            </Provider>
        )
    }
}

export {PhotoContextProvider, PhotoContextConsumer as Consumer}