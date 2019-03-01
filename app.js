function shuffle (array) {

  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

};

var first_names = [
"Absolute Magnitude",
"Absolute Zero",
"Ablation",
"Accretion",
"Accretion Disk",
"Achondrite",
"Albedo",
"Albedo Feature",
"Altitude",
"Antimatter",
"Antipodal Point",
"Apastron",
"Aperture",
"Aphelion",
"Apogee",
"Apparent Magnitude",
"Asteroid",
"Astrochemistry",
"Astronomical Unit (AU)",
"Atmosphere",
"Aurora",
"Aurora Australis",
"Aurora Borealis",
"Axis",
"Azimuth",
"Bar",
"Big Bang",
"Binary",
"Black Hole",
"Black Moon",
"Blue Moon",
"Blueshift",
"Bolide",
"Caldera",
"Catena",
"Cavus",
"Celestial Equator",
"Celestial Poles",
"Celestial Sphere",
"Cepheid Variable",
"Chaos",
"Chasma",
"Chondrite",
"Chondrule",
"Chromosphere",
"Circumpolar Star",
"Circumstellar Disk",
"Coma",
"Comet",
"Conjunction",
"Constellation",
"Corona",
"Cosmic Ray",
"Cosmic String",
"Cosmogony",
"Cosmology",
"Crater",
"Dark Matter",
"Debris Disk",
"Declination",
"Density",
"Disk",
"Double Asteroid",
"Doppler Effect",
"Double Star",
"Dwarf Planet",
"Eccentricity",
"Eclipse",
"Eclipsing Binary",
"Ecliptic",
"Ejecta",
"Electromagnetic Radiation",
"Electromagnetic Spectrum",
"Ellipse",
"Elliptical Galaxy",
"Elongation",
"Ephemeris",
"Equinox",
"Escape Velocity",
"Event Horizon",
"Evolved Star",
"Extinction",
"Extragalactic",
"Extraterrestrial",
"Eyepiece",
"Faculae",
"Filament",
"Finder",
"Fireball",
"Flare Star",
"Galactic Halo",
"Galactic Nucleus",
"Galaxy",
"Galilean Moons",
"Gamma-ray",
"Geosynchronous Orbit",
"Giant Molecular Cloud",
"Globular Cluster",
"Granulation",
"Gravitational Lens",
"Gravity",
"Greenhouse Effect",
"Heliopause",
"Heliosphere",
"Hydrogen",
"Hypergalaxy",
"Ice",
"Inclination",
"Interstellar",
"Ionosphere",
"Iron Meteorite",
"Irregular Galaxy",
"Irregular Satellite",
"Jansky",
"Jet",
"Kelvin",
"Kepler's First Law",
"Kepler's Second Law",
"Kepler's Third Law",
"Kiloparsec",
"Kuiper Belt",
"Lagrange Point",
"Lenticular Galaxy",
"Libration",
"Light Year",
"Limb",
"Local Group",
"Luminosity",
"Lunar Eclipse",
"Lunar Month",
"Lunation",
"Magellanic Clouds",
"Magnetic Field",
"Magnetic Pole",
"Magnetosphere",
"Magnitude",
"Main Belt",
"Major Planet",
"Mare",
"Mass",
"Matter",
"Meridian",
"Metal",
"Meteor",
"Meteor Shower",
"Meteorite",
"Meteoroid",
"Millibar",
"Minor Planet",
"Molecular Cloud",
"Nadir",
"Nebula",
"Neutrino",
"Neutron",
"Nova",
"Nuclear Fusion",
"Obliquity",
"Oblateness",
"Occultation",
"Oort Cloud",
"Open Cluster",
"Opposition",
"Parallax",
"Parsec",
"Patera",
"Penumbra",
"Perigee",
"Perihelion",
"Perturb",
"Phase",
"Photon",
"Photosphere",
"Planemo",
"Planet",
"Planetary Nebula",
"Planetesimal",
"Planitia",
"Planum",
"Plasma",
"Precession",
"Prominence",
"Prograde Orbit",
"Proper Motion",
"Protoplanetary Disk",
"Protostar",
"Pulsar",
"Quadrature",
"Quasar",
"Quasi-Stellar",
"Radial Velocity",
"Radiant",
"Radiation",
"Radiation Belt",
"Radio Galaxy",
"Red Giant",
"Redshift",
"Regular Satellite",
"Resonance",
"Retrograde Motion",
"Retrograde Orbit",
"Right Ascension",
"Ring Galaxy",
"Roche Limit",
"Rotation",
"Saros Series",
"Satellite",
"Scarp",
"Seyfert Galaxy",
"Shell Star",
"Shepherd Satellite",
"Sidereal",
"Sidereal Month",
"Sidereal Period",
"Singularity",
"Small Solar System Body",
"Solar Cycle",
"Solar Eclipse",
"Solar Flare",
"Solar Nebula",
"Solar Wind",
"Solstice",
"Spectrometer",
"Spectroscopy",
"Spectrum",
"Spicules",
"Spiral Galaxy",
"Star",
"Star Cluster",
"Steady State Theory",
"Stellar Wind",
"Stone Meteorite",
"Stony Iron",
"Sunspot",
"Supergiant",
"Supermoon",
"Superior Conjunction",
"Superior Planet",
"Supernova",
"Supernova Remnant",
"Synchronous Rotation",
"Synodic Month",
"Synodic Period",
"Tektite",
"Telescope",
"Terminator",
"Terrestrial",
"Terrestrial Planet",
"Tidal Force",
"Tidal Heating",
"Transit",
"Trans-Neptunian",
"Trojan",
"Ultraviolet",
"Umbra",
"Universal Time",
"Van Allen Belts",
"Variable Star",
"Visible Light",
"Virgo Cluster",
"Visual Magnitude",
"Wavelength",
"White Dwarf",
"X-ray",
"Yellow Dwarf",
"Zenith",
"Zodiac",
"Zodiacal Light"
]

