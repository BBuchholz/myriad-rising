import React from 'react';
import Logo from './Logo';
import NotesUrlProjectEntry from './NotesUrlProjectEntry';

class NotesView extends React.Component {
    
    render() {
        return(

            <div>
                <Logo />
                <div>
                    Current Tasks
                    <ul>
                        <li>
                            <NotesUrlProjectEntry 
                                url="https://docs.google.com/spreadsheets/d/1Rqqi81pQhz-yTJfFenmzn1Kr8QQdTGz5HRUFC1K9-hc/edit?usp=sharing" 
                                text="Click This Link For Current Work"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NotesView;