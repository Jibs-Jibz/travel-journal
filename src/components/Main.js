import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Main(props) {
    return (<section>
        <div className="card">
            <div className="card-img">
                <img src={props.item.imageUrl} alt="" className="img" />
            </div>
            <div className="card-text">
                <div className="card-text1">
                    <p className="card-text1-1">
                        {/* <img src={props.item.imageLocation} alt="logo" />&nbsp; */}
                        <FontAwesomeIcon icon={faLocationDot} color="red" />&nbsp;
                        {props.item.location}
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            <a href={props.item.mapLink} target="_blank" className="link">
                                {props.item.mapText}
                            </a>


                        </span>
                    </p>
                </div>
                <div>
                    <h2>{props.item.title}</h2>
                </div>
                <div className="date">
                    <h4>{props.item.startDate} - {props.item.endDate}</h4>
                </div>
                <div className="descr">
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
        <hr />
    </section>
    )
}