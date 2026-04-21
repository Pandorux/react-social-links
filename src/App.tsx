import SocialCard from "./components/SocialCard";
import SocialLinkButton from "./components/SocialLinkButton";

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div>
        <SocialCard
          name="Linus Torvalds"
          location="Helsinki, Finland"
          children={["Test", "Test2", "Test3"]}
        ></SocialCard>
      </div>
    </div>
  );
}

export default App;
