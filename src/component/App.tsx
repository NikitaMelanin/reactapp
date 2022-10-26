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
                 { title: "Title #1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", datePost: "25/10/2022" },
                 { title: "Title #2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. #2", datePost: "26/10/2022" },
                 { title: "Title #3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. #3", datePost: "27/10/2022" },
             ]
         };
     }

     addPost(post: Column) {
         this.state.posts.push(post);
     }

     render() {
        return (
                <div>
                    <div className="App">
                    <Header />
                    <div className={'otstup'}></div>
                    <div className="wrapper">
                        {this.state.posts.map((item, i) =>
                            <Post title={item.title} description={item.description} date={item.datePost}/>
                        )}
                    </div>
                    <hr/>
                    </div>
                    <div className={'form_box'}>
                        <AddPostForm addPost={this.addPost}/>
                    </div>
                </div>
        )
    }
}

export default App;