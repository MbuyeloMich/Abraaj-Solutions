import type { Localized } from "../i18n/pickLocale";

export type Founder = {
  name: string;
  title: Localized<string>;
  image: string;
  alt: string;
  bio: Localized<string>;
  email: string;
};

export type TeamCard = {
  name: string;
  title: Localized<string>;
  image: string;
  alt: string;
  bio: Localized<string>;
};

export type Affiliate = {
  name: string;
  description: Localized<string>;
  href: string;
  label: Localized<string>;
};

export type Service = {
  slug: string;
  name: Localized<string>;
  tagline: Localized<string>;
  description: Localized<string>;
  industries: Localized<string>[];
  deliverables: Localized<string>[];
  longform: {
    challenge: Localized<string>;
    approach: Localized<string>[];
    signals: Localized<string>[];
  };
};

export type CaseStudy = {
  title: Localized<string>;
  industry: Localized<string>;
  challenge: Localized<string>;
  shortSummary?: Localized<string>;
  team?: Localized<string>;
  image: string;
  imageAlt: Localized<string>;
  metrics: Array<{ value: string; label: Localized<string> }>;
};

export type InsightItem = {
  badge: Localized<string>;
  date: string;
  author: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  href: string;
  linkLabel: Localized<string>;
  image?: string;
  imageAlt?: Localized<string>;
};

export type AcademyProgram = {
  title: Localized<string>;
  description: Localized<string>;
  icon: string;
};

export type Capability = {
  title: string;
  icon: string;
};

export const founders: Founder[] = [
  {
    name: "Reitumetse Moloi",
    title: { en: "Founder & CEO", nl: "Oprichter & CEO" },
    image: "/assets/team/ReitumetseMoloi.jpg",
    alt: "Reitumetse Moloi",
    bio: {
      en: "Reitumetse Moloi is the founder of Abraaj Solution with deep expertise in ICT, cybersecurity, cloud architecture and community-driven training programs. Reitumetse leads product strategy and delivery with a focus on secure, scalable solutions for enterprises and municipalities.",
      nl: "Reitumetse Moloi is de oprichter van Abraaj Solution met diepgaande expertise in ICT, cybersecurity, cloudarchitectuur en communitygerichte trainingsprogramma's. Reitumetse leidt productstrategie en levering met een focus op veilige, schaalbare oplossingen voor ondernemingen en gemeenten.",
    },
    email: "abraajsolutions@gmail.com",
  },
];

export const expertPartners: TeamCard[] = [];

export const associates: TeamCard[] = [];

export const affiliates: Affiliate[] = [];

