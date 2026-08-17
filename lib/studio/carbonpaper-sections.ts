export const HERO = {
  primary:
    "carbonpaper is an ai-assisted document editor — write in a rich text surface, ask carbonai to revise or explain, and accept or reject tracked suggestions.",
  secondary:
    "built as a next.js app with a custom contenteditable editor, openai behind /api/process, and a sidebar that can chat about the page you are already staring at.",
};

export type CarbonpaperSectionId =
  | "editor"
  | "tracked"
  | "chat"
  | "stack";

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
    title: "the writing surface",
    lead: "a full document, not a chat box with a notepad taped on.",
    craft:
      "fonts, sizes, color, alignment, lists — the ordinary toolbar work of drafting. documents live in a file explorer with autosave and version history so a bad suggestion does not erase an afternoon.",
    engine:
      "the editor is a custom contenteditable implementation in next.js, styled with tailwind and radix primitives. the point was control over selection and tracked ranges, not another thin wrap around a third-party doc sdk.",
  },
  {
    id: "tracked",
    title: "suggestions you can refuse",
    lead: "ai edits arrive as highlighted changes, not silent rewrites.",
    craft:
      "select text, ask for a revision, and the proposal shows up inline. hover for accept, reject, or reprocess. the hover toolbar also offers quick format and ai actions without leaving the caret.",
    engine:
      "tracked changes ride alongside editor content in the process request. the model returns structured suggestions; the client paints them as reviewable spans instead of pasting a blob over your prose.",
  },
  {
    id: "chat",
    title: "carbonai on the side",
    lead: "ask about the document, or push a custom action through the same brain.",
    craft:
      "the assistant panel explains clauses, answers questions, and keeps selected sources in view. it is meant for dense pages — safes, briefs, specs — where you want a second reader who already has the text.",
    engine:
      "inputMode flips between question and edit on /api/process. the same openai path serves both; the difference is whether the response is prose with citations or a tracked-change payload.",
  },
  {
    id: "stack",
    title: "what it runs on",
    lead: "next.js, radix, framer motion, openai — nothing exotic, wired carefully.",
    craft:
      "state is hooks and context. motion is light. the interesting part is the editing loop: selection → intent → suggestion → human gate — not a chatbot that owns the page.",
    engine:
      "deployed on vercel. env needs an openai key. the public repo has the app shell, api route, and the docs screenshots that still match the live ui.",
  },
];

export const CARBON_PAPER_URL = "https://carbonpaper-app.vercel.app";
export const CARBON_PAPER_GITHUB =
  "https://github.com/sk28832/carbonpaper-app";
