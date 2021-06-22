import React, { useContext } from "react";
import DemoContext from "./context/DemoContext";
import BookShelf from './context/BookShelf';
import {
    Form,
} from 'react-bootstrap';

// const selectedBookTitle = {
//     bookTitle: "Demo Book 1"
// }

export const generateOptionsFromBookshelf = () => {

    const output = [];

    for(const book in BookShelf){
        output.push( 
            <option key={book} value={book}>{BookShelf[book].bookTitle}</option>
        );
    }

    return output;
}

const MyriadNavBarBookSelector = () => {

    const handleChange = (event) => {
        setDemoKey(event.target.value);
    }

    // eslint-disable-next-line
    const [demoKey, setDemoKey] = useContext(DemoContext);

    return(
        <Form inline>
            <Form.Control as="select" onChange={handleChange}>
                {generateOptionsFromBookshelf()}
            </Form.Control>
        </Form>
    );
}

export default MyriadNavBarBookSelector;