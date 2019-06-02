import React from 'react';

import Header from './components/Header'
import StreamList from './components/streams/StreamList'
import StreamEdit from './components/streams/StreamEdit'
import StreamCreate from './components/streams/StreamCreate'
import StreamDelete from './components/streams/StreamDelete'
import StreamShow from './components/streams/StreamShow'

import { BrowserRouter, Route } from 'react-router-dom'



const App =()=>{
    return (
    <div className="ui container">
  
        <BrowserRouter> 
        <div>
        <Header />
            <Route path="/" exact component={StreamList}/>
            <Route path="/Streams/new" exact component={StreamCreate}/>
            <Route path="/Streams/edit" component={StreamEdit}/>
            <Route path="/Streams/delete" component={StreamDelete}/>
            <Route path="/Streams/show" component={StreamShow}/>
        </div>
        </BrowserRouter>
    </div>
    )
}

export default App; 