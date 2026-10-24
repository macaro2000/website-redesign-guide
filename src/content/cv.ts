// All text from marioacaro.net, typos and character encoding corrected.
const IMG = "https://www.marioacaro.net/";

export type Entry = {
  date?: string;
  title: string;
  italic?: boolean;
  href?: string;
  detail?: string;
  note?: string;
  img?: string;
  imgAlt?: string;
};

export type Group = { heading?: string; entries: Entry[] };

export const person = {
  name: "Mario A. Caro",
  email: "mariocaro@visualcultures.net",
  cv: "https://www.marioacaro.net/CaroCV2020.pdf",
  bio: "Mario A. Caro is a researcher, curator, and critic of contemporary art, having published widely on the history, theory, and criticism of contemporary Indigenous arts. His work within the academy complements his engagements with Indigenous communities to focus on community-led art production and exhibition practices.",
  roles: [
    { title: "Former President and Honorary Member", org: "Res Artis", href: "http://resartis.org/en/", img: IMG + "signature%20bug.gif" },
    { title: "Core Organizer of Caribbean Cultural Platform; Member of the Board", org: "Tilting Axis", href: "https://tiltingaxis.org/", img: IMG + "tilting%20axis_300.png" },
    { title: "Moving Triennale 2014", org: "Moving Triennale", href: "http://movingtriennale.com/?p=2367", img: IMG + "Moving%20Triennale%202014.jpg" },
    { title: "Res Artis General Meeting, Tokyo 2012", org: "Res Artis Tokyo", href: "http://www.resartis2012tokyo.com/en/index.html", img: IMG + "resartis.jpg" },
  ],
};

export const education: Entry[] = [
  {
    date: "2010",
    title: "Ph.D. in Cultural Analysis, University of Amsterdam",
    detail: "Thesis — “The Native as Image: Art History, Nationalism, and Decolonizing Aesthetics.”",
    href: "https://www.academia.edu/8180031",
    img: IMG + "diss%20cover.jpg",
    imgAlt: "Dissertation cover, The Native as Image",
  },
  { date: "1997", title: "Master of Arts in Visual and Cultural Studies, University of Rochester", href: "http://www.rochester.edu/College/AAH/VCS/index.htm" },
  { date: "1992", title: "Bachelor of Arts in Art History, Hunter College, City University of New York" },
];

export const executive: Entry[] = [
  { date: "2021–Present", title: "Director of MFA in Studio Arts Program", italic: true, detail: "Institute of American Indian Arts" },
  { date: "2019–2020", title: "Interim Director/Curator", italic: true, detail: "Longhouse Education and Cultural Center" },
  { date: "2015–2016", title: "Associate Director", italic: true, detail: "American Indian and Indigenous Studies Program, Cornell University" },
  { date: "2008–2015", title: "President", italic: true, detail: "Res Artis: Worldwide Network of Art Residencies" },
];

export const curating: Entry[] = [
  { date: "10/6–11/2/2024", title: "HeARTbeat of Turtle Island: NDN Radical Imagination", italic: true, detail: "American Indian Center, Chicago", note: "Curated exhibition featuring NDN Radical Imagination 2022 awardees." },
  { date: "5/6–11/2/2023", title: "Beyond Mastery: IAIA MFA in Studio Arts Thesis Exhibition 2023", italic: true, detail: "Container and Coe Center, Santa Fe, NM", note: "Exhibition featuring the work of the MFA class of 2023." },
  { date: "7/30–10/15/2019", title: "Ancestral Women, Contemporary Voices: Art from the Great Lakes", italic: true, detail: "Evergreen Gallery, Olympia, Washington", note: "Hosted and modified a traveling exhibition featuring art representing the twelve Native tribes in Wisconsin, adding works by artists from the region now living in Washington State." },
  { date: "4/13–6/30/2019", title: "Joe David — Tla-Kish-Wha-Toa — Stands With Chiefs", italic: true, detail: "Evergreen Gallery, Olympia, Washington", note: "Curated solo exhibition of Joe David, a master Nuu-chah-nulth sculptor who engages current socio-ecological conditions by using traditional forms.", img: IMG + "JoeDavid_E_250.jpg", imgAlt: "Joe David exhibition poster" },
  { date: "1/21–3/29/2019", title: "Northwest Legacy: A Selection of Prints from the Paul Nicholson and Helen Carlson Collection", italic: true, detail: "Evergreen State College, Olympia, Washington", note: "Curated an exhibition of prints exemplifying Northwest traditional abstraction.", img: IMG + "NWLegacy_Poster%20OL.jpg", imgAlt: "NW Legacy exhibition poster" },
  { date: "10/26–12/15/2018", title: "Teachings of the Tree People", italic: true, detail: "Evergreen Gallery, Olympia, Washington", note: "Curated an exhibition of contemporary fiber arts by 57 Native artists from the Pacific Rim.", img: IMG + "TreePeople_E-Invitation.jpg", imgAlt: "Teachings of the Tree People invitation" },
  { date: "8/26–12/10/2017", title: "Tears of Duk’WibahL", italic: true, detail: "Evergreen Gallery, Olympia, Washington", note: "Co-curated, with Linley Logan, an exhibition of contemporary art by Native American, Alaska Native, Native Hawaiian, First Nations, and Māori artists.", img: IMG + "small%20poster.jpg", imgAlt: "Tears of Duk’WibahL poster" },
  { date: "2008–2009", title: "Alaska House, New York", italic: true, detail: "109 Mercer St., Soho, New York City", note: "Curator of Contemporary Indigenous Arts at a gallery dedicated to Alaska Native arts.", img: IMG + "AHNY_Logo_72dpi_RGB.jpg", imgAlt: "Alaska House New York logo" },
  { date: "3/30/2007", title: "James Luna, Fire, Movement, Water and Voices", italic: true, detail: "34th Annual Meeting of the Midwest Art History Society, Indianapolis", note: "Collaborated in the programming of work by performance artist James Luna." },
  { date: "11/12–12/8/2006", title: "What Comes Naturally: Bruce Cook and Anna Hoover", italic: true, detail: "Daybreak Star, Seattle, Washington", note: "Curated an exhibition of contemporary Indigenous art." },
  { date: "2/9/2006", title: "Wood, Paper, Glass", italic: true, detail: "Squaxin Island Museum, Shelton, Washington", note: "Co-curated an exhibition of Indigenous art from Ford Foundation workshops." },
  { date: "5/23–29/2005", title: "Ford Foundation Printmaking Workshop with Melanie Yazzie", italic: true, detail: "Longhouse Education and Cultural Center, Olympia, Washington", note: "Assisted with programming and execution of workshop for Indigenous artists." },
  { date: "4/17/2004", title: "Indigenous Cinema: Native Women and Filmmaking", italic: true, detail: "Santa Barbara Museum of Art", note: "Curated film program and moderated panel discussion addressing issues relevant to contemporary Native women filmmakers." },
  { date: "4/8–5/3/2003", title: "Colonial Visions", italic: true, detail: "The Evergreen State College", note: "Curated exhibition featuring installations by Karen K. Kosasa and Marie Watt." },
  { date: "3/26/2003", title: "Hitéemlkiliiksix “Within the Circle of the Rim”: Nations Gathering on Common Ground", italic: true, detail: "City University of New York, New York City", note: "Installed exhibition." },
  { date: "2002–2004", title: "Hitéemlkiliiksix “Within the Circle of the Rim”: Nations Gathering on Common Ground", italic: true, detail: "Traveling exhibition", note: "Co-curated traveling exhibition featuring seventy-one artists from the Pacific Rim, which toured venues across the U.S. and ended its tour in New Zealand/Aotearoa." },
];

