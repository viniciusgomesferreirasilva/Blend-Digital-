import { ServiceItem, NewsArticle, Collaborator } from '../types';

// Direct ESM asset imports so Vite automatically bundles and resolves them
// correctly across dev, production preview, and any base path.
import imgNewsPositioning from '../assets/images/blend_news_positioning_1790389692398.jpg';
import imgNewsAudiovisual from '../assets/images/blend_news_audiovisual_1790389702389.jpg';
import imgStudioAtmosphere from '../assets/images/blend_studio_atmosphere_1790389671195.jpg';

export const COMPANY_INFO = {
  name: 'Blend Digital',
  tagline: 'Marketing & Social Media',
  sloganNews: 'Quem movimenta aparece!',
  definition:
    'A Blend Digital é uma empresa de marketing focada em posicionamento digital estratégico, comunicação e produção audiovisual de alto padrão para negócios que buscam autoridade e vendas.',
  coreMessage:
    'Posicionamento digital é um conjunto de ações conectadas. A estratégia orienta como uma marca se apresenta, cria conteúdo, aparece nos canais digitais e se comunica com seus clientes.',
  // Official contact information updated as instructed:
  whatsappNumber: '5511939417912',
  whatsappDisplay: '+55 11 93941-7912',
  whatsappMessage: 'Olá! Gostaria de conversar com a equipe da Blend Digital sobre o posicionamento da minha empresa.',
  email: 'Blenddigitalmkt@gmail.com',
  hours: 'Segunda a Sexta, das 09h às 18h',
  instagram: 'https://www.instagram.com/blenddigital_?stkn=NWR3d3Q3dG1nMzZk',
  location: 'Santana de Parnaíba e São Paulo, Brasil',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'estrategia-posicionamento',
    number: '01',
    title: 'Estratégia de Posicionamento',
    shortDescription:
      'Definição da identidade do negócio, tom de voz, público e direção estratégica para conectar todas as frentes da marca.',
    fullDescription:
      'O posicionamento não acontece por acaso. Estruturamos os pilares que tornam sua empresa reconhecível, desejada e clara para o mercado, garantindo coerência visual, verbal e comercial em cada ponto de contato.',
    deliverables: [
      'Diagnóstico de marca e análise de mercado',
      'Definição de tom de voz e pilares conceituais',
      'Matriz de diferenciação competitiva',
      'Plano diretor de comunicação integrado',
    ],
    connectedTo: 'Orienta diretamente a identidade visual, o tom no WhatsApp e o conteúdo em redes.',
    iconName: 'Compass',
  },
  {
    id: 'social-media',
    number: '02',
    title: 'Social Media',
    shortDescription:
      'Gestão de redes com foco em consistência, linguagem alinhada aos objetivos da empresa e construção de audiência qualificada.',
    fullDescription:
      'Mais do que postagens frequentes, uma presença social ativa precisa transmitir autoridade imediata. Desenvolvemos cronogramas inteligentes, narrativas envolventes e acompanhamento de engajamento.',
    deliverables: [
      'Planejamento editorial e pautas estratégicas',
      'Criação de design e copywriting para feeds e carrosséis',
      'Alinhamento com lançamentos e momentos comerciais',
      'Análise mensal de performance e comportamento',
    ],
    connectedTo: 'Transforma o posicionamento em presença contínua nos canais cotidianos dos clientes.',
    iconName: 'Share2',
  },
  {
    id: 'identidade-visual-design',
    number: '03',
    title: 'Identidade Visual & Design',
    shortDescription:
      'Construção e refinamento de marcas, manuais, peças institucionais e padrões visuais que transmitem segurança e solidez.',
    fullDescription:
      'A estética da sua empresa é o primeiro filtro de confiança do cliente. Desenhamos sistemas de identidade visual completos, desde tipografia e paleta até aplicações comerciais e templates institucionais.',
    deliverables: [
      'Criação e padronização de logotipos',
      'Guia de estilo, cores institucionais e tipografia',
      'Materiais institucionais e comerciais',
      'Aplicações para redes e suportes digitais',
    ],
    connectedTo: 'Padroniza a apresentação visual nos vídeos, no site e nas redes sociais.',
    iconName: 'Palette',
  },
  {
    id: 'producao-audiovisual',
    number: '04',
    title: 'Produção Audiovisual, Videomaker & Storymaker',
    shortDescription:
      'Captação e edição profissional de vídeos institucionais, reels de alto impacto e cobertura dinâmica para stories.',
    fullDescription:
      'O vídeo é o formato com maior capacidade de retenção e conexão emocional. Nossa equipe atua na direção criativa, captação profissional e edição ágil para reels, institucionais e stories com olhar apurado.',
    deliverables: [
      'Vídeos institucionais e comerciais de alta definição',
      'Roteirização, captação e edição de reels/shorts',
      'Cobertura in loco com foco em storymaker dinâmico',
      'Tratamento de cor e sonorização profissional',
    ],
    connectedTo: 'Dá vida real e movimento ao discurso estratégico da marca.',
    iconName: 'Video',
  },
  {
    id: 'google-presenca-local',
    number: '05',
    title: 'Google & Presença Local',
    shortDescription:
      'Otimização do perfil no Google Meu Negócio, mapas e canais de busca para atrair clientes da região com alta intenção de compra.',
    fullDescription:
      'Quando um cliente precisa do seu produto ou serviço, ele busca no Google. Garantimos que sua empresa seja encontrada com informações atualizadas, fotos de qualidade e excelente reputação local.',
    deliverables: [
      'Configuração e verificação do Google Meu Negócio',
      'Otimização de categorias, palavras-chave e descrições locais',
      'Estratégia para captação de avaliações reais',
      'Presença precisa em aplicativos de mapas e rotas',
    ],
    connectedTo: 'Capta clientes no exato momento da busca e direciona para o WhatsApp comercial.',
    iconName: 'MapPin',
  },
  {
    id: 'whatsapp-scripts-atendimento',
    number: '06',
    title: 'WhatsApp Comercial & Scripts de Atendimento',
    shortDescription:
      'Estruturação de canais de atendimento, mensagens padronizadas e fluxos para converter contatos interessados em clientes.',
    fullDescription:
      'O esforço de marketing só gera resultado se o atendimento fecha a venda. Criamos a rota de atendimento do WhatsApp: catálogo, mensagens rápidas, roteiros de abordagem e técnicas de condução.',
    deliverables: [
      'Configuração de perfil corporativo no WhatsApp Business',
      'Scripts e roteiros para perguntas frequentes e objeções',
      'Modelos de mensagens rápidas e acolhimento',
      'Direcionamento para equipe comercial interna',
    ],
    connectedTo: 'Recebe o tráfego gerado pelas redes, Google e site, convertendo em fechamentos.',
    iconName: 'MessageSquare',
  },
  {
    id: 'criacao-sites-landing-pages',
    number: '07',
    title: 'Criação de Sites & Landing Pages',
    shortDescription:
      'Desenvolvimento de sites institucionais e páginas de conversão que apresentam a empresa com clareza e facilitam o contato com clientes.',
    fullDescription:
      'Ter um site profissional é a base de autoridade de qualquer negócio no ambiente digital. Desenvolvemos páginas institucionais e landing pages objetivas, responsivas para celular e desenhadas para guiar o visitante até o contato comercial.',
    deliverables: [
      'Arquitetura de informação e navegação clara',
      'Layout sob medida alinhado à identidade visual da empresa',
      'Otimização completa para smartphones e tablets',
      'Integração direta com botões de WhatsApp e formulários de contato',
    ],
    connectedTo: 'Centraliza a autoridade institucional e conecta todos os canais da empresa.',
    iconName: 'Globe',
  },
];

