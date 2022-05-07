import {ArrowLeft} from "phosphor-react";
import {FormEvent, useState} from "react";
import {FeedbackType, feedbackTypes} from "..";
import {CloseButton} from "../../CloseButton";
import {ScreenShotButton} from "../../ScreenShotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onRequestFeedbackRestart: () => void;
  onFeedbackSent: () => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onRequestFeedbackRestart,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const [screenShot, setScreenShot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  function handleSubmitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({comment, screenShot});

    onFeedbackSent();
  }

  const {
    title,
    image: {source, alt},
  } = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onRequestFeedbackRestart}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={source} alt={alt} className="w-6 h-6" />
          {title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scroll-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            screenShot={screenShot}
            onScreenShotTook={setScreenShot}
          />

          <button
            disabled={!comment}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-color disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};
