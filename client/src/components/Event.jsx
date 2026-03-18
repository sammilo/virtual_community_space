import React from 'react'
import '../css/Event.css'

const Event = ({ id, title, date, time, image }) => {
    return (
        <article className='event-information'>
            <img src={image} alt={title} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {date} <br /> {time}</p>
                </div>
            </div>
        </article>
    )
}

export default Event
