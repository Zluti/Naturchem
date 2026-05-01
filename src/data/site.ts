/** Firemní údaje a obsah webu — upravujte zde kontakty při změně. */

export const siteMeta = {
	name: 'NATURCHEM s. r. o.',
	shortName: 'Naturchem',
	titleSuffix: 'Emise, hluk, vibrace, EIA',
	description:
		'Autorizované studie, akreditovaná měření, prodej měřicí techniky, znalecká činnost a školení v oblasti životního prostředí. Působíme pro průmysl, dopravu a veřejný sektor.',
	url: 'https://naturchem.cz',
	/** Obrázky v `public/images/` — stabilní URL na jakémkoli hostingu (nezávislé na `_astro`). */
	heroPhotoSrc: '/images/hero-photo.svg',
	heroPatternSrc: '/images/hero-pattern.svg',
	headerLogoSrc: '/images/naturchem-logo-official.svg',
	heroPhotoAlt:
		'Ilustrace průmyslového měření a ochrany ovzduší — vizuální styl Naturchem.',
	homeBandPhotoSrc: '/images/band-photo.svg',
	homeBandPhotoAlt:
		'Ilustrace krajiny a obnovitelných zdrojů v kontextu životního prostředí.',
	email: 'naturchem@naturchem.cz',
	phones: ['+420 603 216 983', '+420 774 100 570'] as const,
	ico: '27504379',
	dic: 'CZ27504379',
	orRejstrik:
		'Společnost je zapsána v obchodním rejstříku Krajského soudu v Hradci Králové, sp. zn. C 22910.',
} as const;

export const offices = [
	{
		label: 'Sídlo společnosti',
		street: 'Ledečská 3015',
		cityZip: '580 01 Havlíčkův Brod',
	},
	{
		label: 'Provozovna České Budějovice',
		street: 'Rudolfovská třída 57',
		cityZip: '370 01 České Budějovice',
	},
	{
		label: 'Provozovna Praha',
		street: 'Lesnická 1214/5',
		cityZip: '150 00 Praha 5 – Smíchov',
	},
] as const;

export const team = [
	{
		name: 'Ing. František Hezina',
		role: 'Jednatel',
		note:
			'Soudní znalec; autorizovaná osoba pro měření emisí, odborné posudky, rozptylové studie, ověřování emisí skleníkových plynů a oznámení EIA; poradenství a administrativa životního prostředí.',
		phone: undefined as string | undefined,
	},
	{
		name: 'Mgr. Markéta Žilková',
		role: 'Prodej',
		note: undefined as string | undefined,
		phone: '+420 736 778 391',
	},
	{
		name: 'Ing. Petra Svátová, DiS.',
		role: 'Poradce pro životní prostředí',
		note: undefined as string | undefined,
		phone: '+420 774 100 572',
	},
] as const;

/** Krátké štítky pod hero nadpisem. */
export const heroPills = [
	'Akreditovaná laboratoř ČIA L 1599',
	'Autorizace EIA a rozptylové studie',
	'Znalec a školení pro firmy',
] as const;

export type UspIcon = 'badge' | 'layers' | 'mapPin' | 'clock';

export const homeUsps: { icon: UspIcon; title: string; text: string }[] = [
	{
		icon: 'badge',
		title: 'Ověřitelná kredibilita',
		text: 'Akreditace, autorizace a dokumenty ke stažení — bez „skrytých“ kompetencí.',
	},
	{
		icon: 'layers',
		title: 'Celý cyklus z jedné ruky',
		text: 'Od měření a laboratoře přes studie až po znalecké posudky a školení pro váš provoz.',
	},
	{
		icon: 'mapPin',
		title: 'Geografie, která dává smysl',
		text: 'Sídlo Havlíčkův Brod a provozy v Českých Budějovicích a Praze — ČR pokrytá prakticky.',
	},
	{
		icon: 'clock',
		title: 'Domluva podle reality úřadu',
		text: 'Umíme nastavit priority tak, aby termíny seděly s řízením, měřicími okny i výrobou.',
	},
];

export const homeBandBullets = [
	'Studie a měření jako podklad pro ČIŽP, KHS nebo správní řízení.',
	'Transparentní rozsah zakázky — dopředu víte, co přesně dodáme a v jakém formátu.',
	'Partnerský přístup k průmyslovým provozům: automotive, energetika, doprava, stavby.',
] as const;

export type ServiceSlug =
	| 'studie'
	| 'mereni'
	| 'prodej-servis'
	| 'znalecka'
	| 'skoleni';

export const servicesNav: { slug: ServiceSlug; title: string; summary: string }[] = [
	{
		slug: 'studie',
		title: 'Autorizované studie',
		summary:
			'Odborné posudky, rozptylové a hlukové studie, oznámení EIA, integrovaná povolení, ověřování emisí skleníkových plynů, hlášení ISPOP a související ekologické služby.',
	},
	{
		slug: 'mereni',
		title: 'Akreditovaná měření',
		summary:
			'Emise, hluk, vibrace, osvětlení, prašnost, mikroklima, klasifikace čistoty ovzduší v čistých prostorech, chemické analýzy a těžké kovy.',
	},
	{
		slug: 'prodej-servis',
		title: 'Prodej a servis',
		summary:
			'Kalibrované a ověřené přístroje a čidla Delta OHM, analyzátory emisí a plynové chromatografy PCF Elettronica — prodej a servis.',
	},
	{
		slug: 'znalecka',
		title: 'Znalecká činnost',
		summary: 'Znalecké posudky v oborech chemie, čistota ovzduší a vodní hospodářství.',
	},
	{
		slug: 'skoleni',
		title: 'Školení',
		summary:
			'Školení chemického zákona a zákona o ochraně ovzduší pro podniky.',
	},
];

