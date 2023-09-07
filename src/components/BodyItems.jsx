import './BodyItems.css';

const BodyItems = (props) => {
  return (
    <div className="body-items">
      <div className="body-items__name">
        <div className="body-item">Дата(ДД.ММ.ГГ)</div>
        <div className="body-item">Пройдено км</div>
        <div className="body-item">Дествие</div>
      </div>
      <div className="body-items__info">
        {props.items.map((item, i) => (
          <div className="body-item__info" key={i}>
            <p className="info-date">{ item.date }</p>
            <p className="info-steps">{ item.steps }</p>
            <div className="info-container">
              <button className="replace-btn">replace</button>
              <button className="delete-btn">delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BodyItems;