var last_names = [
"Azikiwe",
"Awolowo",
"Bello",
"Balewa",
"Akintola",
"Okotie-Eboh",
"Nzeogwu",
"Onwuatuegwu",
"Okafor",
"Okereke",
"Okeke",
"Okonkwo",
"Okoye",
"Okorie",
"Obasanjo",
"Babangida",
"Buhari",
"Dimka",
"Diya",
"Odili",
"Ibori",
"Igbinedion",
"Alamieyeseigha",
"Yar’Adua",
"Akpabio",
"Attah",
"Chukwumereije",
"Akunyili",
"Iweala",
"Okonjo",
"Ezekwesili",
"Achebe",
"Soyinka",
"Solarin",
"Gbadamosi",
"Olanrewaju",
"Magoro",
"Madaki",
"Jang",
"Oyinlola",
"Oyenusi",
"Onyejekwe",
"Onwudiwe",
"Jakande",
"Kalejaiye",
"Igwe",
"Eze",
"Obi",
"Ngige",
"Uba",
"Asari-Dokubo",
"Jomo-Gbomo",
"Anikulapo-Kuti",
"Iwu",
"Anenih",
"Bamgboshe",
"Biobaku",
"Tinibu",
"Akinjide",
"Akinyemi",
"Akiloye",
"Adeyemi",
"Adesida",
"Omehia",
"Sekibo",
"Okar",
"Amaechi",
"Bankole",
"Nnamani",
"Ayim",
"Okadigbo",
"Ironsi",
"Ojukwu",
"Danjuma",
"Effiong",
"Akenzua",
"Adeoye",
"Adesina",
"Saro-Wiwa",
"Gowon",
"Ekwensi",
"Egwu",
"Onobanjo",
"Aguda",
"Okpara",
"Mbanefo",
"Boro",
"Akerele",
"Alakija",
"Balogun",
"Mbadinuju",
"Okiro",
"Okilo",
"Jaja",
"Fagbure",
"Falana",
"Ademola",
"Ohakim",
"Orji",
"Kalu",
"Wang",
"Li",
"Zhang",
"Liu",
"Chen",
"Yang",
"Huang",
"Zhao",
"Wu",
"Zhou",
"Wang",
"Li",
"Zhang",
"Liu",
"Chen",
"Yang",
"Huang",
"Zhao",
"Wu",
"Zhou",
"Wang",
"Li",
"Zhang",
"Liu",
"Chen",
"Yang",
"Huang",
"Zhao",
"Wu",
"Zhou",
"Wang",
"Li",
"Zhang",
"Liu",
"Chen",
"Yang",
"Huang",
"Zhao",
"Wu",
"Zhou",
"Wang",
"Li",
"Zhang",
"Liu",
"Chen",
"Yang",
"Huang",
"Zhao",
"Wu",
"Zhou",
"Juarez","Spence","Mcpherson","Randolph","Villa","Bauer","Baldwin","Velazquez","Parrish","Mitchell","Pruitt","Tucker","Rosales","Sexton","Knox","Proctor","Grant","Villegas","Hopkins","Hale","Mcgee","Levine","Neal","Humphrey","Dominguez","Sharp","Rubio","Washington","Woods","Dalton","Davenport","Sullivan","White","Lucero","Rivas","Oconnor","Larson","Brooks","Braun","Gallagher","Stanley","Robertson","Hart","Yang","Key","Bonilla","Booker","Thomas","Escobar","Pena","Waters","Compton","Serrano","Salazar","Garner","Rocha","Abbott","Moses","Hays","Wyatt","Bolton","Bright","Meyers","Gonzalez","Acevedo","Manning","Rogers","Richardson","Bowen","Mccarthy","Robbins","Santos","Cherry","Fisher","Vang","Murray","Sweeney","Finley","Wagner","Evans","Horton","Owens","Sherman","Phelps","Franco","Gregory","Knapp","Maynard","Avery","Kelley","Vargas","Perkins","Mcdowell","Waller","Figueroa","Whitaker","Griffin","Mcbride","Shaw","Quinn","Banks","Kline","Reese","Copeland","Arnold","Romero","Walsh","Howe","Doyle","Glass","Prince","Ward","Wiggins","Curtis","Benton","Frazier","Mccann","Webb","Navarro","Conley","Holt","Cummings","Cardenas","Hodges","Duarte","Mayer","Wall","Watkins","Cross","Bradford","Sanders","Ballard","Edwards","Henson","Cooke","Alvarez","Rich","Morgan","Flowers","Roman","Green","Moore","Allison","Holmes","Miller","Austin","Christian","Crosby","Avila","Reynolds","Horn","Wolfe","Kemp","Ball","James","Mcfarland","Gibson","Nolan","Hickman","Jacobson","Mcknight","Douglas","Frederick","Zhang","Frey","Ellis","Richards","Ponce","Carter","Glenn","Torres","Morrow","Skinner","Hurley","Shelton","Joseph","Lam","Castillo","Kaiser","Cooper","Pratt","Hatfield","Cervantes","Bautista","Steele","Winters","Crane","Parks","Garza","Robinson","Schaefer","Carey","Lamb","Mcconnell","Landry","Malone","Pearson","Stephens","Bryan","Raymond"]

const max_names = Math.min(first_names.length, last_names.length)

var i = 0

function reset_names()
{
  first_names = shuffle(first_names)
  last_names = shuffle(last_names)
}

reset_names()

function get_name()
{
  if (i >= max_names)
  {
    shuffle_names()
    i = 0
  }
  const first_name = first_names[i]
  const last_name = last_names[i]
  i++

  return first_name + ' ' + last_name
}

const name = document.getElementById('name')
const name_btn = document.getElementById('generate-name')

function generate_name()
{
  const new_name = get_name()
  name.textContent = new_name
}

name_btn.addEventListener('click', function (e) {
  generate_name()
})

generate_name()