export const teaching: Entry[] = [
  { date: "2021–Present", title: "Institute of American Indian Arts, Santa Fe, NM", detail: "Professor of Indigenous Cultural Analysis" },
  { date: "2017–2022", title: "Massachusetts Institute of Technology", href: "http://act.mit.edu/people/lecturers/mario-a-caro/", detail: "Lecturer in Art, Culture, and Technology Graduate Program" },
  { date: "2017–2018", title: "Santa Clara University, Santa Clara, CA", detail: "Lecturer in Art History" },
  { date: "2011–2014", title: "John W. Draper Interdisciplinary Program in Humanities and Social Thought, New York University", href: "http://draper.as.nyu.edu/", detail: "Assistant Professor / Fellow teaching contemporary art theory and criticism" },
  { date: "Spring 2011", title: "Massachusetts Institute of Technology", href: "http://act.mit.edu/people/lecturers/mario-a-caro/", detail: "Lecturer in Art, Culture, and Technology Graduate Program" },
  { date: "2009–2011", title: "The City University of New York", href: "http://www.cuny.edu/", detail: "Lecturer in Art History" },
  { date: "2005–2007", title: "Indiana University–Purdue University, Indianapolis", href: "http://www.iupui.edu/", detail: "Public Scholar of Contemporary Art, Art History and Museum Studies" },
  { date: "2004–2005", title: "Otis College of Art and Design", href: "http://www.otis.edu/", detail: "Lecturer of Contemporary Art Theory" },
  { date: "2000–2004", title: "The Evergreen State College", detail: "Assistant Professor of Visual Studies" },
  { date: "2000–2002", title: "United States Open University", detail: "Instructor" },
  { date: "1999–2000", title: "Wichita State University", detail: "Visiting Professor of Art History" },
  { date: "Spring 1999", title: "State University of New York at Buffalo", detail: "Visiting Professor in Art Department and Art History Department" },
];

export const syllabi: Group[] = [
  {
    heading: "Indiana University–Purdue University",
    entries: [
      { title: "Visual Culture: An Introduction", href: "http://academic.evergreen.edu/c/carom/VC.htm" },
      { title: "Issues in Public Art", href: "http://academic.evergreen.edu/c/carom/public.htm" },
      { title: "Museum Ethics", href: "http://academic.evergreen.edu/c/carom/ethics.htm" },
      { title: "The Art of Curating", href: "http://academic.evergreen.edu/c/carom/curating.htm" },
    ],
  },
  {
    heading: "Otis College of Art and Design",
    entries: [
      { title: "Contemporary Indigenous Art", href: "http://academic.evergreen.edu/c/carom/cia.htm" },
      { title: "Contemporary Non-Western Art", href: "http://academic.evergreen.edu/c/carom/cnw.htm" },
    ],
  },
  {
    heading: "The Evergreen State College",
    entries: [
      { title: "Intersections of Culture", href: "http://academic.evergreen.edu/curricular/intersections/" },
      { title: "Difference and Desire: Sex and Race in Society, Medicine, and Film", href: "http://www.visualcultures.net/Difference%20and%20Desire.doc" },
      { title: "The Politics of Sin and Punishment", href: "http://academic.evergreen.edu/curricular/sinpunish/home.htm" },
      { title: "Theatre Laboratorium: Body/Sex — Space/Place — Voice/Text", href: "http://192.211.16.13/curricular/ds2k/read.html" },
    ],
  },
];

