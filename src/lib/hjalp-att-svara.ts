export interface HjalpResponse {
  id: string
  title: string
  icon: string
  barnSager: string
  duKanSvara: string
  fakta: string
  kalla: { text: string; url: string }
}

export const hjalpResponses: HjalpResponse[] = [
  {
    id: 'prefrontal',
    title: 'Hjärnan är inte färdig',
    icon: '🧠',
    barnSager: 'Men jag kan ju hantera det!',
    duKanSvara: 'Jag vet att du är smart och kan mycket. Men visste du att den del av hjärnan som hjälper dig fatta kloka beslut — prefrontala cortex — inte är färdigutvecklad förrän du är runt 25? Det är därför vuxna behöver hjälpa till med gränser. Det handlar inte om att vi inte litar på dig, utan om att skydda din hjärna medan den växer.',
    fakta: 'Prefrontala cortex, som styr impulskontroll, planering och beslutsfattande, fortsätter utvecklas till cirka 25 års ålder.',
    kalla: { text: 'Arain et al., 2013', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3621648/' },
  },
  {
    id: 'dopamin',
    title: 'Dopaminfällan',
    icon: '📱',
    barnSager: 'Det är ju bara en app',
    duKanSvara: 'Appar som TikTok och Instagram är designade av världens smartaste ingenjörer för att göra dig beroende. De triggar dopamin — hjärnans belöningssystem — varje gång du får en like eller scrollar till nästa video. Din unga hjärna är extra känslig för det. En genomsnittlig mobilanvändare kollar sin telefon 350 gånger per dag.',
    fakta: 'Forskaren Sissela Nutley vid Karolinska Institutet visar att svenska ungdomar har i snitt ~7 timmars skärmtid per dag utöver skolan. Den genomsnittliga mobilanvändaren tar upp telefonen 350 gånger per dag.',
    kalla: { text: 'Sissela Nutley, Karolinska Institutet', url: 'https://www.uu.se/institution/lakemedelskemi/farmaceutiska-fakulteten/nyheter/arkiv/sissela-nutley-ger-unga-verktyg-att-ta-kontroll-over-sin-skarmtid.html' },
  },
  {
    id: 'fokus',
    title: 'Fokus och inlärning',
    icon: '📚',
    barnSager: 'Jag kan plugga med mobilen bredvid',
    duKanSvara: 'Forskning visar att bara ha mobilen inom räckhåll — även i tyst läge — gör att du lär dig sämre. Det beror på att en del av din hjärna är upptagen med att tänka på mobilen istället för att fokusera på det du gör. Lägg den i ett annat rum när du pluggar!',
    fakta: 'Studier visar att elever som har sin mobil i flygplansläge men inom räckhåll lär sig sämre än de som har telefonen i ett annat rum.',
    kalla: { text: 'Sissela Nutley, Karolinska Institutet', url: 'https://www.uu.se/institution/lakemedelskemi/farmaceutiska-fakulteten/nyheter/arkiv/sissela-nutley-ger-unga-verktyg-att-ta-kontroll-over-sin-skarmtid.html' },
  },
  {
    id: 'aldersgranser',
    title: 'Åldersgränser finns av en anledning',
    icon: '🔒',
    barnSager: 'Men alla i klassen har TikTok',
    duKanSvara: 'Åldersgränserna på sociala medier är 13 år, och det finns goda skäl till det. Forskning visar att sociala medier från 10 års ålder kan öka risken för kroppsmissnöje och dålig självkänsla. Vi följer reglerna för att skydda dig — precis som vi följer trafikregler.',
    fakta: 'Åldersgränsen är 13 år på de flesta plattformar. TikTok har en automatisk 60-minutersgräns för under 18 år och begränsar DM för under 16 år.',
    kalla: { text: 'TikTok Safety / Folkhälsomyndigheten', url: 'https://newsroom.tiktok.com/sv-se/nya-funktioner-for-ungdomar-och-familjer-pa-tiktok' },
  },
  {
    id: 'alla-andra',
    title: '"Alla andra" stämmer inte',
    icon: '👀',
    barnSager: 'ALLA andra har det',
    duKanSvara: 'Jag förstår att det känns så. Men precis som du kan se här på den här sidan — många andra föräldrar hör exakt samma sak från sina barn. Det betyder att "alla andra" kanske inte är så många som det känns. Och de föräldrar som sätter gränser pratar bara inte om det lika högt.',
    fakta: 'Forskning visar att barn och ungdomar systematiskt överskattar hur vanligt riskbeteenden är bland jämnåriga — ett fenomen som kallas "pluralistic ignorance".',
    kalla: { text: 'Folkhälsomyndigheten (2024)', url: 'https://www.folkhalsomyndigheten.se/contentassets/201463a976054dde8ad7aa8a47861c0a/rekommendationer-digitala-medier-barns-ungas-medieanvandning.pdf' },
  },
  {
    id: 'verktyg',
    title: 'Ge ditt barn verktyg — inte förbud',
    icon: '💪',
    barnSager: 'Du är så kontrollerande',
    duKanSvara: 'Jag vill inte kontrollera dig — jag vill ge dig verktyg att kontrollera din egen skärmtid. Forskaren Sissela Nutley vid Karolinska Institutet jobbar med att ge unga precis de verktygen. Det handlar om att DU ska bestämma över mobilen, inte tvärtom.',
    fakta: 'Sissela Nutley förespråkar kunskapsbaserade lösningar snarare än rena restriktioner — att ge unga praktiska verktyg och beteendestrategier för ett hållbart digitalt liv.',
    kalla: { text: 'Sissela Nutley, Karolinska Institutet', url: 'https://www.uu.se/institution/lakemedelskemi/farmaceutiska-fakulteten/nyheter/arkiv/sissela-nutley-ger-unga-verktyg-att-ta-kontroll-over-sin-skarmtid.html' },
  },
  {
    id: 'somn',
    title: 'Sömn och mobilen',
    icon: '😴',
    barnSager: 'Jag kan inte somna utan mobilen',
    duKanSvara: 'Det är vanligt att det känns så, men forskning visar att skärmtid sent på kvällen stör insomningen — både genom det stimulerande innehållet och det blåa ljuset. Barn i din ålder behöver 9–11 timmars sömn. Bara genom att lägga bort mobilen i tid kan du somna ungefär 20 minuter snabbare.',
    fakta: 'Skärmtid före sänggåendet stör sömnen. Barn 8–13 år behöver 9–11 timmars sömn. Att lägga bort mobilen tidigare kan förbättra insomningen med ~20 minuter.',
    kalla: { text: 'Folkhälsomyndigheten (2024)', url: 'https://www.folkhalsomyndigheten.se/contentassets/201463a976054dde8ad7aa8a47861c0a/rekommendationer-digitala-medier-barns-ungas-medieanvandning.pdf' },
  },
  {
    id: 'dialog',
    title: 'Ni är ett lag',
    icon: '🤝',
    barnSager: 'Du förstår inget',
    duKanSvara: 'Du har rätt att jag inte är uppvuxen med sociala medier. Men jag vill förstå. Kan vi prata om vad du gillar att göra online? Forskning visar att barn mår bäst när föräldrar visar genuint intresse för deras digitala liv — inte när de bara sätter regler.',
    fakta: 'Engagerat föräldraskap och öppen dialog minskar risken för skärmberoende. Barn som interagerar med personer de känner online mår bättre.',
    kalla: { text: 'Föräldrakollen / forskning', url: '/forskning' },
  },
]
