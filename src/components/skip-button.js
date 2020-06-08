import React from "react"
import Button from 'react-bootstrap/Button';

class SkipButton extends React.Component {
    render() {
        return (
            <Button variant="secondary" block onClick={this.props.clickHandler}>
                <i>Skip this question</i>
            </Button>
        )
    }
}

export default SkipButton
