import SocialLinkButton from "./components/SocialLinkButton";

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div>
        <div>
          <SocialLinkButton
            text="Test"
            link="www.google.com"
            color="primary"
          ></SocialLinkButton>
        </div>
      </div>
    </div>
  );
}

export default App;
