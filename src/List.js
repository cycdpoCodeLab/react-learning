import React from 'react';

class Lesson extends React.Component {
  render() {
    const
      {lesson, index} = this.props
    ;
    return (
      <li onClick={() => Lesson.handleClick(index, lesson)}>
        <h3>{lesson.title}</h3>
        <p>{lesson.description}</p>
      </li>
    );
  };

  static handleClick(index, lesson) {
    console.log(index + ' - ' + lesson.title);
  };
}


class LessonsList extends React.Component {
  render() {
    const {lessons} = this.props;
    return (
      <ul>
        {lessons.map((lesson, index) => (
          <Lesson key={index} index={index} lesson={lesson}/>
        ))}
      </ul>
    );
  };
}

const lessons = [
  {title: 'Lesson 1: title', description: 'Lesson 1: description'},
  {title: 'Lesson 2: title', description: 'Lesson 2: description'},
  {title: 'Lesson 3: title', description: 'Lesson 3: description'},
  {title: 'Lesson 4: title', description: 'Lesson 4: description'}
];

export default class List extends React.Component {
  render() {
    return (
      <LessonsList lessons={lessons}/>
    );
  };
};