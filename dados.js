let dados = [
  {
    titulo: "Brasil",
    descricao: "O Brasil, maior país da América do Sul, é uma nação rica em diversidade cultural, étnica e natural. Com uma extensão territorial vasta, abriga a maior floresta tropical do mundo, a Amazônia, e uma costa extensa banhada pelo Oceano Atlântico. Sua história, marcada por miscigenação e influências de diversas culturas, resultou em uma sociedade vibrante e cheia de contrastes. O país é reconhecido mundialmente por sua rica biodiversidade, pela paixão pelo futebol e pelo famoso Carnaval.",
    capital: "Brasília",
    idioma: "Português",
    moeda: "Real",
    link: "https://pt.wikipedia.org/wiki/Brasil"
  },
  {
    titulo: "Estados Unidos",
    descricao: "Os Estados Unidos, uma nação continental localizada na América do Norte, é conhecida por sua diversidade cultural, economia poderosa e influência global. Com uma história marcada por revoluções e inovações, o país abriga megacidades vibrantes, paisagens naturais deslumbrantes e uma rica história cultural.",
    capital: "Washington, D.C.",
    idioma: "Inglês",
    moeda: "Dólar americano",
    link: "https://pt.wikipedia.org/wiki/Estados_Unidos"
  },
  {
    titulo: "Portugal",
    descricao: "Portugal, um país europeu banhado pelo Oceano Atlântico, é famoso por sua rica história, cultura vibrante e paisagens deslumbrantes. Com uma longa tradição marítima, o país possui cidades históricas, praias paradisíacas e uma gastronomia renomada.",
    capital: "Lisboa",
    idioma: "Português",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Portugal"
  },
  {
    titulo: "França",
    descricao: "A França, localizada na Europa Ocidental, é conhecida por sua rica história, arte e cultura. Paris, sua capital, é um dos destinos turísticos mais populares do mundo. O país é famoso por sua gastronomia, vinhos e moda.",
    capital: "Paris",
    idioma: "Francês",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/França"
  },
  {
    titulo: "Alemanha",
    descricao: "A Alemanha, localizada no coração da Europa, é uma potência econômica e industrial. O país é conhecido por sua história rica, sua cultura diversificada e suas paisagens variadas, desde as montanhas dos Alpes até o Mar do Norte.",
    capital: "Berlim",
    idioma: "Alemão",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Alemanha"
  },
  {
    titulo: "Itália",
    descricao: "A Itália, uma península no Mar Mediterrâneo, é famosa por sua história rica, arte renascentista, moda e culinária.",
    capital: "Roma",
    idioma: "Italiano",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Itália"
  },
  {
    titulo: "Espanha",
    descricao: "A Espanha, localizada na Península Ibérica, é conhecida por sua rica história, cultura vibrante e paisagens diversas. Madrid é sua capital e Barcelona é uma cidade cosmopolita.",
    capital: "Madrid",
    idioma: "Espanhol",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Espanha"
  },
  {
    titulo: "Grécia",
    descricao: "A Grécia, berço da civilização ocidental, é famosa por suas ruínas antigas, ilhas paradisíacas e rica história.",
    capital: "Atenas",
    idioma: "Grego",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Grécia"
  },
  {
    titulo: "Rússia",
    descricao: "A Rússia, o maior país do mundo, tem uma história rica e uma cultura diversificada. Moscou é sua capital.",
    capital: "Moscou",
    idioma: "Russo",
    moeda: "Rublo",
    link: "https://pt.wikipedia.org/wiki.org/Rússia"
  },
  {
    titulo: "Canadá",
    descricao: "O Canadá, um país multicultural, é conhecido por suas paisagens espetaculares, incluindo montanhas, florestas e áreas árticas.",
    capital: "Ottawa",
    idioma: "Inglês, Francês",
    moeda: "Dólar canadense",
    link: "https://pt.wikipedia.org/wiki/Canadá"
  },
  {
    titulo: "México",
    descricao: "O México, um país com uma rica história, cultura vibrante e belas praias, é conhecido por sua culinária e arquitetura.",
    capital: "Cidade do México",
    idioma: "Espanhol",
    moeda: "Peso mexicano",
    link: "https://pt.wikipedia.org/wiki/México"
  },
  {
    titulo: "Japão",
    descricao: "O Japão, um arquipélago no Oceano Pacífico, é conhecido por sua cultura única, tecnologia avançada e belas paisagens.",
    capital: "Tóquio",
    idioma: "Japonês",
    moeda: "Iene",
    link: "https://pt.wikipedia.org/wiki/Japão"
  },
  {
    titulo: "Bélize",
    descricao: "Bélize, um país da América Central, é conhecido por suas ruínas maias e pela Grande Barreira de Coral.",
    capital: "Belmopan",
    idioma: "Inglês",
    moeda: "Dólar belizense",
    link: "https://pt.wikipedia.org/wiki/Belize"
  },
  {
    titulo: "Guatemala",
    descricao: "A Guatemala, um país da América Central, é conhecida por suas ruínas maias e paisagens montanhosas.",
    capital: "Cidade da Guatemala",
    idioma: "Espanhol",
    moeda: "Quetzal",
    link: "https://pt.wikipedia.org/wiki/Guatemala"
  },
  {
    titulo: "Peru",
    descricao: "O Peru, lar de Machu Picchu, é conhecido por sua rica história inca e diversidade cultural.",
    capital: "Lima",
    idioma: "Espanhol",
    moeda: "Sol",
    link: "https://pt.wikipedia.org/wiki/Peru"
  },
  {
    titulo: "El Salvador",
    descricao: "El Salvador, um pequeno país da América Central, é conhecido por suas belas praias e ruínas maias.",
    capital: "San Salvador",
    idioma: "Espanhol",
    moeda: "Dólar americano",
    link: "https://pt.wikipedia.org/wiki/El_Salvador"
  },
  {
    titulo: "Honduras",
    descricao: "Honduras, um país da América Central, é conhecido por suas ilhas, florestas tropicais e ruínas maias.",
    capital: "Tegucigalpa",
    idioma: "Espanhol",
    moeda: "Lempira",
    link: "https://pt.wikipedia.org/wiki/Honduras"
  },
  {
    titulo: "Nicarágua",
    descricao: "A Nicarágua, um país da América Central, é conhecida por seus vulcões, lagos e canais.",
    capital: "Manágua",
    idioma: "Espanhol",
    moeda: "Córdoba",
    link: "https://pt.wikipedia.org/wiki/Nicarágua"
  },
  {
    titulo: "Costa Rica",
    descricao: "A Costa Rica, um paraíso ecológico, é conhecida por sua biodiversidade e parques nacionais.",
    capital: "San José",
    idioma: "Espanhol",
    moeda: "Colón",
    link: "https://pt.wikipedia.org/wiki/Costa_Rica"
  },
  {
    titulo: "Panamá",
    descricao: "O Panamá, localizado na América Central, é conhecido pelo Canal do Panamá e sua biodiversidade.",
    capital: "Cidade do Panamá",
    idioma: "Espanhol",
    moeda: "Balboa",
    link: "https://pt.wikipedia.org/wiki/Panamá"
  },
  {
    titulo: "Chile",
    descricao: "O Chile, um país longo e estreito, é conhecido pelos Andes, pelo deserto do Atacama e pela Ilha de Páscoa.",
    capital: "Santiago",
    idioma: "Espanhol",
    moeda: "Peso chileno",
    link: "https://pt.wikipedia.org/wiki/Chile"
  },
  {
    titulo: "Colômbia",
    descricao: "A Colômbia, um país com uma rica biodiversidade, é conhecida por seus cafés, paisagens andinas e cultura vibrante.",
    capital: "Bogotá",
    idioma: "Espanhol",
    moeda: "Peso colombiano",
    link: "https://pt.wikipedia.org/wiki/Colômbia"
  },
  {
    titulo: "Equador",
    descricao: "O Equador, localizado na linha do equador, é conhecido por suas Ilhas Galápagos e pela Amazônia.",
    capital: "Quito",
    idioma: "Espanhol",
    moeda: "Dólar americano",
    link: "https://pt.wikipedia.org/wiki/Equador"
  },
  {
    titulo: "Guiana",
    descricao: "A Guiana, um país da América do Sul, é conhecido por suas florestas tropicais e sua rica biodiversidade.",
    capital: "Georgetown",
    idioma: "Inglês",
    moeda: "Dólar guianense",
    link: "https://pt.wikipedia.org/wiki/Guiana"
  },
  {
    titulo: "Paraguai",
    descricao: "O Paraguai, um país sem litoral na América do Sul, é conhecido por suas missões jesuíticas e pela produção de erva-mate.",
    capital: "Assunção",
    idioma: "Espanhol, Guarani",
    moeda: "Guarani paraguaio",
    link: "https://pt.wikipedia.org/wiki/Paraguai"
  },
  {
    titulo: "Suriname",
    descricao: "O Suriname, um país da América do Sul, é conhecido por suas florestas tropicais e sua diversidade cultural.",
    capital: "Paramaribo",
    idioma: "Neerlandês",
    moeda: "Dólar surinamês",
    link: "https://pt.wikipedia.org/wiki/Suriname"
  },
  {
    titulo: "Argentina",
    descricao: "A Argentina, um país da América do Sul, é conhecida por seus pampas, vinhos e futebol.",
    capital: "Buenos Aires",
    idioma: "Espanhol",
    moeda: "Peso argentino",
    link: "https://pt.wikipedia.org/wiki/Argentina"
  },
  {
    titulo: "Bolívia",
    descricao: "A Bolívia, um país sem litoral na América do Sul, é conhecido pelos Andes, pelo Lago Titicaca e por suas culturas indígenas.",
    capital: "La Paz",
    idioma: "Espanhol, Quechua, Aymara",
    moeda: "Boliviano",
    link: "https://pt.wikipedia.org/wiki/Bolívia"
  },
  {
    titulo: "Alaska",
    descricao: "O Alasca, o maior estado dos Estados Unidos, é conhecido por suas paisagens árticas, aurora boreal e vida selvagem.",
    capital: "Juneau",
    idioma: "Inglês",
    moeda: "Dólar americano",
    link: "https://pt.wikipedia.org/wiki/Alasca"
  },
  {
    titulo: "África do Sul",
    descricao: "A África do Sul é conhecida por sua rica diversidade cultural, paisagens espetaculares, como o Cabo da Boa Esperança, e sua história marcada pela luta contra o apartheid.",
    capital: "Pretória",
    idiomas: "Inglês, Zulu, Xhosa",
    moeda: "Rand",
    link: "https://pt.wikipedia.org/wiki/África_do_Sul"
  },
  {
    titulo: "Egito",
    descricao: "O Egito, berço da civilização antiga, é famoso pelas pirâmides de Gizé, pelo rio Nilo e por sua rica história faraônica.",
    capital: "Cairo",
    idioma: "Árabe",
    moeda: "Libra egípcia",
    link: "https://pt.wikipedia.org/wiki/Egito"
  },
  {
    titulo: "Marrocos",
    descricao: "Marrocos, um país do norte da África, é conhecido por suas cidades imperais, como Marrakesh e Fez, e por sua cultura rica e diversificada.",
    capital: "Rabat",
    idioma: "Árabe, Berber",
    moeda: "Dirham marroquino",
    link: "https://pt.wikipedia.org/wiki/Marrocos"
  },
  {
    titulo: "Quênia",
    descricao: "O Quênia é famoso por seus safáris, onde é possível observar a vida selvagem africana, como leões, elefantes e girafas.",
    capital: "Nairobi",
    idioma: "Inglês, Swahili",
    moeda: "Shilling queniano",
    link: "https://pt.wikipedia.org/wiki/Quênia"
  },
  {
    titulo: "Tanzânia",
    descricao: "A Tanzânia é conhecida pelo Kilimanjaro, a montanha mais alta da África, e pelo Parque Nacional do Serengeti, famoso por suas grandes migrações de animais.",
    capital: "Dodoma",
    idioma: "Swahili, Inglês",
    moeda: "Shilling tanzaniano",
    link: "https://pt.wikipedia.org/wiki/Tanzânia"
  },
  {
    titulo: "Nigéria",
    descricao: "A Nigéria, o país mais populoso da África, é conhecido por sua diversidade cultural e econômica.",
    capital: "Abuja",
    idioma: "Inglês",
    moeda: "Naira",
    link: "https://pt.wikipedia.org/wiki/Nigéria"
  },
  {
    titulo: "Etiópia",
    descricao: "A Etiópia, um dos berços da humanidade, é conhecida por suas antigas igrejas, paisagens montanhosas e rica história.",
    capital: "Adis Abeba",
    idioma: "Amárico",
    moeda: "Birr etíope",
    link: "https://pt.wikipedia.org/wiki/Etiópia"
  },
  {
    titulo: "Tunísia",
    descricao: "A Tunísia, um país do norte da África, é conhecido por suas praias, ruínas romanas e a cidade de Cartago.",
    capital: "Tunis",
    idioma: "Árabe",
    moeda: "Dinar tunisino",
    link: "https://pt.wikipedia.org/wiki/Tunísia"
  },
  {
    titulo: "Namíbia",
    descricao: "A Namíbia é conhecida pelo deserto do Namibe, um dos mais antigos do mundo, e por sua rica vida selvagem.",
    capital: "Windhoek",
    idioma: "Inglês",
    moeda: "Dólar namibiano",
    link: "https://pt.wikipedia.org/wiki/Namíbia"
  },
  {
    titulo: "Austrália",
    descricao: "A Austrália é conhecida por sua vasta extensão, rica biodiversidade, incluindo a Grande Barreira de Coral, e cidades cosmopolitas como Sydney e Melbourne.",
    capital: "Canberra",
    idioma: "Inglês",
    moeda: "Dólar australiano",
    link: "https://pt.wikipedia.org/wiki/Austrália"
  },
  {
    titulo: "Nova Zelândia",
    descricao: "A Nova Zelândia é famosa por suas paisagens naturais exuberantes, como os Alpes do Sul e as paisagens vulcânicas, e por sua cultura Maori.",
    capital: "Wellington",
    idioma: "Inglês, Maori",
    moeda: "Dólar neozelandês",
    link: "https://pt.wikipedia.org/wiki/Nova_Zelândia"
  },
  {
    titulo: "Papua Nova Guiné",
    descricao: "A Papua Nova Guiné é um país insular com uma rica diversidade cultural e linguística, conhecido por suas florestas tropicais e tribos isoladas.",
    capital: "Port Moresby",
    idioma: "Tok Pisin, Inglês",
    moeda: "Kina",
    link: "https://pt.wikipedia.org/wiki/Papua_Nova_Guiné"
  },
  {
    titulo: "Fiji",
    descricao: "Fiji é um arquipélago no Pacífico Sul, conhecido por suas belas praias, resorts de luxo e cultura melanésia.",
    capital: "Suva",
    idioma: "Fijiano, Inglês",
    moeda: "Dólar fijiano",
    link: "https://pt.wikipedia.org/wiki/Fiji"
  },
  {
    titulo: "Ilhas Salomão",
    descricao: "As Ilhas Salomão são um arquipélago no Oceano Pacífico, conhecido por suas belas praias, recifes de coral e cultura melanésia.",
    capital: "Honiara",
    idioma: "Inglês",
    moeda: "Dólar das Ilhas Salomão",
    link: "https://pt.wikipedia.org/wiki/Ilhas_Salomão"
  },
  {
    titulo: "Vanuatu",
    descricao: "Vanuatu é um arquipélago no Pacífico Sul, conhecido por seus vulcões ativos, cultura tradicional e esportes radicais.",
    capital: "Port Vila",
    idioma: "Bislama, Inglês, Francês",
    moeda: "Vatu",
    link: "https://pt.wikipedia.org/wiki/Vanuatu"
  },
  {
    titulo: "Samoa",
    descricao: "Samoa é um arquipélago no Pacífico Sul, conhecido por suas belas praias, cultura polinésia e tradição de dança.",
    capital: "Apia",
    idioma: "Samoano, Inglês",
    moeda: "Tala",
    link: "https://pt.wikipedia.org/wiki/Samoa"
  },
  {
    titulo: "Tonga",
    descricao: "Tonga é um reino polinésio conhecido por suas tradições reais e cultura única.",
    capital: "Nuku'alofa",
    idioma: "Tongan, Inglês",
    moeda: "Paʻanga",
    link: "https://pt.wikipedia.org/wiki/Tonga"
  },
  {
    titulo: "Kiribati",
    descricao: "Kiribati é um país insular composto por 33 atol e ilhas, conhecido por sua cultura marítima e por ser um dos primeiros países a experimentar os efeitos das mudanças climáticas.",
    capital: "Tarawa do Sul",
    idioma: "Gilbertese, Inglês",
    moeda: "Dólar australiano",
    link: "https://pt.wikipedia.org/wiki/Kiribati"
  },
  {
    titulo: "Micronésia",
    descricao: "Os Estados Federados da Micronésia são um país insular composto por mais de 600 ilhas, conhecido por suas belas lagoas e recifes de coral.",
    capital: "Palikir",
    idioma: "Inglês",
    moeda: "Dólar americano",
    link: "https://pt.wikipedia.org/wiki/Estados_Federados_da_Micronésia"
  },
  {
    titulo: "Nauru",
    descricao: "Nauru é uma pequena ilha no Pacífico Sul, conhecida por suas fosfatos e por ser um dos menores países independentes do mundo.",
    capital: "Yaren",
    idioma: "Nauruan, Inglês",
    moeda: "Dólar australiano",
    link: "https://pt.wikipedia.org/wiki/Nauru"
  },
  {
    titulo: "Polinésia Francesa",
    descricao: "A Polinésia Francesa é um território ultramarino da França, conhecido por suas ilhas paradisíacas, como Bora Bora e Tahiti.",
    capital: "Papeete",
    idioma: "Francês, Taitiano",
    moeda: "Franco CFP",
    link: "https://pt.wikipedia.org/wiki/Polinésia_Francesa"
  },
  {
    titulo: "Nova Caledônia",
    descricao: "A Nova Caledônia é um território ultramarino da França no Pacífico Sul, conhecida por suas lagoas, recifes de coral e diversidade cultural.",
    capital: "Nouméa",
    idioma: "Francês",
    moeda: "Franco CFP",
    link: "https://pt.wikipedia.org/wiki/Nova_Caledônia"
  },
  {
    titulo: "China",
    descricao: "A China, uma das civilizações mais antigas do mundo, é conhecida por sua Grande Muralha, culinária diversificada e rápido crescimento econômico.",
    capital: "Pequim",
    idioma: "Mandarim",
    moeda: "Yuan",
    link: "https://pt.wikipedia.org/wiki/China"
  },
  {
    titulo: "Índia",
    descricao: "A Índia é um país diversificado com uma rica história, cultura vibrante, monumentos antigos como o Taj Mahal e uma população numerosa.",
    capital: "Nova Delhi",
    idioma: "Hindi, Inglês",
    moeda: "Rupia",
    link: "https://pt.wikipedia.org/wiki/Índia"
  },
  {
    titulo: "Turquia",
    descricao: "A Turquia é um país transcontinental, com uma rica história que conecta a Europa e a Ásia, conhecido por suas mesquitas, bazares e paisagens diversas.",
    capital: "Ancara",
    idioma: "Turco",
    moeda: "Lira turca",
    link: "https://pt.wikipedia.org/wiki/Turquia"
  },
  {
    titulo: "Vietnã",
    descricao: "Um país do Sudeste Asiático conhecido por sua rica história, culinária deliciosa e paisagens deslumbrantes.",
    capital: "Hanói",
    idioma: "Vietnamita",
    moeda: "Dong",
    link: "https://pt.wikipedia.org/wiki/Vietnã"
  },
  {
    titulo: "Senegal",
    descricao: "Conhecido por suas praias, Dakar e a cultura Wolof.",
    capital: "Dakar",
    idioma: "Francês, Wolof",
    moeda: "Franco CFA",
    link: "https://pt.wikipedia.org/wiki/Senegal"
  },
  {
    titulo: "Uganda",
    descricao: "Lar de gorilas de montanha e chimpanzés.",
    capital: "Kampala",
    idioma: "Inglês, Luganda",
    moeda: "Shilling ugandense",
    link: "https://pt.wikipedia.org/wiki/Uganda"
  },
  {
    titulo: "Coreia do Sul",
    descricao: "Um país moderno e tecnológico, conhecido por sua cultura pop, K-pop e paisagens montanhosas.",
    capital: "Seul",
    idioma: "Coreano",
    moeda: "Won sul-coreano",
    link: "https://pt.wikipedia.org/wiki/Coreia_do_Sul"
  },
  {
    titulo: "Polônia",
    descricao: "A Polônia, um país da Europa Central com uma rica história, é conhecida por suas belas cidades, como Cracóvia e Varsóvia. Com uma cultura vibrante e uma natureza exuberante, a Polônia oferece aos visitantes uma experiência única.",
    capital: "Varsóvia",
    idioma: "Polonês",
    moeda: "Złoty polonês",
    link: "https://pt.wikipedia.org/wiki/Pol%C3%B3nia"
  },
  {
    titulo: "Eslovênia",
    descricao: "A Eslovênia, um pequeno país da Europa, é famoso por suas paisagens montanhosas, lagos cristalinos e cidades históricas. Com uma natureza exuberante e uma cultura rica, a Eslovênia é um destino turístico cada vez mais popular.",
    capital: "Liubliana",
    idioma: "Esloveno",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Eslov%C3%AAnia"
  },
  {
    titulo: "Eslováquia",
    descricao: "A Eslováquia, um país da Europa Central com uma rica história e cultura, é conhecida por suas belas paisagens montanhosas, castelos medievais e cidades charmosas. Bratislava, a capital, é uma cidade vibrante e cosmopolita.",
    capital: "Bratislava",
    idioma: "Eslovaco",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Eslov%C3A1quia"
  },
  {
    titulo: "Madagascar",
    descricao: "Madagascar, uma ilha na costa leste da África, é conhecida por sua biodiversidade única, com muitas espécies de plantas e animais que não existem em nenhum outro lugar do mundo. A ilha oferece paisagens deslumbrantes, como praias, florestas tropicais e montanhas.",
    capital: "Antananarivo",
    idioma: "Malgaxe",
    moeda: "Ariary malgaxe",
    link: "https://pt.wikipedia.org/wiki/Madagascar"
  },
  {
    titulo: "Letônia",
    descricao: "A Letônia, um país báltico com uma rica história, é conhecida por suas belas cidades medievais, como Riga, e por suas paisagens naturais, como as dunas de areia e os lagos. A Letônia é um país com uma forte identidade cultural.",
    capital: "Riga",
    idioma: "Letão",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Let%C3%B3nia"
  },
  {
    titulo: "Reino Unido",
    descricao: "O Reino Unido, uma ilha no Oceano Atlântico, é conhecido por sua rica história, cultura e tradição. Com cidades vibrantes como Londres, Edimburgo e Belfast, o Reino Unido oferece aos visitantes uma experiência única.",
    capital: "Londres",
    idioma: "Inglês",
    moeda: "Libra esterlina",
    link: "https://pt.wikipedia.org/wiki/Reino_Unido"
  },
  {
    titulo: "Botsuana",
    descricao: "O Botsuana, um país sem litoral na África Austral, é conhecido por seus vastos desertos, savanas e reservas naturais. O país é um destino popular para safáris e para observar a vida selvagem.",
    capital: "Gaborone",
    idioma: "Tswana",
    moeda: "Pula",
    link: "https://pt.wikipedia.org/wiki/Botsuana"
  },
  {
    titulo: "Argélia",
    descricao: "A Argélia, o maior país da África, é conhecido por suas paisagens desérticas, montanhas e praias. Com uma rica história e cultura, a Argélia oferece aos visitantes uma experiência única.",
    capital: "Argel",
    idioma: "Árabe",
    moeda: "Dinar argelino",
    link: "https://pt.wikipedia.org/wiki/Arg%C3%A9lia"
  },
  {
    titulo: "Guiné-Bissau",
    descricao: "A Guiné-Bissau, um país na costa oeste da África, é conhecido por suas belas praias, manguezais e ilhas. Com uma rica cultura e história, a Guiné-Bissau é um destino turístico emergente.",
    capital: "Bissau",
    idioma: "Português",
    moeda: "Franco CFA",
    link: "https://pt.wikipedia.org/wiki/Guin%C3%A9-Bissau"
  },
  {
    titulo: "San Marino",
    descricao: "San Marino, um dos menores países do mundo, é conhecido por suas muralhas medievais, paisagens montanhosas e vinhos. Com uma rica história e cultura, San Marino é um destino turístico popular.",
    capital: "Cidade de San Marino",
    idioma: "Italiano",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/San_Marino"
  },
  {
    titulo: "Vaticano",
    descricao: "O Vaticano, uma cidade-estado enclavada em Roma, é o centro da Igreja Católica e a residência oficial do Papa. Com uma rica história e arte, o Vaticano é um destino de peregrinação para milhões de pessoas todos os anos.",
    capital: "Cidade do Vaticano",
    idioma: "Italiano",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Cidade_do_Vaticano"
  },
  {
    titulo: "Jamaica",
    descricao: "A Jamaica, uma ilha no Mar do Caribe, é conhecida por suas belas praias, música reggae e cultura vibrante. Com uma rica história e uma natureza exuberante, a Jamaica é um destino turístico popular.",
    capital: "Kingston",
    idioma: "Inglês",
    moeda: "Dólar jamaicano",
    link: "https://pt.wikipedia.org/wiki/Jamaica"
  },
  {
    titulo: "Somália",
    descricao: "A Somália, um país localizado no Corno de África, é conhecida por sua rica história e cultura. Com uma costa extensa e belas praias, a Somália enfrenta desafios complexos, mas possui um grande potencial turístico.",
    capital: "Mogadíscio",
    idioma: "Somali",
    moeda: "Shilling somali",
    link: "https://pt.wikipedia.org/wiki/Som%C3%A1lia"
  },
  {
    titulo: "Ilhas Cook",
    descricao: "As Ilhas Cook, um território associado à Nova Zelândia no Pacífico Sul, são conhecidas por suas belas praias, recifes de coral e cultura polinésia. Com uma natureza exuberante e um ritmo de vida tranquilo, as Ilhas Cook são um paraíso para os amantes do sol e do mar.",
    capital: "Avarua",
    idioma: "Inglês, Maori das Ilhas Cook",
    moeda: "Dólar neozelandês",
    link: "https://pt.wikipedia.org/wiki/Ilhas_Cook"
  },
  {
    titulo: "Liechtenstein",
    descricao: "Liechtenstein, um pequeno principado da Europa Central, é conhecido por suas paisagens montanhosas, castelos medievais e alta qualidade de vida. Com uma economia forte e uma população pequena, Liechtenstein é um dos países mais ricos do mundo.",
    capital: "Vaduz",
    idioma: "Alemão",
    moeda: "Franco suíço",
    link: "https://pt.wikipedia.org/wiki/Liechtenstein"
  },
  {
    titulo: "Camarões",
    descricao: "O Camarões, um país da África Central, é conhecido por sua rica biodiversidade, com florestas tropicais, savanas e vulcões. Com uma cultura diversificada e uma economia em crescimento, o Camarões é um país com grande potencial.",
    capital: "Yaoundé",
    idioma: "Francês, Inglês",
    moeda: "Franco CFA",
    link: "https://pt.wikipedia.org/wiki/Camar%C3%B5es"
  },
  {
    titulo: "Angola",
    descricao: "Angola, um país na África Austral, é conhecido por sua rica história colonial, belas praias e uma natureza exuberante. Com uma economia em crescimento, Angola está se tornando um destino turístico cada vez mais popular.",
    capital: "Luanda",
    idioma: "Português",
    moeda: "Kwanza",
    link: "https://pt.wikipedia.org/wiki/Angola"
  },
  {
    titulo: "Coreia do Norte",
    descricao: "A Coreia do Norte, um país na Ásia Oriental, é conhecido por seu sistema político único e sua história conturbada. Com uma cultura rica e uma natureza exuberante, a Coreia do Norte é um país com muitas facetas.",
    capital: "Pionyang",
    idioma: "Coreano",
    moeda: "Won norte-coreano",
    link: "https://pt.wikipedia.org/wiki/Coreia_do_Norte"
  },
  {
    titulo: "Moçambique",
    descricao: "Moçambique, um país na costa leste da África, é conhecido por suas belas praias, recifes de coral e uma rica biodiversidade. Com uma história colonial marcada pela luta pela independência, Moçambique está em constante desenvolvimento.",
    capital: "Maputo",
    idioma: "Português",
    moeda: "Metical",
    link: "https://pt.wikipedia.org/wiki/Mo%C3%A7ambique"
  },
  {
    titulo: "Ucrânia",
    descricao: "A Ucrânia, um país da Europa Oriental, é conhecido por sua rica história, cultura e natureza exuberante. Com cidades históricas como Kiev e Lviv, a Ucrânia oferece aos visitantes uma experiência única.",
    capital: "Kiev",
    idioma: "Ucraniano",
    moeda: "Hryvnia ucraniana",
    link: "https://pt.wikipedia.org/wiki/Ucr%C3%A2nia"
  },
  {
    titulo: "Bielorrússia",
    descricao: "A Bielorrússia, um país da Europa Oriental, é conhecido por suas florestas, lagos e arquitetura soviética. Com uma rica história e cultura, a Bielorrússia é um destino turístico cada vez mais popular.",
    capital: "Minsk",
    idioma: "Bielorrusso",
    moeda: "Rublo bielorrusso",
    link: "https://pt.wikipedia.org/wiki/Bielorr%C3%BCssia"
  },
  {
    titulo: "Suíça",
    descricao: "A Suíça, um país da Europa Central, é conhecido por seus Alpes, bancos e chocolate. Com uma alta qualidade de vida e uma natureza exuberante, a Suíça é um destino turístico muito popular.",
    capital: "Berna",
    idioma: "Alemão, Francês, Italiano, Romanche",
    moeda: "Franco suíço",
    link: "https://pt.wikipedia.org/wiki/Su%C3%A8cia"
  },
  {
    titulo: "Romênia",
    descricao: "A Romênia, um país da Europa Oriental, é conhecido por seus castelos medievais, paisagens montanhosas e cultura vibrante. Com uma história rica e uma natureza exuberante, a Romênia oferece aos visitantes uma experiência única.",
    capital: "Bucareste",
    idioma: "Romeno",
    moeda: "Leu romeno",
    link: "https://pt.wikipedia.org/wiki/Rom%C3%AAnia"
  },
  {
    titulo: "Moldávia",
    descricao: "A Moldávia, um país da Europa Oriental, é conhecido por seus vinhos, paisagens rurais e cultura rica. Com uma história marcada por diversas ocupações, a Moldávia é um país com uma identidade cultural forte.",
    capital: "Chisinau",
    idioma: "Romeno",
    moeda: "Leu moldavo",
    link: "https://pt.wikipedia.org/wiki/Mold%C3%A1via"
  },
  {
    titulo: "Dinamarca",
    descricao: "A Dinamarca, um país escandinavo, é conhecida por sua capital, Copenhagen, e por suas paisagens naturais, como fiordes e praias. Com uma alta qualidade de vida e um sistema social bem desenvolvido, a Dinamarca é um país muito atraente.",
    capital: "Copenhague",
    idioma: "Dinamarquês",
    moeda: "Coroa dinamarquesa",
    link: "https://pt.wikipedia.org/wiki/Dinamarca"
  },
  {
    titulo: "Escócia",
    descricao: "A Escócia, uma das nações constituintes do Reino Unido, é famosa por suas paisagens montanhosas, lagos, e a cidade de Edimburgo. Com uma rica história e cultura, a Escócia é conhecida por seu uísque, seus kilts e seus castelos.",
    capital: "Edimburgo",
    idioma: "Inglês, gaélico escocês",
    moeda: "Libra esterlina",
    link: "https://pt.wikipedia.org/wiki/Escócia"
  },
  {
    titulo: "Irlanda do Norte",
    descricao: "A Irlanda do Norte, uma das nações constituintes do Reino Unido, é conhecida por sua história turbulenta e sua cultura única. Belfast é a capital, e a região é famosa por sua natureza exuberante e pelos Giant's Causeway.",
    capital: "Belfast",
    idioma: "Inglês, irlandês",
    moeda: "Libra esterlina",
    link: "https://pt.wikipedia.org/wiki/Irlanda_do_Norte"
  },
  {
    titulo: "País de Gales",
    descricao: "O País de Gales, uma das nações constituintes do Reino Unido, é conhecido por suas paisagens montanhosas, castelos e língua céltica, o galês. Cardiff é a capital, e a região é famosa por suas tradições e cultura únicas.",
    capital: "Cardiff",
    idioma: "Inglês, galês",
    moeda: "Libra esterlina",
    link: "https://pt.wikipedia.org/wiki/País_de_Gales"
  },
  {
    titulo: "Holanda",
    descricao: "A Holanda, oficialmente Reino dos Países Baixos, é conhecida por seus moinhos de vento, tulipas e canais. Amsterdã é a capital, e o país é famoso por sua tolerância e cultura liberal.",
    capital: "Amsterdã",
    idioma: "Neerlandês",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Países_Baixos"
  },
  {
    titulo: "Guiana Francesa",
    descricao: "A Guiana Francesa, um departamento ultramarino da França, é localizada na América do Sul. É conhecida por suas florestas tropicais, sua capital Cayenne e o Centro Espacial de Guiana.",
    capital: "Cayenne",
    idioma: "Francês",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Guiana_Francesa"
  },
  // ... continue adicionando os demais países ...
  {
    titulo: "Croácia",
    descricao: "A Croácia, um país da Europa, é conhecida por suas belas praias, ilhas e cidades históricas como Dubrovnik. A Croácia é um destino turístico popular, especialmente para aqueles que buscam sol, mar e história.",
    capital: "Zagreb",
    idioma: "Croata",
    moeda: "Kuna",
    link: "https://pt.wikipedia.org/wiki/Croácia"
  },
  {
    titulo: "Zâmbia",
    descricao: "A Zâmbia, um país sem litoral na África Austral, é conhecida por suas cataratas, como as Cataratas Vitória, e por sua vida selvagem. É um destino popular para safáris e ecoturismo.",
    capital: "Lusaka",
    idioma: "Inglês",
    moeda: "Kwacha",
    link: "https://pt.wikipedia.org/wiki/Z%C3%A2mbia"
  },
  {
    titulo: "Níger",
    descricao: "O Níger, um país sem litoral na África Ocidental, é conhecido por seu deserto do Saara e sua cultura tuaregue. É um país com uma grande diversidade cultural e natural.",
    capital: "Niamey",
    idioma: "Francês, Hausa",
    moeda: "Franco CFA",
    link: "https://pt.wikipedia.org/wiki/N%C3%ADger"
  },
  {
    titulo: "Tailândia",
    descricao: "A Tailândia, um país do Sudeste Asiático, é conhecida por suas belas praias, templos budistas e culinária saborosa. Bangkok é a capital, e o país é um destino turístico muito popular.",
    capital: "Bangkok",
    idioma: "Tailandês",
    moeda: "Baht tailandês",
    link: "https://pt.wikipedia.org/wiki/Tail%C3%A2ndia"
  },
  {
    titulo: "Sudão",
    descricao: "O Sudão, um país da África, é conhecido por sua rica história e cultura. Com uma área vasta, o Sudão abriga diversas paisagens, desde desertos até savanas.",
    capital: "Cartum",
    idioma: "Árabe",
    moeda: "Libra sudanesa",
    link: "https://pt.wikipedia.org/wiki/Sud%C3%A3o"
  },
  {
    titulo: "Sudão do Sul",
    descricao: "O Sudão do Sul, um país relativamente novo na África, é conhecido por suas paisagens diversas, incluindo savanas e pântanos. Juba é a capital.",
    capital: "Juba",
    idioma: "Inglês",
    moeda: "Libra sul-sudanesa",
    link: "https://pt.wikipedia.org/wiki/Sud%C3%A3o_do_Sul"
  },
  {
    titulo: "Arábia Saudita",
    descricao: "A Arábia Saudita, um país da Península Arábica, é conhecido por suas vastas reservas de petróleo e por Meca, a cidade sagrada do Islã. É um país com uma rica história e cultura.",
    capital: "Riad",
    idioma: "Árabe",
    moeda: "Riyal saudita",
    link: "https://pt.wikipedia.org/wiki/Ar%C3%A1bia_Saudita"
  },
  {
    titulo: "Irã",
    descricao: "O Irã, um país no Oriente Médio, é conhecido por sua rica história, cultura e civilização. Teerã é a capital, e o país é famoso por seus tapetes, sua arquitetura e sua culinária.",
    capital: "Teerã",
    idioma: "Persa",
    moeda: "Rial iraniano",
    link: "https://pt.wikipedia.org/wiki/Ir%C3%A3"
  },
  {
    titulo: "Emirados Árabes Unidos",
    descricao: "Os Emirados Árabes Unidos, um país no Oriente Médio, são conhecidos por seus arranha-céus luxuosos, shoppings e resorts de alto padrão. Dubai é a cidade mais conhecida, e o país é um importante centro financeiro.",
    capital: "Abu Dhabi",
    idioma: "Árabe",
    moeda: "Dirham dos Emirados Árabes Unidos",
    link: "https://pt.wikipedia.org/wiki/Emirados_Árabes_Unidos"
  },
  {
    titulo: "Uzbequistão",
    descricao: "O Uzbequistão, um país da Ásia Central, é conhecido por sua rica história, especialmente pela Rota da Seda, e por suas belas cidades antigas, como Samarcanda e Bukhara.",
    capital: "Tashkent",
    idioma: "Uzbeque",
    moeda: "Sum",
    link: "https://pt.wikipedia.org/wiki/Uzbequistão"
  },
  {
    titulo: "Trindade e Tobago",
    descricao: "Trindade e Tobago é um país insular no Mar do Caribe, conhecido por suas belas praias, recifes de coral e natureza exuberante. A capital, Porto de Espanha, está localizada em Trindade.",
    capital: "Porto de Espanha",
    idioma: "Inglês",
    moeda: "Dólar de Trindade e Tobago",
    link: "https://pt.wikipedia.org/wiki/Trindade_e_Tobago"
  },
  {
    titulo: "Israel",
    descricao: "Israel, um país no Oriente Médio, é conhecido por sua rica história, religião e cultura. Jerusalém é a capital, e o país é um importante centro religioso para judeus, cristãos e muçulmanos.",
    capital: "Jerusalém",
    idioma: "Hebraico",
    moeda: "Novo shekel",
    link: "https://pt.wikipedia.org/wiki/Israel"
  },
  {
    titulo: "Palestina",
    descricao: "A Palestina é um território na Ásia Ocidental, com uma longa história e cultura. A Cisjordânia e a Faixa de Gaza são os principais territórios palestinos.",
    capital: "Ramallah (Cisjordânia)",
    idioma: "Árabe",
    moeda: "Novo shekel (Cisjordânia), Shekel israelense (Faixa de Gaza)",
    link: "https://pt.wikipedia.org/wiki/Palestina"
  },
  {
    titulo: "Mali",
    descricao: "O Mali, um país da África Ocidental, é conhecido por sua rica cultura, história e paisagens desérticas. Timbuktu é uma das cidades mais famosas.",
    capital: "Bamako",
    idioma: "Francês, Bambara",
    moeda: "Franco CFA",
    link: "https://pt.wikipedia.org/wiki/Mali"
  },
  {
    titulo: "Venezuela",
    descricao: "A Venezuela, um país da América do Sul, é conhecida por suas reservas de petróleo, suas belas praias e o Salto Ángel, a maior cachoeira do mundo.",
    capital: "Caracas",
    idioma: "Espanhol",
    moeda: "Bolívar Soberano",
    link: "https://pt.wikipedia.org/wiki/Venezuela"
  },
  {
    titulo: "Turcomenistão",
    descricao: "O Turcomenistão, um país da Ásia Central, é conhecido por suas reservas de gás natural e por sua capital, Ashgabat, uma das cidades mais modernas da Ásia Central.",
    capital: "Ashgabat",
    idioma: "Turcomano",
    moeda: "Manat turcomeno",
    link: "https://pt.wikipedia.org/wiki/Turcomenistão"
  },
  {
    titulo: "Afeganistão",
    descricao: "O Afeganistão, um país no Oriente Médio, é conhecido por sua história turbulenta e paisagens montanhosas. Cabul é a capital.",
    capital: "Cabul",
    idioma: "Pashto, Dari",
    moeda: "Afegani",
    link: "https://pt.wikipedia.org/wiki/Afeganistão"
  },
  {
    titulo: "Áustria",
    descricao: "A Áustria, um país da Europa Central, é conhecido por sua rica história musical, seus Alpes e sua capital, Viena.",
    capital: "Viena",
    idioma: "Alemão",
    moeda: "Euro",
    link: "https://pt.wikipedia.org/wiki/Áustria"
  },
  {
    titulo: "Zimbábue",
    descricao: "O Zimbábue, um país da África Austral, é conhecido por suas cataratas, como as Cataratas Vitória, e por sua rica fauna e flora.",
    capital: "Harare",
    idioma: "Inglês, Shona, Ndebele",
    moeda: "Dólar zimbabuano",
    link: "https://pt.wikipedia.org/wiki/Zimbábue"
  },
  {
    titulo: "Albânia",
    descricao: "A Albânia, um país nos Balcãs, é conhecida por suas paisagens montanhosas, praias e ruínas antigas.",
    capital: "Tirana",
    idioma: "Albanês",
    moeda: "Lek",
    link: "https://pt.wikipedia.org/wiki/Albânia"
  },
  {
    titulo: "Bósnia e Herzegovina",
    descricao: "A Bósnia e Herzegovina é um país nos Balcãs, conhecido por sua rica história e cultura, marcada por diversas influências. Sarajevo é a capital.",
    capital: "Sarajevo",
    idioma: "Bósnio, Croata, Sérvio",
    moeda: "Marco convertível",
    link: "https://pt.wikipedia.org/wiki/Bósnia_e_Herzegovina"
  },
  {
    titulo: "Iêmen",
    descricao: "O Iêmen, um país na Península Arábica, é conhecido por sua longa história, sua arquitetura islâmica e suas paisagens desérticas. Sanaa é a capital.",
    capital: "Sanaa",
    idioma: "Árabe",
    moeda: "Rial iemenita",
    link: "https://pt.wikipedia.org/wiki/Iêmen"
  },
  {
    titulo: "Belize",
    descricao: "Belize, um país da América Central, é conhecido por suas florestas tropicais, recifes de coral e ruínas maias. Belmopan é a capital.",
    capital: "Belmopan",
    idioma: "Inglês",
    moeda: "Dólar belizense",
    link: "https://pt.wikipedia.org/wiki/Belize"
  }
];
