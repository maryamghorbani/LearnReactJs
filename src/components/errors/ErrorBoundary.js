import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        hasError : false
    }

    render() {
        if (this.state.hasError) {

        }
        
        return this.props.children;
    }

}
export default ErrorBoundary;