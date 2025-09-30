import "./App.css";
import "./TeamMemberCard.css";
import {Link} from "react-router-dom";

function TeamMemberCard(props) {
    return (
        <>
            <div className={"team-member-card"}>
                <h3>{props.name}</h3>
                <div className={"img-container"}>
                    <img
                        className={"card-image"}
                        src={props.imgSrc || ""}
                        alt={props.imgAlt || "none"}
                    />
                </div>
                <Link to={props.link}>Learn more</Link>
            </div>
        </>
    );
}

export default TeamMemberCard;
