export default function Overview(props) {
  return (
    <div className="item">
      <div className="number">
        <h1>{props.number}</h1>
      </div>
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <button className="button">X</button>
    </div>
  );
}
