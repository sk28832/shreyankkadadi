export const HERO = {
  primary:
    "ai & eye is a published note on a bimodal fusion model for glaucoma severity — oct images on one stream, clinical metrics on the other, late fusion into normal / mild-moderate / severe.",
  secondary:
    "most oct ai still stares at pixels alone. this work argues the rim, cup, and rnfl numbers belong in the same decision, and that three-way severity beats a blunt diseased-or-not label.",
};

export type GlaucomaSectionId =
  | "burden"
  | "bimodal"
  | "fusion"
  | "multiclass";

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
    title: "why glaucoma, why oct",
    lead: "irreversible nerve loss, second only to cataract as a cause of blindness worldwide.",
    craft:
      "clinicians already lean on optic nerve exams, fields, and pressure. spectral-domain oct adds high-resolution structure — disc and rnfl — often before patients notice a change. the anatomy is the early warning.",
    engine:
      "the paper’s pipeline starts there: take the scan that already exists in clinic, pair it with the numbers the machine already prints, and ask a model to grade severity instead of inventing a new imaging ritual.",
  },
  {
    id: "bimodal",
    title: "two inputs, one disease",
    lead: "vision from the scan; numbers from the report.",
    craft:
      "the image stream sees the optic disc and rnfl. the metric stream carries rnfl thickness and symmetry, rim area, vertical cup-disc ratio, cup volume — the same parameters glaucoma clinics already argue over.",
    engine:
      "each stream has its own base model. neither is asked to invent the other’s modality; they learn separately, then meet. that is the whole bimodal claim in one sentence.",
  },
  {
    id: "fusion",
    title: "late fusion",
    lead: "predict apart, concatenate features, finish with a fully connected head.",
    craft:
      "early fusion would mash pixels and numbers before either representation matures. late fusion lets the oct cnn and the numeric tower specialize, then hands the concatenated embedding to a small classifier for the final call.",
    engine:
      "the architecture diagram is deliberately plain: oct base model and numerical base model in parallel, fusion block, then either a binary head or a three-class head depending on the experiment.",
  },
  {
    id: "multiclass",
    title: "more than diseased-or-not",
    lead: "normal vs mild/moderate vs severe — closer to how severity is actually discussed.",
    craft:
      "binary screens are easier and common in the literature. they also hide the clinical middle. multi-class severity is noisier to label and more useful when the question is how far the disease has already walked.",
    engine:
      "the manuscript is a methods note in tnoa journal of ophthalmic science and research (2024), with coauthors across ophthalmology and engineering. the model was in prototype / alpha-testing when written — a blueprint more than a shipped device.",
  },
];

export const GLAUCOMA_PAPER_URL =
  "https://www.ovid.com/jnls/tnoa/fulltext/10.4103/tjosr.tjosr_23_24~a-novel-fusion-deep-learning-approach-for-glaucoma-severity";
