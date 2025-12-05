export interface PlatformStep {
  platform: string
  steps: string[]
}

export interface Guide {
  id: string
  iconName: string
  title: string
  shortTitle: string
  priority: number
  color: 'primary' | 'coral'
  why: string
  keyPoint: string
  platforms: PlatformStep[]
  tips: string[]
}

export const guides: Guide[] = [
  {
    id: 'skarmtid',
    iconName: 'Moon',
    title: 'Begränsa skärmtid nattetid (skydda sömnen)',
    shortTitle: 'Skärmtid nattetid',
    priority: 1,
    color: 'primary',
    why: 'God sömn är grundläggande för barns hälsa och humör. Skärmar på kvällen kan störa insomning – både genom stimulerande innehåll och blått ljus. Studier visar att längre skärmtid leder till sämre sömn och fler depressiva symtom hos barn och tonåringar. Barn 8–13 år behöver ungefär 9–11 timmars sömn per natt för att må bra.',
    keyPoint: 'Att stänga av skärmen minst 30–60 minuter före läggdags hjälper barnet varva ned. Forskning pekar på att bara genom att lägga bort mobilen i tid kan ungdomar sova ~20 minuter längre per natt.',
    platforms: [
      {
        platform: 'iOS (iPhone/iPad)',
        steps: [
          'Gå till Inställningar > Skärmtid > Nedtidsinställningar',
          'Ställ in en nedtid (t.ex. 21:00–07:00) då appar är blockerade',
          'Under Begränsningar för innehåll/integritet kan du också begränsa användning av vissa appar kvällstid',
          'Aktivera "Kommunikationsbegränsningar" för att förhindra att barnet kommunicerar med andra nattetid',
          'Se till att barnets konto är ett barnkonto kopplat till familjen'
        ]
      },
      {
        platform: 'Android',
        steps: [
          'Installera appen Google Family Link om barnet har ett Google-konto',
          'Öppna Family Link, välj barnets profil, gå till Skärmtid',
          'Sätt scheman för nattlig avstängning (läggdags)',
          'Aktivera "Bedtime mode" i mobilens inställningar (under Digitalt välbefinnande) för att dämpa skärmen och tysta notiser under nattimmarna'
        ]
      },
      {
        platform: 'YouTube',
        steps: [
          'Slå på "Påminn mig när det är läggdags" i YouTube-appen (under inställningar för "Titta påminnelser")',
          'Ännu bättre: låt barnet använda YouTube Kids med en inställd tidsgräns',
          'YouTube Kids har integrerad föräldrakontroll där du kan begränsa tittandet per dag'
        ]
      },
      {
        platform: 'TikTok',
        steps: [
          'Använd Familjeparning (Family Pairing): Koppla ditt konto till barnets under Inställningar > Sekretess > Föräldrakontroll',
          'Ställa in daglig skärmtidsgräns (t.ex. 30 min)',
          'Schemalägga pauser då appen inte kan användas (t.ex. vid läggdags)',
          'OBS: TikTok har automatiskt 60 min dagsgräns för under 18 år och inga push-notiser efter kl 21 för under 15 år'
        ]
      },
      {
        platform: 'Instagram',
        steps: [
          'Gå till Inställningar > För familjer > Familjecenter',
          'Ställ in dagliga tidsgränser och påminnelser om att stänga av appen vid en viss tid',
          'Lågteknologisk lösning: ta bort mobilen från sovrummet på natten (låt den laddas i ditt rum)'
        ]
      },
      {
        platform: 'Snapchat',
        steps: [
          'Snapchat saknar särskild skärmtidsfunktion',
          'Använd mobilens egna begränsningar (iOS Skärmtid eller Android Family Link) för att låsa Snapchat på kvällen',
          'I Snapchats Family Center kan du se om barnet använder Snapchat sent',
          'Bäst är att införa en regel om att ingen skärmanvändning sker efter en viss tid, och samla in enheter vid läggdags'
        ]
      }
    ],
    tips: [
      'Upprätthåll regelbundna sömnrutiner',
      'Stäng av skärmen minst 30–60 minuter före läggdags',
      'Samla in alla enheter vid läggdags och låt dem laddas utanför sovrummet',
      'En utvilad ungdom står emot stress och mår bättre psykiskt'
    ]
  },
  {
    id: 'algoritmer',
    iconName: 'Smartphone',
    title: 'Begränsa algoritmiskt innehåll (TikTok/Reels/Shorts)',
    shortTitle: 'Algoritmiskt innehåll',
    priority: 2,
    color: 'coral',
    why: 'Algoritmiska flöden – såsom TikToks For You, Instagram Reels och YouTube Shorts – är designade för att fånga uppmärksamheten. De matar barnen med oändliga klipp anpassade efter beteende, vilket kan bli mycket beroendeframkallande. Innehållet kan också vara olämpligt eller skevt: algoritmerna bryr sig mer om engagemang än åldersanpassning.',
    keyPoint: 'Myndigheter rekommenderar att för 6–12-åringar undvika appar som styrs av algoritmer (t.ex. TikTok, YouTube) eftersom de kan exponera barn för reklam, falsk information, våld eller osunda ideal.',
    platforms: [
      {
        platform: 'Välj rätt appar',
        steps: [
          'Styr barnets innehåll genom att välja åldersanpassade appar/spel utan algoritmstyrning eller reklam',
          'Exempel: SVT Barn-play (redaktionellt innehåll) istället för YouTube',
          'Använd YouTube Kids istället för vanliga YouTube – Kids-versionen visar endast förhandsgranskat barninnehåll'
        ]
      },
      {
        platform: 'YouTube',
        steps: [
          'Slå på "Begränsat läge" (Restricted Mode) under inställningar',
          'Låt barnet titta via "Prenumerationer" (kanaler ni godkänt) istället för att scrolla på Startsidan',
          'Inaktivera sökhistoriken och videohistoriken på barnets konto – då har algoritmen mindre data att anpassa utifrån',
          'I YouTube Kids kan du stänga av sökfunktionen helt och själv godkänna kanaler eller videor'
        ]
      },
      {
        platform: 'TikTok',
        steps: [
          'Aktivera "Begränsat läge" under Inställningar > Innehållspreferenser',
          'Via Familjeparning: Lägg till filterord under Innehållsinställningar – videor med dessa ord visas då inte',
          'Överväg att aktivera STEM-flödet som främjar vetenskap/utbildning i barnets feed',
          'Du kan helt stänga av möjligheten för barnet att söka efter videor på TikTok',
          'OBS: TikTok har 13-årsgräns – överväg om det är något ditt barn alls ska scrolla i vid 10–12 års ålder'
        ]
      },
      {
        platform: 'Instagram',
        steps: [
          'I Family Center: begränsa "känsligt innehåll" i barnets flöde – ställ in det på lägsta nivån',
          'Prata med barnet om att inte följa konton som sprider negativt innehåll',
          'Visa hur flödet påverkas av vad man interagerar med – om man bara följer vänner och positiva sidor får man ett snällare flöde'
        ]
      },
      {
        platform: 'Snapchat',
        steps: [
          'I Snapchat Family Center kan du "Begränsa känsligt innehåll" på barnets konto, vilket döljer visst innehåll i Discover',
          'Uppmuntra barnet att mest använda Snapchat för att chatta med kompisar de känner, istället för att konsumera innehåll i Discover'
        ]
      }
    ],
    tips: [
      'Kvalitet före kvantitet – hjälp ditt barn att få en balanserad mediediet',
      'Ett par förvalda YouTube-kanaler eller en Netflix-profil med barnläge ger mer kontrollerat nöje',
      'Prata om innehållet ni ser: om barnet stöter på något konstigt, var öppen och diskutera det',
      'Följ åldersgränserna: appar med 13+ är inte anpassade för yngre barn'
    ]
  },
  {
    id: 'meddelanden',
    iconName: 'MessageSquareOff',
    title: 'Blockera meddelanden från okända personer',
    shortTitle: 'Okända kontakter',
    priority: 3,
    color: 'primary',
    why: 'Att skydda barn från kontakt med främlingar online är avgörande. Okända som tar kontakt kan innebära risk för grooming, trakasserier eller bedrägerier. 1 av 4 barn i Sverige har utsatts för groomingförsök online. Barn mår bättre när de endast interagerar med folk de känner och litar på online.',
    keyPoint: 'Genom att begränsa vem som kan skriva till ditt barn minskar du risken att hen exponeras för obehagliga eller farliga situationer.',
    platforms: [
      {
        platform: 'iOS (iPhone/iPad)',
        steps: [
          'Under Inställningar > Skärmtid > Begränsningar för Kommunikation: välj att tillåta samtal/meddelanden endast med kontakter under skärmtid',
          'Välj att inte tillåta några under "Nedtid"',
          'Under Inställningar > Meddelanden > Skicka & ta emot: kolla att bara familjens Apple-ID/e-post används, inte telefonnumret'
        ]
      },
      {
        platform: 'Android',
        steps: [
          'Använd respektive apps inställningar',
          'Lär barnet att inte svara på främmande nummer eller förfrågningar',
          'I Google Family Link kan du övervaka vilka appar barnet använder för kommunikation och blockera appar som inte känns trygga',
          'I Google Messages (SMS) kan du aktivera skräppostfilter som sorterar bort okända avsändare'
        ]
      },
      {
        platform: 'TikTok',
        steps: [
          'Alla under 16 år får per automatik ett privat konto – bara godkända följare kan se och interagera med ditt barns innehåll',
          'TikTok har stängt av direktmeddelanden helt för konton under 16 år',
          'Dubbelkolla att ditt barn inte har registrerat sig med fel födelsedatum',
          'Under Sekretess: se till att endast vänner kan tagga eller nämna ditt barn i kommentarer',
          'TikTok tillåter bara livestreaming från 16 år och upp'
        ]
      },
      {
        platform: 'Instagram',
        steps: [
          'Se till att barnet har ett privat konto (Inställningar > Sekretess)',
          'Under Familjecenter: Begränsa meddelandeförfrågningar så att endast personer som ditt barn följer får skicka DM',
          'I Family Center > Personer som kan interagera: justera så att ingen utanför vännerna kan tagga eller nämna barnet',
          'Se över om kommentarer från okända ska blockeras eller filtreras',
          'Gå igenom följarlistan ihop och rensa bort eventuella obekanta'
        ]
      },
      {
        platform: 'Snapchat',
        steps: [
          'Standard är att bara de man lagt till som vän kan skicka snaps eller chatta',
          'I Inställningar > Kontoinställningar: sätt "Vem kan kontakta mig" till Endast vänner',
          'Sätt "Vem kan se mig i Quick Add" till Av',
          'När du kopplat ihop era konton i Snapchats Family Center kan du se barnets vänner-lista och vilka de chattat med senaste veckan',
          'Stäng av möjligheten för Snapchat AI-boten att interagera med barnet'
        ]
      }
    ],
    tips: [
      'Bara vänner ska kunna kontakta ditt barn online',
      'Gå igenom vänlistor/följare regelbundet tillsammans',
      'Prata om riskerna: att aldrig ge ut personlig info, bilder eller möta upp en nätkontakt utan föräldrars vetskap',
      'Om någon okänd kontaktar eller om barnet får olämpliga förfrågningar – uppmuntra att berätta direkt för er',
      'Den öppna dialogen är avgörande – visa att ni står på deras sida utan att skuldbelägga',
      'Vid akut fara eller pågående brott – ring alltid 112'
    ]
  },
  {
    id: 'plats',
    iconName: 'MapPinOff',
    title: 'Stäng av platstjänster och skydda persondata',
    shortTitle: 'Platstjänster',
    priority: 4,
    color: 'coral',
    why: 'Platsdelning och onödig datainsamling kan hota ditt barns integritet. Om appar ständigt spårar var barnet är kan det läcka information om hemadress, skola eller fritidsaktiviteter. I värsta fall kan någon illasinnad få reda på var barnet brukar vara.',
    keyPoint: 'Barn har rätt till sin digitala integritet, och som förälder bör man minimera exponeringen.',
    platforms: [
      {
        platform: 'iOS (iPhone/iPad)',
        steps: [
          'Öppna Inställningar > Integritet & Säkerhet > Platstjänster',
          'Inaktivera platsåtkomst för sociala medier-appar (TikTok, Instagram, Snapchat)',
          'Under Integritet > Spårning: se till att "Tillåt appar be om spårning" är avstängt',
          'I Skärmtid > Begränsningar för innehåll och integritet > Platstjänster kan du låsa inställningen så barnet inte själv kan slå på det igen'
        ]
      },
      {
        platform: 'Android',
        steps: [
          'Gå till Inställningar > Plats > Appbehörigheter för plats: neka sociala appar',
          'I Android 12+ kan du välja "Ungefärlig plats" istället för exakt',
          'I Google-kontots inställningar: stäng av Platsdelning och Platslogg (Location History)',
          'Se till att barnets Google Maps inte delar realtidsplats med någon',
          'Under Google Play > Inställningar: kolla så att annonspersonaliserings-ID är avstängt'
        ]
      },
      {
        platform: 'TikTok',
        steps: [
          'Neka platsåtkomst när appen frågar',
          'Om det redan är på: gå till telefonens app-behörigheter och stäng av',
          'Undvik att ditt barn anger sin ort i bio eller använder geo-taggar i sina inlägg',
          'Under "Personalisering och data"-inställningar: stäng av "Anpassade annonser"'
        ]
      },
      {
        platform: 'Instagram',
        steps: [
          'Ingen platsbehörighet – Instagrams filter och inlägg funkar utan GPS',
          'Lär barnet att inte lägga till plats-taggar när de postar bilder',
          'Med privat konto syns inte barnets inlägg för allmänheten'
        ]
      },
      {
        platform: 'Snapchat',
        steps: [
          'KRITISKT: Gå in i Snapkartan (nyp ihop på kameraskärmen) och tryck på kugghjulet',
          'Slå på "Spökläge" (Ghost Mode) så att ingen ser barnets plats',
          'I Family Center kan du stänga av platsdelning för barnets konto helt',
          'Kontrollera under telefonens Kamera-inställningar att platsinfo för foton inte sparas'
        ]
      }
    ],
    tips: [
      'Minimera spårningen – barnet ska kunna använda enheten utan att sända ut massa information',
      'Hjälp barnet att välja ett anonymt användarnamn (inte "förnamn_efternamn_årtal")',
      'Inga adresser, skolnamn eller telefonnummer bör stå i bio/profil',
      'Begränsa app-behörigheter (mikrofon, kamera, kontakter) – tillåt bara om absolut nödvändigt',
      'Lär ut att man inte behöver fylla i riktiga uppgifter överallt (gäller förstås inte tjänster där korrekta uppgifter krävs för säkerhet och ansvar, som skola, vård, bank och officiella myndigheter)'
    ]
  },
  {
    id: 'innehall',
    iconName: 'ShieldAlert',
    title: 'Filtrera och blockera vuxeninnehåll',
    shortTitle: 'Vuxeninnehåll',
    priority: 5,
    color: 'primary',
    why: 'Internet kryllar av innehåll som inte är lämpligt för barn – pornografi, grovt våld, drogglorifiering, spel om pengar, hat osv. Att utsättas för detta för tidigt kan skada ett barns psykosociala utveckling. Nätporr kan ge en skev bild av relationer och sexualitet.',
    keyPoint: 'Tekniska filter är ett stöd, men inget substitut för att prata med ditt barn. Uppmana barnet att alltid komma till er om hen ser något obehagligt.',
    platforms: [
      {
        platform: 'iOS (iPhone/iPad)',
        steps: [
          'Under Inställningar > Skärmtid > Begränsningar för innehåll och integritet > Innehållsbegränsningar:',
          'Webbinnehåll: Välj "Begränsa vuxet innehåll" – blockerar kända porrsajter och vulgära sidor',
          'Filmer & serier: Sätt max tillåten nivå (t.ex. "Barntillåten" eller en viss åldersgräns)',
          'Appar: Sätt att appar över t.ex. 12+ år inte kan installeras eller användas',
          'Siri: Stäng av möjligheten att Siri webb-söker',
          'Du kan även blockera musik med explicit text och böcker med vuxenmaterial'
        ]
      },
      {
        platform: 'Android',
        steps: [
          'I Family Link: Aktivera SafeSearch så att Googles sökresultat filtrerar bort pornografi och grovt innehåll (standard på för under 13)',
          'Begränsa vilka webbplatser barnet får besöka i Chrome',
          'I Google Play Store > Inställningar > Familj > Föräldrakontroller: ställ in åldersgränser för appar, spel, filmer',
          'Via Family Link kan du välja att endast tillåta YouTube Kids och blockera vanliga YouTube-appen'
        ]
      },
      {
        platform: 'YouTube',
        steps: [
          'Sätt på Begränsat läge (Restricted Mode) på alla enheter barnet använder',
          'YouTube Kids är bästa valet för under 13 år – innehållet är automatiskt begränsat till barnvänligt',
          'I YouTube Kids kan du välja innehållsnivå och blockera enskilda videor/kanaler'
        ]
      },
      {
        platform: 'TikTok',
        steps: [
          'Slå på Begränsat läge under Innehållsinställningar eller via Family Pairing',
          'Via Family Pairing kan du blockera vissa ord (t.ex. "sex", "drugs") så videor med de taggarna inte visas',
          'OBS: TikToks filter är inte felfritt, men tar bort mycket olämpligt innehåll'
        ]
      },
      {
        platform: 'Instagram',
        steps: [
          'Använd Family Center för att ställa in "Känsligt innehåll: Tillåt minst"',
          'Eller i Inställningar > Konto > Känsligt innehållskontroll',
          'Instagram har en funktion som känner igen om någon skickar en nakenbild i DM och varnar barnet ("Meddelandeskydd")'
        ]
      },
      {
        platform: 'Snapchat',
        steps: [
          'I Family Center under Inställningar: kryssa i "Begränsa känsligt innehåll" för Discover',
          'Överväg att inaktivera My AI helt (går via Family Center)',
          'Se till att bara vänner kan skicka bilder – en främling ska aldrig kunna skicka opassande snaps'
        ]
      }
    ],
    tips: [
      'Berätta varför ni blockerar viss typ av innehåll',
      'Uppmana barnet att alltid komma till er om hen ser något obehagligt',
      'Reagera lugnt och sansat om det händer – barnet ska behålla förtroendet',
      'Ni vill inte att de ska söka upp farligt innehåll, men om de snubblar över det ska de veta att det inte är förbjudet att prata om det hemma'
    ]
  },
  {
    id: 'appar',
    iconName: 'AppWindow',
    title: 'Kräva förälders godkännande för nya appar',
    shortTitle: 'Appgodkännande',
    priority: 6,
    color: 'coral',
    why: 'Barn är nyfikna och kan få höra av kompisar om "coola nya appar" – men inte alla appar är lämpliga. Genom att ha stopp för installationer utan tillstånd ser du till att inga farliga eller dyra appar hamnar på enheten.',
    keyPoint: 'Att du godkänner appar innan installation hjälper dig också hålla koll på barnets digitala liv – du vet vilka tjänster de använder.',
    platforms: [
      {
        platform: 'iOS (App Store)',
        steps: [
          'Gå till Inställningar > [Ditt namn] > Familjedelning',
          'Om du inte redan lagt till ditt barn, välj Lägg till familjemedlem och skapa ett barnkonto',
          'Tryck på barnets namn under Familjedelning och aktivera "Be om köp" (Ask to Buy)',
          'Nu får du en notis varje gång ditt barn försöker ladda ner en ny app där du kan godkänna eller neka',
          'Du kan också begränsa appinstallationer via Skärmtid > Innehålls- och integritetsbegränsningar > iTunes & App Store-köp'
        ]
      },
      {
        platform: 'Android (Google Play)',
        steps: [
          'Öppna Family Link-appen på din mobil och välj barnets konto',
          'Under Kontroller > Google Play: sätt att alla appar och spel (även gratis) kräver föräldragodkännande vid nedladdning',
          'När barnet vill installera något får du en notis i Family Link och kan godkänna eller neka',
          'Ställ även in åldersfilter i Play Store',
          'Förhindra att barnet installerar okända appar: Inställningar > Säkerhet > okända källor = av'
        ]
      }
    ],
    tips: [
      'Barnet kan bli frustrerat över att behöva be om lov – förklara att det handlar om säkerhet, inte misstroende',
      'Om "alla andra" använder en viss app: lyssna på barnets argument, undersök appen (läs på om risker), fatta ett informerat beslut',
      'Ibland kan du säga ja, men med villkor (t.ex. privat konto, eller att du också skaffar ett konto)',
      'Detta lär ditt barn digitalt omdöme: att tänka efter före man hoppar på en ny trend'
    ]
  },
  {
    id: 'kop',
    iconName: 'CreditCard',
    title: 'Inaktivera köp inuti appar (undvik oönskade köp)',
    shortTitle: 'Köp i appar',
    priority: 7,
    color: 'primary',
    why: 'In-app-köp kan leda till oavsiktliga tusenlappar spenderade av barn, eller att barn utvecklar ett osunt förhållande till pengar. Yngre barn har svårt att förstå verkliga kostnader. Loot-lådor och liknande kan trigga beroendebeteenden.',
    keyPoint: 'Förhindra impulsköp. Många föräldrar har blivit överraskade av räkningar på tusentals kronor för att barnet köpt saker i ett spel.',
    platforms: [
      {
        platform: 'iOS (App Store/iTunes)',
        steps: [
          'Gå till Inställningar > Skärmtid > Innehålls- och integritetsbegränsningar > iTunes & App Store-köp',
          'Sätt "Köp inuti app" till Tillåt inte – detta hindrar alla in-app purchases helt',
          'Alternativt: välj Alltid kräva lösenord för köp',
          'Om "Be om köp" är aktiverat via Familjedelning gäller det även inuti appar',
          'Stäng av "Kräv lösenord: 15 minuter" – välj att lösenord behövs direkt vid varje köp'
        ]
      },
      {
        platform: 'Android (Google Play)',
        steps: [
          'Öppna Play Store > Profilmenyn > Inställningar > Autentisering',
          'Aktivera "Kräv autentisering för köp" för alla köp',
          'I Family Link under Kontroller > Google Play: kräv godkännande för köp, inte bara nedladdningar',
          'Ge inte barnet tillgång till ditt betalkort i mobilen',
          'Om barnet har ett eget ungdomskort, fundera på att inte koppla det till Google Play eller Apple ID'
        ]
      },
      {
        platform: 'Spel och appar',
        steps: [
          'Varje gång ditt barn vill köpa något i ett spel – prata om det',
          'Gör köp gemensamt snarare än att barnet klickar själv',
          'För spel med upprepade köp (Roblox, Fortnite m.fl.): bestäm en månadspengsbudget för köp',
          'I Roblox kan man via föräldrakontroll sätta en PIN för inställningar'
        ]
      },
      {
        platform: 'TikTok/Instagram/Snapchat',
        steps: [
          'Koppla inte något betalkort till barnets konton på sociala medier',
          'TikTok säljer "mynt" som kan bli presenter till kreatörer – undvik att aktivera detta',
          'Om barnet vill köpa något, gör det manuellt vid något enstaka tillfälle via ditt konto',
          'För barn och unga finns det egentligen ingen anledning att de ska handla något i sociala appar'
        ]
      }
    ],
    tips: [
      'Sätt tydliga ramar – digitala varor kostar riktiga pengar',
      'Om ett misstag sker: många appbutiker återbetalar om man kontaktar dem snabbt',
      'Ni skyddar också barnet från att utveckla ett "tappa kontrollen"-beteende kring köp',
      'I förlängningen lär sig barnet sunda vanor kring digital konsumtion'
    ]
  }
]