export const services: Service[] = [
  {
    slug: "security-enhancement",
    name: { en: "Security Enhancement", nl: "Beveiligingsverbetering" },
    tagline: { en: "Advanced encryption and continuous threat detection", nl: "Geavanceerde encryptie en continue dreigingsdetectie" },
    description: { en: "Comprehensive cybersecurity services including cryptography, monitoring and incident response.", nl: "Uitgebreide cybersecurity-diensten, waaronder cryptografie, monitoring en incidentrespons." },
    industries: [ { en: "All Sectors", nl: "Alle sectoren" } ],
    deliverables: [ { en: "Encryption & Key Management", nl: "Encryptie en sleutelbeheer" }, { en: "Threat Detection & Response", nl: "Dreigingsdetectie en -respons" } ],
    longform: {
      challenge: { en: "Organizations face growing cyber threats and need resilient protection for data and services.", nl: "Organisaties worden geconfronteerd met toenemende cyberdreigingen en hebben robuuste bescherming nodig voor data en services." },
      approach: [ { en: "Implement strong cryptography and secure key management", nl: "Sterke cryptografie en veilig sleutelbeheer implementeren" }, { en: "Deploy continuous monitoring and incident response capabilities", nl: "Continue monitoring en incidentresponscapaciteiten implementeren" } ],
      signals: [ { en: "Sensitive data is at risk", nl: "Gevoelige gegevens lopen risico" }, { en: "No formal incident response plan exists", nl: "Er is geen formeel incidentresponsplan" } ],
    },
  },
  {
    slug: "cloud-services",
    name: { en: "Cloud Services", nl: "Cloud-diensten" },
    tagline: { en: "Scalable cloud migration and platform management", nl: "Schaalbare cloudmigratie en platformbeheer" },
    description: { en: "Cloud migration, platform engineering, and disaster recovery planning.", nl: "Cloudmigratie, platformengineering en disaster recovery-planning." },
    industries: [ { en: "All Sectors", nl: "Alle sectoren" } ],
    deliverables: [ { en: "Cloud Migration", nl: "Cloudmigratie" }, { en: "Platform Management", nl: "Platformbeheer" }, { en: "Disaster Recovery", nl: "Disaster recovery" } ],
    longform: {
      challenge: { en: "Legacy infrastructure limits agility and increases costs.", nl: "Legacy-infrastructuur beperkt wendbaarheid en verhoogt kosten." },
      approach: [ { en: "Design cloud-native architectures", nl: "Cloud-native architecturen ontwerpen" }, { en: "Migrate and modernize applications", nl: "Applicaties migreren en moderniseren" } ],
      signals: [ { en: "High maintenance costs", nl: "Hoge onderhoudskosten" }, { en: "Scaling issues under load", nl: "Schaalproblemen bij belasting" } ],
    },
  },
  {
    slug: "data-analytics",
    name: { en: "Data Analytics", nl: "Data-analyse" },
    tagline: { en: "Predictive analytics and dashboards", nl: "Predictieve analyse en dashboards" },
    description: { en: "Analytics, ML-enabled forecasting and visualization for actionable insights.", nl: "Analytics, ML-gestuurde voorspellingen en visualisatie voor bruikbare inzichten." },
    industries: [ { en: "All Sectors", nl: "Alle sectoren" } ],
    deliverables: [ { en: "Predictive Models", nl: "Predictieve modellen" }, { en: "Dashboards & Reports", nl: "Dashboards en rapporten" } ],
    longform: {
      challenge: { en: "Data is siloed and underused across operations.", nl: "Data is gesilo'd en wordt niet volledig benut in de operatie." },
      approach: [ { en: "Centralize data pipelines and apply ML models", nl: "Datapijplijnen centraliseren en ML-modellen toepassen" }, { en: "Deliver dashboards for decision-makers", nl: "Dashboards leveren voor beslissers" } ],
      signals: [ { en: "Decisions lack supporting data", nl: "Beslissingen ontbreken onderliggende data" } ],
    },
  },
  {
    slug: "iot-integration",
    name: { en: "Internet of Things (IoT)", nl: "Internet of Things (IoT)" },
    tagline: { en: "Operational optimization through connected devices", nl: "Operationele optimalisatie via verbonden apparaten" },
    description: { en: "Design and integrate IoT solutions to collect telemetry and automate processes.", nl: "Ontwerpen en integreren van IoT-oplossingen voor telemetrie en procesautomatisering." },
    industries: [ { en: "Manufacturing", nl: "Productie" }, { en: "Public Sector", nl: "Publieke sector" } ],
    deliverables: [ { en: "Sensor & Telemetry Design", nl: "Sensor- en telemetrisch ontwerp" }, { en: "Integration & API", nl: "Integratie en API" } ],
    longform: {
      challenge: { en: "Operational data gaps reduce efficiency and increase downtime.", nl: "Operationele datakloven verminderen efficiëntie en vergroten downtime." },
      approach: [ { en: "Deploy sensors and telemetry", nl: "Sensoren en telemetrie implementeren" }, { en: "Integrate IoT data into business systems", nl: "IoT-data integreren in bedrijfsystemen" } ],
      signals: [ { en: "Manual monitoring processes", nl: "Handmatige monitoringsprocessen" } ],
    },
  },
  {
    slug: "data-management",
    name: { en: "Data Management", nl: "Databeheer" },
    tagline: { en: "Governance, backup and compliance", nl: "Governance, backup en compliance" },
    description: { en: "Data governance frameworks, secure backups and compliance programs.", nl: "Data governance-kaders, veilige backups en compliance-programma's." },
    industries: [ { en: "All Sectors", nl: "Alle sectoren" } ],
    deliverables: [ { en: "Governance Frameworks", nl: "Governance-kaders" }, { en: "Backup & Recovery", nl: "Backup en recovery" } ],
    longform: {
      challenge: { en: "Poor data practices increase risk and reduce trust in insights.", nl: "Slechte datapraktijken vergroten risico's en verminderen vertrouwen in inzichten." },
      approach: [ { en: "Implement governance and cataloging", nl: "Governance en catalogisering implementeren" }, { en: "Automate secure backups", nl: "Veilige backups automatiseren" } ],
      signals: [ { en: "Data quality issues", nl: "Datakwaliteitsproblemen" } ],
    },
  },
  {
    slug: "it-consulting",
    name: { en: "IT Consulting", nl: "IT-advies" },
    tagline: { en: "Strategy, modernization and roadmaps", nl: "Strategie, modernisering en roadmaps" },
    description: { en: "Technical strategy, vendor selection and modernization roadmaps.", nl: "Technische strategie, leveranciersselectie en moderniseringsroadmaps." },
    industries: [ { en: "All Sectors", nl: "Alle sectoren" } ],
    deliverables: [ { en: "Technology Roadmaps", nl: "Technologieroadmaps" }, { en: "Vendor Assessments", nl: "Leveranciersbeoordelingen" } ],
    longform: {
      challenge: { en: "Organisations need clear, practical technology roadmaps to deliver on their goals.", nl: "Organisaties hebben duidelijke, praktische technologieroadmaps nodig om hun doelen te realiseren." },
      approach: [ { en: "Conduct technical assessments", nl: "Technische assessments uitvoeren" }, { en: "Propose pragmatic roadmaps", nl: "Pragmatische roadmaps voorstellen" } ],
      signals: [ { en: "Lack of IT strategy", nl: "Ontbreken van IT-strategie" } ],
    },
  },
  {
    slug: "web-development",
    name: { en: "Website & Web Development", nl: "Website & webontwikkeling" },
    tagline: { en: "Functional sites, hosting and maintenance", nl: "Functionele sites, hosting en onderhoud" },
    description: { en: "Design, hosting and maintenance for customer-facing websites.", nl: "Ontwerp, hosting en onderhoud voor klantgerichte websites." },
    industries: [ { en: "SMEs", nl: "MKB" } ],
    deliverables: [ { en: "Design & Build", nl: "Ontwerp en bouw" }, { en: "Domain & Hosting", nl: "Domein en hosting" }, { en: "Ongoing Maintenance", nl: "Doorlopend onderhoud" } ],
    longform: {
      challenge: { en: "Many small businesses need cost-effective, secure web presence.", nl: "Veel kleine bedrijven hebben behoefte aan kosteneffectieve, veilige webpresence." },
      approach: [ { en: "Deliver fast, secure sites with clear maintenance plans", nl: "Snelle, veilige sites leveren met duidelijke onderhoudsplannen" } ],
      signals: [ { en: "Outdated website or no online presence", nl: "Verouderde website of geen online aanwezigheid" } ],
    },
  },
];

