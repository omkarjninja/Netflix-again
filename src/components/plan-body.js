import "./plan-body.css"
import PlanElement from "./plan-body-ele";
function PlanBody(){
    const plans=[
    {   
        plan:"plan-container2",
        name:"",
        device:"nodevice",
        price:"Prices",
        video:"Quality",
        res:"Resolution",
        noofdevices:"Devices you can use to watch",
        info:"plan-price1",
        infoagain:"plan-price2",
    },
    {   
        plan:"plan-container",
        name:"Mobile",
        device:"mobile device",
        price:"149",
        video:"Good",
        res:"480p",
        noofdevices:"image.png",
        info:"mobile-plan-price1",
        infoagain:"mobile-plan-price2",
        
    },
    {   
        plan:"plan-container",
        name:"Basic",
        device:"basic device",
        price:"199",
        video:"Good",
        res:"720p",
        noofdevices:"image.png",
        info:"plan-price1",
        infoagain:"plan-price2",
    },
    {   
        plan:"plan-container",
        name:"Standard",
        device:"standard device",
        price:"449",
        video:"Better",
        res:"1080p",
        noofdevices:"image.png",
        info:"plan-price1",
        infoagain:"plan-price2",
    },
    {   
        plan:"plan-container",
        name:"Premium",
        device:"premium device",
        price:"699",
        video:"Best",
        res:"4k + HDR",
        noofdevices:"image.png",
        info:"plan-price1",
        infoagain:"plan-price2",
    }
    ]
    return(
        <div>
            <div className="plan-collection">
            <PlanElement className="plan-ele" device={plans[0].device} price={plans[0].price} plan={plans[0].plan}
            video={plans[0].video} res={plans[0].res} noof={plans[0].noofdevices} name={plans[0].name} info={plans[0].info}
            infoagain={plans[0].infoagain}
            ></PlanElement>
             <PlanElement className="plan-ele" device={plans[1].device} price={plans[1].price} plan={plans[1].plan}
            video={plans[1].video} res={plans[1].res} noof={plans[1].noofdevices}name={plans[1].name} info={plans[1].info}
            infoagain={plans[1].infoagain}
            ></PlanElement>
             <PlanElement className="plan-ele" device={plans[2].device} price={plans[2].price} plan={plans[2].plan}
            video={plans[2].video} res={plans[2].res} noof={plans[2].noofdevices} name={plans[2].name} info={plans[2].info}
            infoagain={plans[0].infoagain}
            ></PlanElement>
             <PlanElement className="plan-ele" device={plans[3].device} price={plans[3].price} plan={plans[3].plan}
            video={plans[3].video} res={plans[3].res} noof={plans[3].noofdevices} name={plans[3].name} info={plans[3].info}
            infoagain={plans[0].infoagain}
            ></PlanElement>
             <PlanElement className="plan-ele" device={plans[4].device} price={plans[4].price} plan={plans[4].plan}
            video={plans[4].video} res={plans[4].res} noof={plans[4].noofdevices} name={plans[4].name} info={plans[4].info}
            infoagain={plans[0].infoagain}
            ></PlanElement>
            </div>
        </div>
    )
}
export default PlanBody;