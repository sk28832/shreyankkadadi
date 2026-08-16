import type { PosterId } from "@/components/studio/kokoro/section-posters";

export type KokoroSection = {
  id: PosterId;
  title: string;
  lead: string;
  craft: string;
  engine: string;
};

export const HERO = {
  primary:
    "kokoro no tōkaidō is a meditative platformer along the road hiroshige walked with his brush — five stations, from a bridge in edo to a bridge in kyoto.",
  secondary:
    "the movement is celeste in miniature — coyote time, buffered jumps, one-dash-per-floor, wall-jumps between chimneys. everything else is quiet: printed backgrounds, a shakuhachi loop, three lines of haiku between stations.",
};

export const KOKORO_SECTIONS: KokoroSection[] = [
  {
    id: "nihonbashi",
    title: "日本橋 · nihonbashi — departure",
    lead: "a small game about walking a very old road.",
    craft:
      "the tōkaidō is fifty-three post stations between edo and kyoto. hiroshige printed one image per station in 1833 and made his career. this game keeps five — the same road, shortened to a pilgrimage you can finish in an evening. the player has lost something. the road may or may not return it.",
    engine:
      "godot 4 with gdscript. one autoload manages the linear stage sequence — story card, level, story card, level — and hot-swaps scenes via change_scene_to_file. state is deliberately thin: current stage, death count, one line of poem cached between transitions. no save system yet; the road is meant to be walked in one sitting.",
  },
  {
    id: "satta",
    title: "薩埵峠 · satta pass — teaching by geometry",
    lead: "the level introduces wall-jump without saying wall-jump.",
    craft:
      "there is one chimney. two facing walls, sixteen tiles tall, sixty-four pixels apart. the only way up is to touch one wall, leap to the other, alternate. the level never says this. hiroshige's satta pass shows a traveller between two cliffs with fuji beyond them — the geometry is the instruction.",
    engine:
      "celeste-style controls tuned in a single .gd file: coyote_time 0.10s, jump_buffer 0.10s, wall_slide_speed 55, wall_jump velocity (180, -280), wall_stick_time 0.14. the dash refreshes only on the floor, never on a wall — so a spam-dash cannot substitute for the mechanic. the value that took longest to get right was wall_jump_y.",
  },
  {
    id: "numazu",
    title: "沼津 · numazu — the sources",
    lead: "every backdrop is a real hiroshige, downloaded from a museum.",
    craft:
      "the numazu print is twilight moon over the road — pines silhouetted, a figure walking beneath a rising moon. it is the level. the file is the metropolitan museum's high-res scan, wikimedia commons, public domain worldwide. same for mishima (met), yui/satta pass (eisei bunko), kanbara: night snow (mfa boston), nihonbashi (british museum), and sanjō ōhashi.",
    engine:
      "godot canvas item texture_filter is set to nearest globally for pixel-perfect sprites, then overridden to linear on the six background nodes so the woodblock prints render smoothly against the sharp platforms. the mismatch is the point — you walk through the printed world without becoming a print.",
  },
  {
    id: "mishima",
    title: "三島 · mishima — level as haiku",
    lead: "one mechanic per station, three lines of poem between them.",
    craft:
      "the level design rule is haiku. each station introduces one idea and no more: run and jump at nihonbashi, wall-jump at satta, precision dashes at numazu, dash-over-spikes at mishima, walk to the goal at sanjō. between them, three lines fade in on an ink stripe. the reader lingers before the button prompt appears.",
    engine:
      "levels are node2ds with a shared level.gd script and a runtime helper — tiledplatform.gd — that generates block sprites plus a matching rectangleshape2d collision from width_tiles and height_tiles. so a level scene stays under 200 lines of tscn: platforms are five properties, not fifty children. the mist particles in mishima itself are cpuparticles2d in a canvaslayer, screen-fixed so they drift regardless of camera.",
  },
  {
    id: "sanjo",
    title: "京師 · sanjō ōhashi — arrival",
    lead: "the last bridge, and the tally of everything it took to get there.",
    craft:
      "kyoto is not the destination — the bridge into kyoto is. hiroshige knew this: the last print in the series is sanjō ōhashi, not the palace beyond it. our sanjō is a walk, not a puzzle. one small stair, one bigger torii, cherry petals. the ending scene fades in with the closing haiku, a soft line that reads N falls across the road, then a prompt.",
    engine:
      "an audio autoload persists across all scenes so the shakuhachi loop never restarts. sfx flow through a six-slot audiostreamplayer pool. the temple bell at each goal is a kenney cc0 sample — impactbell_heavy — routed through the same pool at a slightly higher volume. music is a public-domain track named contemplation from opengameart.",
  },
];

export const GAME_URL = "/games/kokoro/index.html";
export const SOURCE_URL = "https://github.com/sk28832/hiroshige-platformer";
