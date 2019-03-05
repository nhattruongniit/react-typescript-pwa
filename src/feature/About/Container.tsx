import React from 'react';

interface IProps {
  history?: any
}

const About: React.FunctionComponent<IProps> = ({ history }) => {
  const handleGotoTodo = () => {
    history.push('/todo');
  }
  return (
    <div>
      this is about <br />
      <button 
        type="button"
        onClick={handleGotoTodo}
      >
        Go to Todo
      </button> 
    </div>
  )
};

export default About;