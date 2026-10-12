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
  estimatedTime: string
}

export const guides: Guide[] = [
  {
    id: 'skarmtid',
    iconName: 'Moon',
    title: 'Begränsa skärmtid nattetid (skydda sömnen)',
    shortTitle: 'Skärmtid nattetid',
    priority: 1,
    color: 'primary',
    estimatedTime: '5 min',
    why: 'God sömn är grundläggande för barns hälsa och humör. Skärmar på kvällen kan störa sömnen, både för att alla intryck gör det svårare att varva ned och för att det är lätt att fastna och somna senare. Enligt Folkhälsomyndigheten kan mycket skärmtid leda till kortare och sämre sömn och till nedstämdhet. Myndigheten anger att barn 6–12 år behöver ungefär 10–11 timmars sömn per natt och ungdomar 13–18 år ungefär 8–9 timmar.',
    keyPoint: 'Folkhälsomyndigheten rekommenderar att stänga av skärmar 30–60 minuter före sovdags. I en schweizisk studie (Perrault m.fl., Sleep 2019) fick ungdomar 12–19 år sluta med skärmar efter kl 21. De somnade då ungefär 20 minuter tidigare och sov ungefär 17 minuter längre per natt.',
    platforms: [
      {
        platform: 'iOS (iPhone/iPad)',
        steps: [
          'Öppna Inställningar > Familj och välj barnets namn (gäller iOS 27 och senare)',
          'Tryck på Skärmtidsschema och aktivera Schema. Lägg till ett schema för kvällar och nätter, till exempel 21:00–07:00',
          'Med Tidsbegränsningar kan du dessutom sätta en daglig gräns för till exempel spel och sociala medier',
          'Under Tillåtna kontakter kan du styra vem barnet kan kommunicera med under Skärmtid',
          'Barnet behöver ett eget Apple-konto som ingår i er Familjedelning',
          'Äldre iOS-version än iOS 27: inställningarna finns under Inställningar > Skärmtid, och schemat heter där Nedtid'
        ]
      },
      {
        platform: 'Android',
        steps: [
          'Installera appen Google Family Link om barnet har ett Google-konto',
          'Öppna Family Link, välj barnets profil och gå till Skärmtid',
          'Sätt scheman för nattlig avstängning (läggdags)',
          'Aktivera läggdagsläget (Bedtime mode) under Digitalt välbefinnande i mobilens inställningar för att dämpa skärmen och tysta notiser under natten'
        ]
      },
      {
        platform: 'YouTube',
        steps: [
          'Slå på påminnelsen om läggdags i YouTube-appens inställningar',
          'Har barnet ett övervakat tonårskonto kan du sedan januari 2026 sätta en daglig gräns för Shorts, ända ner till 0 minuter, och ställa in påminnelser om läggdags och pauser',
          'För yngre barn: använd YouTube Kids, där du kan sätta en tidsgräns för tittandet'
        ]
      },
      {
        platform: 'TikTok',
        steps: [
          'Öppna Familjeparkoppling (Family Pairing) i TikToks inställningar och koppla ditt konto till barnets',
          'Ställ in en daglig skärmtidsgräns (t.ex. 30 min). När gränsen är nådd behövs en kod från dig för att fortsätta',
          'Använd Time Away för att schemalägga tider då appen är spärrad, till exempel vid läggdags',
          'Bra att veta: alla under 18 år får en standardpåminnelse efter 60 minuter, men tonåringen kan själv fortsätta genom att ange en lösenkod. Det är alltså ingen spärr',
          'TikTok skickar inga push-notiser från kl 21 till 13–15-åringar och från kl 22 till 16–17-åringar. Använder någon under 16 år appen efter kl 22 visas dessutom en påminnelse om att varva ned'
        ]
      },
      {
        platform: 'Instagram',
        steps: [
          'Öppna Familjecenter via inställningarna i Instagram och koppla ditt konto till barnets',
          'Ställ in dagliga tidsgränser och tider då appen ska vila, till exempel på natten',
          'Lågteknologisk lösning: ta bort mobilen från sovrummet på natten (låt den laddas i ditt rum)'
        ]
      },
      {
        platform: 'Snapchat',
        steps: [
          'Snapchat har ingen egen tidsgräns som du kan sätta',
          'I Family Center kan du sedan januari 2026 se hur mycket tid barnet i genomsnitt lägger på Snapchat per dag, men du kan inte sätta någon gräns där',
          'Använd mobilens egna begränsningar (Skärmtidsschema på iPhone eller Family Link på Android) för att låsa Snapchat på kvällen',
          'Bäst är en gemensam regel om att skärmarna läggs undan vid en viss tid och att enheterna samlas in vid läggdags'
        ]
      }
    ],
    tips: [
      'Upprätthåll regelbundna sömnrutiner',
      'Stäng av skärmen 30–60 minuter före läggdags',
      'Samla in alla enheter vid läggdags och låt dem laddas utanför sovrummet. Använd gärna en vanlig väckarklocka',
      'Prata gärna med föräldrarna till barnets kompisar. Det blir lättare om flera familjer har liknande regler',
      'En utvilad ungdom står ofta bättre emot stress och mår bättre psykiskt'
    ]
  },
  {
    id: 'algoritmer',
    iconName: 'Smartphone',
    title: 'Begränsa algoritmiskt innehåll (TikTok/Reels/Shorts)',
    shortTitle: 'Algoritmiskt innehåll',
    priority: 2,
    color: 'coral',
    estimatedTime: '5 min',
    why: 'Algoritmiska flöden som TikToks För dig, Instagram Reels och YouTube Shorts är designade för att fånga uppmärksamheten. De matar barnen med oändliga klipp anpassade efter beteende, vilket kan leda till beroendeliknande användning. Innehållet kan också vara olämpligt eller skevt, eftersom algoritmerna styrs mer av engagemang än av åldersanpassning.',
    keyPoint: 'Folkhälsomyndigheten rekommenderar att barn 6–12 år undviker plattformar och appar som styrs av algoritmer (till exempel många videodelningsappar och sociala medier), eftersom de kan exponera barn för reklam, olämpligt innehåll, våld och osunda ideal.',
    platforms: [
      {
        platform: 'Välj rätt appar',
        steps: [
          'Styr barnets innehåll genom att välja åldersanpassade appar och spel utan algoritmstyrning eller reklam',
          'Exempel: SVT Barnkanalen (redaktionellt innehåll) i stället för YouTube',
          'Använd YouTube Kids i stället för vanliga YouTube. Kids-versionen är begränsad till barnanpassat innehåll'
        ]
      },
      {
        platform: 'YouTube',
        steps: [
          'Slå på Begränsat läge (Restricted Mode) i inställningarna',
          'Låt barnet titta via Prenumerationer (kanaler ni godkänt) i stället för att scrolla på startsidan',
          'Pausa sökhistoriken och visningshistoriken på barnets konto. Då har algoritmen mindre data att anpassa utifrån',
          'Har barnet ett övervakat tonårskonto kan du sedan januari 2026 sätta Shorts-gränsen till 0 minuter, så att Shorts-flödet försvinner',
          'I YouTube Kids kan du stänga av sökfunktionen och själv godkänna kanaler eller videor'
        ]
      },
      {
        platform: 'TikTok',
        steps: [
          'Aktivera Begränsat läge i TikToks inställningar eller via Familjeparkoppling (Family Pairing)',
          'Via Familjeparkoppling kan du lägga till filterord, så att videor med de orden inte visas i flödet',
          'Via Familjeparkoppling kan du också begränsa barnets möjlighet att söka efter innehåll',
          'Användare i EU kan stänga av det personanpassade flödet, så att För dig visar populära videor i stället för innehåll baserat på barnets intressen',
          'OBS: TikTok har 13-årsgräns. Fundera på om det är något ditt barn alls ska scrolla i vid 10–12 års ålder'
        ]
      },
      {
        platform: 'Instagram',
        steps: [
          'Tonårskonton har en 13+-inställning för innehåll som standard. Barnet kan inte ändra den utan förälderns godkännande',
          'Vill du ha det ännu striktare kan du via Familjecenter välja en striktare innehållsinställning (Limited Content), som filtrerar bort mer och stänger av kommentarer',
          'Prata med barnet om att inte följa konton som sprider negativt innehåll',
          'Visa hur flödet påverkas av vad man interagerar med. Följer man mest vänner och positiva sidor blir flödet snällare'
        ]
      },
      {
        platform: 'Snapchat',
        steps: [
          'I Snapchats Family Center kan du slå på begränsning av känsligt innehåll, som filtrerar bort visst innehåll i Stories och Spotlight',
          'Uppmuntra barnet att mest använda Snapchat för att chatta med kompisar de känner, i stället för att scrolla i Stories och Spotlight'
        ]
      }
    ],
    tips: [
      'Kvalitet före kvantitet: hjälp ditt barn att få en balanserad mediediet',
      'Ett par förvalda YouTube-kanaler eller en Netflix-profil med barnläge ger mer kontrollerat nöje',
      'Prata om innehållet ni ser. Om barnet stöter på något konstigt, var öppen och diskutera det',
      'Följ åldersgränserna: appar med 13-årsgräns är inte anpassade för yngre barn'
    ]
  },
  {
    id: 'meddelanden',
    iconName: 'MessageSquareOff',
    title: 'Blockera meddelanden från okända personer',
    shortTitle: 'Okända kontakter',
    priority: 3,
    color: 'primary',
    estimatedTime: '3 min',
    why: 'Att skydda barn från kontakt med främlingar online är avgörande. Okända som tar kontakt kan innebära risk för grooming, trakasserier eller bedrägerier. I en svensk undersökning uppgav 26 procent (ungefär 1 av 4) av eleverna i gymnasiets årskurs 3 att de före 15 års ålder blivit kontaktade i sexuellt syfte av någon som var minst fem år äldre (Svedin, Landberg & Jonsson 2021, Unga, sex och internet efter #metoo).',
    keyPoint: 'Genom att begränsa vem som kan skriva till ditt barn minskar du risken att hen hamnar i obehagliga eller farliga situationer.',
    platforms: [
      {
        platform: 'iOS (iPhone/iPad)',
        steps: [
          'Öppna Inställningar > Familj, välj barnets namn och tryck på Tillåtna kontakter (iOS 27 och senare)',
          'Tryck på Under Skärmtid och välj Endast kontakter',
          'Aktivera Hantera kontakter och välj de kontakter du godkänner. Om Tillåt ändring av kontakter är avstängt måste barnet be dig om lov för att lägga till nya',
          'Slå på Kommunikationssäkerhet, som skyddar barnet från att visa eller dela bilder och videor med nakenhet',
          'Äldre iOS-version än iOS 27: motsvarande inställning heter Kommunikationsbegränsningar och finns under Inställningar > Skärmtid'
        ]
      },
      {
        platform: 'Android',
        steps: [
          'Använd respektive apps inställningar',
          'Lär barnet att inte svara på främmande nummer eller förfrågningar',
          'I Google Family Link kan du se vilka appar barnet använder för kommunikation och blockera appar som inte känns trygga',
          'I Google Messages (sms) kan du aktivera skräppostskyddet, som sorterar bort misstänkta avsändare'
        ]
      },
      {
        platform: 'TikTok',
        steps: [
          'Alla under 16 år får automatiskt ett privat konto. Bara godkända följare kan se och interagera med barnets innehåll',
          'Direktmeddelanden är inte tillgängliga för konton under 16 år',
          'Dubbelkolla att ditt barn inte har registrerat sig med fel födelsedatum',
          'I sekretessinställningarna: se till att bara vänner kan tagga eller nämna ditt barn',
          'Man måste vara 18 år för att sända LIVE på TikTok (sedan november 2022)'
        ]
      },
      {
        platform: 'Instagram',
        steps: [
          'Barn under 18 år får automatiskt ett tonårskonto. Det är privat som standard och barnet kan bara få meddelanden från personer hen följer eller redan är kopplad till',
          'Barn under 16 år behöver förälderns godkännande för att lätta på de här inställningarna',
          'Koppla ditt konto till barnets via Familjecenter, så kan du se och justera inställningarna',
          'Se över om kommentarer från okända ska blockeras eller filtreras',
          'Gå igenom följarlistan ihop och rensa bort eventuella obekanta'
        ]
      },
      {
        platform: 'Snapchat',
        steps: [
          'Som standard kan bara de man lagt till som vän skicka snaps eller chatta',
          'I Snapchats sekretessinställningar: se till att bara vänner kan kontakta barnet',
          'Se till att barnet inte visas i Quick Add, alltså som vänförslag för okända',
          'När du kopplat ihop era konton i Family Center kan du se barnets vänlista och vilka hen chattat med den senaste veckan (men inte vad de skrivit)',
          'I Family Center kan du också begränsa chattboten My AI så att den inte svarar barnet'
        ]
      }
    ],
    tips: [
      'Bara vänner ska kunna kontakta ditt barn online',
      'Gå igenom vänlistor och följare regelbundet tillsammans',
      'Prata om riskerna: att aldrig ge ut personlig info eller bilder, och aldrig möta en nätkontakt utan att föräldrarna vet om det',
      'Om någon okänd kontaktar barnet eller hen får olämpliga förfrågningar: uppmuntra barnet att berätta direkt för er',
      'Den öppna dialogen är avgörande. Visa att ni står på barnets sida utan att skuldbelägga',
      'Vid akut fara eller pågående brott: ring alltid 112'
    ]
  },
  {
    id: 'plats',
    iconName: 'MapPinOff',
    title: 'Stäng av platstjänster och skydda persondata',
    shortTitle: 'Platstjänster',
    priority: 4,
    color: 'coral',
    estimatedTime: '5 min',
    why: 'Platsdelning och onödig datainsamling kan hota ditt barns integritet. Om appar ständigt spårar var barnet är kan det läcka information om hemadress, skola eller fritidsaktiviteter. I värsta fall kan någon illasinnad få reda på var barnet brukar vara.',
    keyPoint: 'Barn har rätt till sin digitala integritet, och som förälder kan du hjälpa till att minimera exponeringen.',
    platforms: [
      {
        platform: 'iOS (iPhone/iPad)',
        steps: [
          'På barnets enhet: öppna Inställningar > Integritet och säkerhet > Platstjänster',
          'Stäng av platsåtkomst för sociala medier-appar (TikTok, Instagram, Snapchat)',
          'Under Integritet och säkerhet > Spårning: se till att Tillåt appar att be om spårning är avstängt',
          'Lås inställningarna så att barnet inte själv kan ändra dem: Inställningar > Familj > barnets namn > Begränsa innehåll/integritet > Integritetsbegränsningar (iOS 27 och senare, på äldre iOS under Inställningar > Skärmtid)'
        ]
      },
      {
        platform: 'Android',
        steps: [
          'Gå till Inställningar > Plats och neka sociala appar platsåtkomst',
          'I Android 12 och senare kan du välja ungefärlig plats i stället för exakt',
          'Google Maps platshistorik heter numera Tidslinje och sparas på enheten. Kontrollera i Google Maps att Tidslinje är avstängd om den inte behövs',
          'Se till att barnets Google Maps inte delar realtidsplats med någon som inte ska ha den',
          'Radera annons-ID:t under Inställningar > Integritet > Annonser (menynamnen kan skilja lite mellan telefonmärken)'
        ]
      },
      {
        platform: 'TikTok',
        steps: [
          'Neka platsåtkomst när appen frågar',
          'Om det redan är på: stäng av det under telefonens appbehörigheter',
          'Undvik att ditt barn anger sin ort i bion eller platstaggar sina inlägg',
          'Bra att veta: i EU visar TikTok inte personanpassad reklam för användare 13–17 år, så där behöver du inte ändra något. Se hellre över i sekretessinställningarna vem som kan se barnets profil och videor'
        ]
      },
      {
        platform: 'Instagram',
        steps: [
          'Ge ingen platsbehörighet. Instagrams filter och inlägg fungerar utan GPS',
          'Lär barnet att inte lägga till platstaggar när hen postar bilder',
          'Med privat konto syns inte barnets inlägg för allmänheten'
        ]
      },
      {
        platform: 'Snapchat',
        steps: [
          'VIKTIGT: Öppna Snapkartan i appen och tryck på kugghjulet för kartans inställningar',
          'Spökläge (Ghost Mode) gör att ingen ser barnets plats. Det är barnet som slår på det i sin egen app, så gör det gärna tillsammans',
          'I Family Center kan du se vilka vänner barnet delar sin plats med, men du kan inte stänga av platsdelningen därifrån',
          'Kontrollera under telefonens kamerainställningar att platsinformation inte sparas i foton'
        ]
      }
    ],
    tips: [
      'Minimera spårningen. Barnet ska kunna använda enheten utan att skicka ut massa information',
      'Hjälp barnet att välja ett anonymt användarnamn (inte "förnamn_efternamn_årtal")',
      'Inga adresser, skolnamn eller telefonnummer bör stå i bio eller profil',
      'Begränsa appbehörigheter (mikrofon, kamera, kontakter) och tillåt dem bara om det verkligen behövs',
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
    estimatedTime: '5 min',
    why: 'Internet kryllar av innehåll som inte är lämpligt för barn: pornografi, grovt våld, drogglorifiering, spel om pengar, hat och mycket annat. Att utsättas för sådant för tidigt kan öka risken för oro och påverka hur barnet ser på sig själv och andra. Porr kan också påverka ungas bild av sex: i en svensk undersökning bland gymnasieelever uppgav 22 procent att de provat att göra något de sett i porr (Svedin, Landberg & Jonsson 2021).',
    keyPoint: 'Tekniska filter är ett stöd, men inget substitut för att prata med ditt barn. Uppmana barnet att alltid komma till er om hen ser något obehagligt.',
    platforms: [
      {
        platform: 'iOS (iPhone/iPad)',
        steps: [
          'Öppna Inställningar > Familj, välj barnets namn och tryck på Appar och webbplatser (iOS 27 och senare)',
          'Tryck på Begränsningar och sedan Filtrering under Webbplatser. Välj Begränsa vuxet innehåll, eller Be om att få surfa om barnet bara ska kunna besöka webbplatser du godkänt. Begränsa vuxet innehåll är påslaget som standard för barn under 18 år',
          'Gå tillbaka till barnets namn och tryck på Begränsa innehåll/integritet. Under Innehållsbegränsningar väljer du åldersgräns för appar, musik, böcker, filmer och tv',
          'Apples åldersgränser för appar är sedan 2025 4+, 9+, 13+, 16+ och 18+. För barn 8–12 år kan 9+ vara en rimlig nivå',
          'Under Siri i samma meny kan du blockera vissa Siri-funktioner',
          'Slå på Kommunikationssäkerhet, som skyddar barnet från att visa eller dela bilder och videor med nakenhet',
          'Äldre iOS-version än iOS 27: motsvarande inställningar finns under Inställningar > Skärmtid > Begränsningar för innehåll och integritet'
        ]
      },
      {
        platform: 'Android',
        steps: [
          'I Family Link: aktivera SafeSearch så att Googles sökresultat filtrerar bort pornografi och grovt innehåll (standard för barn under 13)',
          'Begränsa vilka webbplatser barnet får besöka i Chrome',
          'I Google Play Store > Inställningar > Familj > Föräldrakontroller: ställ in åldersgränser för appar, spel och filmer',
          'Via Family Link kan du välja att bara tillåta YouTube Kids och blockera vanliga YouTube-appen'
        ]
      },
      {
        platform: 'YouTube',
        steps: [
          'Sätt på Begränsat läge (Restricted Mode) på alla enheter barnet använder',
          'YouTube Kids är bästa valet för under 13 år, eftersom innehållet är begränsat till barnanpassat',
          'I YouTube Kids kan du välja innehållsnivå och blockera enskilda videor och kanaler'
        ]
      },
      {
        platform: 'TikTok',
        steps: [
          'Slå på Begränsat läge i inställningarna eller via Familjeparkoppling (Family Pairing)',
          'Via Familjeparkoppling kan du blockera vissa ord så att videor med de orden inte visas',
          'OBS: TikToks filter är inte felfritt, men tar bort mycket olämpligt innehåll'
        ]
      },
      {
        platform: 'Instagram',
        steps: [
          'Tonårskonton har en 13+-inställning för innehåll som standard',
          'Via Familjecenter kan du välja en striktare innehållsinställning (Limited Content) som filtrerar bort ännu mer',
          'För tonåringar suddar Instagram automatiskt ut bilder som kan innehålla nakenhet i direktmeddelanden och varnar barnet'
        ]
      },
      {
        platform: 'Snapchat',
        steps: [
          'I Family Center: slå på begränsning av känsligt innehåll, som filtrerar Stories och Spotlight (men inte chattar)',
          'I Family Center kan du också begränsa My AI så att den inte svarar barnet',
          'Se till att bara vänner kan skicka bilder. En främling ska aldrig kunna skicka opassande snaps'
        ]
      }
    ],
    tips: [
      'Berätta varför ni blockerar viss typ av innehåll',
      'Uppmana barnet att alltid komma till er om hen ser något obehagligt',
      'Reagera lugnt och sansat om det händer, så att barnet behåller förtroendet',
      'Ni vill inte att barnet söker upp farligt innehåll, men om hen snubblar över det ska hen veta att det inte är förbjudet att prata om det hemma',
      'Vid akut fara eller om du misstänker brott: ring 112'
    ]
  },
  {
    id: 'appar',
    iconName: 'AppWindow',
    title: 'Kräva förälders godkännande för nya appar',
    shortTitle: 'Appgodkännande',
    priority: 6,
    color: 'coral',
    estimatedTime: '3 min',
    why: 'Barn är nyfikna och kan få höra av kompisar om "coola nya appar", men alla appar är inte lämpliga. Genom att kräva godkännande för installationer ser du till att inga olämpliga eller dyra appar hamnar på enheten utan att du vet om det.',
    keyPoint: 'Att du godkänner appar innan installation hjälper dig också att hålla koll på barnets digitala liv. Du vet vilka tjänster hen använder.',
    platforms: [
      {
        platform: 'iOS (App Store)',
        steps: [
          'Barnet behöver ett eget Apple-konto som ingår i er Familjedelning',
          'Öppna Inställningar > Familj, välj barnets namn och tryck på Appar och webbplatser (iOS 27 och senare)',
          'Tryck på Begränsningar > Be om köp och aktivera Kräv köpgodkännande. För barn under 13 år är Be om köp påslaget som standard',
          'Nu får du en förfrågan varje gång barnet vill hämta en app, och kan godkänna eller avvisa den från din egen enhet',
          'Under App Store i samma meny kan du välja Tillåten eller Blockerad för till exempel Installera appar',
          'Äldre iOS-version än iOS 27: Be om köp finns under familjeinställningarna för barnet, och övriga begränsningar under Inställningar > Skärmtid'
        ]
      },
      {
        platform: 'Android (Google Play)',
        steps: [
          'Öppna Family Link-appen på din mobil och välj barnets konto',
          'Under Kontroller > Google Play: kräv föräldragodkännande för alla appar och spel, även gratis',
          'När barnet vill installera något får du en notis i Family Link och kan godkänna eller neka',
          'Ställ även in åldersfilter i Play Store',
          'Se till att barnet inte kan installera appar från okända källor (av som standard i Android)'
        ]
      }
    ],
    tips: [
      'Folkhälsomyndigheten rekommenderar sedan juni 2026 att vänta med egen smart telefon till det år barnet fyller 13. Har barnet redan en, är godkännande av appar ett bra sätt att hålla koll',
      'Barnet kan bli frustrerat över att behöva be om lov. Förklara att det handlar om säkerhet, inte misstroende',
      'Om "alla andra" använder en viss app: lyssna på barnets argument, läs på om appen och fatta sedan ett informerat beslut',
      'Ibland kan du säga ja, men med villkor (t.ex. privat konto, eller att du också skaffar ett konto)',
      'Detta lär ditt barn digitalt omdöme: att tänka efter innan man hoppar på en ny trend'
    ]
  },
  {
    id: 'kop',
    iconName: 'CreditCard',
    title: 'Inaktivera köp inuti appar (undvik oönskade köp)',
    shortTitle: 'Köp i appar',
    priority: 7,
    color: 'primary',
    estimatedTime: '3 min',
    why: 'Köp i appar kan bli dyra av misstag, och de kan bidra till att barn får ett osunt förhållande till pengar. Yngre barn kan ha svårt att förstå vad digitala saker kostar på riktigt. Loot-lådor och liknande har dessutom drag av spel om pengar.',
    keyPoint: 'Förhindra impulsköp. Köp i spel kan snabbt bli dyra, och det är lätt för ett barn att trycka igenom ett köp utan att förstå vad det kostar.',
    platforms: [
      {
        platform: 'iOS (App Store/iTunes)',
        steps: [
          'Öppna Inställningar > Familj, välj barnets namn och tryck på Appar och webbplatser (iOS 27 och senare)',
          'Tryck på Begränsningar > Be om köp och aktivera Kräv köpgodkännande. Då måste barnet be dig om lov för både hämtningar och köp',
          'Under App Store i samma meny kan du se över fler inställningar och välja Tillåten eller Blockerad',
          'Äldre iOS-version än iOS 27: gå till Inställningar > Skärmtid > Begränsningar för innehåll och integritet > köp i iTunes och App Store och sätt Köp inuti app till Tillåt inte'
        ]
      },
      {
        platform: 'Android (Google Play)',
        steps: [
          'Öppna Play Store > Profilmenyn > Inställningar > Autentisering',
          'Aktivera att autentisering krävs för alla köp',
          'I Family Link under Kontroller > Google Play: kräv godkännande för köp, inte bara nedladdningar',
          'Ge inte barnet tillgång till ditt betalkort i mobilen',
          'Om barnet har ett eget ungdomskort, fundera på att inte koppla det till Google Play eller Apple-kontot'
        ]
      },
      {
        platform: 'Spel och appar',
        steps: [
          'Varje gång ditt barn vill köpa något i ett spel: prata om det',
          'Gör köp gemensamt i stället för att barnet klickar själv',
          'För spel med upprepade köp (Roblox, Fortnite m.fl.): bestäm en månadsbudget för köp',
          'I Roblox kopplar du ditt eget föräldrakonto till barnets konto. Därifrån kan du bland annat sätta en månadsgräns för köp och styra chatten',
          'Sedan januari 2026 kräver Roblox en ålderskontroll för att man ska kunna chatta'
        ]
      },
      {
        platform: 'TikTok/Instagram/Snapchat',
        steps: [
          'Koppla inte något betalkort till barnets konton på sociala medier',
          'På TikTok kan man köpa mynt och skicka gåvor till kreatörer. Att skicka gåvor kräver att man är 18 år, men koppla ändå inget betalkort till barnets konto',
          'Om barnet vill köpa något, gör det manuellt vid något enstaka tillfälle via ditt konto',
          'För barn och unga finns det sällan någon anledning att handla i sociala appar'
        ]
      }
    ],
    tips: [
      'Sätt tydliga ramar: digitala varor kostar riktiga pengar',
      'Om ett misstag sker: kontakta appbutiken snabbt och be om återbetalning, det går ibland',
      'Ni skyddar också barnet från att tappa kontrollen kring köp',
      'I förlängningen lär sig barnet sunda vanor kring digital konsumtion'
    ]
  }
]
