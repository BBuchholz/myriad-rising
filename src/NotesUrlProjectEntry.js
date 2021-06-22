function NotesUrlProjectEntry(props) {
    
    return(

        <ul>
            <li><a 
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >{props.text}</a></li>
        </ul>
    );
    
}

export default NotesUrlProjectEntry;