import React from 'react';

const LessonListItem = (props) => {
    if (props.manualCheck) {
        return <li><input type="checkbox" />{props.content}</li>
    }
    return <li>{props.content}</li>
}

export default LessonListItem;