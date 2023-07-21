export default function Posting(props){
    return (
        <div style={{ borderRadius: '5px', boxShadow: "grey 0px 0px 5px", padding: "10px", maxWidth: "300px", margin: "20px 0px"}}>
            <div>{props.data.price}</div>
            <h3>{props.data.title}</h3>
            <img src={props.data.imageURL} alt=""/>
            <p>{props.data.description}</p>

        </div>
    )
}