// Deprecated — capabilities are now consolidated into services.
// Kept as empty export for backward compatibility with type imports.
export const capabilities: Capability[] = [];

export const academyPrograms: AcademyProgram[] = [
  {
    title: {
      en: "Executive Presentation Training",
      nl: "Executive Presentatietraining",
    },
    description: {
      en: "Master the art of strategic and investor pitches. Learn to structure compelling narratives that resonate with boards, shareholders, and senior leadership audiences.",
      nl: "Beheers de kunst van strategische en beleggerspresentaties. Leer overtuigende verhaallijnen te structureren die resoneren bij bestuurders, aandeelhouders en senior leiderschapsdoelgroepen.",
    },
    icon: "presentation",
  },
  {
    title: {
      en: "Media Training",
      nl: "Mediatraining",
    },
    description: {
      en: "Prepare for interviews and public appearances with confidence. Develop techniques to stay on message, handle tough questions, and project authority under scrutiny.",
      nl: "Bereid u met vertrouwen voor op interviews en publieke optredens. Ontwikkel technieken om bij uw boodschap te blijven, lastige vragen te hanteren en autoriteit uit te stralen onder toezicht.",
    },
    icon: "edit",
  },
  {
    title: {
      en: "Stakeholder Dialogue Training",
      nl: "Stakeholderdialoogtraining",
    },
    description: {
      en: "Navigate high-stakes conversations with diverse stakeholders. Build skills for productive dialogue with investors, regulators, employees, and community leaders.",
      nl: "Navigeer gesprekken onder hoge druk met diverse stakeholders. Bouw vaardigheden op voor productieve dialoog met investeerders, toezichthouders, werknemers en maatschappelijke leiders.",
    },
    icon: "users",
  },
  {
    title: {
      en: "Crisis Communication Training",
      nl: "Crisiscommunicatietraining",
    },
    description: {
      en: "Perform under pressure when it matters most. Develop the composure, clarity, and decisiveness needed to lead communications through crisis situations.",
      nl: "Presteer onder druk wanneer het er het meest toe doet. Ontwikkel de kalmte, helderheid en vastberadenheid die nodig zijn om communicatie door crisissituaties te leiden.",
    },
    icon: "bolt",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: { en: "Local Government Security Enhancement", nl: "Beveiligingsverbetering lokale overheid" },
    industry: { en: "Public Sector", nl: "Publieke sector" },
    challenge: {
      en: "A municipal network suffered recurring outages and suspected data exposure. The council needed a rapid assessment and remediation plan to secure citizen services.",
      nl: "Een gemeentelijk netwerk ondervond herhaalde storingen en mogelijk datalekken. De raad had een snelle beoordeling en herstelplan nodig om burgerdiensten te beveiligen.",
    },
    shortSummary: {
      en: "Abraaj conducted an encryption and monitoring retrofit, implemented incident response, and trained IT staff—reducing outage risk and restoring public trust.",
      nl: "Abraaj voerde een retrofit uit met encryptie en monitoring, implementeerde incidentrespons en trainde IT-personeel—waardoor het risico op uitval werd verminderd en het publieke vertrouwen werd hersteld.",
    },
    team: { en: "Reitumetse Moloi", nl: "Reitumetse Moloi" },
    image: "/assets/images/case-municipal-security.jpg",
    imageAlt: { en: "City network operations center", nl: "Netwerkoperationscentrum van de stad" },
    metrics: [
      { value: "99.9%", label: { en: "Uptime restored", nl: "Beschikbaarheid hersteld" } },
      { value: "0 incidents", label: { en: "Severe incidents in 12 months", nl: "Ernstige incidenten in 12 maanden" } },
    ],
  },
  {
    title: { en: "SME Cloud Migration", nl: "Cloudmigratie voor MKB" },
    industry: { en: "SME / Services", nl: "MKB / Services" },
    challenge: {
      en: "A regional SME struggled with costly on-premise servers and slow customer-facing apps. Abraaj delivered a phased cloud migration and cut operating costs.",
      nl: "Een regionaal MKB kampt met dure on-premise servers en trage klantgerichte apps. Abraaj leverde een gefaseerde cloudmigratie en verlaagde operationele kosten.",
    },
    shortSummary: {
      en: "Phased migration to managed cloud reduced hosting costs by over 40% and improved application performance for customers.",
      nl: "Gedeeltelijke migratie naar managed cloud verlaagde hostingkosten met meer dan 40% en verbeterde applicatieprestaties voor klanten.",
    },
    team: { en: "Cloud Team", nl: "Cloud Team" },
    image: "/assets/images/case-sme-cloud.jpg",
    imageAlt: { en: "Cloud architecture diagram", nl: "Cloudarchitectuurdiagram" },
    metrics: [
      { value: "40%+", label: { en: "Hosting cost reduction", nl: "Vermindering hostkosten" } },
      { value: "2x", label: { en: "Application speed improvement", nl: "Verbetering applicatiesnelheid" } },
    ],
  },
  {
    title: { en: "Community ICT Training Program", nl: "Community ICT-trainingsprogramma" },
    industry: { en: "Community / Nonprofit", nl: "Gemeenschap / Non-profit" },
    challenge: {
      en: "A community centre needed to upskill residents with basic ICT skills and provide refurbished laptops for students.",
      nl: "Een gemeenschapscentrum moest bewoners bijscholen in basis-ICT-vaardigheden en opgeknapte laptops beschikbaar stellen voor studenten.",
    },
    shortSummary: {
      en: "Abraaj ran cohorts of training, delivered refurbished laptops, and partnered with local employers to place graduates in entry-level roles.",
      nl: "Abraaj organiseerde opleidingscohorten, leverde opgeknapte laptops en werkte samen met lokale werkgevers om afgestudeerden in instapfuncties te plaatsen.",
    },
    team: { en: "Community Team", nl: "Community Team" },
    image: "/assets/images/case-community-training.jpg",
    imageAlt: { en: "Community ICT classroom", nl: "Community ICT-klaslokaal" },
    metrics: [
      { value: "150+", label: { en: "Residents trained", nl: "Inwoners getraind" } },
      { value: "85%", label: { en: "Placement rate within 6 months", nl: "Plaatsingspercentage binnen 6 maanden" } },
    ],
  },
];

