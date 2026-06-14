import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-ploerz";

export const campingPloerz: CampsiteConfig = {
  name: "Seecamping Plörz",
  shortName: "Plörz",
  slug: "camping-ploerz",
  ort: "Landskron am Ossiacher See",
  region: "Kärnten",
  brandKind: "Seecamping",
  see: "Ossiacher See",
  regionLong: "Region Ossiacher See · Kärnten · Österreich",

  claim: "Willkommen im Campingparadies am Ossiacher See",
  claimEmphasis: "Ossiacher See",
  intro:
    "Ein kleiner, familiär geführter Seecampingplatz direkt am Ossiacher See — mit eigenem Seezugang, viel Platz auf der Wiese und einem besonders herzlichen Willkommen für Hunde.",

  logo: { src: `${IMG}/logo-seecamping-ploerz.png`, alt: "Seecamping Plörz Logo" },

  statement: {
    text: "Bei uns wird Camping wieder ganz einfach — direkt am Wasser, mitten in der Natur und mit Hund.",
    emphasis: "mit Hund",
  },

  pillars: [
    {
      title: "Hunde herzlich willkommen",
      text: "Seecamping Plörz freut sich auf Gäste mit Hund — eine eigene Hundeauslaufzone steht exklusiv für Gäste des Platzes bereit.",
      image: { src: `${IMG}/hundeauslaufzone.webp`, alt: "Hundeauslaufzone-Schild von Seecamping Plörz auf einer Alpenwiese mit Bergwald im Hintergrund" },
    },
    {
      title: "Privatgarten am See",
      text: "Das Mobilheim am See verfügt über einen eigenen Garten mit Liegestühlen und privatem Seezugang — Erholung direkt vor der Haustür.",
      image: { src: `${IMG}/mobilheim-see-garten.webp`, alt: "Liegestühle auf privatem Rasen vor modernen Mobilheimen mit überdachter Terrasse und Waldblick" },
    },
    {
      title: "Wohnkomfort im Mobilheim",
      text: "Moderne Mobilheime mit zwei Schlafzimmern, Küche, Bad und überdachter Terrasse — wahlweise mit privatem Seezugang.",
      image: { src: `${IMG}/mobilheime-aussenansicht.webp`, alt: "Mobilheime mit Liegestühlen und Bergblick am Ossiacher See" },
    },
  ],

  usps: [
    "Direkt am Ossiacher See",
    "Eigener Seezugang",
    "Gratis WLAN inklusive",
    "16-Ampere-Stromanschluss",
    "Hunde herzlich willkommen",
    "Am Ossiacher-See-Radweg",
  ],

  trust: {
    heading: "Ehrlich, familiär, direkt am See",
    headingEmphasis: "direkt am See",
    intro:
      "Familie Lauritsch und ihr Team empfangen ihre Gäste persönlich — ein kleiner, familiärer Platz, klare Preise und ein See, der für sich spricht.",
  },

  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/luftaufnahme-ossiachersee.webp`, alt: "Luftaufnahme von Seecamping Plörz am Ossiacher See" },
  },

  camping: {
    heading: "Camping am Ossiacher See",
    intro:
      "Direkt am Südufer gelegen, mit eigenem Seezugang und Liegewiese am Wasser — hier ist der See immer nur ein paar Schritte entfernt.",
    features: [
      {
        title: "Ossiacher See – direkt vor der Tür",
        text: "Der Campingplatz liegt unmittelbar am Südufer des Ossiacher Sees — mit Bergpanorama ringsum und dem See in Reichweite zum Schwimmen, Paddeln und Erholen.",
        image: { src: `${IMG}/campingplatz-seelage.webp`, alt: "Luftaufnahme von Seecamping Plörz am Ossiacher See mit Bergen im Hintergrund" },
      },
      {
        title: "Eigener Seezugang",
        text: "Ein eigener Zugang zum Ossiacher See mit Stegen und Liegewiese — zum Schwimmen und Sonnen, nur ein paar Schritte vom Stellplatz.",
        image: { src: `${IMG}/seezugang-stege.webp`, alt: "Seeufer mit Stegen und Liegewiese am Ossiacher See" },
      },
    ],
  },

  mobilheime: {
    heading: "Mobilheime mit Seeblick",
    intro:
      "Komfortabel wohnen mitten in der Natur — mit zwei Schlafzimmern, Küche, Bad und überdachter Terrasse, wahlweise mit privatem Seezugang.",
    items: [
      {
        name: "Mobilheim am See",
        kind: "Mobilheim",
        text: "Mit privatem Seezugang und eigener Liegewiese direkt am Wasser. Zwei Schlafzimmer, Küchenzeile, Bad mit Dusche und WC sowie eine Klimaanlage, die auch heizt. Seeblick und Bergblick von der überdachten Terrasse.",
        image: { src: `${IMG}/mobilheim-am-see-terrasse.webp`, alt: "Überdachte Terrasse mit Seeblick am Mobilheim" },
        priceFrom: 250,
        features: ["bis 4 Personen", "privater Seezugang", "2 Schlafzimmer", "Klimaanlage", "überdachte Terrasse"],
      },
      {
        name: "Mobilheim am Campingplatz",
        kind: "Mobilheim",
        text: "Platz für bis zu 4 Personen in zwei Schlafzimmern — eines mit Doppelbett, eines mit zwei Einzelbetten. Kochnische, Sitzgelegenheit, Bad mit Dusche und eine überdachte Terrasse.",
        image: { src: `${IMG}/mobilheim-campingplatz-terrasse.webp`, alt: "Mobilheim mit überdachter Terrasse am Campingplatz" },
        priceFrom: 180,
        features: ["bis 4 Personen", "2 Schlafzimmer", "Kochnische", "überdachte Terrasse"],
      },
    ],
  },

  anreise: {
    heading: "So findest du uns",
    modes: [
      { title: "Mit dem Auto", text: "Über die A10 bzw. A2 bis Villach, Abfahrt Ossiacher See, dann die Süduferstraße bis Heiligengestade." },
      { title: "Mit der Bahn", text: "ÖBB bis zum Hauptbahnhof Villach, von dort weiter mit Bus oder Taxi an den See." },
      { title: "Mit dem Flugzeug", text: "Die Flughäfen Klagenfurt und Ljubljana (Laibach) liegen jeweils in bequemer Fahrdistanz." },
    ],
  },

  galerie: {
    heading: "Wohnen im Mobilheim",
    headingEmphasis: "Mobilheim",
    intro: "Ein Blick ins Innere: helle Küche, gemütlicher Wohnbereich und ein modernes Bad mit Dusche.",
    tag: "Mobilheim-Ausstattung",
    images: [
      { src: `${IMG}/mobilheim-kueche.webp`, alt: "Moderne Küchenzeile im Mobilheim" },
      { src: `${IMG}/mobilheim-wohnbereich.webp`, alt: "Gemütlicher Wohn- und Essbereich im Mobilheim" },
      { src: `${IMG}/mobilheim-bad.webp`, alt: "Modernes Bad mit Dusche und WC im Mobilheim" },
    ],
  },

  booking: {
    heading: "Buchen & Anfragen",
    intro:
      "Wähle Zeitraum, Unterkunft und Personen — wir melden uns mit deiner persönlichen Verfügbarkeit und einem unverbindlichen Angebot.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz: Richtpreis für 2 Erwachsene in der Vorsaison, inkl. aller Abgaben, WLAN & Strom · je nach Saison abweichend · Hund & Kurtaxe zzgl. Mobilheime ab-Preis exkl. Orts-/Nächtigungstaxe, zzgl. 50 € Endreinigung.",
    highlight: {
      title: "Klare Preise, kein Kleingedrucktes",
      text: "Alle Preise verstehen sich inkl. WLAN und Strom — Endreinigung und Taxen sind offen ausgewiesen.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 45.3, perExtraGuest: 11.5 },
      { id: "mobilheim-see", label: "Mobilheim am See", perNight: 250 },
      { id: "mobilheim-camping", label: "Mobilheim am Campingplatz", perNight: 180 },
      { id: "zimmer", label: "Zimmer mit Seeblick", perNight: 100 },
    ],
  },

  kontakt: {
    coords: { lat: 46.655159, lng: 13.939101 },
    tel: "+43 676 322 14 94",
    telHref: "tel:+436763221494",
    mail: "info@camping-ploerz.at",
    facebook: "https://www.facebook.com/seecampingPloerz",
    adresse: "Ossiachersee Süduferstraße 289 · 9523 Landskron am Ossiacher See · Kärnten",
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Eigener Seezugang", href: "#camping" },
        { label: "Liegewiese am Wasser", href: "#camping" },
        { label: "Stellplätze & Preise", href: "#booking" },
      ],
    },
    {
      label: "Mobilheime",
      href: "#mobilheime",
      children: [
        { label: "Mobilheim am See", href: "#mobilheime" },
        { label: "Mobilheim am Campingplatz", href: "#mobilheime" },
        { label: "Zimmer mit Seeblick", href: "#booking" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Anreise",
      href: "#anreise",
      children: [
        { label: "Mit dem Auto", href: "#anreise" },
        { label: "Mit der Bahn", href: "#anreise" },
        { label: "Mit dem Flugzeug", href: "#anreise" },
      ],
    },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Stellplatz", href: "#booking" },
        { label: "Mobilheime", href: "#booking" },
        { label: "Zimmer", href: "#booking" },
      ],
    },
  ],
};

export default campingPloerz;
