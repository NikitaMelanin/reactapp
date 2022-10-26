import React from 'react';
import './Post.css';

interface Props {
    title: string;
    description: string;
    date: string
}

const Post = ({ title, description, date }: Props) => {
    return (
        <div>
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
    );
}

export default Post;