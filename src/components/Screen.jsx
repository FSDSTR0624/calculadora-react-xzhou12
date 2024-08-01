import "./Screen.css";

function Screen(props) {
  return (
    <div className="screen">
      <span id="pendiente">{props.pendiente}</span>
      <input type="text" id="pantalla" readOnly value={props.pantalla} />
    </div>
  );
}

export default Screen;
