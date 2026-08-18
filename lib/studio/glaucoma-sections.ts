export const HERO = {
  primary:
    "a published fusion model for glaucoma severity. one stream reads the oct scan and the other reads the numerical measurements from the same exam, and the combined model outputs normal, mild to moderate, or severe.",
  secondary:
    "most oct models classify from the image alone and report a binary result. we add the metrics clinicians already use, and grade severity in three classes instead of two.",
};

export type GlaucomaSectionId = "burden" | "bimodal" | "fusion" | "multiclass";

export type GlaucomaSection = {
  id: GlaucomaSectionId;
  title: string;
  lead: string;
  craft: string;
  engine: string;
};

export const GLAUCOMA_SECTIONS: GlaucomaSection[] = [
  {
    id: "burden",
    title: "why oct",
    lead: "glaucoma damages the optic nerve irreversibly, so detection has to happen early.",
    craft:
      "it is the second leading cause of blindness worldwide after cataract, and an estimated 76 million people had it as of 2020. the standard workup combines optic nerve examination, visual field testing, and intraocular pressure.",
    engine:
      "optical coherence tomography adds high-resolution structure of the optic disc and retinal nerve fibre layer, often before a patient notices any change. we build on scans and measurements that already exist in the clinic rather than requiring a new imaging protocol.",
  },
  {
    id: "bimodal",
    title: "two inputs",
    lead: "the scan and the numbers describe the same anatomy differently.",
    craft:
      "the image stream sees the optic disc and the nerve fibre layer directly. the numerical stream carries rnfl thickness and symmetry, rim area, vertical cup-disc ratio, and cup volume, which are the values ophthalmologists weigh when they grade a case.",
    engine:
      "each stream has its own base model, so neither has to infer the other's information. an image model does not need to estimate cup volume when the machine already reports it.",
  },
  {
    id: "fusion",
    title: "late fusion",
    lead: "each stream predicts independently, then their features are concatenated.",
    craft:
      "fusing at the input would force pixels and scalar measurements into one representation before either is meaningful. fusing late lets each model specialize on the data it handles well, and only then combines what they learned.",
    engine:
      "the oct cnn and the numerical model run in parallel, their output features are concatenated, and a fully connected network produces the final prediction from the combined vector.",
  },
  {
    id: "multiclass",
    title: "three classes",
    lead: "severity, not just presence.",
    craft:
      "binary classification is easier to train and more common in the literature, but it collapses the clinically interesting middle where treatment decisions are actually made. separating mild to moderate from severe is noisier to label and closer to how the disease is discussed.",
    engine:
      "the work appeared in the tnoa journal of ophthalmic science and research in 2024 as a methods paper. the model was in prototype and alpha testing at the time of writing.",
  },
];

export const GLAUCOMA_PAPER_URL =
  "https://www.ovid.com/jnls/tnoa/fulltext/10.4103/tjosr.tjosr_23_24~a-novel-fusion-deep-learning-approach-for-glaucoma-severity";
