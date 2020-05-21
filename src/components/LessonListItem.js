import React from 'react';

const LessonListItem = (props) => {
    if (props.manualCheck) {
        return <li><input type="checkbox" />{props.content}</li>
    }
    return(
        <>
        <h1>{props.stepTitle}</h1>
        <li>{props.content}</li>
        </>
    )
}

export default LessonListItem;