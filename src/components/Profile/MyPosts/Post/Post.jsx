import React from 'react'
import c from './Post.module.css'

export default function Post(props) {
    return (
        <div className={c.item}>
            <img src='https://s0.rbk.ru/v6_top_pics/ampresize/media/img/2/17/754598838857172.jpeg' />
            <div className={c.post}>
                {props.message}
            </div>
            <div className={c.postFooter}>
                <div className={c.like}>{props.likecount}</div>
                <div>Like</div>
            </div>
        </div>
    )
}
