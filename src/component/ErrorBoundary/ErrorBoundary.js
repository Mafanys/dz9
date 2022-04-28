import React from "react";
import ErorPage from "../ErorPage/ErorPage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErorPage />     
    }

    return this.props.children; 
  }     
}

export default ErrorBoundary;