export const publications: Group[] = [
  {
    heading: "Author",
    entries: [
      { date: "2025", title: "“Indexicality as Kinship: The Relationality of Native Photography.”", detail: "In *Indigenous Identities: Here, Now & Always*. Ed. Jaune Quick-to-See Smith. New Brunswick: Zimmerli Art Museum, 2025." },
      { date: "2025", title: "“The Venice Indigenous Arts School.”", detail: "In *Jeffrey Gibson: The Space in Which to Place Me*. Ed. Abigail Winograd and Christian Ayne Crouch. New York, Portland, Hudson, Santa Fe, Annandale-on-Hudson: DelMonico Books, Portland Art Museum, BIG NDN Press, SITE Santa Fe, Bard Center for Indigenous Studies, 2025." },
      { date: "2024", title: "先住民の現代アートの到来！ (Contemporary Indigenous Art Has Arrived!)", detail: "“Contemporary Art by Indigenous Peoples,” *Bijutsu Techo* 76, no. 1102 (2024): 134–145." },
      { date: "2019", title: "“What Shall We Do with the Bodies? Reconsidering the Archive in the Aftermath of Fraud.”", href: "https://www.academia.edu/61899261/What_Shall_We_Do_with_the_Bodies_Reconsidering_the_Archive_in_the_Aftermath_of_Fraud", detail: "*American Indian Culture and Research Journal* (2019) 43 (4): 1–8.", img: IMG + "AICRJ.jpg", imgAlt: "American Indian Culture and Research Journal cover" },
      { date: "2019", title: "“The Returning Tide.”", href: "https://www.academia.edu/42835561/_The_Returning_Tide._In_Tears_of_Duk_WibahL_Internationial_Gathering_of_Indigenous_Visual_Artists_of_the_Pacific_Rim._Eds._Mario_A._Caro_Tina_Kuckkahn-Miller_and_Laura_VerMeullen_Olympia_WA_House_of_Welcome_Publishing_2019", detail: "In *Tears of Duk’WibahL: International Gathering of Indigenous Visual Artists of the Pacific Rim*. Eds. Mario A. Caro, Tina Kuckkahn-Miller, and Laura VerMeulen. Olympia, WA: House of Welcome Publishing, 2019.", img: IMG + "Tears.jpg", imgAlt: "Tears of Duk’WibahL book cover" },
      { date: "2016", title: "“Dialectic Dialoguing: Representing an Indigenous Avant-Garde in the Museum.”", href: "https://www.academia.edu/30562330/Dialectic_Dialoguing_Representing_an_Indigenous_Avant-Garde_in_the_Museum", detail: "In *Without Boundaries: Visual Conversations*. Anchorage: Anchorage Museum of Art, 2016.", img: IMG + "without.jpg", imgAlt: "Without Boundaries catalogue cover" },
      { date: "2014", title: "“Manufacturing Nostalgia: Trauma, Tradition, and Nationalism.”", href: "https://www.academia.edu/9285291", detail: "In *Mother/Land*. Ed. Machiko Harada. Kurumaya Museum, 2014.", img: IMG + "2014-11-20_185538.jpg", imgAlt: "Mother/Land catalogue cover" },
      { date: "2011", title: "“Owning the Image: Indigenous Arts since 1990.”", href: "https://www.academia.edu/1467012", detail: "In *Manifestations: New Native Art Criticism*. Ed. Nancy Marie Mithlo. Santa Fe: Institute of American Indian Arts, 2011.", img: IMG + "manifestations.jpg", imgAlt: "Manifestations book cover" },
      { date: "2008", title: "Review of *About Face: Self-Portraits by Native American, First Nations, and Inuit Artists*", href: "https://www.academia.edu/215452", detail: "By Zena Pearlstone, Allan J. Ryan, et al. *American Indian Culture and Research Journal*, 32:2 (2008): 109–112." },
      { date: "2008", title: "“The NMAI and the Siting of Identity.”", href: "http://www.amazon.com/gp/product/0803211112", detail: "In *The National Museum of the American Indian: Critical Conversations*. Eds. Amy Lonetree and Amanda J. Cobb. Lincoln: University of Nebraska Press, 2008.", img: IMG + "critical-conversations.jpg", imgAlt: "Critical Conversations book cover" },
      { date: "2008", title: "“It’s in Our Forms.”", detail: "In *It’s in Our Forms: Selected Interviews with Northwest Native Carvers*. Ed. Mario A. Caro. Olympia: House of Welcome Publishing, 2008." },
      { date: "2006", title: "“You Are Here: The National Museum of the American Indian as Site of Identification.”", href: "https://www.academia.edu/215450", detail: "*American Indian Quarterly*, 30:4 (Fall 2006): 543–557." },
      { date: "2002", title: "“Persistent Encounters: Maintaining Indigenous Identity through Cultural Exchange.”", href: "http://academic.evergreen.edu/c/carom/persistent.doc", detail: "In *Hit’emlkiliiksix “Within the Circle of the Rim”: Nations Gathering on Common Ground*. Ed. Mario A. Caro. Seattle: Hemlock Press, 2002." },
      { date: "2002", title: "“Laura Aguilar.”", href: "http://www.amazon.com/gp/product/1558624708", detail: "In *St. James Guide to Hispanic Artists: Profiles of Latino and Latin American Artists*. Ed. Thomas Riggs. Detroit: St. James Press, 2002.", img: IMG + "hispanic.jpg", imgAlt: "St. James Guide to Hispanic Artists cover" },
      { date: "1997", title: "“Desiring the End of Testimonio: Rigoberta Menchú inside the Teaching Machine.”", href: "https://www.academia.edu/217178", detail: "*S — The European Journal for Semiotic Studies*. 9:1 (1997): 11–32." },
      { date: "1997", title: "“Inter-disciplining the Internet: Territory, Desire, and the Virtual Academy.”", detail: "*Brief*. “Voices and Visions of Otherness.” ASCA Press: Amsterdam (1997): 214–216." },
      { date: "1996", title: "“From Subaltern to Organic Intellectual: Re-(e)valuating Rigoberta Menchú’s Testimonio.”", detail: "*Acolit*. Special Issue No. 2, “Can ‘the Subaltern’ Be Read? The Role of the Critic in Postcolonial Studies.” Ed. Tobias Döring, Uwe Schäfer, and Mark Stein. (1996): 9–22." },
    ],
  },
  {
    heading: "Editor",
    entries: [
      { date: "Forthcoming", title: "Contemporary Native American Art", italic: true, detail: "Eds. Jaune Quick-to-See Smith, Neal Ambrose-Smith, and Mario A. Caro. Thames & Hudson (World of Art series)." },
      { date: "2008", title: "It’s in Our Forms: Selected Interviews with Northwest Native Carvers", italic: true, detail: "Ed. Mario A. Caro. Olympia: House of Welcome Publishing, 2008.", img: IMG + "carvers2.jpg", imgAlt: "It’s in Our Forms book cover" },
      { date: "2006", title: "Cultural Luminaries: Illuminating the Past, Lighting the Way into the Future", italic: true, href: "http://www.evergreen.edu/longhouse/catalogs.htm", detail: "Eds. Mario A. Caro, Tina Kuckkahn, and Esmé Ryan. Olympia, Washington: House of Welcome Publishing, 2006.", img: IMG + "cultural.jpg", imgAlt: "Cultural Luminaries catalogue cover" },
      { date: "2002", title: "Hit’emlkiliiksix “Within the Circle of the Rim”: Nations Gathering on Common Ground", italic: true, href: "http://www.evergreen.edu/longhouse/catalogs.htm", detail: "Eds. Mario A. Caro, Tina Kuckkahn, and Laura Grabhorn. Seattle: Hemlock Press, 2002.", img: IMG + "withinthecircle.jpg", imgAlt: "Within the Circle of the Rim catalogue cover" },
      { date: "Founding Editor", title: "In[ ]Visible Culture: An Electronic Journal for Visual Studies", italic: true, href: "http://ivc.lib.rochester.edu/", detail: "ivc.lib.rochester.edu" },
      { date: "1997", title: "S — The European Journal for Semiotic Studies", italic: true, detail: "Special issue on “Territorialism and Desire,” co-edited with Mieke Bal. Volume 9, no. 1 (1997)." },
    ],
  },
];

