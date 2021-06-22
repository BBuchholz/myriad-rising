import React from 'react';
import BookShelf from './BookShelf';

const DemoContext = React.createContext([BookShelf.demo], () => {});

export default DemoContext;