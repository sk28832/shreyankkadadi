import type { VisualId } from "@/components/studio/hanga/section-visuals";

export type HangaSection = {
  id: VisualId;
  title: string;
  lead: string;
  craft: string;
  engine: string;
};

export const HERO = {
  primary:
    "hanga is a woodblock deconstruction engine — any image in, a full production plan out: keyblock, colour blocks, bokashi gradations, printing sequence.",
  secondary:
    "hiroshige is the calibration. edo-period constraints — flat colour, carved line, wiped gradation, impression order — define what recovered means. three of his prints ship as bundled references.",
};

export const HANGA_SECTIONS: HangaSection[] = [
  {
    id: "recovers",
    title: "what hanga recovers",
    lead: "a finished print is evidence of a workshop, not a single act of drawing.",
    craft:
      "in ukiyo-e, the image you hold is the last impression of many. a carver cuts cherry wood into blocks; a printer inks each one and presses it onto washi in order — keyblock first, then colour, light to dark. hiroshige's sudden shower over shin-ōhashi is not one surface but a stack of decisions: line, flat sky, wiped rain, deeper blues building up.",
    engine:
      "generative models paint pixels forward. hanga runs backward: one image in, the blocks and sequence that would have produced it out. because the craft is sequential, the engine must recover structure — outline, flat regions, gradations inside those regions, print order — not just approximate colour. that is the inverse problem, and it is why this is not an image generator.",
  },
  {
    id: "keyblock",
    title: "the keyblock",
    lead: "every impression registers to the sumiban — the black outline block.",
    craft:
      "the keyblock is carved first and printed before any colour. sumi line defines the world: bridge railing, traveller's umbrella, the ruled strokes of rain in hiroshige's late edo work. without this block, every colour impression would drift. the line is not decoration — it is registration, geometry, and meaning at once.",
    engine:
      "because the keyblock must be recovered before colour can be assigned, the pipeline extracts line art first. extended difference-of-gaussians (XDoG) finds edges without neural weights — two gaussian scales, subtracted and thresholded. when a learned line-art checkpoint is available it can replace XDoG for cleaner curves; otherwise the classical path runs alone. the output is the sumiban layer every other block aligns to.",
  },
  {
    id: "pigment",
    title: "flat colour and pigment",
    lead: "one carved block carries one colour — the palette is physical, not arbitrary.",
    craft:
      "after the keyblock, each colour gets its own block: beni for red, bero-ai for the prussian blue hiroshige pushed into every sky and river after the 1820s, kihada for yellow. a printer does not mix on the sheet — they ink a flat field. hiroshige's ōban compositions exploit this: sky as one plane, earth as another, foreground mass cutting the corner while the middle distance opens.",
    engine:
      "because ukiyo-e colour is flat per block, the engine clusters pixels in CIE-Lab — perceptual distance, not rgb — and assigns each region hard to one layer. warm washi paper is detected and excluded before clustering. each centroid is matched against an edo pigment table in pigments.py so recovered layers read as bero-ai or beni, not hex codes. the constraint is physical: one impression, one colour field.",
  },
  {
    id: "bokashi",
    title: "bokashi",
    lead: "gradation is wiped onto the block — not carved separately.",
    craft:
      "bokashi is how a printer fades pigment across a single block: damp the surface, wipe ink so tone shifts from saturated to pale in one pull. ichimonji-bokashi runs in straight bands; atenashi is free and edgeless. hiroshige's skies and driving rain depend on it — tonal fields that live inside one block, not a stack of separate carvings.",
    engine:
      "because bokashi is tonal variation within a flat colour region, the engine searches for smooth luminance ramps inside each clustered block. a gradient-domain planar fit tags pixels that change gradually — not texture noise, not a new block. those pixels keep the parent pigment but carry a bokashi flag so the printing simulator knows to render a wipe, not a flat fill.",
  },
  {
    id: "hanmoto",
    title: "the hanmoto sequence",
    lead: "light to dark, impression by impression, registered to kentō marks.",
    craft:
      "the hanmoto orders blocks and pulls each impression in sequence. kentō — an L-shaped corner mark and a straight guide — drop the sheet into the same place every time. mis-registration by a fraction of a millimetre is part of the craft. each layer multiplies into what came before; the print is subtractive, built up, never repainted.",
    engine:
      "because impression order matters, sequence.py orders recovered blocks light to dark using luminance and area heuristics — the same convention a workshop follows. press.py composes layers with multiply blending and slight positional jitter to simulate registration error. the production plan tab is the hanmoto's job sheet: block, pigment, bokashi, sequence.",
  },
  {
    id: "calibrated",
    title: "calibrated on hiroshige",
    lead: "the engine is general; the reference prints are his.",
    craft:
      "the fifty-three stations of the tōkaidō and one hundred famous views of edo — including sudden shower over shin-ōhashi, the print van gogh copied — are hiroshige at full constraint: bold flat colour, bokashi sky, rain cut as ruled lines in the keyblock. they are the corpus the bundled samples come from: public-domain scans from the met and library of congress.",
    engine:
      "because the pipeline encodes ukiyo-e rules, it deconstructs hiroshige faithfully out of the box — pre-computed plans run in the browser with no python engine. upload any image and the same pipeline applies; photographs and generated scenes violate flat-colour assumptions and regions may fragment. an optional SAM path adds region coherence when classical heuristics break down. hiroshige calibrates the vocabulary; the engine speaks it to any input.",
  },
];

export const HANGA_URL =
  process.env.NEXT_PUBLIC_HANGA_URL ?? "https://hanga.shreyankkadadi.com";

export const CORPUS_IMAGES = [
  "/studio/hanga/original.png",
  "/studio/hanga/plum-original.png",
  "/studio/hanga/shono-original.png",
];

export const PEEL_LAYERS = [
  "/studio/hanga/keyblock.png",
  "/studio/hanga/layer_05.png",
  "/studio/hanga/layer_08.png",
  "/studio/hanga/original.png",
];
