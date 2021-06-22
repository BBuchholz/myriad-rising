import React from 'react';
import Form from 'react-bootstrap/Form';

class OldMyriadLogEntryForm extends React.Component {
    render() {
        return(
            <div>
                <Form>
                    <Form.Group controlId="formGroupTagString">
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Tag String" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEntryTextArea">
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default OldMyriadLogEntryForm;