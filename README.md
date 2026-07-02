# VOID TIDE

*You are a lighthouse keeper on a lonely island in a dark sea. Creatures of the void tide surface offshore, swim for your island, crawl onto the beach, and lay siege to the beacon at its heart.*

**Survive 10 tides and dawn breaks. Lose the beacon — or the keeper — and the tide claims all.**

A first-person shooter built with [three.js](https://threejs.org) in a **single HTML file**. Every asset is procedural low-poly geometry — no models, no textures, no sounds files, no network requests. Open `index.html` and play.

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
| `Shift` | Sprint |
| `R` | Reload |
| `Esc` / `P` | Pause |

| Mobile (landscape) | |
|---|---|
| Left thumb | Move (virtual joystick) |
| Right thumb drag | Aim |
| `FIRE` / `RLD` buttons | Shoot / reload |
| `II` button | Pause |

### The Tide

| Creature | Appears | Behavior |
|---|---|---|
| **Snapper** | Tide 1 | Steady crawler, heads for the beacon |
| **Lurker** | Tide 2 | Fast and fragile, hunts the keeper |
| **Spitter** | Tide 3 | Ranged — lobs void bile from a distance |
| **Brute** | Tide 4+ | Slow, heavily armored, devastating against the beacon |

Enemies get tougher each tide. Your shield regenerates out of combat; your health only recovers from pickups.

The beacon fights back: voidspawn caught in its sweeping light are seared and keep burning for a few seconds. Swimmers leave glowing bioluminescent wakes — watch the water to see the tide coming. Distant lightning builds with the later tides.

Chain kills within two seconds to multiply their score, up to **x5**. When something hurts you, a red arc around the crosshair points back at it — trust the arc, turn, and fire. The music itself is a warning: the war-drum swells as more creatures reach the sand.

## Running It

No build step, no server, no internet required — three.js is inlined into the file, so it works fully offline and behind corporate firewalls that block CDNs.

- **Locally:** double-click `index.html`.
- **GitHub Pages:** push to GitHub, then enable Pages (Settings → Pages → deploy from branch, root folder). The game will be live at `https://<username>.github.io/<repo>/`.
- **Install as an app (PWA):** when hosted on Pages, open the game in a mobile browser and choose *Add to Home Screen* / *Install app*. The installed app launches truly fullscreen in landscape and works offline (`manifest.webmanifest` + `sw.js` + icons).

If the start button ever does nothing, click it again — a diagnostic panel will appear on the menu explaining what failed (usually WebGL/hardware acceleration disabled in the browser).

## Tech Notes

- **Single file:** ~720 KB total, including all game code and an inlined copy of three.js r160 (MIT License, © three.js authors).
- **Procedural everything:** terrain with vertex-colored flat shading, animated sea, lighthouse with a rotating volumetric beam, creatures, first-person rifle viewmodel — all built from primitive geometry at load time. Audio (gunfire, roars, sea ambience, void drone) is synthesized live with the Web Audio API.
- **Mobile:** touch joystick + aim drag, fullscreen with landscape orientation lock, reduced pixel ratio and shadows disabled for performance.
