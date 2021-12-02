function ModalData(props) {
  return (
    <div className="card-info-control">
      <div className="card-info__details">
        <div className="card-info__detail">
          <p className="card-info__detail-label">{props.label1}</p>
          <p className="card-info__detail-data">
            {props.data1}
          </p>
        </div>
        <div className="card-info__detail">
          <p className="card-info__detail-label">{props.label2}</p>
          <p className="card-info__detail-data">
            {props.data2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalData;
