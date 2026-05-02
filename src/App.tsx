import { useState } from "react";
import SocialCard from "./components/SocialCard";
import SocialLinkButton from "./components/SocialLinkButton";
import Toggle from "./components/Toggle";

function App() {
  const [isLight, setIsLight] = useState(false);

  return (
    <div id="app" data-theme={isLight ? "light" : ""}>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <Toggle
          handleChange={() => setIsLight(!isLight)}
          isChecked={isLight}
        ></Toggle>
        <div>
          <SocialCard
            name="Linus Torvalds"
            desc="Creator of Linux"
            location="Helsinki, Finland"
          >
            <div className="col m-2" id="socialLinks">
              <div className="row p-2">
                <SocialLinkButton
                  text="GitHub"
                  link="https://github.com/torvalds"
                ></SocialLinkButton>
              </div>

              <div className="row p-2">
                <SocialLinkButton
                  text="LinkedIn"
                  link="https://www.linkedin.com/in/linustorvalds/"
                ></SocialLinkButton>
              </div>

              <div className="row p-2">
                <SocialLinkButton
                  text="Twitter"
                  link="https://x.com/Linus__Torvalds"
                ></SocialLinkButton>
              </div>

              <div className="row p-2">
                <SocialLinkButton
                  text="Instagram"
                  link="https://www.instagram.com/popular/torvalds-linus/"
                ></SocialLinkButton>
              </div>
            </div>
          </SocialCard>
        </div>
      </div>
    </div>
  );
}

export default App;
