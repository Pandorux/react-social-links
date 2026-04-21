import SocialCard from "./components/SocialCard";
import SocialLinkButton from "./components/SocialLinkButton";

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div>
        <SocialCard
          name="Linus Torvalds"
          desc="Creator of Linux"
          location="Helsinki, Finland"
          children={["Github", "LinkedIn", "Twitter", "Instagram"]}
        ></SocialCard>
      </div>
    </div>
  );
}

export default App;
