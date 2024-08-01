import "./Buttons.css"

function Buttons(props) {
    return (
        <>
          <button className={props.classes} onClick={props.click} >
            { props.children }
          </button>
        </>
    );
}

export default Buttons;