import { useState, useEffect } from "react";

import "./Home.css";

import TeamMemberCard from "../TeamMemberCard";

function Home() {
    const NAMES = ["Dan Kolonay", "Denia Casimiro", "Vitaliy Dmukhovskyy"];
    const teamData = [
        {
            name: "Dan Kolonay",
            img: "dan_kolonay_selfie.jpg",
            link: "dan-kolonay",
        },
        {
            name: "Denia Casimiro",
            img: "denia-photo-small.jpg",
            link: "denia-casimiro",
        },
        {
            name: "Vitaliy Dmukhovskyy",
            img: "SelfieMAIN.jpg",
            link: "vitaliy-dmukhovskyy",
        },
    ];
    const [nameIndex, setNameIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNameIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className={"head-section"}>
                <h1>Hello from our team!</h1>
                <h2>The members of our team are...</h2>
                <div className={"name-cycle"}>{teamData[nameIndex].name}</div>
            </div>

            <div className={"team-member-container"}>
                {teamData.map((teamMember) => {
                    return (
                        <TeamMemberCard
                            name={teamMember.name}
                            imgSrc={teamMember.img}
                            link={teamMember.link}
                            key={teamMember.name}
                        ></TeamMemberCard>
                    );
                })}
            </div>
        </>
    );
}

export default Home;
