import {FeedbackType, feedbackTypes} from "..";
import {ButtonFeedback} from "../../ButtonFeedback";
import {CloseButton} from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export const FeedbackTypeStep = ({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <ButtonFeedback
              handleClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              key={key}
              title={value.title}
              imageSource={value.image.source}
              imageAlt={value.image.alt}
            />
          );
        })}
      </div>
    </>
  );
};