export const testimonials = [
  {
    quote: {
      en: "When the crisis hit, Duke Strategies did not just manage the media - they helped us understand our entire stakeholder landscape and rebuild trust systematically. Their combination of crisis experience and analytical rigour was exactly what we needed under pressure.",
      nl: "Toen de crisis toesloeg, beheerde Duke Strategies niet alleen de media — zij hielpen ons het volledige stakeholderlandschap te begrijpen en het vertrouwen systematisch te herstellen. Hun combinatie van crisiservaring en analytische grondigheid was precies wat wij nodig hadden onder druk.",
    },
    author: { en: "CEO, European Industrial Group", nl: "CEO, Europese industriële groep" },
  },
  {
    quote: {
      en: "Most communications advisors we had worked with relied on instinct. Duke brought data. Their stakeholder mapping showed us alliances and opposition risks we had completely missed, and that intelligence was decisive in getting our project approved ahead of schedule.",
      nl: "De meeste communicatieadviseurs waarmee wij hadden gewerkt vertrouwden op instinct. Duke bracht data. Hun stakeholder mapping toonde ons allianties en oppositierisico's die wij volledig hadden gemist, en die inlichtingen waren doorslaggevend bij het verkrijgen van goedkeuring voor ons project voor op schema.",
    },
    author: { en: "Head of External Affairs, European Energy Company", nl: "Hoofd External Affairs, Europees energiebedrijf" },
  },
  {
    quote: {
      en: "The deal was complex - two jurisdictions, 800 employees at the target, and intense media interest. Duke managed every stakeholder group with precision. The fact that we retained 92% of the target workforce speaks to the quality of their employee communications.",
      nl: "De deal was complex — twee jurisdicties, 800 werknemers bij het doelbedrijf en intense media-aandacht. Duke beheerde elke stakeholdergroep met precisie. Het feit dat wij 92% van het personeelsbestand van het doelbedrijf behielden, spreekt voor de kwaliteit van hun medewerkercommunicatie.",
    },
    author: { en: "General Counsel, European Technology Company", nl: "General Counsel, Europees technologiebedrijf" },
  },
  {
    quote: {
      en: "We needed to build government relations in the Netherlands from scratch, and we needed it fast. Duke's political insight gave us credibility we could not have built on our own.",
      nl: "Wij moesten overheidsbetrekkingen in Nederland vanuit het niets opbouwen, en dat moest snel. Het politieke inzicht van Duke gaf ons geloofwaardigheid die wij op eigen kracht niet hadden kunnen opbouwen.",
    },
    author: { en: "VP Government Affairs, Global Technology Platform", nl: "VP Government Affairs, wereldwijd technologieplatform" },
  },
];

