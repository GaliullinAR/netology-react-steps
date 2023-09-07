import './Form.css';

const Form = ({onSubmitForm}) => {
  return (
    <form className="form" onSubmit={onSubmitForm}>
      <label className="date-group">
        <span>
          Дата(ДД.ММ.ГГ)
        </span>
        <input name='date' className='date' type="text" />
      </label>
      <label className="steps-group">
        <span>
          Пройдено км
        </span>
        <input name='steps' className="steps" type="text" />
      </label>
      <button className="send-btn" type="submit">
        Ok
      </button>
    </form>
  )
}

export default Form;