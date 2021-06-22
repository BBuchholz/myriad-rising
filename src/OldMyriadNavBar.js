import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

class OldMyriadNavBar extends React.Component {
    
    render() {
        return(

            <div>
                <h2>
                    <ButtonToolbar className="custom-btn-toolbar">
                        <LinkContainer to="/log-entry-prev">
                            <Button>[PrevLogEntry]</Button>
                        </LinkContainer>
                        <LinkContainer to="/log-entry">
                            <Button>[LogEntry]</Button>
                        </LinkContainer>
                    </ButtonToolbar>
                </h2>
                <p>[ABOVE -> OldMyriadNavBar: delete buttons as replaced with new navigation, remove old bar when all buttons are gone...]</p>
            </div>
        );
    }
}

export default OldMyriadNavBar;