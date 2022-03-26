import React from 'react';

const Artcle = () => {
    return (
        <div className='container'>
            <hr />
            <h3>How does React work?</h3>

            <article>
                React is a Javascript Library. An Engineer of Facebook at first developed react.
                in react actually all file are written in fake html JSX or Javascript XML.React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. To design a UI react is very efficient Beacuse of this.
            </article>
            <br />

            <h3>Props vs State</h3>
            <div className='d-flex mb-5'>
                <ol type='i'>
                    <li>State are mutable</li>
                    <li>States can be modified using setState()</li>
                    <li>States can be changes asynchronous</li>
                    <li>States are passed inside a component</li>
                </ol>
                <ol type='i'>
                    <li>Props are immutable</li>
                    <li>Props can not be modified</li>
                    <li>Props are read only</li>
                    <li>Props are passed outside a component</li>
                </ol>
            </div>
        </div>
    );
};

export default Artcle;