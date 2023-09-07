import { useState } from 'react';
import './App.css';
import BodyItems from './components/BodyItems';
import Form from "./components/Form";

const items = [{
  date: new Date().getDate(),
  steps: 12
}];

const App = () => {
  const [steps, setSteps] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const valueDate = new Date(e.target.date.value);
    const stepsValue = e.target.steps.value;
    const resultDate = `${valueDate.getMonth()+1}.${valueDate.getDate()}.${valueDate.getFullYear()}`;

    setSteps([...steps, {date: resultDate, steps: stepsValue}]);
  
  }

  return (
    <div className="container">
      <Form onSubmitForm={ onSubmitForm } />
      <BodyItems items={ steps } />
    </div>
  )
}

export default App;