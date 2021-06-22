import React, { useContext } from 'react';
import DemoContext from './context/DemoContext';
import BookShelf from './context/BookShelf';
import { ListGroup } from 'react-bootstrap';

const LogEntriesListView = () => {
    
    const demoKey = useContext(DemoContext)[0];
    const currentBook = BookShelf[demoKey];
    
    const renderEntry = (entry) => {
        const renderedEntry = [];

        if(entry.entryTitle){
            renderedEntry.push(
                <h3>{entry.entryTitle}</h3>                
            );
        }

        if(entry.entryTagString){
            renderedEntry.push(
                <p>{entry.entryTagString}</p>
            );
        }

        if(entry.entryBody){
            renderedEntry.push(
                <p>{entry.entryBody}</p>                
            );
        }

        return renderedEntry;
    }; 

    // generate entries
    const renderedEntries = [];
    let entries = "not found";
    if(currentBook.entries){
        entries = "found";

        for(const entry of currentBook.entries){
            renderedEntries.push(
               <ListGroup.Item>{renderEntry(entry)}</ListGroup.Item> 
            );
        }
    }

    return (
        <div>
            <hr/>
            Current Book: {currentBook.bookTitle}
            <hr/>
            Entries? {entries}
            <hr/>
            <ListGroup>
                {renderedEntries}
            </ListGroup>
        </div>
    );
}

export default LogEntriesListView;