export const interviews: Entry[] = [
  { date: "2010", title: "We Love Artists: Artist in Residencies around the World", italic: true, href: "http://www.amazon.com/gp/product/4861006694", detail: "Tokyo: BNN Inc. (English and Japanese edition), 2010, 16–17.", img: "http://www.visualcultures.net/welove.jpg", imgAlt: "We Love Artists book cover" },
  { date: "11/2009", title: "Public Art: The Monthly Art Magazine", italic: true, href: "http://www.visualcultures.net/Public%20Art%20Magazine_Korea.PDF", detail: "Korea, November 2009.", img: "http://www.visualcultures.net/publicart.jpg", imgAlt: "Public Art magazine cover" },
  { date: "11/6/2009", title: "The Korea Times", italic: true, href: "http://www.visualcultures.net/KoreaTimes.pdf", detail: "Arts & Living Section, November 6, 2009.", img: IMG + "Gyeonggi.jpg", imgAlt: "Korea Times article" },
];

export const exhibitionsLectures: Entry[] = [
  { date: "8/7/2011", title: "Working Progress: The World of Art Residencies", italic: true, detail: "Shin Minatomura, BankArt, Yokohama Triennial, Japan" },
  { date: "7/24/2011", title: "Traumatic Nostalgia: Themes in Contemporary Indigenous Photography", italic: true, detail: "Yamaguchi Institute for Contemporary Art, Yamaguchi, Japan" },
  { date: "4/9/2011", title: "Accommodating the Other / The Relativity of Cultural Exchange", italic: true, detail: "Chaired panel at TransCultural Exchange Conference, Boston, Massachusetts" },
  { date: "4/4/2011", title: "Essential Aesthetics: Trauma, Nostalgia, and Indigenous Arts in the Pacific", italic: true, href: "http://web2.uconn.edu/aasi/mp-full.php?news_id=45", detail: "Lecture at Humanities Center, University of Connecticut" },
  { date: "12/2/2010", title: "Recuperating Nostalgia: Trauma and Self-Representation in Contemporary Indigenous Art Practices", italic: true, detail: "Lecture at Concordia University, Montreal, Canada" },
  { date: "3/16/2010", title: "Self and Place: Native American Self-Representation", italic: true, detail: "CUNY, Staten Island", note: "Public lecture on Indigenous self-portraiture and landscape." },
  { date: "5/14/2009", title: "The 8th Japanese Artist-in-Residence Network Forum", italic: true, detail: "Tokyo", note: "Delivered keynote address titled “Networking beyond Networks: Art Residencies within a Global Cultural Economy.”" },
  { date: "2008–2009", title: "Alaska House, New York", href: "http://www.alaskahouseny.org/", detail: "Curator of Indigenous Art" },
  { date: "7/21–22/2007", title: "In the Spirit: Northwest Arts Market & Festival", italic: true, detail: "Washington State History Museum", note: "Assisted in the programming and execution of Northwest Native American arts market." },
  { date: "3/30/2007", title: "James Luna, Fire, Movement, Water and Voices", href: "http://academic.evergreen.edu/c/carom/James%20Luna%20Poster.JPG", detail: "34th Annual Meeting of the Midwest Art History Society, Indianapolis", note: "Assisted in the programming of work by performance artist James Luna." },
  { date: "11/12–12/8/2006", title: "What Comes Naturally: Bruce Cook and Anna Hoover", italic: true, detail: "Daybreak Star, Seattle", note: "Curated exhibition of contemporary Indigenous art." },
  { date: "6/17–9/5/2006", title: "The Eternal Thread", italic: true, href: "http://www.maoriart.org.nz/noticeboard/te_roopu/et_warmsprings", detail: "The Museum at Warm Springs, Oregon", note: "Assisted in the installation and opening of exhibition featuring Māori weaving." },
  { date: "2/9/2006", title: "Wood, Paper, Glass", italic: true, detail: "Squaxin Island Museum, Shelton, Washington", note: "Co-curated an exhibition of native art from Ford Foundation workshops by Susan Point, Melanie Yazzie, and Preston Singletary." },
  { date: "4/17/2004", title: "“Indigenous Cinema: Native Women and Filmmaking”", href: "http://academic.evergreen.edu/c/carom/native_poster_rgb.pdf", detail: "Santa Barbara Museum of Art", note: "Organized film screening and panel discussion addressing issues relevant to native women filmmakers." },
  { date: "1/9/2004", title: "“The Native as Image: Art History as a Colonial Discourse”", detail: "University of California at Santa Barbara" },
  { date: "3/26/2003", title: "Hit’emlkiliiksix “Within the Circle of the Rim”: Nations Gathering on Common Ground", italic: true, href: "http://academic.evergreen.edu/c/carom/imagine/travel.htm", note: "Installed exhibition at City University of New York, New York City." },
  { date: "4/8–5/3/2003", title: "Colonial Visions", italic: true, detail: "The Evergreen State College", note: "Curated exhibition featuring installations by Karen K. Kosasa and Marie Watt." },
  { date: "3/8/2002", title: "“Appropriation and/as Postmodernism”", detail: "Lecture at the Whitireia Polytechnic, Porirua, New Zealand/Aotearoa" },
  { date: "2002–2004", title: "Hit’emlkiliiksix “Within the Circle of the Rim”: Nations Gathering on Common Ground", italic: true, href: "http://academic.evergreen.edu/c/carom/imagine/travel.htm", note: "Co-curated traveling exhibition, with Ann McCormack, featuring seventy-one artists from the Pacific Rim, which toured venues across the U.S. and ended its tour in New Zealand/Aotearoa." },
  { date: "6/24–7/2001", title: "asta’bsHil3b axw ti qa’qtu: “The Return to the Swing”", italic: true, href: "http://academic.evergreen.edu/c/carom/imagine/ex.htm", detail: "The Evergreen State College", note: "Curated exhibition of contemporary native art." },
  { date: "6/30/2000", title: "Trish Higgins Gallery, Wichita, Kansas", note: "Participant in roundtable on the relevance of contemporary graffiti-based art." },
  { date: "2/14/2000", title: "“The Aesthetics of Globalization and Native American Art”", detail: "Lecture at The Evergreen State College" },
  { date: "5/21/1999", title: "“Museum Practices and Native American Self-Representation”", detail: "Lecture at Arkansas State University" },
  { date: "5/17/1999", title: "“Art History and the Native as Image”", detail: "Lecture at Wichita State University" },
  { date: "5/3/1999", title: "“Contemporary Native American Art and Nationalism”", detail: "Lecture at Southwest Missouri State University" },
];