export const insights: InsightItem[] = [
  {
    badge: { en: "Philosophy", nl: "Filosofie" },
    date: "Ingo Heijnen - March 2025",
    author: "Ingo Heijnen",
    title: {
      en: "Making business strategy stakeholder-proof",
      nl: "Bedrijfsstrategie stakeholder-proof maken",
    },
    excerpt: {
      en: "We scrutinise the motivation behind every strategic choice and advise on the adjustments needed to make those decisions credible and acceptable to internal and external stakeholders - before the communications even begin.",
      nl: "Wij onderzoeken de motivatie achter elke strategische keuze en adviseren over de aanpassingen die nodig zijn om die beslissingen geloofwaardig en aanvaardbaar te maken voor interne en externe stakeholders — voordat de communicatie zelfs maar begint.",
    },
    href: "https://www.consultancy.nl/nieuws/59605/hill-knowlton-veteranen-ingo-heijnen-en-arien-stuijt-starten-duke-strategies",
    linkLabel: { en: "Read the founding interview", nl: "Lees het oprichtingsinterview" },
    image: "/assets/insights/insight-01-founding.jpg",
    imageAlt: { en: "Ingo Heijnen and Arien Stuijt launch Duke Strategies", nl: "Ingo Heijnen en Arien Stuijt lanceren Duke Strategies" },
  },
  {
    badge: { en: "Perspective", nl: "Perspectief" },
    date: "Arien Stuijt - March 2025",
    author: "Arien Stuijt",
    title: {
      en: "Stakeholders see through the nonsense",
      nl: "Stakeholders prikken door de onzin heen",
    },
    excerpt: {
      en: "Too many companies still try to promote strategically flawed decisions - problematic acquisitions, disproportionate bonuses, unexplainable product choices - and then scramble to repair the damage. Modern stakeholders will not let that pass.",
      nl: "Nog steeds proberen te veel bedrijven strategisch gebrekkige beslissingen te promoten — problematische overnames, disproportionele bonussen, onverklaarbare productkeuzes — om vervolgens de schade te herstellen. Moderne stakeholders laten dat niet passeren.",
    },
    href: "https://mena.nl/artikel/ingo-heijnen-en-arien-stuijt-beginnen-nieuw-adviesbureau/",
    linkLabel: { en: "Read on M&A Magazine", nl: "Lees op M&A Magazine" },
    image: "/assets/insights/insight-02-mena-launch.jpg",
    imageAlt: { en: "M&A Magazine coverage of Duke Strategies launch", nl: "M&A Magazine-berichtgeving over de lancering van Duke Strategies" },
  },
  {
    badge: { en: "Capability", nl: "Capability" },
    date: "Duke Strategies - 2025",
    author: "Duke Strategies",
    title: {
      en: "Where AI meets stakeholder intelligence",
      nl: "Waar AI stakeholder intelligence ontmoet",
    },
    excerpt: {
      en: "Duke's data capability turns complex stakeholder ecosystems into actionable maps. AI-driven analytics identify influence networks, assess sentiment, and anticipate opposition coalitions - grounding strategic advice in evidence rather than instinct.",
      nl: "De datacapaciteit van Duke transformeert complexe stakeholder-ecosystemen in bruikbare kaarten. AI-gestuurde analyses identificeren invloedsnetwerken, beoordelen sentiment en anticiperen op oppositiecoalities — strategisch advies gefundeerd op bewijs in plaats van instinct.",
    },
    href: "https://www.consultancy.nl/nieuws/61667/duke-strategies-breidt-team-uit-met-emma-van-gelder-en-william-masquelier",
    linkLabel: { en: "Read team announcement", nl: "Lees de teamaankondiging" },
    image: "/assets/insights/insight-03-team.jpg",
    imageAlt: { en: "Duke Strategies team expansion announcement", nl: "Aankondiging uitbreiding team Duke Strategies" },
  },
  {
    badge: { en: "M&A", nl: "M&A" },
    date: "Ingo Heijnen - Archive",
    author: "Ingo Heijnen",
    title: {
      en: "Know your stakeholders before you need them",
      nl: "Ken uw stakeholders voordat u ze nodig heeft",
    },
    excerpt: {
      en: "In cross-border M&A, Dutch politics, works councils and industry associations increasingly shape the outcome. The lesson from two decades of deal advisory: build the stakeholder coalition long before an unsolicited bid forces your hand.",
      nl: "Bij grensoverschrijdende M&A bepalen de Nederlandse politiek, ondernemingsraden en brancheverenigingen steeds vaker de uitkomst. De les uit twee decennia dealadvies: bouw de stakeholdercoalitie ruim voordat een ongevraagd bod uw hand forceert.",
    },
    href: "https://mena.nl/artikel/kopers-en-verkopers-ken-uw-stakeholders-voordat-u-ze-nodig-hebt/",
    linkLabel: { en: "Read the article", nl: "Lees het artikel" },
    image: "/assets/insights/insight-04-stakeholders.jpg",
    imageAlt: { en: "Stakeholder mapping for cross-border M&A", nl: "Stakeholder mapping voor grensoverschrijdende M&A" },
  },
  {
    badge: { en: "ESG", nl: "ESG" },
    date: "Ingo Heijnen - Archive",
    author: "Ingo Heijnen",
    title: {
      en: "COVID put ESG firmly on the boardroom agenda",
      nl: "COVID zette ESG stevig op de bestuurskameragenda",
    },
    excerpt: {
      en: "Three-quarters of Dutch institutional investors now treat ESG as decisive. ESG stopped being a disclosure exercise and became a strategic filter for boards, investors, and stakeholders.",
      nl: "Driekwart van de Nederlandse institutionele beleggers beschouwt ESG nu als doorslaggevend. ESG is geen rapportageoefening meer maar een strategisch filter voor bestuurders, investeerders en stakeholders.",
    },
    href: "https://mena.nl/artikel/covid19-zet-esg-prominent-op-de-agenda/",
    linkLabel: { en: "Read the perspective", nl: "Lees het perspectief" },
    image: "/assets/insights/insight-05-esg.jpg",
    imageAlt: { en: "ESG moves to the top of the boardroom agenda", nl: "ESG verschuift naar de top van de bestuurskameragenda" },
  },
  {
    badge: { en: "Restructuring", nl: "Herstructurering" },
    date: "Ingo Heijnen & Tanno Massar - Archive",
    author: "Ingo Heijnen & Tanno Massar",
    title: {
      en: "Credibility and reputation are central to a pre-pack",
      nl: "Geloofwaardigheid en reputatie staan centraal bij een pre-pack",
    },
    excerpt: {
      en: "Pre-pack restructurings only work when stakeholders believe in the restart. That belief is not earned by press releases; it is built through meticulous stakeholder scenario planning before the filing.",
      nl: "Pre-pack herstructureringen werken alleen wanneer stakeholders geloven in de herstart. Dat geloof wordt niet verdiend met persberichten; het wordt opgebouwd door zorgvuldige stakeholder scenario planning vóór de indiening.",
    },
    href: "https://mena.nl/artikel/behoud-van-geloofwaardigheid-en-reputatie-centraal-bij-prepack/",
    linkLabel: { en: "Read the archive piece", nl: "Lees het archiefstuk" },
    image: "/assets/insights/insight-06-prepack.jpg",
    imageAlt: { en: "Credibility and reputation in pre-pack restructurings", nl: "Geloofwaardigheid en reputatie bij pre-pack herstructureringen" },
  },
];
