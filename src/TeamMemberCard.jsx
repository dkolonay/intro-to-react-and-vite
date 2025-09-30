import "./TeamMemberCard.css";
import { Link, useNavigate } from "react-router-dom";

function TeamMemberCard(props) {
    const navigate = useNavigate();
    return (
        <>
            <div className={"team-member-card"}>
                <h3>{props.name}</h3>
                <div className={"card-image-container"}>
                    <img
                        onClick={()=>{navigate(props.link)}}
                        className={"card-image"}
                        src={"./intro-to-react-and-vite/" + props.imgSrc || ""}
                        alt={props.imgAlt || "none"}
                    />
                </div>

                <Link to={props.link}>Learn more</Link>
            </div>
        </>
    );
}

export default TeamMemberCard;
