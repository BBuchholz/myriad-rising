import React, { useContext } from 'react';
import Logo from './Logo';
import Footer from './Footer';
import DemoContext from './context/DemoContext';
import BookShelf from './context/BookShelf';

const SplashScreen = () => {
    const demoKey = useContext(DemoContext)[0];
    const currentBook = BookShelf[demoKey];
    return(

        <div>
            <h1>Current Book Title: {currentBook.bookTitle}</h1>
            <Logo />
            <Footer />
        </div>
    );
    
}

export default SplashScreen;