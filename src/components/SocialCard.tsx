import React from "react";
import SocialLinkButton from "./SocialLinkButton";
import headshot from "../assets/Placeholder-headshot.png";

interface Props {
  name: string;
  desc?: string;
  location: string;
  children: string[];
}

function SocialCard({ name, desc, location, children }: Props) {
  return (
    <>
      <div
        className="container p-3 m-1 socialCard"
        style={{
          maxWidth: "300px",
          width: "100vw",
          borderStyle: "Solid",
          borderRadius: "25px",
        }}
      >
        <div id="cardHeader" style={{ textAlign: "center" }}>
          <img
            className="m-4"
            src={headshot}
            style={{ height: "100px" }}
            alt="Profile Picture"
          />
          <div id="cardTitle">
            <h2 className="mb-0">{name}</h2>
            <sub>{location}</sub>
          </div>
          <div id="cardDesc">
            <p className="mt-4 mb-1">{'"' + desc + '"'}</p>
          </div>
        </div>

        <div className="col m-2" id="socialLinks">
          {children.map((child, index) => (
            <div className="row p-2" key={index}>
              {
                <SocialLinkButton
                  text={child}
                  link="www.google.com"
                  color="primary"
                ></SocialLinkButton>
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SocialCard;
