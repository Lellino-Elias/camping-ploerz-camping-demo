import type { CampsiteConfig } from "../types";

/**
 * Seecamping Plörz — Harald Lauritsch GmbH · Landskron am Ossiacher See, Kärnten.
 * Alle Texte/Fakten belegt aus camping-ploerz.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Plörz-Fotos in /public/campsites/camping-ploerz/
 * (alle per Vision geprüft). Stock-/Pixabay-/Google-Maps-/Partner-Bilder wurden
 * bewusst NICHT verwendet.
 * EHRLICH: der Platz liegt DIREKT am Ossiacher See (eigener Seezugang) → "am See"
 * ist belegt. Preise real aus preise.html / mobilheim.html / zimmervermietung.html.
 * Keine eindeutige Auszeichnung auf der Quelle → awards bleibt leer.
 * Zimmervermietung hat keine eigenen, verifizierbaren Fotos → nur im Text genannt,
 * keine eigene Bildkachel. Aktivitäten/Wandern/Tandem nur als Story (Quelle hat
 * dafür ausschließlich Stockfotos) → keine aktivitaeten-Sektion mit Bildern.
 */
const IMG = "/campsites/camping-ploerz";

export const campingPloerz: CampsiteConfig = {
  name: "Seecamping Plörz",
  shortName: "Seecamping Plörz",
  slug: "camping-ploerz",
  ort: "Landskron am Ossiacher See",
  region: "Kärnten",
  brandKind: "Seecamping",
  see: "Ossiacher See",
  regionLong: "Urlaubsregion Ossiacher See · Kärnten · Österreich",

  claim: "Dein Campingparadies am smaragdblauen Ossiacher See",
  claimEmphasis: "smaragdblauen Ossiacher See",
  intro:
    "Direkt am Ufer des Ossiacher Sees: ein familienfreundlicher Seecampingplatz mit Stellplätzen auf der Wiese, eigenem Seezugang und einem klaren Versprechen — Hunde sind bei uns nicht nur erlaubt, sondern herzlich willkommen.",

  logo: { src: `${IMG}/logo-seecamping-ploerz.png`, alt: "SEEcamping Plörz Logo" },

  statement: {
    text: "Hunde sind bei uns nicht nur erlaubt, sondern herzlich willkommen.",
    emphasis: "herzlich willkommen",
  },

  pillars: [
    {
      title: "Direkt am Ossiacher See",
      text: "Smaragdblaues Wasser, Berge ringsum und der eigene Seezugang nur wenige Schritte vom Stellplatz entfernt.",
      image: { src: `${IMG}/seezugang-stege.webp`, alt: "Eigener Seezugang mit Stegen am Ossiacher See" },
    },
    {
      title: "Hunde herzlich willkommen",
      text: "Eigener Seezugang für Vierbeiner und eine eingezäunte Hundeauslaufzone gehören bei uns selbstverständlich dazu.",
      image: { src: `${IMG}/hundeauslaufzone.webp`, alt: "Hundeauslaufzone von Seecamping Plörz — ein Platz für Spiel und Spaß" },
    },
    {
      title: "Wohnkomfort am Wasser",
      text: "Lieber feste Wände? Moderne Mobilheime mit zwei Schlafzimmern, Küche und Bad — teils mit privatem Seezugang.",
      image: { src: `${IMG}/mobilheime-aussenansicht.webp`, alt: "Mobilheime von Seecamping Plörz mit eigener Liegewiese" },
    },
  ],

  usps: [
    "Direkt am Ossiacher See",
    "Eigener Seezugang",
    "Hunde herzlich willkommen",
    "Eigene Hundeauslaufzone",
    "Stellplätze auf der Wiese",
    "16-A-Strom an jedem Platz",
    "Gratis WLAN",
    "Am Ossiachersee-Radweg",
  ],

  trust: {
    heading: "Worauf Sie sich bei uns verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Familie Lauritsch führt Seecamping Plörz als familienfreundlichen Platz direkt am Ossiacher See. Faire Preise inklusive Strom, WLAN und Kurtaxe, ein eigener Seezugang und ein herzliches Willkommen für Mensch und Hund.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/luftaufnahme-ossiachersee.webp`, alt: "Luftaufnahme von Seecamping Plörz direkt am Ossiacher See" },
    sunset: { src: `${IMG}/ossiachersee-abendstimmung.webp`, alt: "Abendstimmung über dem Ossiacher See" },
  },

  camping: {
    heading: "Seecamping am Ossiacher See",
    intro:
      "Ein familienfreundlicher Campingplatz mit Stellplätzen direkt auf der Wiese am Ufer des Ossiacher Sees — mitten in einer herrlichen Landschaft mit besonders gesundem Klima.",
    features: [
      {
        title: "Stellplätze direkt am See",
        text: "Alle Stellplätze sind rund 100 m² groß, liegen auf der Wiese und verfügen über einen 16-Ampere-Stromanschluss; WLAN ist gratis. Sonnen- wie Schattenplätze stehen zur Wahl.",
        image: { src: `${IMG}/stellplaetze-luftaufnahme.webp`, alt: "Luftaufnahme der Stellplätze von Seecamping Plörz am Ossiacher See" },
      },
      {
        title: "Eigener Seezugang & Liegewiese",
        text: "Über einen eigenen Seezugang geht es direkt ins kühle Nass — einen separaten Zugang gibt es auch für Hunde. Der Ossiachersee-Radweg und Wanderwege grenzen unmittelbar an den Platz.",
        image: { src: `${IMG}/seezugang-liegewiese.webp`, alt: "Blick vom Seecamping Plörz über die Liegewiese auf den Ossiacher See" },
      },
    ],
  },

  mobilheime: {
    heading: "Mobilheime & Zimmer mit Seeblick",
    intro:
      "Lieber feste Wände statt Zelt? Unsere voll ausgestatteten Mobilheime bieten zwei Schlafzimmer, Küche und Bad — wahlweise mit privatem Seezugang. Dazu vermieten wir acht rustikal eingerichtete Zimmer mit Seeblick, eigenem Bad und TV (ab 100 € pro Nacht).",
    items: [
      {
        name: "Mobilheim am See",
        kind: "Mobilheim · privater Seezugang",
        text: "Zwei Schlafzimmer, Küchenzeile mit Sitzecke und Bad mit Dusche/WC. Eine Klimaanlage sorgt für Wärme wie Kühlung. Seeblick und Bergblick genießt man von der überdachten Terrasse — samt eigenem Strandbereich direkt am See.",
        image: { src: `${IMG}/mobilheim-am-see-terrasse.webp`, alt: "Überdachte Terrasse des Mobilheims am See mit Blick auf den Ossiacher See" },
        priceFrom: 250,
        features: ["bis 4 Personen", "2 Schlafzimmer", "Küche & Bad (Dusche/WC)", "Klimaanlage", "privater Seezugang & Terrasse"],
      },
      {
        name: "Mobilheim am Campingplatz",
        kind: "Mobilheim",
        text: "Gemütliches Mobilheim für bis zu 4 Personen mit zwei Schlafzimmern (ein Doppelbett, zwei Einzelbetten), Kochnische, Sitzgelegenheit und Bad mit Dusche. Den Tag lässt man auf der überdachten Terrasse ausklingen.",
        image: { src: `${IMG}/mobilheim-campingplatz-terrasse.webp`, alt: "Mobilheim am Campingplatz mit überdachter Terrasse und Sitzgruppe" },
        priceFrom: 180,
        features: ["bis 4 Personen", "2 Schlafzimmer", "Kochnische & Sitzecke", "Bad mit Dusche", "überdachte Terrasse"],
      },
    ],
  },

  anreise: {
    heading: "So finden Sie zu uns",
    modes: [
      { title: "Mit dem Auto", text: "Über die Tauernautobahn A10 bzw. die Südautobahn A2 bis Villach, Abfahrt Villach–Ossiacher See, dann über die Ossiachersee-Süduferstraße bis Landskron / Heiligengestade." },
      { title: "Mit der Bahn", text: "Mit der ÖBB bis zum Hauptbahnhof Villach, weiter mit Taxi oder Postbus an den Ossiacher See." },
      { title: "Mit dem Flugzeug", text: "Flughafen Klagenfurt oder Laibach (Ljubljana), von dort weiter mit Taxi oder Postbus." },
    ],
  },

  galerie: {
    heading: "Wohnen wie im Urlaubshaus",
    headingEmphasis: "Urlaubshaus",
    intro:
      "Ein Blick in unsere Mobilheime: moderne Küche, eigenes Bad und ein gemütlicher Wohnbereich.",
    tag: "Mobilheim-Komfort",
    images: [
      { src: `${IMG}/mobilheim-kueche.webp`, alt: "Voll ausgestattete Küchenzeile im Mobilheim von Seecamping Plörz" },
      { src: `${IMG}/mobilheim-bad.webp`, alt: "Modernes Bad mit Dusche im Mobilheim von Seecamping Plörz" },
      { src: `${IMG}/mobilheim-wohnbereich.webp`, alt: "Gemütlicher Wohn- und Essbereich im Mobilheim von Seecamping Plörz" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Unterkunft und Personenzahl — Familie Lauritsch meldet sich mit Ihrer persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz: Preis für 2 Erwachsene/Nacht inkl. Strom, WLAN & Kurtaxe (Vorsaison; Zwischen- & Hauptsaison höher). Mobilheime: ab-Preis exkl. Orts-/Nächtigungstaxe, zzgl. 50 € Endreinigung. Zimmer ohne Frühstück. Saison 01.05.–01.10.2026 · Änderungen vorbehalten.",
    highlight: {
      title: "Inklusive Strom, WLAN & Kurtaxe",
      text: "Der Stellplatzpreis gilt für 2 Erwachsene inklusive Strom, WLAN und Kurtaxe. Bitte beachten Sie: Anfragen für nur 1 Nacht sind in der Hauptsaison nicht möglich.",
    },
    categories: [
      // Reale Preise: preise.html (Stellplatz 2 Erw., Vorsaison), mobilheim.html, zimmervermietung.html.
      { id: "stellplatz", label: "Stellplatz (2 Erw.)", perNight: 45.3, perExtraGuest: 11.5 },
      { id: "mobilheim-see", label: "Mobilheim am See", perNight: 250, perExtraGuest: 0 },
      { id: "mobilheim-platz", label: "Mobilheim am Campingplatz", perNight: 180, perExtraGuest: 0 },
      { id: "zimmer", label: "Zimmer mit Seeblick", perNight: 100, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    coords: { lat: 46.655462, lng: 13.939476 },
    tel: "+43 676 322 14 94",
    telHref: "tel:+436763221494",
    mail: "info@camping-ploerz.at",
    facebook: "https://www.facebook.com/seecampingPloerz",
    adresse: "Ossiachersee Süduferstraße 289 · 9523 Villach · Kärnten",
    // Keine expliziten Koordinaten auf der Quelle → coords ehrlich weggelassen (Karte blendet aus, Adresse zeigt).
  },

  story: {
    kicker: "Familie Lauritsch · Ossiacher See",
    heading: "Ein Platz mit großem Herz",
    intro:
      "Familie Lauritsch führt einen familienfreundlichen Campingplatz mit Stellplätzen direkt auf der Wiese am Südufer des Ossiacher Sees.",
    chapters: [
      { no: "01", kicker: "Am smaragdblauen See", title: "Urlaub direkt am Wasser", text: "Direkt am Ossiacher See, mit eigenem Seezugang und Liegewiese. Der Ossiachersee-Radweg führt am Platz vorbei, Wanderwege grenzen unmittelbar an." },
      { no: "02", kicker: "Vierbeiner willkommen", title: "Ein Paradies für Hunde", text: "Hunde sind bei uns nicht nur erlaubt, sondern herzlich willkommen: mit eigenem Seezugang für Hunde und einer eingezäunten Hundeauslaufzone zum freien Toben." },
      { no: "03", kicker: "Strandbad & Imbiss", title: "ZIS Lauritsch — 400 m weiter", text: "Rund 400 m vom Platz liegt unser Strandbad mit Imbiss: ein abgetrennter Badebereich für Hunde, Sonnenplätze und regionale Speisen sowie frisch Gezapftes auf der Seeterrasse." },
      { no: "04", kicker: "Abenteuer in Kärnten", title: "Berge, Seen & mehr", text: "Vom Tandemflug über den Ossiacher See bis zu zahlreichen Ausflugszielen — die kostenlose Erlebniscard (an der Rezeption) und die Kärnten Card bringen Sie bequem hin." },
    ],
  },

  languages: ["DE"],

  nav: [
    {
      label: "Mobilheime",
      href: "#mobilheime",
      children: [
        { label: "Mobilheim am See", href: "#mobilheime" },
        { label: "Mobilheim am Campingplatz", href: "#mobilheime" },
        { label: "Zimmer mit Seeblick", href: "#mobilheime" },
      ],
    },
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze am See", href: "#camping" },
        { label: "Eigener Seezugang", href: "#camping" },
        { label: "Hunde willkommen", href: "#camping" },
      ],
    },
    {
      label: "Galerie",
      href: "#galerie",
    },
    {
      label: "Preise & Anfrage",
      href: "#booking",
      children: [
        { label: "Stellplatz", href: "#booking" },
        { label: "Mobilheime & Zimmer", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingPloerz;
