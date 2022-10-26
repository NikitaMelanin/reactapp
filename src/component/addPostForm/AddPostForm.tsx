import React from 'react';
import { useState, useRef } from 'react';
import './AddPostForm.css';


interface Column {
    title: string;
    description: string;
    datePost: string;
}

function createPost(inputTitle: string, inputDescription: string, inputDate: string): Column {
    return {title: inputTitle, description: inputDescription,datePost: inputDate}
}

export default function AddPostForm(addPost: any) {
    const [title, setTitle] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [date, setDate] = useState(" ");

    const titleInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const descriptionInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const dateInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const handlerPressEnterTitle = (e: any) => {
        setTitle(e.target.value);
        if(e.key === "Enter") {
            descriptionInputRef.current.focus();
        }
    };

    const handlerPressEnterDescription = (e: any) => {
        setDescription(e.target.value);
        if(e.key === "Enter") {
            dateInputRef.current.focus();
        }
    };

    const handlerPressEnterDate = (e: any) => {
        setDate(e.target.value);
        if(e.key === "Enter") {
            titleInputRef.current.focus();
        }
    };

    const handlerClick = () => {
        addPost(createPost(title, description, date));
    }

    return (
        <div>
            <div className={'float_right'}>
                <div className={'border'}>
                    <div className={'post_header'}>
                        <h1>{ title }</h1>
                    </div>
                    <hr/>
                    <div className={'post_content'}>
                        <p>{ description }</p>
                    </div>

                    <hr/>
                    <div className={'post_date'}>
                        <p>{ date }</p>
                    </div>
                </div>
            </div>



            <form action="" className={'form'}>

                <label htmlFor="titleInput">Название поста</label>
                <input
                    name={"titleInput"}
                    ref={titleInputRef}
                    type="text"
                    placeholder={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyUp={handlerPressEnterTitle}
                />
                <label htmlFor="titleInput">Описание поста</label>
                <input
                    ref={descriptionInputRef}
                    type="area"
                    placeholder={"Description"}
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyUp={handlerPressEnterDescription}
                />
                <label htmlFor="titleInput">Дата публикации</label>
                <input
                    ref={dateInputRef}
                    type="date"
                    placeholder={"Title"}
                    onChange={(e) => setDate(e.target.value)}
                    onKeyUp={handlerPressEnterDate}
                />
            </form>
            <div className={'width_max'}>
                <button className={'align_center'} onClick={handlerClick}>Добавить пост</button>
            </div>

        </div>
    );
}