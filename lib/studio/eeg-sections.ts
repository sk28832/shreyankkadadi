export const HERO = {
  primary:
    "a classifier for four motor imagery tasks recorded by eeg: imagined movement of the left hand, right hand, both legs, or the tongue. each trial is 22 electrode channels sampled over 1000 time steps, across nine subjects.",
  secondary:
    "we compared cnns, lstms, grus, and cnn/rnn hybrids. the hybrids won: cnn+gru reached 73% test accuracy, while recurrent models on their own stayed near chance.",
};

export type EegSectionId = "problem" | "window" | "hybrids" | "dilation";

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
    title: "the data",
    lead: "four labels, nine subjects, and a signal with a poor signal-to-noise ratio.",
    craft:
      "eeg measures voltage at the scalp, so each trial mixes the motor signal we want with muscle artifacts, drift, and noise from everything else the brain is doing. the dataset gives 22 channels by 1000 samples per trial and nine labels, of which we classify four.",
    engine:
      "the structure suggests two different inductive biases. convolution captures spatial relationships between electrodes, and recurrence captures how the signal evolves in time. every architecture we tried is some combination of those two.",
  },
  {
    id: "window",
    title: "subjects and time window",
    lead: "pooling subjects helped substantially; most of the useful signal is early in the trial.",
    craft:
      "training the same cnn on subject 1 alone gave 46.7% validation accuracy. training it on all nine subjects gave 70.9% on the same holdout. motor imagery appears consistent enough across people that the extra data outweighs individual variation.",
    engine:
      "we then swept time windows. accuracy improved sharply as the window grew to the first 300 samples and flattened afterward, and windows starting later performed worse. the discriminative part of the trial is the onset of the imagined movement; the remainder mostly adds noise.",
  },
  {
    id: "hybrids",
    title: "cnn + rnn",
    lead: "hybrid models outperformed both pure architectures by a wide margin.",
    craft:
      "a cnn alone reached about 70%. an lstm alone reached 35% and a gru alone 28%, both overfitting the training set badly. combining them gave 72.7% for cnn+lstm and 73% for cnn+gru.",
    engine:
      "the convolutional front end follows eegnex: two convolution blocks with expanding filter depth, a depthwise convolution, and batch normalization plus dropout in each block. its output feeds a recurrent layer and then a fully connected head with elu activations, trained with weight decay of 5e-4.",
  },
  {
    id: "dilation",
    title: "dilation",
    lead: "dilated convolutions gave the largest single improvement.",
    craft:
      "before adding dilation the models plateaued around 67%. with it, the pure cnn reached 69.7% and both hybrids cleared 72%. it was the change that moved results the most.",
    engine:
      "dilation widens the receptive field by skipping input positions rather than pooling, so the model sees more context without losing temporal ordering, which matters for a time series. the skipped connections also act as regularization, letting us train longer before overfitting.",
  },
];

export const EEG_GITHUB = "https://github.com/sk28832/eeg-classification-model";
