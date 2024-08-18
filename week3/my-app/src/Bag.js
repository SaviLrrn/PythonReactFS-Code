function Bag(props){
    const bag = {
        padding: "20px",
        border: "1px solid grey"
    }

    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}

export default Bag;