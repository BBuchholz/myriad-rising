import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
//import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
//import FormControl from 'react-bootstrap/FormControl';

import DemoContext from './context/DemoContext';
import BookShelf from './context/BookShelf';

const LogEntriesNew = () => {

    
    
    const demoKey = useContext(DemoContext)[0];
    const currentBook = BookShelf[demoKey];

    const   [tagStringValue, setTagStringValue] = useState(''),
            onInputTagString = ({target:{value}}) => setTagStringValue(value),
            [entryBodyValue, setEntryBodyValue] = useState(''),
            onInputEntryBody = ({target:{value}}) => setEntryBodyValue(value),
            processSubmittedValues = (tagString, body) => {
                //working as alert, but can't update context dynamically without it being overwritten by every load, new directions in progress, see dev notes
                //alert(tagString + ", " + body);
                currentBook.entries.push({
                    entryTitle: "no title",
                    entryBody: entryBodyValue,
                    entryTagString: tagStringValue
                });
                alert(currentBook.entries);
            },
            onFormSubmit = e => {
                e.preventDefault();
                if(entryBodyValue.trim().length > 0) {
                    processSubmittedValues(tagStringValue, entryBodyValue);
                    setTagStringValue('');
                    setEntryBodyValue('');
                }
            };

    return(
        <div>
            <Form onSubmit={onFormSubmit}>
                <Form.Group controlId="formGroupTagString">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Tag String"
                        onChange={onInputTagString} 
                        value={tagStringValue}/>
                </Form.Group>
                <Form.Group controlId="formGroupEntryTextArea">
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        onChange={onInputEntryBody}
                        value={entryBodyValue}/>
                </Form.Group>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                        <Button type="submit" className="mb-2">
                            Submit
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
}

export default LogEntriesNew;