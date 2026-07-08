# VOID TIDE `v1.0`

*You are a lighthouse keeper on a lonely island in a dark sea. Creatures of the void tide surface offshore, swim for your island, crawl onto the beach, and lay siege to the beacon at its heart.*

**Survive 10 tides and dawn breaks. Lose the beacon — or the keeper — and the tide claims all.**

A first-person shooter built with [three.js](https://threejs.org) in a **single HTML file** — no build step, no runtime downloads, works fully offline. The world, creatures, and audio are procedural low-poly; the weapons and props are CC0 models by Kenney, embedded right into the file. Open `index.html` and play.

## How to Play

Defend the lighthouse beacon at the center of the island. Creatures swim in from the dark sea each tide and will attack the beacon — or you, if you get close or shoot them. Clear all 10 tides to win. Between tides your ammo reserve is restocked and the beacon slowly repairs.

After each repelled tide, choose one of three **keeper upgrades** (press `1`/`2`/`3` or tap): mend the beacon, extend your magazine, reload faster, boost shields or health, sharpen your aim, make the beam burn hotter, or scavenge more drops. The next tide holds until you choose — every run builds differently.

Watch the minimap: white flashing dots are incoming voidspawn, and glowing eyes in the water mark swimmers closing in. Enemies sometimes drop glowing pickups — cyan for ammo, red for health.

### Controls

| Desktop | |
|---|---|
| `W A S D` | Move |
| Mouse | Aim |
| Left click | Fire |
| Right click (hold) | Aim down sights |
| `G` | Throw grenade |
| `Q` | Beacon overcharge — blinding flare, ignites everything (60s cooldown) |
| `E` (hold, at tower base) | Mend the light — repairs the beacon while your weapon is lowered |
| `Shift` | Sprint |
| `R` | Reload |
| `1` / `2` / `3` | Pick an upgrade card between tides |
| `Esc` / `P` | Pause |

A **Settings** screen (from the menu or pause) has sensitivity, volume, invert-Y, and a LOW/HIGH graphics quality toggle. A **How to Play** screen on the menu covers the rest.

| Mobile (landscape) | |
|---|---|
| Left thumb | Move (virtual joystick) — push to the edge to sprint |
| Right thumb drag | Aim |
| `FIRE` button | Hold to shoot — **drag on it to aim while firing** |
| `RLD` / `NADE` / `FLARE` buttons | Reload / grenade / beacon overcharge |
| `MEND` button (hold, appears at tower base) | Repair the beacon |
| Tap a card | Pick an upgrade between tides |
| `II` button | Pause |

Mobile shots bend slightly toward nearby creatures (aim assist), and the game plays in landscape — install it as a PWA for true fullscreen.

### The Tide

| Creature | Appears | Behavior |
|---|---|---|
| **Snapper** | Tide 1 | Steady crawler, heads for the beacon |
| **Lurker** | Tide 1 | Fragile hunter that dashes in bursts — watch the rhythm, kite the pause |
| **Spitter** | Tide 3 | Ranged — lobs void bile from a distance |
| **Brute** | Tide 5 | Slow, heavily armored, devastating against the beacon |
| **Bloater** | Tide 7 | A throbbing walking bomb — pop it at range, never up close |
| **Shrieker** | Tide 9 | Perches on the sand and screams the tide into a frenzy, calling reinforcements — silence it first |

Enemies get tougher each tide. Your shield regenerates out of combat; your health only recovers from pickups. Attackers rear back before they strike — a melee windup you can dodge by moving out of reach before the slam lands.

The beacon fights back: voidspawn caught in its sweeping light are seared and keep burning for a few seconds. Swimmers leave glowing bioluminescent wakes — watch the water to see the tide coming. Distant lightning builds with the later tides.

Chain kills within two seconds to multiply their score, up to **x5**. When something hurts you, a red arc around the crosshair points back at it — trust the arc, turn, and fire. The music itself is a warning: the war-drum swells as more creatures reach the sand.

You carry **grenades** (`G` key / NADE button) — an arcing, bouncing blast that shreds beach clusters, restocked each tide. Watch the shore between tides for glowing **weapon crates**: they hold the *Squall SMG* (fast spray) or the *Abyss Lance* (slow, devastating sniper with deep zoom) — walking over one swaps your weapon, so choose your build.

On the tenth tide the sky turns blood-red and the **Leviathan** rises: a serpent that circles offshore, bombards the beacon, and summons the deep. It only drops its guard while its maw is open — that glow is your target. Survive it and dawn breaks... or choose **THE TIDE RETURNS** and stand an endless watch, facing the Leviathan again every tenth tide. Your best score is remembered on the menu.

## Running It

No build step, no server, no internet required — three.js is inlined into the file, so it works fully offline and behind corporate firewalls that block CDNs.

- **Locally:** double-click `index.html`.
- **GitHub Pages:** push to GitHub, then enable Pages (Settings → Pages → deploy from branch, root folder). The game will be live at `https://<username>.github.io/<repo>/`.
- **Install as an app (PWA):** when hosted on Pages, open the game in a mobile browser and choose *Add to Home Screen* / *Install app*. The installed app launches truly fullscreen in landscape and works offline (`manifest.webmanifest` + `sw.js` + icons).

If the start button ever does nothing, click it again — a diagnostic panel will appear on the menu explaining what failed (usually WebGL/hardware acceleration disabled in the browser).

## Tech Notes

- **Single file:** ~1 MB total, including all game code, an inlined copy of three.js r160 (MIT License, © three.js authors), and six embedded OBJ models.
- **Procedural (almost) everything:** terrain with vertex-colored flat shading, animated sea, clouds, lightning, lighthouse with a rotating volumetric beam, all six creatures and the Leviathan — built from primitive geometry at load time. Audio (gunfire, roars, sea ambience, void drone, dynamic battle music) is synthesized live with the Web Audio API.
- **Weapons & props** (three blasters, ammo clip, grenade, crate) are low-poly models by [Kenney](https://kenney.nl) (CC0), embedded into the HTML as OBJ text and parsed by a tiny built-in loader. To swap the starting rifle for another blaster from the pack: `node tools/embed-gun.js blaster-e` (any letter a–r from `gun-assets/`).
- **Persistence:** best score/tide and settings live in localStorage.
- **Mobile:** touch joystick, aim-while-firing drag, aim assist, fullscreen with landscape orientation lock, reduced pixel ratio and shadows disabled for performance.
- **Version:** shown in the bottom-right of the menu — handy for checking that an installed PWA has picked up your latest deploy.
