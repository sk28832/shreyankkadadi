export const HERO = {
  primary:
    "functional interactomes is a ucla thesis from the neural dynamics group — a calculator that scores causal protein–protein edges from experimental literature, then builds the network those edges imply.",
  secondary:
    "predictive databases guess that two proteins might touch. fis asks whether one actually changed the other — in spiking, in synaptic remodeling — and weights the edge accordingly.",
};

export type InteractomesSectionId =
  | "causal"
  | "evidence"
  | "formula"
  | "calculator"
  | "topology";

export type InteractomesSection = {
  id: InteractomesSectionId;
  title: string;
  lead: string;
  craft: string;
  engine: string;
};

export const INTERACTOMES_SECTIONS: InteractomesSection[] = [
  {
    id: "causal",
    title: "why causal edges",
    lead: "biophysics scales poorly; predictive graphs still need the lab.",
    craft:
      "hodgkin–huxley and cable models explain a neuron with equations, but they do not freely absorb new molecular players. string-style networks scale, yet their confidence scores are predictions — useful maps that still demand experimental proof.",
    engine:
      "fis sits between those poles: a directed graph whose edges come from published causal effects, not co-occurrence guesses. nodes are proteins; an arrow means one induced a measurable change in another.",
  },
  {
    id: "evidence",
    title: "150+ studies into tables",
    lead: "the corpus is hand-curated mechanistic work, not text mining soup.",
    craft:
      "we pulled low-throughput neural studies from pubmed and sorted them into structured scientific meta summaries — interactors, effect direction, functional change. two functional lenses matter most here: neural spiking and synaptic remodeling.",
    engine:
      "those summaries collapse into a csv: pubmed id, protein pair, effect direction, and which functional associations flipped. that file is the only input the calculator needs besides a lookup table of association weights.",
  },
  {
    id: "formula",
    title: "the fis itself",
    lead: "median directionality times functional association weight.",
    craft:
      "directionality is the signed change in protein b under a. take the median across experiments for a pair. the weight comes from which associations actually moved — spiking, synaptic function, and so on — with a small priority table so some changes count harder.",
    engine:
      "fis = dm × w_a→b. a zero weight means the association did not change; a two might mean both spiking and synapse shifted. the product is the edge weight the network will carry.",
  },
  {
    id: "calculator",
    title: "automating the score",
    lead: "pandas and numpy do the bookkeeping; networkx draws the graph.",
    craft:
      "two tables in: the experiment sheet and the functional association lookup. the calculator builds a pairwise effect table (median directions), looks up weights, multiplies, and writes fis rows ready for graph construction.",
    engine:
      "networkx builds the directed weighted graph; matplotlib and seaborn render it. the flowchart in the thesis is the whole pipeline on one page — encode, score, select, plot.",
  },
  {
    id: "topology",
    title: "hubs and bridges",
    lead: "degree and betweenness turn the graph into hypotheses.",
    craft:
      "in- and out-degree are right-skewed: most proteins are quiet; a few are hubs. betweenness marks intermediaries that sit on many shortest paths — bridges you would want to look at if you care about neuroinflammation meeting excitability.",
    engine:
      "centrality plots rescale node color and size by betweenness. the claim is modest and useful: causal topology is a place to generate the next experiment, not a finished therapy map.",
  },
];

export const THESIS_PDF = "/studio/interactomes/thesis.pdf";
