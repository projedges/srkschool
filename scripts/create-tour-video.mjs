import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import ffmpeg from '@ffmpeg-installer/ffmpeg';

const input = resolve('public/assets/justdial/school-1.jpg');
const output = resolve('public/assets/srk-campus-tour.webm');
const font = 'C\\:/Windows/Fonts/arialbd.ttf';

mkdirSync(dirname(output), { recursive: true });

const filters = [
  'scale=1280:720:force_original_aspect_ratio=increase',
  'crop=1280:720',
  "zoompan=z='min(zoom+0.00055,1.12)':x='iw/2-(iw/zoom/2)+40*sin(on/90)':y='ih/2-(ih/zoom/2)':d=240:s=1280x720:fps=30",
  'drawbox=x=0:y=0:w=650:h=720:color=white@0.78:t=fill',
  `drawtext=fontfile='${font}':text='SRK EM SCHOOL':x=72:y=116:fontsize=62:fontcolor=0x071a45`,
  `drawtext=fontfile='${font}':text='Sarvepalli Radhakrishnan':x=72:y=196:fontsize=42:fontcolor=0x07866f`,
  `drawtext=fontfile='${font}':text='English Medium School, Tadipatri':x=76:y=266:fontsize=28:fontcolor=0x1f2f4d`,
  'drawbox=x=72:y=360:w=430:h=60:color=white@0.88:t=fill',
  `drawtext=fontfile='${font}':text='English Medium':x=104:y=398:fontsize=27:fontcolor=0x071a45`,
  'drawbox=x=72:y=440:w=430:h=60:color=white@0.88:t=fill',
  `drawtext=fontfile='${font}':text='Co-ed School':x=104:y=478:fontsize=27:fontcolor=0x071a45`,
  'drawbox=x=72:y=520:w=430:h=60:color=white@0.88:t=fill',
  `drawtext=fontfile='${font}':text='Reddivaripalem Campus':x=104:y=558:fontsize=27:fontcolor=0x071a45`,
  'drawbox=x=72:y=625:w=335:h=56:color=0x0b2b6d@1:t=fill',
  `drawtext=fontfile='${font}':text='4.6 Public Rating':x=98:y=662:fontsize=24:fontcolor=white`,
].join(',');

const result = spawnSync(
  ffmpeg.path,
  [
    '-y',
    '-loop',
    '1',
    '-i',
    input,
    '-f',
    'lavfi',
    '-i',
    'anullsrc=channel_layout=stereo:sample_rate=44100',
    '-t',
    '8',
    '-vf',
    filters,
    '-c:v',
    'libvpx-vp9',
    '-b:v',
    '2500k',
    '-pix_fmt',
    'yuv420p',
    '-c:a',
    'libopus',
    '-shortest',
    output,
  ],
  { stdio: 'inherit' },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