export const conferences: Entry[] = [
  { date: "5/1/2020", title: "Curating Indigeneity: Identity, Presence & Narratives", italic: true, detail: "American Association of Art Museum Curators, Seattle, Washington, USA", note: "Part of a panel discussing the challenges of curating Indigenous cultures. The other participants included America Meredith, Nancy Marie Mithlo, and Debra Yepa-Pappan. The panel was organized and moderated by Tahnee Ahtoneharjo-Growingthunder." },
  { date: "12/5/2019", title: "International Indigenous Arts Today: Engaging Parallel Art Worlds", italic: true, detail: "Henry Art Gallery, Seattle, Washington, USA", note: "Public lecture analyzing trends in Indigenous participation at international venues, as part of the Indigenous Curation: Asserting Our Narratives lecture series." },
  { date: "11/15/2019", title: "21st Contemporary Art Biennial Videobrasil: Imagined Communities", italic: true, detail: "Sesc, São Paulo, Brazil", note: "Participant in seminar titled “Resistance and the Image in the Production of the Indigenous World” with Ampam Karakras and Kamikia Kisêdjê." },
  { date: "5/29–31/2019", title: "Tilting Axis 5: Beyond Trends: Decolonisation and Art Criticism", italic: true, detail: "Mémorial ACTe, Guadeloupe", note: "Co-organized conference on decolonizing art criticism. Chaired panel discussion with Dominique Brebion, Jocelyn Valton, Hrag Vartanian." },
  { date: "5/21/2019", title: "Ethnic Fraud and American Indian Representation in Museums", italic: true, detail: "New Orleans", note: "Presentation on museum best practices at the American Alliance of Museums annual conference." },
  { date: "6/18–20/2018", title: "Exploring Sustainability under the Midnight Sun", italic: true, detail: "Rovaniemi, Lapland, Finland", note: "Co-organized Res Artis conference on arts and tourism, which included organizing a panel on “Ethical Tourism and Indigenous Cultures.”" },
  { date: "5/31–6/2/2018", title: "Tilting Axis 4: Caribbean Cultural Ecologies: Connecting Pasts, Presents and Futures", italic: true, detail: "Centro León and Centro Cultural de España, Dominican Republic", note: "Co-organized conference on cultural practices in the Caribbean, hosted by Centro León and Centro Cultural de España and co-organized with the Pérez Art Museum Miami, National Art Gallery of the Bahamas, National Gallery of the Cayman Islands, Fresh Milk Art Platform, and Res Artis." },
  { date: "5/19/2018", title: "Fraud and American Indian Representation in Museums", italic: true, detail: "Native American and Indigenous Studies Association, Los Angeles", note: "Presented lecture titled “What Shall We Do with the Bodies? Reconsidering the Archive in the Aftermath of Fraud,” which called for a re-assessment of Jimmie Durham’s archive." },
  { date: "5/18/2018", title: "The Past, Present, and Future of International Indigenous Curatorial Practices", italic: true, detail: "Native American and Indigenous Studies Association, Los Angeles", note: "Organized panel on the state of international Indigenous curation. Panelists included heather ahtone, Miranda Belarde-Lewis, Megan Tamati-Quennell, and Nancy Marie Mithlo." },
  { date: "4/28/2018", title: "Zooetics", italic: true, detail: "Art, Culture, and Technology Program, Massachusetts Institute of Technology", note: "Respondent for panel on “Creating Indigenous Futures,” in conference on addressing the Anthropocene, which included presentations by Courtney M. Leonard (Shinnecock), Jackson Polys (Tlingit), Kite (Oglala Lakota), and organized by Erin Genia (Sisseton-Wahpeton Oyate)." },
  { date: "9/8/2017", title: "Tai Ahiahi /// Tai Awatea: Curating Contemporary Māori Art", italic: true, detail: "City Gallery Wellington, Wellington, Aotearoa/New Zealand", note: "Presented keynote lecture titled “Curating Culture/Cultural Curating: Community and the Curation of Indigenous Arts” at conference assessing fifty years of Māori curating." },
  { date: "8/24–31/2017", title: "Tears of Duk’WibahL Gathering of Pacific Rim Artists", italic: true, detail: "Longhouse Education and Cultural Center, Olympia, Washington", note: "Helped to organize an international gathering of 109 Native American, Alaska Native, Native Hawaiian, First Nations, Māori and other Pacific Rim Indigenous artists." },
  { date: "5/18/2017", title: "Tilting Axis 3: Curating the Caribbean", italic: true, detail: "National Gallery of the Cayman Islands", note: "Co-organized conference on curatorial practices in the Caribbean, which was co-organized with the National Gallery of the Cayman Islands, Pérez Art Museum Miami, ARC Inc., Fresh Milk Art Platform, and Res Artis. Also chaired panel on “Curating the Archive,” which included Eddie Chambers (Professor of Art and Art History at the University of Texas, Austin), Tiffany Boyle (Curator and co-founder of Mother Tongue, Scotland) and Miguel A. López (Chief curator of TEOR/éTica in San José, Costa Rica)." },
  { date: "5/21/2016", title: "Taking It to the Next Level: Challenges and Promises of Internationalizing Indigenous Art", italic: true, detail: "University of Hawai‘i", note: "Co-organized a two-panel session with Karen Kosasa as part of the Native American and Indigenous Studies Association meeting." },
  { date: "2/19–21/2016", title: "Tilting Axis 2: Caribbean Strategies", italic: true, detail: "Pérez Art Museum, Miami, Florida", note: "Co-organized, along with Fresh Milk and the Pérez Art Museum, a conference considering the sustainability of the cultural ecosystem in the Caribbean." },
  { date: "11/22–23/2015", title: "Microresidence Forum 2015", italic: true, detail: "Saitama, Japan", note: "Keynote speech at Saitama Triennale event on networking as an avant-garde practice." },
  { date: "11/18/2015", title: "Concerning Violence", italic: true, detail: "Cinemapolis, Ithaca, NY", note: "Participated in panel discussion of Göran Hugo Olsson’s film on Frantz Fanon." },
  { date: "3/15/2015", title: "Contemporary Indigenous Art Practices: A Conversation with Dana Claxton and Edgar Heap of Birds", italic: true, detail: "Metropolitan Museum of Art", note: "Moderated a discussion with Dana Claxton and Edgar Heap of Birds as part of the programming for “The Plains Indians: Artists of the Earth and Sky” exhibition." },
  { date: "2/27–28/2015", title: "Tilting Axis: Within and Beyond the Caribbean | Shifting Models of Sustainability and Connectivity", italic: true, detail: "Fresh Milk, Barbados", note: "Co-organized, along with Fresh Milk and the Pérez Art Museum, the first meeting of cultural sector representatives from across the Caribbean to negotiate strategic regional and international alliances." },
  { date: "1/31/2015", title: "Art and/as Cultural Diplomacy", italic: true, detail: "Kyoto Art Center, Japan", note: "Keynote talk at the inaugural meeting of the Artist in Residency Network in Japan." },
  { date: "7/10/2014", title: "Toward an Uncommon Wealth: Building Alliances in Opposition to Colonial Legacies", italic: true, href: "http://bambuser.com/v/4791039#t=1537s", detail: "David Dale Gallery, Glasgow", note: "Moderated panel on contemporary cultural production within the British Commonwealth." },
  { date: "5/9/2014", title: "Asia-Australia-Europe Creative Residency Network", italic: true, href: "http://vimeo.com/101492353", detail: "Melbourne, Australia", note: "Co-organized meeting to initialize cultural exchange network emphasizing access and reciprocity between Asia, Australia, and Europe." },
  { date: "2/20–23/2014", title: "Juror for residency program at Artport Residency", italic: true, detail: "Tel Aviv, Israel" },
  { date: "11/10/2013", title: "Beyond Transnationalism: Considering the Limits of Transnationalism in International Cultural Exchanges", italic: true, href: "http://youtu.be/YiMU4u5IR0o?t=52m53s", detail: "São Paulo, Brazil", note: "Paper presented at the 18th Videobrasil Festival." },
  { date: "10/17/2013", title: "From Patronage to Philanthropy: Preliminary Notes on Theorizing the Financial Support of Contemporary Indigenous Arts", italic: true, detail: "Denver, Colorado", note: "Co-organized panel with Nancy Mithlo at Native American Art Studies Association meeting." },
  { date: "10/11/2013", title: "Networking Networks: Res Artis and Global Cultural Exchange", italic: true, detail: "Boston, MA", note: "Presentation on the networks that constitute the international field of art residencies." },
  { date: "9/21/2013", title: "Indigenizing the Curriculum: MFA in Indigenous Arts", italic: true, detail: "Olympia, WA", note: "Workshop on developing curriculum for new MFA at Evergreen State College." },
  { date: "2/15/2013", title: "Curating beyond Modernism: Indigenous Curation and Contemporary Art", italic: true, detail: "College Art Association, New York", note: "Paper presented at College Art Association as part of panel titled “Engagements between Indigenous and Contemporary Art” chaired by Ian McLean." },
  { date: "10/26–28/2012", title: "New Horizons for Creative Platforms", italic: true, href: "http://www.resartis2012tokyo.com/en/index.html", detail: "Tokyo, Japan", note: "Co-organized bi-annual meeting of Res Artis international network of art residencies." },
  { date: "9/20/2012", title: "The Life and Death of Objects: Museums, Ethics, and Aesthetics", italic: true, note: "Delivered the annual Ezra A. Hale Ethics Lecture at Rochester Institute of Technology." },
  { date: "5/2–5/2012", title: "Residencies: Gates and Bridges", italic: true, detail: "Vienna, Austria", note: "Co-organized conference on Eastern European Residencies with KulturKontakt." },
  { date: "4/3–7/2012", title: "Assessment and Innovation in the Field of Art Residencies", italic: true, detail: "Bellagio, Italy", note: "Co-organized conference on assessment methodologies with the Rockefeller Foundation and the Alliance of Artists Communities." },
  { date: "3/14/2012", title: "Historicizing Contemporary Indigenous Aesthetics", italic: true, note: "Public lecture at Arizona State University." },
  { date: "2/10/2012", title: "Cultural Exchange International Grant", italic: true, detail: "City of Los Angeles", note: "Juror on selection panel for international cultural exchange awards." },
  { date: "8/7/2011", title: "Working Progress: The World of Art Residencies", italic: true, note: "Public lecture at Shin Minatomura, BankArt, Yokohama Triennial, Japan." },
  { date: "7/24/2011", title: "Traumatic Nostalgia: Themes in Contemporary Indigenous Photography", italic: true, note: "Lecture at the Yamaguchi Institute for Contemporary Art, Yamaguchi, Japan." },
  { date: "5/5–7/2011", title: "Essentially Indigenous? Contemporary Native Arts Symposium", italic: true, href: "http://www.visualcultures.net/program.htm", note: "Co-organized with Kathleen Ash-Milby, a symposium on contemporary Indigenous arts at the Smithsonian’s National Museum of the American Indian in New York City." },
  { date: "11/16–20/2009", title: "Essential Aesthetics: An Exploration of Contemporary Indigenous Art and Identity", italic: true, href: "http://sarweb.org/index.php?iarc_contemporary_native_arts", detail: "Santa Fe", note: "Organized a seminar on essentialism and contemporary Indigenous art practices co-sponsored by the National Museum of the American Indian, the School for Advanced Research, and the Institute of American Indian Arts. Participants consisted of international Indigenous scholars and artists." },
  { date: "3/30/2007", title: "34th Annual Meeting of the Midwest Art History Society", italic: true, href: "http://www.mahsonline.org/annual_meeting.asp", detail: "Indianapolis", note: "Co-chaired panel on globalization and presented paper titled “Globalization and the Practices of Art History.”" },
  { date: "9/15/2006", title: "Preserving our Pasts, Telling our Stories: Indians, Museums, and the Management of History", italic: true, href: "http://www.morsechair.uoregon.edu/_pdfs/2005-07%20indigenous/Museum%20Anthropology%20Special%20Section%20Abstracts.pdf", detail: "University of Oregon", note: "Presented paper titled “Rethinking Dioramas: Considering the Production of Space in Tribal Museums.”" },
  { date: "10/28/2005", title: "14th Native American Art Studies Association Conference", italic: true, href: "http://www.nativearts.org/", detail: "Scottsdale, Arizona", note: "Organized panel titled “Museums, Nationalisms, and Representation.”" },
  { date: "2/19/2004", title: "Contemporary Northwest Native, First Nations, and Alaskan Native Arts", italic: true, detail: "College Art Association, Seattle", note: "Co-chaired panel with Marie Watt on professional development issues for contemporary native artists." },
  { date: "11/5–8/2003", title: "13th Native American Art Studies Association Conference", italic: true, href: "http://www.nativearts.org/", detail: "Salem, Massachusetts", note: "Respondent for panel titled “Indigenous Arts on a World Stage.”" },
  { date: "6/23–8/1/2003", title: "Working from Community: American Indian Art and Literature in a Historical and Cultural Context", italic: true, href: "http://academic.evergreen.edu/c/carom/neh", detail: "The Evergreen State College", note: "Organizing committee and faculty for National Endowment for the Humanities Summer Institute." },
  { date: "2002–2005", title: "Hit’emlkiliiksix “Within the Circle of the Rim”: Nations Gathering on Common Ground", italic: true, href: "http://www.evergreen.edu/imagine/", note: "Traveling exhibition featuring seventy-one artists from the Pacific Rim." },
  { date: "7/6–9/2002", title: "Indigenous Art and Heritage Conference", italic: true, href: "http://maori.massey.ac.nz/conference/", detail: "Massey University, Palmerston North, New Zealand/Aotearoa", note: "Presented paper titled “Commodifying Native Objects/Legislating Native Identity: The Essential Native Artist as Producer.”" },
  { date: "3/1–10/2002", title: "Toi Māori and Pataka Museum Festival", italic: true, href: "http://www.maoriart.org.nz/noticeboard/te_atinga/indigenous_gathering", detail: "Wellington, New Zealand/Aotearoa", note: "Lecturer and participant at various workshops and panels." },
  { date: "10/24–27/2001", title: "12th Native American Art Studies Association Conference", italic: true, detail: "Portland Art Museum, Portland, Oregon", note: "Chaired panel titled “The Image as Self: Strategies for Self-representation.”" },
  { date: "6/26–30/2001", title: "Return to the Swing", italic: true, detail: "The Evergreen State College", note: "Assisted in the organization of an institute that brought together sixty-eight native artists from the Pacific Rim. I also co-curated an exhibition featuring the work of the participants." },
  { date: "2/28–3/3/2001", title: "College Art Association", italic: true, detail: "Chicago", note: "Co-chaired a panel with Jolene Rickard titled “The Native Artist as Critical Historian: Aesthetics, Histories, and Nationalisms in a Colonial World.”" },
  { date: "9/3–8/2000", title: "Thirtieth International Congress of the History of Art", italic: true, detail: "Comité International d’Histoire de l’Art, London", note: "Presented paper titled “Testifying Bodies: Nationalisms, Aesthetics and Contemporary Native American Art.”" },
  { date: "4/13–15/2000", title: "Native American/First Nations Studies Conference", italic: true, detail: "Boise State University", note: "Delivered essay titled “Nationalisms and Aesthetics: Globalization and Native American Art.”" },
  { date: "9/30–10/2/1999", title: "Re-Imagining Multiculturalism", italic: true, detail: "Monash University, Australia", note: "Presented essay titled “The Native as Artist: Nationalism, History, and Aesthetics in a Colonial World.”" },
  { date: "6/27–7/30/1999", title: "Getty Summer Institute", italic: true, detail: "University of Rochester", note: "Assisted in organization of institute on Art History and Visual Studies." },
  { date: "6/28–7/31/1998", title: "Getty Summer Institute", italic: true, detail: "University of Rochester", note: "Assisted in organization of institute on Visual and Cultural Studies." },
  { date: "3/8/1998", title: "33rd Annual UCLA Art History Graduate Student Symposium", italic: true, href: "http://www.humnet.ucla.edu/humnet/arthist/ahgsa/symposium98.html", note: "Delivered essay titled “Mobile Borders — Stationary Bodies: Nationalism and Images of the American Native.”" },
  { date: "2/27/1998", title: "College Art Association", italic: true, detail: "Toronto", note: "Presented paper titled “Why Warburg? Why Now? Troping Hybridity in/as Cultural Studies.”" },
  { date: "8/5–9/1996", title: "Territorialism and Desire", italic: true, detail: "Amsterdam School for Cultural Analysis, University of Amsterdam", note: "Co-chaired workshop with Mieke Bal as part of “Culture-Sign-Space” semiotics conference. Presented paper “Writing the Space of the Subaltern: Testimonio and ‘Latin American’ Literature.”" },
  { date: "4/12–13/1996", title: "Can ‘the Subaltern’ Be Read? The Role of the Critic in Postcolonial Studies", italic: true, detail: "University of Frankfurt", note: "Presented paper titled “From Subaltern to Organic Intellectual: Re-(e)valuating Rigoberta Menchú’s Testimonio.”" },
  { date: "6/27–30/1995", title: "The Practice of Cultural Analysis", italic: true, detail: "Amsterdam School for Cultural Analysis, University of Amsterdam", note: "Presented paper titled “Re(al)locating Intention: Negotiating Other Translations in Art History.”" },
  { date: "4/7–8/1995", title: "Mining the Field / Filling the Blanks", italic: true, detail: "Visual and Cultural Studies, University of Rochester", note: "Delivered paper titled “(Dis)Covering the Pre-Columbian Past.”" },
  { date: "2/25/1995", title: "Borders and Cultures International Conference", italic: true, detail: "McGill University", note: "Moderator/respondent for “Borders and Film” panel." },
];

