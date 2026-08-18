export const HERO = {
  primary:
    "a document editor with an ai assistant beside it. you write normally, ask for an edit, and every suggestion arrives as a tracked change you can accept or reject.",
  secondary:
    "built with next.js and a custom contenteditable editor, with openai behind a single /api/process route that serves both questions about the document and proposed edits to it.",
};

export type CarbonpaperSectionId = "editor" | "tracked" | "chat" | "stack";

export type CarbonpaperSection = {
  id: CarbonpaperSectionId;
  title: string;
  lead: string;
  craft: string;
  engine: string;
};

export const CARBON_PAPER_SECTIONS: CarbonpaperSection[] = [
  {
    id: "editor",
    title: "the editor",
    lead: "a real document surface, not a chat window with text in it.",
    craft:
      "fonts, sizes, colors, alignment, and lists all work as expected. documents sit in a file explorer with autosave and version history, so a suggestion you regret is recoverable.",
    engine:
      "the editor is a custom contenteditable implementation rather than a third-party sdk, because tracked changes need precise control over selection ranges and how they map back to the document after an edit.",
  },
  {
    id: "tracked",
    title: "tracked edits",
    lead: "the model proposes; you decide what lands.",
    craft:
      "select a passage, describe the change, and the proposal appears inline as a highlight. hovering gives accept, reject, and reprocess. a hover toolbar exposes the same actions during ordinary formatting work.",
    engine:
      "the request carries both the current editor content and any pending changes, and the response comes back as structured edits rather than replacement prose. the client renders those as reviewable spans, which keeps the document under the writer's control.",
  },
  {
    id: "chat",
    title: "the assistant panel",
    lead: "ask about the document you already have open.",
    craft:
      "the panel explains passages, answers questions, and shows which sources it used. it is most useful on dense text such as contracts or specs, where the question is usually what a clause means rather than how to phrase it.",
    engine:
      "an inputMode flag switches the same endpoint between question and edit. questions return prose with citations; edits return a tracked-change payload.",
  },
  {
    id: "stack",
    title: "stack",
    lead: "next.js, radix, openai, deployed on vercel.",
    craft:
      "state is handled with react hooks and context. nothing here is unusual; the difficulty was in the editing loop rather than the infrastructure.",
    engine:
      "running it locally needs an openai api key in the environment. the repository includes the app and the api route.",
  },
];

export const CARBON_PAPER_URL = "https://carbonpaper-app.vercel.app";
export const CARBON_PAPER_GITHUB = "https://github.com/sk28832/carbonpaper-app";
