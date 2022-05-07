interface ButtonFeedbackProps {
  key: string;
  title: string;
  imageSource: string;
  imageAlt: string;
  handleClick: () => void;
}

export const ButtonFeedback = ({
  key,
  title,
  imageSource,
  imageAlt,
  handleClick,
}: ButtonFeedbackProps) => {
  return (
    <button
      key={key}
      className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col
            items-center justify-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
      type="button"
      onClick={handleClick}
    >
      <img src={imageSource} alt={imageAlt} />
      <span>{title}</span>
    </button>
  );
};
