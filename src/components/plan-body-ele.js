import "./plan-body-ele.css"
function PlanElement(props){
    return(
        <div>
            <div className={props.plan}>
                <div className={props.device}><h1 className="plans-name">{props.name}</h1></div>
                <center>
                <h3 className={props.info}>{props.price}</h3>
                <h3 className={props.infoagain}>{props.video}</h3>
                <h3 className="plan-price3">{props.res}</h3>
                </center>
            </div>
        </div>
    )
}
export default PlanElement;