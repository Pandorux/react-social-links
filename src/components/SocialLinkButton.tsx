interface Props {
  text: string;
  link: string;
  color: string;
}

function SocialLinkButton({ text, link, color }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => window.open(link, "_blank", "noopener, noreferrer")}
    >
      {text}
    </button>
  );
}

export default SocialLinkButton;
