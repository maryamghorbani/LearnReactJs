import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        hasError : false
    }
    static getDrivedStateFromError(error) {
        return { hasError : true }
    }
    componentDidCatch(error, errorInfo) {
        // send errorInfo to Server for store
    }

    render() {
        if (this.state.hasError) {
            return <h1>Errors!</h1>
        }

        return this.props.children;
    }

}
export default ErrorBoundary;