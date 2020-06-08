import React from "react"

import Form from 'react-bootstrap/Form'

class AnswerField extends React.Component {
    render() {
        var form;
        var listItems;
        if (this.props.type === "select") {
            listItems = this.props.options.map((x) => <option>{x}</option>)
            form = (<Form.Control as="select" defaultValue="Choose...">
                        {listItems}
                    </Form.Control>)
        } else {
            form = <Form.Control type={this.props.type} placeholder={this.props.placeholder}/>
        }
        return (
        <Form.Row style={{marginBottom:10}}>
            {form}
        </Form.Row>
        )
    }
}

export default AnswerField
