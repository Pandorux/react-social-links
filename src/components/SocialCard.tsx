import React from "react";
import SocialLinkButton from "./SocialLinkButton";
import headshot from "../assets/Placeholder-headshot.png";

interface Props {
  name: string;
  location: string;
  children: string[];
}

function SocialCard({ name, location, children }: Props) {
  return (
    <>
      <div className="container">
        <div id="cardHeader">
          <img
            src={headshot}
            style={{ height: "75px" }}
            alt="Profile Picture"
          />
          <h1>{name}</h1>
          <sub>{location}</sub>
        </div>

        <div className="col" id="socialLinks">
          {children.map((child, index) => (
            <div className="row" key={index}>
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
