export const HERO = {
  primary:
    "my undergraduate thesis with the ucla neural dynamics group. it defines a functional interactomes score (fis) for protein pairs, computes it from published experiments, and assembles the results into a directed network.",
  secondary:
    "databases like string estimate how likely two proteins are to interact. fis asks a different question: did one protein measurably change the other, and in what direction. that answer becomes the edge weight.",
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
    lead: "biophysical models do not scale, and predictive networks still require validation.",
    craft:
      "models like hodgkin-huxley describe a neuron precisely but cannot absorb arbitrary new molecular components. network models scale well, but their edges are confidence estimates built from co-occurrence and co-expression, so each one still needs experimental confirmation.",
    engine:
      "fis takes the middle path. nodes are proteins and each directed edge represents a measured functional change that one protein induced in another, so the graph is built from evidence rather than likelihood.",
  },
  {
    id: "evidence",
    title: "the corpus",
    lead: "over 150 studies, read and encoded by hand.",
    craft:
      "we selected low-throughput mechanistic studies from pubmed rather than high-throughput screens, because the claim we need is causal and specific. we tracked two functional effects: change in neural spiking and change in synaptic remodeling.",
    engine:
      "each study was reduced to a structured summary of interactors, effect direction, and which functions changed. those summaries collapse into one csv, which together with a lookup table of functional weights is the only input the calculator requires.",
  },
  {
    id: "formula",
    title: "the score",
    lead: "median effect direction multiplied by a functional association weight.",
    craft:
      "direction is the signed change in protein b caused by protein a, taken as the median across all experiments reporting that pair, so a single outlier study cannot dominate an edge. the weight counts which functions changed and ranks them, so a pair affecting both spiking and synaptic function scores higher than one affecting neither.",
    engine:
      "the two terms multiply to give the fis for that pair. a weight of zero means no functional change was observed, which drops the edge from the graph.",
  },
  {
    id: "calculator",
    title: "the pipeline",
    lead: "python end to end, from tables to a plotted graph.",
    craft:
      "the calculator reads the experiment table into pandas, derives a pairwise effect table of median directions, looks up the functional weight for each pair, and writes out scored edges. automating it mattered once the corpus grew past a few dozen studies.",
    engine:
      "networkx builds the directed weighted graph from those edges, and matplotlib and seaborn render the network and the topology plots.",
  },
  {
    id: "topology",
    title: "hubs and intermediaries",
    lead: "degree and betweenness identify which proteins to study next.",
    craft:
      "both in-degree and out-degree are right-skewed: most proteins have few connections while a small number act as hubs. proteins with high betweenness centrality lie on many shortest paths, making them likely mediators between otherwise separate parts of the network.",
    engine:
      "we plot centrality by scaling node size and color. the output is a ranked list of candidates for follow-up experiments, not a claim about treatment.",
  },
];

export const THESIS_PDF = "/studio/interactomes/thesis.pdf";
