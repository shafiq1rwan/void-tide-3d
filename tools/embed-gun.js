// Embeds the weapon/prop OBJ models and the colormap texture into index.html.
// Usage: node tools/embed-gun.js [rifle-model]   (default: blaster-f)
// Idempotent: re-running replaces the existing GUN_ASSETS block.
const fs = require('fs');
const path = require('path');

const GAME = path.join(__dirname, '..');
const FILE = path.join(GAME, 'index.html');

const MODELS = [
  ['obj-rifle',   process.argv[2] || 'blaster-f'],
  ['obj-smg',     'blaster-j'],
  ['obj-sniper',  'blaster-e'],
  ['obj-clip',    'clip-small'],
  ['obj-grenade', 'grenade-a'],
  ['obj-crate',   'crate-small'],
];

function objText(name){
  // keep only the lines the in-game parser reads (v / vt / f)
  return fs.readFileSync(path.join(GAME, 'gun-assets', name + '.obj'), 'utf8')
    .split('\n')
    .filter(l => /^(v|vt|f)\s/.test(l.trim()))
    .join('\n');
}

const png = fs.readFileSync(path.join(GAME, 'gun-assets', 'Textures', 'colormap.png')).toString('base64');

let block = '<!--GUN_ASSETS ' + MODELS.map(m => m[1]).join(' ') + '-->\n';
for (const [id, name] of MODELS)
  block += '<script id="' + id + '" type="text/plain">\n' + objText(name) + '\n</script>\n';
block += '<script>window.GUN_TEX="data:image/png;base64,' + png + '";</script>\n' +
         '<!--/GUN_ASSETS-->\n';

let html = fs.readFileSync(FILE, 'utf8');
if (html.includes('<!--GUN_ASSETS')){
  html = html.replace(/<!--GUN_ASSETS[\s\S]*?<!--\/GUN_ASSETS-->\n/, block);
} else {
  const anchor = '<script>\n// fallback listener:';
  if (!html.includes(anchor)) throw new Error('anchor not found in index.html');
  html = html.replace(anchor, block + anchor);
}
fs.writeFileSync(FILE, html);
console.log('embedded', MODELS.map(m => m[1]).join(', '), '|', (html.length/1024).toFixed(0), 'KB total');
