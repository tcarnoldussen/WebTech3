INSERT INTO Manufacturer VALUES

(130114210001,	"Nokia",	"contact@nokia.com",	"+358 10 44 88 000",	"Karaportti 3 02610 Espoo, Finland"					),
(130114210002,	"Samsung",	"contact@samsung.com",	"+31 088-9090100",	"129 Samsung-ro, Yeongtong-gu 443-742. Suwon South Korea"		),
(130114210003,	"Asus",		"contact@asus.com",	"+31-(0)-591-570290",	"ASUS Computer International 800 Corporate Way Fremont, CA 94539"	),
(130114210004,	"Acer",		"contact@acer.com",	"073 645 9645",		"Europalaan 89, 5232 BC s-Hertogenbosch"				),
(130114210005,	"Medion",	"contact@medion.com",	"0900 2352534",		"John F. Kennedylaan 16A, 5981 XC Panningen"				),
(130114210006,	"LG",		"contact@lg.com",	"0900 543 5454",	"Yeongdeungpo District, Seoel, Zuid-Korea"				),
(130114210007,	"Sony",		"contact@sony.com",	"+31 900 8998318", 	"Minato, Tokyo, Tokio, Japan"						),
(130114210008,	"Apple",	"contact@apple.com",	"0800 0200 589",	"Cupertino, Californië, Verenigde Staten"				)
;

INSERT INTO Users VALUES
--TIJD VOOR SEXISME: GESLACHT
--u s e r id	firstname	lastname		address (SPELLING)		e-mail					password
(2119051800001,	"John",		"de Groot",		"Veemarktstraat 16 Rotterdam",	"jdegroot86@hotmail.com",		"John1986!"	),
(2119051800002,	"Alex",		"Schutjens",		"Leidseweg 73 Utrecht",		"lexiepex99@outlook.nl",		"1234QWer"	),
(2119051800003,	"Jan Metde",	"Korteachternaam",	"Janstraat 93 Utrecht",		"janlul1990@lullos.com",		"JmdKA101"	),
(2119051800004,	"Julia",	"Franssen",		"Schapenmarkt 27 Lutjebroek",	"juulfranssen@live.nl",			"Ojo@162@"	),
(2119051800005,	"Maria",	"de Vries",		"Schoepenweg 25 Lelystad",	"Maria88@devries.nl",			"Ewe1s77E"	),
(2119051800006,	"Fritz",	"Hinter",		"Statensingel 46 Rotterdam",	"fritshinter12@gmail.com",		"eJoq39%eri0"	),
(2119051800007,	"Noa",		"van der Merwe",	"Singel 138 Dordrecht",		"n.vandermerwe@hotmail.com",		"vannM##9"	),
(2119051800008,	"Z.G.",		"Munters",		"Hoofdweg 10 Lijnden",		"Zgmunters@live.nl",			"MunZG1091"	),
(2119051800009,	"John",		"Franssen",		"Springweg 178",		"mfranssen@live.nl",			"BisJ63%"	),
(2119051800010,	"Maarten",	"Achterberg",		"Kerkstraat 16 Amsterdam",	"m.th.h.achterberg@hotmail.com",	"Hohq69%"	)
;


INSERT INTO Sellers VALUES
--u s e r id
(2119051800010),
(2119051800007),
(2119051800004),
(2119051800001),
(2119051800009)
;

INSERT INTO Products VALUES
--MOET ER NIET EEN REFERENTIE NAAR CATEGORIE? MISSCHIEN DESCRIPTION INLADEN VAN TEXTBESTAND? moet max_sell ook automatisch worden aangepast?
--p r o d id	name					price		amount_available	amount_total	max_sell	Description (op volgende regel)		image (MEERDERE?)			manufacture_id

(1618150400001,	"Samsung Galaxy S7 32GB Zwart",		"449,00",	13,			15,		3,		
	"De Samsung Galaxy S7 komt met een 5.1 inch scherm. De Samsung Galaxy S7 beschikt over een superieure camera waarmee je perfecte foto's kan maken, zelfs bij weinig licht! De Samsung Galaxy S7 heeft een Dual Pixel voor een snellere autofocus, zodat je scherpe en heldere foto’s kunt nemen. De grotere pixels (1.4um) en speciale lens (F1.7) zorgen er voor dat je (zelfs) bij weinig licht heldere foto’s kunt maken.",
	"/1618150400001/p1",			130114210002),

