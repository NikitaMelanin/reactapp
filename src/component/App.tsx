import React, { useState } from 'react';
import { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Post from './post/Post';

interface Column {
    title: string;
    description: string;
    datePost: string;
}

interface ComponentStates {
    title: string;
    posts: Column[];

}

 class App extends React.Component<{}, ComponentStates> {
     constructor(props: any) {
         super(props);
         this.state = {
             title: "Красивое название",
             posts: [
                 { title: "Title #1", description: "Description #1", datePost: "25/10/2022" },
                 { title: "Title #2", description: "Description #2", datePost: "26/10/2022" },
                 { title: "Title #3", description: "Description #3", datePost: "27/10/2022" },
             ]
         };
     }


     render() {
        return (
                <div className="App">
                    <div className="wrapper">
                        {this.state.posts.map((item, i) =>
                            <Post title={item.title} description={item.description} date={item.datePost}/>
                        )}
                    </div>
                </div>
                )
    }
}

export default App;
