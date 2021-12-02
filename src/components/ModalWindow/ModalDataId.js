function ModalDataId(props) {
  return (
    <div className="card-info__box">
      <h1 className="card-info__id">
        <span className="card-info__id-name">
          {props.name}
        </span>
        <span className="card-info__id-batch">Prodemy #7</span>
      </h1>
    </div>
  );
}

export default ModalDataId;