(1618150400002,	"Samsung Alaxy A3 (2016) zwart",	"199,00",	3,			3,		3,							
	"De Samsung Galaxy A3 2016 is een smartphone die stijl en gebruiksgemak samenbrengt. Met een 4.7 inch HD scherm ziet alles er prachtig uit, en worden afbeeldingen rijker. Camera: Deze nieuwe versie van de Samsung Galaxy A3 biedt een scherpe, kwalitatieve 13 megapixel camera aan de achterkant, om foto's met hoge kwaliteit te nemen. Door de 5 megapixel camera aan de voorkant zijn ook je selfies in perfect kwaliteit.",
	"/1618150400002/p1",			130114210002),

(1618150400003,	"Asus Zenfone Go - 16 GB - Zwart",	"149,00",	7,			9,		3,							
	"De Asus Zenfone Go onderscheidt zich ten opzichte van andere smartphones door de camera. Stel je foto’s scherp in slechts 0,03 seconden, maak zelfs mooie foto’s met weinig licht en leg jouw momenten levensecht vast door de 13 Megapixel camera met de nieuwste Sony IMX298-sensor.
	Het heldere en grote 5 inch scherm zorgt ervoor dat je niets hoeft te missen op social media en je foto’s en video’s met super kwaliteit kunt bekijken.",
	"/1618150400003/p1",			130114210003),

(1618150400004,	"Asus Zenfone 3 - 32 GB - Wit",		"349,00",	1,			1,		1,							
	"De uitmuntende camera en het flexibele en mooie ontwerp van de Asus Zenfone 3 maakt de Zenfone 3 een buitengewone smartphone voor een minder gewoon leven!",
	"/1618150400004/p1",			130114210003),

(1618150400005,	"Nokia 105 - Zwart",			"39,00",	4,			6,		3,							
	"Ben je op zoek naar gewone telefoon om mee te kunnen bellen en verder geen poespas? Deze Nokia 105 doet dan precies waar jij een telefoon voor wilt gebruiken.",
	"/1618150400005/p1",			130114210001),

(1618150400006,	"Nokia 130 Dual SIM 1.8 inch 67.9g Zwart",	"59,00",	7,			7,		3,							
	"De Nokia 130 is een simpele en goedkope mobiele telefoon zonder fratsen. Zoek je een voordelig mobieltje waarmee je vooral wil bellen en sms'en, dan zit je goed bij deze Nokia. De 130 biedt het gemak van een mobiele telefoon voor een absoluut bodemprijsje.",
	"/1618150400006/p1",			130114210001),

(1618150400007,	"Acer One 10 S1003-14XA - Laptop Tablet",	"229,00",	6,			8,		2,							
	"Of je nu werkt of video's kijkt met vrienden, de Acer One 10 heeft er een modus voor. Je kunt kiezen uit vier verschillende modi - de notebookmodus voor typen, de padmodus touchbediening en de tent- en weergavemodus voor entertainment.",
	"/1618150400007/p1",			130114210004),

(1618150400008,	"Samsung Evo+ 64 GB Micro SD class 10",	"29,00",	30,			38,		6,							
	"Samsungs EVO Plus Micro-SD kaart heeft meer geheugenruimte en is geschikt voor een groter aantal verschillende apparaten, dus kan je je richten op het leven, niet op de technologie. Deze kaart is compatibel met UHS-I Speed Class 1 (U1) en Class 10 - perfect voor opnemen en weergeven van foto's en Full HD video. Dankzij de hoge snelheid - tot 80 MB/s lezen en 20 MB/s schrijven - worden foto's en video's sneller geladen en bestanden sneller gekopieerd.",
	"/1618150400008/p1",			130114210002),

(1618150400009,	"Sony PlayStation 4 Wireless Dualshock 4 V2 Controller",	"59,00",	8,			9,		4,							
	"De DualShock 4 controller beschikt over nieuwe verbeteringen voor de meest meeslepende game-ervaringen, inclusief een supergevoelige six-axis-sensor en een touchpad bovenop de controller dat een compleet nieuwe manier van gamen biedt. Met de nieuwe SHARE-toets kun je video's streamen en delen met slechts een druk op de knop.",
	"/1618150400009/p1",			130114210007),