export const fellowships: Entry[] = [
  { date: "2011–2014", title: "Post-doctoral Fellowship", detail: "John W. Draper Interdisciplinary Program in Humanities and Social Thought, New York University" },
  { date: "2003–2004", title: "Research Fellowship", detail: "Center for Chicano Studies, University of California, Santa Barbara" },
  { date: "1998", title: "Research Grant", detail: "Folger Shakespeare Library" },
  { date: "1997", title: "Alternate for the CAA Professional Development Fellowship" },
  { date: "1997", title: "Celeste Hughes Bishop Award" },
];

export const boards: Group[] = [
  {
    heading: "Board Memberships",
    entries: [
      { title: "Indigenous Curatorial Collective", href: "https://icca.art/", detail: "Board of Directors" },
      { title: "Res Artis", href: "http://www.resartis.org/", detail: "Board of Directors; Honorary Board Member. A worldwide network of artist residencies." },
      { title: "First Light Alaska", href: "http://firstlightalaska.com/", detail: "Board of Directors. Non-profit promoting Alaska Native scholars and international Indigenous arts." },
      { title: "Longhouse Education and Cultural Center", href: "http://www.evergreen.edu/longhouse/", detail: "Advisory Board" },
    ],
  },
  {
    heading: "Professional Organizations",
    entries: [
      { title: "American Alliance of Museums", href: "http://www.aam-us.org/" },
      { title: "College Art Association", href: "http://www.collegeart.org/" },
      { title: "Native American Art Studies Association", href: "http://www.nativearts.org/" },
      { title: "Native American and Indigenous Studies Association" },
    ],
  },
];

export const languages =
  "Fluent in Spanish; reading knowledge of French, Dutch, and German. Learning Japanese.";

export const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "executive", label: "Executive" },
  { id: "curating", label: "Curating" },
  { id: "teaching", label: "Teaching" },
  { id: "publications", label: "Publications" },
  { id: "interviews", label: "Interviews" },
  { id: "lectures", label: "Lectures, Conferences & Exhibitions" },
  { id: "fellowships", label: "Fellowships" },
  { id: "boards", label: "Boards & Memberships" },
  { id: "languages", label: "Languages" },
] as const;
