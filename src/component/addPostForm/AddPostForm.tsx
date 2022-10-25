import React from 'react';
import { useState, useRef } from 'react';
import './AddPostForm.css';




function createPost(title: string, description: string, date: string) {
    return
}

export default function AddPostForm() {
    const [title, setTitle] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [date, setDate] = useState(" ");

    const titleInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const descriptionInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const dateInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handlerPressEnterTitle = (e: any) => {
        if(e.key === "Enter") {
            descriptionInputRef.current.focus();
        }
    };

    const handlerPressEnterDescription = (e: any) => {
        if(e.key === "Enter") {
            dateInputRef.current.focus();
        }
    };

    const handlerPressEnterDate = (e: any) => {
        if(e.key === "Enter") {
            titleInputRef.current.focus();
        }
    };

    return (
        <div>
            <form action="">
                <input
                    ref={titleInputRef}
                    type="text"
                    placeholder={"Title"}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyUp={handlerPressEnterTitle}
                />
                <br/>
                <input
                    ref={descriptionInputRef}
                    type="area"
                    placeholder={"Description"}
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyUp={handlerPressEnterDescription}
                />
                <br/>
                <input
                    ref={dateInputRef}
                    type="date"
                    placeholder={"Title"}
                    onChange={(e) => setDate(e.target.value)}
                    onKeyUp={handlerPressEnterDate}
                />
            </form>
        </div>
    );
}