(1618150400010,	"LG 32LH530V",				"299,00",	4,			4,		2,							
	"De LG 32LH530V is een prachtige tv van 32 inch (81 cm) groot. Deze Full HD heeft een beeldverversing snelheid van 60 hertz waardoor het kijken van een sportwedstrijd of actie film lekker vloeiend gaat.",
	"/1618150400010/p1",			130114210006),

(1618150400011,	"Sony PlayStation 4 Console - 500GB",	"359,00",	1,			1,		1,							
	"Het PlayStation®4-systeem opent de deur naar een ongelooflijke reis door meeslepende nieuwe gamewerelden en een sterk verbonden game-community. PS4 zet gamers op de eerste plaats met een verbazingwekkende lanceringsline-up en meer dan 180 games in ontwikkeling. Speel fantastische eersteklas kaskrakers en vernieuwende indiehits op PS4. Door ontwikkelaars, voor gamers.",
	"/1618150400011/p1",			130114210007),

(1618150400012,	"Samsung Evo 32 GB Micro SD class 10",	"19,00",		35,			40,		7,							
	"Leg je waardevolle momenten vast. Deze Ultra High Speed geheugenkaart valt in de categorie UHS-1, en slaat foto's en video's dus vier keer zo snel op als een doorsnee SD-kaart.",
	"/1618150400012/p1",			130114210002),

(1618150400013,	"LG SWH1",				"99,00",		2,			2,		2,							
	"De LG SHW1 ziet er prachtig uit en door het mooie design zal deze uitstekend bij je tv staan. En wat is er fijner dan een lekker vol geluid dat uit een mooie speaker komt? Het is mogelijk om de bass harder en zachter in te stellen. Zo krijg je het gevoel of je in een bioscoop zit!",
	"/1618150400013/p1",			130114210006),

(1618150400014,	"Asus R556DG-DM151T - Laptop",		"429,00",		5,			6,		2,							
	"De Asus R556DG-laptop is voorzien van een snelle AMD A10 processor, een AMD Radeon R5 M330 videokaart en een harde schijf van 1000 GB. Het maakt deze laptop ook interessant voor de hobbymatige foto- en videobewerker. Het 15,6 formaat maakt deze laptop nog steeds geschikt voor mobiel gebruik. Daarnaast beschikt deze laptop over een mat Full HD beeldscherm, voor een scherpe weergave van foto's en video's. Omgevingslicht is niet van invloed op de zichtbaarheid van het scherm, zodat je deze laptop overal kunt gebruiken.",
	"/1618150400014/p1",			130114210003),
	
(1618150400015,	"Acer G246HLFbid - Gaming Monitor",	"159,00",	4,			6,		2,							
	"De Acer G246HLFbid gaming monitor heeft een 24 inch Full HD beeldscherm met een reactietijd van slechts 1 ms, daarnaast heeft de monitor de mogelijkheid om een desktop, laptop of console aan te sluiten via de VGA-, DVI- en HDMI-poorten. De monitor beschikt over een X-vormige poot met rode accenten en een slank profie. De Acer G246HLFbid biedt gegarandeerd vele uren gameplezier.",
	"/1618150400015/p1",			130114210004),

(1618150400016,	"Nokia Lumia 630 - Zwart",		"199,00",	4,			9,		2,							
	"De Nokia Lumia 630 is de razendsnelle Windows Phone door de ingebouwde Quad Core-processor. Met het 4.5 inch scherm biedt de Lumia 630 je een superieure ervaring voor een betaalbare prijs.",
	"/1618150400016/p1",			130114210001),

(1618150400017,	"Horizon: Zero Dawn - PS4",		"59,00",	6,			7,		2,							
	"De aarde is niet meer van ons: In een tijdperk waarin Machines vrij rondlopen en de mensheid niet langer boven aan de voedselketen staat, gaat de jonge jager Aloy op zoek naar haar lotsbestemming. Een verre toekomst. Het volgende tijdperk van de mensheid: In een weelderige, post-apocalyptische wereld waar de natuur de ruines van een vergeten beschaving heeft overwoekerd, leven kleine groepjes mensen in primitieve jager-verzamelaarsstammen. De Machines zijn nu heer en meester in deze nieuwe wildernis. Niemand weet waar deze angstaanjagende mechanische wezens vandaan komen.",
	"/1618150400017/p1",			130114210007),

