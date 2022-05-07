import {MailAdaptor} from "../adaptors/mail-adaptor";
import {FeedbacksRepository} from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdaptor: MailAdaptor
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const {type, comment, screenshot} = request;

    if (!type) {
      throw new Error("Type are required");
    }

    if (!comment) {
      throw new Error("Comment are required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format ");
    }

    await this.feedbacksRepository.create({type, comment, screenshot});

    await this.mailAdaptor.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #222;">`,
        `<p>Tipo do feedback: ${type}.</p>`,
        `<p>Comentário: ${comment}.</p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
