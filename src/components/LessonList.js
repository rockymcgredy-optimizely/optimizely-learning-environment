import React from 'react'


const LessonList = (props) => {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export default LessonList;