import type { ServiceSlug } from './site';

export type ServiceDetail = {
	intro: string;
	bullets: string[];
};

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
	studie: {
		intro:
			'Zajišťujeme dokumentaci pro řízení u správních úřadů a interní environmental compliance — od rozptylových modelů přes hluk po proces EIA.',
		bullets: [
			'Odborné posudky dle platné legislativy',
			'Rozptylové studie',
			'Hlukové studie',
			'Oznámení záměru a dokumentace EIA',
			'Integrovaná povolení provozu (podklady a konzultace)',
			'Ověřování emisí skleníkových plynů',
			'Hlášení ISPOP a související ekologické služby',
		],
	},
	mereni: {
		intro:
			'Akreditovaná laboratoř ČIA č. L 1599 — měření provádíme jako podklad pro úřady, provozní řád i interní kontrolu výrobních procesů.',
		bullets: [
			'Měření emisí ze zdrojů znečišťování ovzduší',
			'Měření hluku v prostředí a zdrojů hluku',
			'Měření vibrací',
			'Měření osvětlení a luminance',
			'Měření prašnosti',
			'Měření mikroklimatických podmínek',
			'Klasifikace čistoty ovzduší ve vyhrazených superčistých prostorech',
			'Chemické analýzy a stanovení těžkých kovů',
		],
	},
	'prodej-servis': {
		intro:
			'Dodáváme ověřenou měřicí techniku a zajistíme kalibrace a servis v návaznosti na vaše provozní požadavky.',
		bullets: [
			'Kalibrovaná a ověřená měřicí zařízení a čidla Delta OHM S.r.l.',
			'Analyzátory pro měření emisí',
			'Plynové chromatografy PCF Elettronica S.r.l.',
			'Servis a podpora výrobce v koordinaci s námi',
		],
	},
	znalecka: {
		intro:
			'Znalecké posudky připravujeme tam, kde je potřeba nezávislé odborné stanovisko pro soudní řízení nebo spor.',
		bullets: [
			'Znalecká činnost v oboru chemie',
			'Znalecká činnost v oboru čistoty ovzduší',
			'Znalecká činnost v oboru vodní hospodářství',
		],
	},
	skoleni: {
		intro:
			'Školení zaměřujeme na praktický výklad povinností provozovatelů podle chemického zákona a zákona o ochraně ovzduší.',
		bullets: [
			'Školení k chemickému zákonu pro pracovníky podniků',
			'Školení k zákonu o ochraně ovzduší pro pracovníky podniků',
			'Termíny a rozsah lze přizpůsobit vašemu provozu',
		],
	},
};
