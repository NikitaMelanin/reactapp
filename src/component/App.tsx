import React, { useState } from 'react';
import { useRef } from 'react';
import './App.css';
import Post from './post/Post';
import Header from './header/Header';
import AddPostForm from "./addPostForm/AddPostForm";

interface Column {
    title: string;
    description: string;
    datePost: string;
}

interface ComponentStates {
    posts: Column[];

}

class App extends React.Component<{}, ComponentStates> {
    private firstRef: React.RefObject<unknown>;
     constructor(props: any) {
         super(props);
         this.firstRef = React.createRef();
         this.state = {
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
                    <Header />
                    <div className="wrapper">
                        {this.state.posts.map((item, i) =>
                            <Post title={item.title} description={item.description} date={item.datePost}/>
                        )}
                    </div>
                    <hr/>
                    <AddPostForm />
                </div>
        )
    }
}

export default App;