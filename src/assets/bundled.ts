import heroPhoto from './hero-photo.svg?url';
import bandPhoto from './band-photo.svg?url';
import heroPattern from './hero-pattern.svg?url';
import logoNaturchem from './brand/naturchem-logo-official.svg?url';
import coverEmise from './clanky/cover-emise.svg?url';
import coverHluk from './clanky/cover-hluk.svg?url';
import coverSkoleni from './clanky/cover-skoleni.svg?url';
import refSkoda from './references/skoda-auto.svg?url';
import refCez from './references/cez.svg?url';
import refCd from './references/ceske-drahy.svg?url';
import refEon from './references/e-on.svg?url';

/** SVG adresy přes Vite — na výstupu v `/_astro/`, nasazují se spolu s CSS/JS a nezávisí na `/images/`. */
export const bundled = {
	heroPhoto,
	bandPhoto,
	heroPattern,
	logoNaturchem,
	covers: {
		emise: coverEmise,
		hluk: coverHluk,
		skoleni: coverSkoleni,
	},
	refs: {
		skoda: refSkoda,
		cez: refCez,
		cd: refCd,
		eon: refEon,
	},
} as const;

export type CoverKey = keyof typeof bundled.covers;
export type RefLogoKey = keyof typeof bundled.refs;
