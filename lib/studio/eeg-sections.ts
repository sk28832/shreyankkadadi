export const HERO = {
  primary:
    "eeg classification is a hybrid cnn/rnn study of motor imagery — right hand, left hand, both legs, or tongue — from 22 channels across 1000 time steps.",
  secondary:
    "pure rnns overfit and stalled. stacking eegnex-style convolutions with lstm or gru, plus dilation, got us to 73% test accuracy across nine subjects.",
};

export type EegSectionId =
  | "problem"
  | "window"
  | "hybrids"
  | "dilation";

export type EegSection = {
  id: EegSectionId;
  title: string;
  lead: string;
  craft: string;
  engine: string;
};

export const EEG_SECTIONS: EegSection[] = [
  {
    id: "problem",
    title: "four imagined movements",
    lead: "the signal is noisy, short, and shared across people who move the same way in their heads.",
    craft:
      "each trial is 22 electrode channels over 1000 time steps. nine subjects, four labels we care about — left hand, right hand, legs, tongue. eeg is not a clean image; it is a chorus of voltages that barely agree with themselves.",
    engine:
      "we treated the trial as a spatiotemporal field: convolutions for spatial structure across electrodes, recurrence for what unfolds over time. that framing decided the rest of the architecture hunt.",
  },
  {
    id: "window",
    title: "subjects and the first 300 steps",
    lead: "more brains beat one brain. early time beats late time.",
    craft:
      "a cnn trained on subject 1 alone peaked around 47% validation. the same model on all nine subjects jumped to about 71%. motor imagery does not reinvent itself person to person the way handwriting does.",
    engine:
      "sliding windows told a sharper story: accuracy climbed hard from 0–300 and flattened after. the useful motor plan lives early; dragging in the full 1000 steps mostly adds noise.",
  },
  {
    id: "hybrids",
    title: "cnn + lstm, cnn + gru",
    lead: "hybrids beat pure models by a wide margin.",
    craft:
      "pure cnn reached about 70%. pure lstm sat near 35%, pure gru near 28% — both happy to memorize and bad at generalizing. the hybrids kept the spatial front-end and let recurrence finish the sequence.",
    engine:
      "the convolutional stack followed eegnex: expanding filters, a depthwise block, batch-norm and dropout, weight decay 5e-4. an lstm or gru sat on top, then a fully connected head with elu. cnn+lstm hit 72.7%; cnn+gru hit 73%.",
  },
  {
    id: "dilation",
    title: "dilation as the quiet boost",
    lead: "skipping samples widened the receptive field without another pool.",
    craft:
      "before dilation we stalled near 67%. after, cnn alone reached 69.7% and the hybrids cleared 72–73%. order in the time axis mattered; dilation kept that order while seeing farther.",
    engine:
      "dilated convolutions act like a regularizer for long training runs — enough capacity to read the early window without eating the whole trial. the notebooks and weights live in the public repo.",
  },
];

export const EEG_GITHUB =
  "https://github.com/sk28832/eeg-classification-model";
