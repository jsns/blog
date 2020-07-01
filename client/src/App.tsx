import * as React from 'react';
import Header from './components/Header';
import ListPosts from './components/ListPosts';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Header />
                <ListPosts />
            </div>
        </React.Fragment>
    );
}

export default App;