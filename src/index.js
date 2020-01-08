import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Joe"
        timeAgo="Today at 16:45"
        content="we should drink"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Me"
        timeAgo="Today at 12:06"
        content="Awesome article"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Steph"
        timeAgo="Today at 2:00"
        content="horrible take"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