export const INITIAL_NEWS_ARTICLES: NewsArticle[] = [
  // 1. Matéria de Capa Oficial da Revista Blend News Edição #01
  {
    id: 'a-musica-que-transforma-vidas',
    title: 'A música que transforma vidas: Quando a música encontra o propósito',
    slug: 'a-musica-que-transforma-vidas',
    category: 'Cultura · Música',
    date: 'Agosto 2026 · Edição #01',
    readTime: '5 min de leitura',
    author: 'Ricardo Borges · Arte Sobre as Cordas',
    authorRole: 'Educação Musical & Transformação',
    imageUrl: '',
    excerpt:
      'Ricardo Borges e a Escola Livre de Música Arte Sobre as Cordas mostram como a música pode aproximar pessoas, desenvolver talentos e transformar trajetórias.',
    content: `
Uma trajetória construída através da música, da educação e da vontade de transformar o contato com a arte em uma experiência que gera desenvolvimento e conexão.

Na primeira edição da Blend News, Ricardo Borges e a Escola Livre de Música Arte Sobre as Cordas ganham espaço para contar uma história em que talento e propósito caminham juntos.

Mais do que ensinar instrumentos, uma escola de música pode criar experiências, despertar habilidades e aproximar pessoas. É nesse encontro entre educação, cultura e desenvolvimento que a trajetória de Ricardo ganha significado.

A Arte Sobre as Cordas reúne diferentes possibilidades de aprendizado musical e mostra como a música pode ocupar um lugar importante na formação e na qualidade de vida de crianças, jovens e adultos.

### Conversa com a Blend News

**01 — O que a música representa na sua trajetória?**
A música aparece como caminho de expressão, aprendizado e conexão. É também uma forma de compartilhar conhecimento e criar oportunidades para outras pessoas desenvolverem seus talentos.

**02 — Qual é um dos desafios de empreender na área da música?**
Conciliar a missão de ensinar com a gestão de uma escola e a construção de uma experiência que faça sentido para alunos e famílias.

**03 — Que conselho você deixaria para quem está começando?**
Construir uma trajetória com propósito, persistir e entender que resultados consistentes são consequência de dedicação e continuidade.

> **Dica do Especialista:** Transforme conhecimento em experiência. Quando uma marca consegue entregar valor de verdade, ela passa a fazer parte da história das pessoas.
    `.trim(),
    featured: true,
  },
  // 2. Nasce a Blend News
  {
    id: 'nasce-a-blend-news',
    title: 'Nasce a Blend News: uma revista para quem faz acontecer',
    slug: 'nasce-a-blend-news',
    category: 'Negócios',
    date: 'Agosto 2026 · Edição #01',
    readTime: '3 min de leitura',
    author: 'Tatiane & Equipe Blend Digital',
    authorRole: 'Editorial & Comunicação',
    imageUrl: '',
    excerpt:
      'A Blend Digital cria um espaço editorial para valorizar empresários, profissionais, parceiros e iniciativas que movimentam Santana de Parnaíba e região.',
    content: `
A revista da Blend Digital agora continua como blog: um espaço para contar histórias, apresentar profissionais, destacar negócios, registrar acontecimentos e compartilhar ideias que movimentam Santana de Parnaíba e região.

Da primeira edição para o blog, as histórias continuam. Quem movimenta aparece!
    `.trim(),
    featured: false,
  },
  // 3. Instagram, Reels e posicionamento
  {
    id: 'instagram-reels-posicionamento',
    title: 'Instagram, Reels e posicionamento: presença digital virou estratégia',
    slug: 'instagram-reels-posicionamento',
    category: 'Marketing',
    date: 'Agosto 2026 · Edição #01',
    readTime: '4 min de leitura',
    author: 'Equipe Blend Digital',
    authorRole: 'Social Media & Estratégia',
    imageUrl: imgNewsAudiovisual,
    excerpt:
      'Estar nas redes sociais é apenas o começo. Conteúdo, identidade, consistência e estratégia ajudam empresas a construir uma presença digital profissional.',
    content: `
O consumo de conteúdo em vídeo estabeleceu um novo padrão de expectativa no público. Hoje, o cliente quer ver os bastidores, a qualidade real do serviço e o cuidado nos detalhes.

Estar nas redes sociais é apenas o começo. Conteúdo, identidade, consistência e estratégia ajudam empresas a construir uma presença digital profissional que realmente conecta.
    `.trim(),
    featured: false,
  },
  // 4. Google Meu Negócio
  {
    id: 'google-meu-negocio-presenca',
    title: 'Google Meu Negócio: quando ser encontrado também é oportunidade',
    slug: 'google-meu-negocio-presenca',
    category: 'Negócios Locais',
    date: 'Agosto 2026 · Edição #01',
    readTime: '3 min de leitura',
    author: 'Equipe Blend Digital',
    authorRole: 'Presença Local & Performance',
    imageUrl: '',
    excerpt:
      'A presença local no Google aproxima empresas de pessoas que já estão procurando produtos, serviços e soluções na região.',
    content: `
Quando um cliente precisa do seu produto ou serviço, ele busca no Google. Garantimos que sua empresa seja encontrada com informações atualizadas, fotos de qualidade e excelente reputação local. A presença local no Google aproxima empresas de pessoas que já estão procurando produtos, serviços e soluções na região.
    `.trim(),
    featured: false,
  },
  // 5. Inteligência artificial e criatividade
  {
    id: 'inteligencia-artificial-criatividade',
    title: 'Inteligência artificial e criatividade no dia a dia das empresas',
    slug: 'inteligencia-artificial-criatividade',
    category: 'Tecnologia',
    date: 'Agosto 2026 · Edição #01',
    readTime: '4 min de leitura',
    author: 'Equipe Blend Digital',
    authorRole: 'Inovação & Estratégia',
    imageUrl: '',
    excerpt:
      'Novas ferramentas estão mudando processos de criação, comunicação e gestão. A questão passa a ser como usar tecnologia com estratégia.',
    content: `
Novas ferramentas estão mudando processos de criação, comunicação e gestão. A questão passa a ser como usar tecnologia com estratégia para fortalecer o posicionamento da sua marca.
    `.trim(),
    featured: false,
  },
  // 6. Networking também é estratégia
  {
    id: 'networking-tambem-e-estrategia',
    title: 'Networking também é estratégia',
    slug: 'networking-tambem-e-estrategia',
    category: 'Conexões',
    date: 'Agosto 2026 · Edição #01',
    readTime: '3 min de leitura',
    author: 'Equipe Blend Digital',
    authorRole: 'Relacionamento & Parcerias',
    imageUrl: imgStudioAtmosphere,
    excerpt:
      'Conexões entre empresários e profissionais podem abrir portas para conhecimento, parcerias e novas oportunidades de negócio.',
    content: `
Conexões entre empresários e profissionais podem abrir portas para conhecimento, parcerias e novas oportunidades de negócio. Conectar pessoas, negócios e oportunidades é o cerne da Blend News.
    `.trim(),
    featured: false,
  },
  // 7. Quem faz parte dessa história
  {
    id: 'quem-faz-parte-dessa-historia',
    title: 'Quem faz parte dessa história: As pessoas por trás',
    slug: 'quem-faz-parte-dessa-historia',
    category: 'Empreendedorismo',
    date: 'Agosto 2026 · Edição #01',
    readTime: '4 min de leitura',
    author: 'Equipe Blend Digital',
    authorRole: 'Comunidade & Trajetórias',
    imageUrl: '',
    excerpt:
      'A primeira edição reúne diferentes trajetórias profissionais: Elise Madella, Susete, Talita, David Pedro, Gabriela e Matheus Matias.',
    content: `
A primeira edição da Blend News foi criada para aproximar diferentes áreas, trajetórias e negócios. Estes são alguns dos profissionais que fazem parte desse começo:

- **Ricardo Borges** · Arte Sobre as Cordas
- **Elise Madella** · Advocacia
- **Susete** · Contabilidade
- **Talita** · Nutrição
- **David Pedro** · Mercado Imobiliário
- **Gabriela** · Arquitetura
- **Matheus Matias** · Fotografia
    `.trim(),
    featured: false,
  },
  // 8. Artigo clássico estruturante do posicionamento
  {
    id: 'posicionamento-acoes-conectadas',
    title: 'Por que posicionamento digital é um conjunto de ações conectadas',
    slug: 'posicionamento-digital-acoes-conectadas',
    category: 'Estratégia & Mercado',
    date: '24 Setembro 2026',
    readTime: '4 min de leitura',
    author: 'Equipe Blend Digital',
    authorRole: 'Estratégia & Comunicação',
    imageUrl: imgNewsPositioning,
    excerpt:
      'Não basta ter apenas um perfil bonito ou publicar sem critério. Entenda como marca, conteúdo, atendimento e presença local precisam conversar entre si para gerar vendas consistentes.',
    content: `
Muitas empresas acreditam que posicionamento digital se resume a postar com frequência nas redes sociais. No entanto, quando as ações estão desconectadas, o resultado é um esforço grande com retorno disperso.

### A engrenagem do posicionamento conectado

O posicionamento digital funciona quando cada canal cumpre um papel claro na jornada do cliente:

1. **Apresentação e Identidade:** A primeira impressão que a marca passa em suas cores, tipografia e tom de comunicação.
2. **Distribuição e Relevância:** Conteúdos que mostram o que a empresa resolve de verdade, gerando interesse genuíno.
3. **Ponto de Apoio e Confiança:** Um site institucional e o perfil verificado no Google que comprovam solidez.
4. **Conversão e Agilidade:** Um canal de WhatsApp com roteiros objetivos para receber quem está pronto para comprar.

Quando esses quatro pilares atuam em sintonia, o negócio deixa de depender do acaso e constrói autoridade duradoura.
    `.trim(),
    featured: false,
  },
];

export const COLLABORATORS_DATA: Collaborator[] = [
  { id: 'apt', name: 'APT CONTAINERS', subtitle: 'Soluções em Módulos e Containers', category: 'Logística & Estruturas' },
  { id: 'contis', name: 'CONTIS', subtitle: 'Consultoria de Negócios', category: 'Gestão Empresarial' },
  { id: 'fatto', name: 'FATTO industrial', subtitle: 'Presente em seu Futuro', category: 'Indústria & Tecnologia' },
  { id: 'yucard', name: 'YUCARD', subtitle: 'Soluções Financeiras & Benefícios', category: 'Fintech & Cartões' },
  { id: 'purify', name: 'PURIFY', subtitle: 'Tratamento e Filtragem de Água', category: 'Saneamento & Purificação' },
  { id: 'vendrame', name: 'VENDRAME', subtitle: 'Segurança e Engenharia', category: 'Engenharia & Obras' },
  { id: 'moura-fonseca', name: 'MOURA FONSECA', subtitle: 'Assessoria em Recursos Humanos', category: 'Recursos Humanos' },
  { id: 'helfen', name: 'Helfen MOTORS', subtitle: 'Veículos e Manutenção Automotiva', category: 'Setor Automotivo' },
];
