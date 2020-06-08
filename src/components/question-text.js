import React from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Question extends React.Component {
    render() {
        return (
            <>
            <Row>
                <Col>
                    <h1>{this.props.q}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{this.props.help}</p>
                </Col>
            </Row>
            </>
        )
    }
}

export default Question