(1618150400018,	"Samsung 850 EVO - Interne SSD",	"99,00",	7,			7,		3,							
	"De Samsung 850 EVO 250 GB Solid State Drive is vliegensvlug en geluidloos.
	Samsungs flashgeheugen wordt vervaardigd volgens een innovatieve 3D V-NAND-architectuur, waarbij de cellen in 32 lagen boven elkaar liggen. Het resultaat: een hogere dichtheid en betere prestaties bij een kleiner formaat. Er wordt korte metten gemaakt met de dichtheidslimieten van de conventionele vlakke NAND-architectuur.",
	"/1618150400018/p1",			130114210002),

(1618150400019,	"Acer Draadloze Muis - Wit",		"59,00",	7,			8,		3,							
	"Muizen, toetsenborden en styluspennen van Acer bieden maximale precisie en optimaal comfort bij al uw werkzaamheden. De muizen en toetsenborden bieden draadloze functionaliteit en met de stylus kunt u moeiteloos op jouw smartphone of tablet schrijven.",
	"/1618150400019/p1",			130114210004),

(1618150400020,	"Apple Wired Keyboard MB110N/B - qwerty",	"59,00",	6,			8,		2,							
	"Het aluminium, witte Apple toetsenbord dat niet mag ontbreken bij je iMac. Het Apple Keyboard met numeriek toetsenblok is voorzien van een elegante, ultradunne behuizing van geanodiseerd aluminium met platte toetsen die direct de gewenste actie uitvoeren. Tevens biedt het met één toetsaanslag toegang tot diverse functies voor de Mac, zoals helderheid van het scherm, volume, cd's en dvd's uitwerpen, afspelen/pauzeren, vooruit- en terugspoelen, Mission Control en Launchpad.",
	"/1618150400020/p1",			130114210008),

(1618150400021,	"Samsung Galaxy Tab A (2016) - Zwart",	"239,00",	3,			3,		3,							
	"De Samsung Galaxy Tab A (2016) is de opvolger van de Tab 4. De schermverhouding is net iets anders, de camera's zijn iets beter en de software heeft een update gekregen.",
	"/1618150400021/p1",			130114210002),

(1618150400022,	"Apple EarPods - In-ear oordopjes - Wit",	"19,00",	17,			21,		3,							
	"Deze originele Apple oordopjes zijn speciaal ontworpen en vormgegeven door Apple voor een optimale pasvorm in het oor. Ze zijn gebasseerd op de geometrie van het oor. Hierdoor blijven ze heel goed in je oren zitten en zijn ze voor veel mensen een stuk comfortabeler. De speakers in de oordopjes zijn ontworden voor minimaal geluidsverlies en maximale geluidsuitvoer. De oordopjes geven een krachtig geluid met geweldige kwaliteit die je ook vind bij veel duurdere koptelefoons.",
	"/1618150400022/p1",			130114210008),

(1618150400023,	"Sony MDR-XB950BT - Draadloze eXtra Bass over-ear koptelefoon - Zwart",	"129,00",	11,			11,		2,							
	"Jouw hart gaat sneller kloppen van de stevige bastonen van de Sony MDR-XB950BT koptelefoon. Krachtige 40-mm neodymium drivers zorgen samen met gecontroleerde beatrespons en een Electro Bass Booster voor sensationele beats en een levensecht clubgeluid. Bij de Sony MDR-XB950BT staat de intense beleving van je muziek altijd voorop. Door de ingebouwde Bluetooth- en NFC technologie heb je nooit meer last van snoeren die in de weg zitten terwijl je danst op jouw favoriete nummers.",
	"/1618150400023/p1",			130114210007),

(1618150400024,	"Samsung UE32K4100",		"199,00",	5,			5,		2,							
	"De Samsung UE32K4100 is een strakke tv met HD beeldkwaliteit. Dankzij de Wide Colour Enhancer techniek heeft het beeld ongelofelijk veel detail en mooie kleuren. De tv heeft 2 HDMI aansluitingen. Hierdoor kun je makkelijk films, foto’s of muziek afspelen van andere apparaten zoals een laptop of harde schijf. De Samsung UE32K4100 heeft ingebouwde tuners waardoor je digitale televisie kan kijken zonder een extra kastje of afstandsbediening.",
	"/1618150400026/p1",			130114210002)
;