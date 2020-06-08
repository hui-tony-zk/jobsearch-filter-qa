import React from "react"
import Button from 'react-bootstrap/Button';

class NextButton extends React.Component {
    render() {
        return (
            <Button variant="primary" block onClick={this.props.clickHandler}>Save and next</Button>
        )
    }
}

export default NextButton