export const accreditationList = [
	'Měření hluku',
	'Měření emisí',
	'Měření vibrací',
	'Měření osvětlení',
	'Měření prašnosti',
	'Měření mikroklimatických podmínek',
	'Měření těžkých kovů',
] as const;

export const furtherServices = [
	'Laboratorní analýzy jako podklad pro Krajskou hygienickou stanici, ČIŽP a provozní měření.',
	'Odborné posudky dle zákona č. 201/2012 Sb., o ochraně ovzduší, a oznámení EIA dle zákona č. 100/2001 Sb.',
	'Znalecké posudky v oboru ochrany ovzduší, chemického zákona a ochrany vod.',
	'Prodej produktů společnosti Delta OHM S.r.l.',
] as const;

/** Vybrané reference + lokální „logo“ (typografické znázornění názvu; nejsou to oficiální grafické znaky firem). */
export const referenceLogoPartners = [
	{ name: 'Škoda Auto, a.s.', logoSrc: '/images/references/skoda-auto.svg' },
	{ name: 'ČEZ, a.s.', logoSrc: '/images/references/cez.svg' },
	{ name: 'České dráhy, a.s.', logoSrc: '/images/references/ceske-drahy.svg' },
	{ name: 'E.ON, a.s.', logoSrc: '/images/references/e-on.svg' },
] as const;

/** Cover článků podle `coverKey` ve frontmatter. */
export const articleCoverSrc = {
	emise: '/images/clanky/cover-emise.svg',
	hluk: '/images/clanky/cover-hluk.svg',
	skoleni: '/images/clanky/cover-skoleni.svg',
} as const;

export const referenceMore = [
	'STRABAG, a.s.',
	'Swietelsky stavební, s.r.o.',
	'Letiště České Budějovice, s.r.o.',
	'Teplárna České Budějovice, a.s.',
	'Teplárna Písek, a.s.',
	'Teplárna Strakonice, a.s.',
	'ČSAD JIHOTRANS, a.s.',
	'MADETA, a.s.',
	'AISIN EUROPE MANUFACTURING CZECH',
	'EATON Elektrotechnika, s.r.o.',
	'SILON, s.r.o.',
	'HELUZ cihlářský průmysl, v.o.s.',
	'Ředitelství silnic a dálnic ČR',
	'slévárna METAL TRADE COMAX',
	'DURA AUTOMOTIVE SYSTEMS CZ, s.r.o.',
	'a další partnery v průmyslu a infrastruktuře',
] as const;

export type DocumentItem = { title: string; href: string };

/** Odkazy na PDF na stávajícím hostingu — po nasazení lze přesunout do /public/documents/. */
export const documents: DocumentItem[] = [
	{
		title: 'Akreditovaná laboratoř ČIA L 1599',
		href: 'https://naturchem.cz/assets/documents/Osvedceni_s_prilohami.pdf',
	},
	{
		title: 'Výpis z obchodního rejstříku',
		href: 'https://naturchem.cz/assets/documents/V%C3%BDpis-z-obchodn%C3%ADho-rejst%C5%99%C3%ADku.pdf',
	},
	{
		title: 'Živnostenský list',
		href: 'https://naturchem.cz/assets/documents/ZL.pdf',
	},
	{
		title: 'Autorizace EIA',
		href: 'https://naturchem.cz/assets/documents/autorizaceEIA.PDF',
	},
	{
		title: 'Autorizace rozptylové studie',
		href: 'https://naturchem.cz/assets/documents/RS%20do%202016.pdf',
	},
	{
		title: 'Autorizace ověřování emisí skleníkových plynů',
		href: 'https://naturchem.cz/assets/documents/Autorizace-k-ov%C4%9B%C5%99ov%C3%A1n%C3%AD-emis%C3%AD-sklen%C3%ADkov%C3%BDch-plyn%C5%AF.pdf',
	},
	{
		title: 'Autorizace odborných posudků',
		href: 'https://naturchem.cz/assets/documents/OP_new.PDF',
	},
];

/** Krátké anonymizované příklady pro sekci referencí — doplňte reálné citace se souhlasem klienta. */
export const caseStudies = [
	{
		sector: 'Automotive',
		problem: 'Potřeba měření a dokumentace emisí a hluku při změnách technologie.',
		outcome:
			'Akreditovaná měření a podklady pro komunikaci s úřady v dohodnutých termínech.',
	},
	{
		sector: 'Energetika',
		problem: 'Legislativní požadavky na životní prostředí u provozu zdrojů.',
		outcome:
			'Odborné posudky a studie pro povolenkové řízení a provozní kontroly.',
	},
	{
		sector: 'Infrastruktura',
		problem: 'Hluk a vibrace v okolí staveb a dopravních staveb.',
		outcome:
			'Hlukové a příbuzné podklady pro projektovou dokumentaci a EIA.',
	},
] as const;
