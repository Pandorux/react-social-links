interface Props {
  text: string;
  link: string;
  color?: "primary"; // Not sure if I need this yet
}

function SocialLinkButton({ text, link, color }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + color + " social-link-btn"}
      onClick={() => window.open(link, "_blank", "noopener, noreferrer")}
    >
      {text}
    </button>
  );
}

export default SocialLinkButton;
