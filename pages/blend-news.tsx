import React, { useEffect, useState } from "react";
import styles from "./blend-news.module.css";

type Story = {slug:string; category:string; title:string; author:string; role:string; date:string; excerpt:string; body:string[]};
const stories:Story[] = [
  {
    "slug": "a-musica-que-transforma-vidas",
    "category": "Cultura · Música",
    "title": "A música que transforma vidas: quando a música encontra o propósito",
    "author": "Ricardo Borges · Arte Sobre as Cordas",
    "role": "Empresário destaque",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "Ricardo Borges fala sobre educação, cultura e empreendedorismo em Santana de Parnaíba.",
    "body": [
      "Algumas pessoas empreendem para construir empresas. Outras empreendem para transformar vidas.",
      "Essa segunda definição representa com precisão a trajetória de Ricardo Borges, fundador da Escola Livre de Música Arte Sobre as Cordas, referência na formação musical de crianças, jovens e adultos em Santana de Parnaíba.",
      "Ao longo dos anos, Ricardo compreendeu que ensinar música vai muito além da técnica. Cada aluno que entra na escola carrega sonhos, inseguranças e expectativas. É através da dedicação, da sensibilidade e da educação que esses sonhos começam a ganhar forma.",
      "Sob sua liderança, a Arte Sobre as Cordas tornou-se um espaço onde talento, disciplina e paixão caminham juntos. Mais do que formar músicos, a escola forma pessoas, fortalece famílias e incentiva a cultura como instrumento de transformação social.",
      "Hoje, centenas de alunos já passaram por suas salas de aula, participando de apresentações, projetos culturais e experiências que certamente marcarão suas histórias para sempre.",
      "Nesta primeira edição da Blend News, Ricardo Borges recebe o título de Empresário Destaque, em reconhecimento ao impacto que seu trabalho gera na educação, na cultura e no desenvolvimento de nossa cidade.",
      "## Conversa com a Blend News",
      "Como surgiu a escola Arte Sobre as Cordas? “A música sempre fez parte da minha vida. E sempre tive o desejo de compartilhar esse conhecimento e criar um espaço onde qualquer pessoa pudesse aprender música de forma acessível e com qualidade.”",
      "Qual foi o maior desafio da sua trajetória? “Empreender nunca é um caminho simples. Manter um projeto educacional exige dedicação diária, planejamento e muita perseverança. Mas cada conquista de um aluno faz todo esforço valer a pena.”",
      "Que conselho você deixa para quem deseja empreender? “Tenha propósito antes de pensar apenas no lucro. Empresas que realmente transformam pessoas são construídas com dedicação, honestidade e amor pelo que fazem.”"
    ]
  },
  {
    "slug": "carta-do-editor",
    "category": "Editorial",
    "title": "Empreender é transformar. E contar boas histórias também.",
    "author": "Katiane Lima",
    "role": "CEO da Blend Digital · Editora da Blend News",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "A carta de abertura apresenta o propósito da Blend News.",
    "body": [
      "Há algum tempo, nasceu um sonho que ia muito além de criar uma agência de marketing. O propósito da Blend Digital sempre foi conectar pessoas, fortalecer empresas e contribuir para o crescimento do empreendedorismo em nossa cidade.",
      "Foi desse propósito que surgiu a ideia da Blend News. Mais do que uma revista, queremos construir um espaço onde histórias inspiradoras ganhem voz, empresas sejam reconhecidas e profissionais compartilhem conhecimento capaz de transformar negócios.",
      "Acreditamos que todo empreendedor possui uma trajetória única. Por trás de cada empresa existem desafios, conquistas, noites sem dormir, decisões difíceis e uma enorme vontade de fazer a diferença.",
      "Nesta primeira edição, reunimos empresários e especialistas que acreditam no desenvolvimento de Santana de Parnaíba e trabalham diariamente para fortalecer nossa economia, nossa cultura e nossa comunidade.",
      "Nosso objetivo é que cada página desta revista gere conexões, desperte ideias e incentive novos empreendedores a acreditarem em seus sonhos.",
      "Agradecemos a todos que aceitaram fazer parte desta edição inaugural. Vocês estão ajudando a escrever o primeiro capítulo de uma história que esperamos construir por muitos anos.",
      "Seja muito bem-vindo à Blend News. Boa leitura!"
    ]
  },
  {
    "slug": "primeira-edicao-blend-news",
    "category": "Editorial",
    "title": "Informações que inspiram. Histórias que conectam. Empresas que transformam.",
    "author": "Blend News",
    "role": "Apresentação da edição #01",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "Uma ponte entre empresários, profissionais, instituições e a comunidade.",
    "body": [
      "Vivemos um momento em que informação e relacionamento caminham lado a lado. Nunca foi tão importante compartilhar conhecimento, fortalecer conexões e valorizar quem empreende.",
      "A Blend News nasce justamente com esse propósito: ser uma ponte entre empresários, profissionais, instituições e a comunidade.",
      "Nesta primeira edição, reunimos histórias inspiradoras, conteúdos estratégicos e entrevistas com pessoas que acreditam no poder do trabalho, da inovação e da colaboração.",
      "Também celebramos um momento muito especial: a inauguração do novo espaço da Blend Digital, criado para impulsionar marcas, produzir conteúdo de qualidade e fortalecer o posicionamento digital das empresas da nossa região.",
      "Esperamos que esta revista seja mais do que uma leitura agradável. Que ela seja uma fonte de inspiração, aprendizado e novas oportunidades.",
      "Porque quando empreendedores crescem juntos, toda a cidade cresce. Seja bem-vindo à primeira edição da Blend News."
    ]
  },
  {
    "slug": "susete-costa-contabilidade",
    "category": "Coluna Contábil",
    "title": "Susete Costa: muito além dos impostos",
    "author": "Susete Costa",
    "role": "Contabilidade",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "A contabilidade moderna apoia decisões e ajuda empresas a crescerem com segurança.",
    "body": [
      "Durante muitos anos a contabilidade foi vista apenas como uma obrigação fiscal. Hoje ela ocupa um papel estratégico dentro das empresas. Controlar indicadores, analisar resultados e planejar investimentos faz parte do trabalho de uma contabilidade moderna.",
      "Para a contadora Susete, informação de qualidade é uma das principais ferramentas para o sucesso de qualquer negócio.",
      "## Conversa com a Blend News",
      "Como nasceu sua trajetória na contabilidade? “Sempre gostei de organização, planejamento e números. Descobri que através da contabilidade poderia ajudar empresas a crescerem de forma saudável e sustentável.”",
      "Qual o principal desafio das pequenas empresas? “Muitos empresários ainda tomam decisões sem analisar seus números. Conhecer custos, faturamento e fluxo de caixa é essencial para crescer.”",
      "Qual conselho você deixa? “Não veja o contador apenas como quem calcula impostos. Tenha um contador como parceiro estratégico das decisões do seu negócio.”",
      "## Dica da especialista",
      "Empresa organizada financeiramente cresce com muito mais tranquilidade e segurança."
    ]
  },
  {
    "slug": "alimentacao-saudavel-qualidade-de-vida",
    "category": "Coluna Nutrição",
    "title": "Alimentação saudável é qualidade de vida",
    "author": "Blend News",
    "role": "Nutrição e empreendedorismo",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "Pequenas mudanças na alimentação podem melhorar disposição, concentração e qualidade de vida.",
    "body": [
      "A rotina acelerada do empreendedor muitas vezes faz com que a alimentação seja deixada em segundo plano. Produtividade, concentração e disposição estão diretamente ligadas aos hábitos alimentares.",
      "Pequenas mudanças na rotina podem gerar grandes resultados na saúde e no desempenho profissional. Cuidar da alimentação é cuidar da qualidade de vida, transformar hábitos e promover saúde.",
      "Comer de forma saudável não precisa ser complicado ou caro. Organização é um ingrediente importante. Comece aos poucos: pequenas mudanças feitas todos os dias geram resultados ao longo do tempo.",
      "## Dica da edição",
      "Quem cuida da alimentação cuida também da energia necessária para empreender todos os dias."
    ]
  },
  {
    "slug": "david-pedro-mercado-imobiliario",
    "category": "Mercado Imobiliário",
    "title": "David Pedro: investir em imóveis é investir em qualidade de vida e patrimônio",
    "author": "David Pedro",
    "role": "Corretor de imóveis",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "Planejamento, segurança e orientação fazem parte da escolha do imóvel certo.",
    "body": [
      "Comprar um imóvel representa muito mais do que adquirir um bem. É uma decisão que envolve planejamento, segurança e a construção de um patrimônio para o futuro.",
      "Nos últimos anos, Santana de Parnaíba tem se destacado como uma das cidades mais promissoras da região, atraindo famílias, investidores e empresários em busca de qualidade de vida e excelentes oportunidades de negócio.",
      "Para o corretor de imóveis David Pedro, cada negociação vai muito além da assinatura de um contrato. “Meu objetivo sempre foi ajudar pessoas a encontrarem o imóvel certo para o momento certo de suas vidas. Quando entendemos a necessidade do cliente, entregamos muito mais do que uma venda: entregamos tranquilidade e realização.”",
      "## Conversa com a Blend News",
      "Como começou sua carreira no mercado imobiliário? “Sempre gostei de trabalhar com pessoas e percebi que o mercado imobiliário me permitia unir relacionamento, estratégia e realização de sonhos. Cada imóvel tem uma história, e fazer parte desse momento é extremamente gratificante.”",
      "Qual o maior desafio do setor atualmente? “O cliente está muito mais informado. Por isso, o corretor precisa oferecer conhecimento, transparência e segurança durante toda a negociação.”",
      "Que conselho você deixa para quem deseja comprar ou investir? “Pesquise, planeje e conte com profissionais qualificados. Um bom investimento começa com uma boa orientação.”",
      "## Dica do especialista",
      "Mais importante do que comprar um imóvel é comprar o imóvel certo para seus objetivos."
    ]
  },
  {
    "slug": "treazo-arquitetura-negocios",
    "category": "Arquitetura",
    "title": "Treazo Arquitetura: ambientes que comunicam, encantam e valorizam negócios",
    "author": "Treazo Arquitetura",
    "role": "Arquitetura",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "Um espaço planejado influencia a experiência do cliente, a equipe e a percepção da marca.",
    "body": [
      "A arquitetura deixou de ser apenas uma questão estética. Hoje, ela influencia diretamente a experiência do cliente, a produtividade das equipes e a percepção de valor de uma marca.",
      "Um ambiente bem planejado transmite organização, profissionalismo e acolhimento. Seja em uma residência, escritório ou comércio, cada detalhe comunica uma mensagem.",
      "A Treazo Arquitetura acredita que cada projeto deve refletir a personalidade de quem irá utilizá-lo. “Arquitetura é transformar necessidades em espaços funcionais, bonitos e capazes de proporcionar bem-estar.”",
      "## Conversa com a Blend News",
      "Como surgiu sua paixão pela arquitetura? “Sempre gostei de criar, desenhar e imaginar soluções. A arquitetura me permitiu unir criatividade, técnica e o desejo de transformar espaços e vidas.”",
      "O que faz um projeto ser realmente bom? “Ele precisa atender às necessidades das pessoas. Beleza é importante, mas funcionalidade, conforto e praticidade fazem toda a diferença.”",
      "Qual conselho você deixa para quem está construindo ou reformando? “Planeje antes de executar. Um bom projeto evita desperdícios, reduz custos e proporciona resultados muito melhores.”",
      "## Dica da especialista",
      "Um ambiente bem planejado valoriza sua marca antes mesmo da primeira conversa com o cliente."
    ]
  },
  {
    "slug": "matheus-matias-imagem",
    "category": "Fotografia",
    "title": "Matheus Matias: sua imagem fala antes de você",
    "author": "Matheus Matias",
    "role": "Fotografia e posicionamento",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "Fotos profissionais comunicam confiança, valorizam produtos e aproximam clientes.",
    "body": [
      "Vivemos na era da comunicação visual. Antes mesmo de conhecer uma empresa, as pessoas observam suas fotos, seus vídeos e a forma como ela se apresenta nas redes sociais.",
      "Uma boa fotografia vai muito além da estética. Ela transmite confiança, desperta emoções e fortalece a identidade de uma marca.",
      "Para o fotógrafo Matheus Matias, cada imagem deve contar uma história. “Fotografar é registrar momentos, pessoas e marcas de uma forma que elas sejam lembradas.”",
      "## Conversa com a Blend News",
      "Como descobriu sua paixão pela fotografia? “Sempre fui fascinado pela capacidade de uma imagem transmitir sentimentos. Com o tempo, transformei essa paixão em profissão.”",
      "Qual a importância da fotografia para uma empresa? “A primeira impressão acontece em segundos. Fotos profissionais transmitem credibilidade, valorizam produtos e aproximam clientes.”",
      "Que conselho você deixa aos empresários? “Invistam na imagem da empresa. Um excelente produto merece uma apresentação à altura da sua qualidade.”",
      "## Dica do especialista",
      "Antes de vender um produto, sua imagem já convenceu — ou afastou — o cliente. Faça dela sua maior aliada."
    ]
  },
  {
    "slug": "o-cliente-mudou",
    "category": "Marketing",
    "title": "O cliente mudou? Sua empresa também precisa mudar.",
    "author": "Blend News",
    "role": "Marketing e negócios",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "A decisão de compra começa antes do primeiro contato: na busca, nas redes e nas avaliações.",
    "body": [
      "Durante muito tempo, bastava abrir as portas da empresa, oferecer um bom atendimento e esperar os clientes chegarem. Hoje, a realidade é diferente.",
      "Antes de visitar uma loja, contratar um serviço ou fazer uma compra, as pessoas pesquisam no Google, acessam o Instagram, observam as avaliações e procuram sinais de confiança. A decisão de compra começa muito antes do primeiro contato. Ela acontece na tela do celular.",
      "Empresas que entendem esse comportamento conseguem atrair mais clientes, fortalecer sua marca e vender com mais frequência. Já aquelas que permanecem invisíveis no ambiente digital acabam perdendo espaço, mesmo oferecendo excelentes produtos ou serviços.",
      "Marketing não significa apenas fazer publicações bonitas. Marketing é construir relacionamento. É gerar confiança. É criar lembrança. É mostrar ao mercado por que sua empresa merece ser escolhida.",
      "Quem investe em posicionamento não vende apenas produtos. Constrói reputação. E reputação gera negócios.",
      "## Cinco atitudes que diferenciam empresas de sucesso",
      "Aparecem com frequência; produzem conteúdo útil; mostram quem está por trás da marca; respondem rapidamente seus clientes; e investem constantemente na própria imagem."
    ]
  },
  {
    "slug": "google-meu-negocio-presenca",
    "category": "Negócios Locais",
    "title": "Google Meu Negócio: o vendedor que trabalha 24 horas por dia",
    "author": "Blend News",
    "role": "Presença local",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "Um perfil completo facilita que clientes encontrem sua empresa nas pesquisas e no Google Maps.",
    "body": [
      "Imagine alguém procurando exatamente o serviço que sua empresa oferece. Agora imagine que, nesse momento, ela pesquisa no Google e encontra seu concorrente. Isso acontece todos os dias.",
      "O Google Meu Negócio tornou-se uma das ferramentas mais importantes para empresas locais.",
      "Quando o perfil está completo, atualizado e bem avaliado, ele aparece nas pesquisas e no Google Maps, facilitando o contato entre empresa e cliente.",
      "Além de divulgar endereço e telefone, o perfil permite publicar fotos, responder avaliações, divulgar novidades e aumentar significativamente a credibilidade da marca.",
      "Empresas que utilizam essa ferramenta corretamente conquistam mais visibilidade e ampliam suas oportunidades de negócio.",
      "## Dicas rápidas",
      "Atualize seus horários de funcionamento. Publique fotos recentes. Responda todas as avaliações. Incentive clientes satisfeitos a deixarem comentários. Mantenha seus dados sempre corretos.",
      "Lembre-se: quem é encontrado primeiro tem muito mais chances de ser escolhido."
    ]
  },
  {
    "slug": "o-video-e-a-nova-vitrine",
    "category": "Audiovisual",
    "title": "Reels e vídeos: o vídeo é a nova vitrine das empresas",
    "author": "Blend News",
    "role": "Vídeo e comunicação",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "Vídeos curtos aproximam clientes da equipe, dos bastidores e das histórias reais.",
    "body": [
      "Vivemos a era da comunicação rápida. Em poucos segundos, um vídeo pode despertar interesse, gerar identificação e convencer alguém a conhecer sua empresa.",
      "Não é necessário ser influenciador digital para produzir conteúdo. O que realmente faz diferença é mostrar autenticidade.",
      "Clientes querem conhecer quem está por trás da marca. Querem ver o ambiente da empresa, conhecer os bastidores, entender como um produto é feito e ouvir histórias reais.",
      "Empresas que aparecem em vídeo criam conexões muito mais fortes com seus clientes. Mais do que vender, elas passam a inspirar confiança.",
      "## Ideias simples de vídeos",
      "Apresente sua equipe. Mostre o dia a dia da empresa. Compartilhe depoimentos de clientes. Explique dúvidas frequentes. Apresente novos produtos. Grave bastidores. Mostre antes e depois. Conte a história da empresa.",
      "Não espere o vídeo perfeito. Comece. A constância vale muito mais do que a perfeição."
    ]
  },
  {
    "slug": "quem-nao-aparece-nao-e-lembrado",
    "category": "Posicionamento",
    "title": "Quem não aparece não é lembrado: a importância do posicionamento digital",
    "author": "Blend News",
    "role": "Posicionamento digital",
    "date": "Agosto 2026 · Edição #01",
    "excerpt": "Cada publicação, vídeo e fotografia pode ampliar a confiança e abrir oportunidades.",
    "body": [
      "Há alguns anos, bastava abrir uma loja em uma boa avenida para atrair clientes. Hoje, o caminho é diferente. Antes de visitar um estabelecimento, a maioria das pessoas pesquisa no Google, acessa o Instagram e observa como a empresa se comunica.",
      "Se ela não encontra informações, isso transmite uma sensação de insegurança. Já empresas com conteúdo frequente podem ser percebidas como mais profissionais, organizadas e confiáveis.",
      "Posicionamento digital não significa apenas fazer postagens. É construir autoridade. É mostrar detalhes. É apresentar a equipe. É explicar produtos. É responder dúvidas. É aparecer.",
      "Cada publicação cria uma oportunidade de venda. Cada vídeo aproxima um cliente. Cada fotografia transmite profissionalismo.",
      "Empresas que investem em presença no digital conseguem aumentar a confiança do público, melhorar o relacionamento e gerar novas oportunidades de negócio todos os dias."
    ]
  }
];
const people=[["Ricardo Borges","Arte Sobre as Cordas"],["Elise Madella","Advocacia"],["Susete","Contabilidade"],["Talita","Nutrição"],["David Pedro","Mercado Imobiliário"],["Gabriela","Arquitetura"],["Matheus Matias","Fotografia"]];


export default function BlendNews(){
 const [selected,setSelected]=useState(()=>new URLSearchParams(window.location.search).get("materia")||"");
 const [query,setQuery]=useState("");
 const [category,setCategory]=useState("Todas");
 useEffect(()=>{const onPop=()=>setSelected(new URLSearchParams(window.location.search).get("materia")||"");window.addEventListener("popstate",onPop);return()=>window.removeEventListener("popstate",onPop)},[]);
 function open(slug:string){window.history.pushState(null,"",slug?"/blend-news?materia="+encodeURIComponent(slug):"/blend-news");setSelected(slug);window.scrollTo({top:0,behavior:"smooth"})}
 const active=stories.find(s=>s.slug===selected);
 const categories=["Todas",...Array.from(new Set(stories.map(s=>s.category)))];
 const filtered=stories.filter(s=>(category==="Todas"||s.category===category)&&`${s.title} ${s.excerpt} ${s.author}`.toLocaleLowerCase("pt-BR").includes(query.toLocaleLowerCase("pt-BR")));
 return <div className={styles.page}><header className={styles.header}><a href="/" className={styles.brand}><img src="/_cdn/static/47b63c91-2648-4a5d-8144-21612aceea24-blend-digital-logo-transparente.png" alt="Blend Digital"/></a><a href="/">Voltar ao site ↗</a></header>
 <main>{active?<article className={styles.article}><button className={styles.back} onClick={()=>open("")}>← Voltar para a Blend News</button><span className={styles.label}>{active.category} · {active.date}</span><h1>{active.title}</h1><div className={styles.byline}>{active.author}<span> · {active.role}</span></div><p className={styles.lead}>{active.excerpt}</p><div className={styles.cover}><span>BLEND NEWS / EDIÇÃO #01</span><strong>{active.title}</strong></div><div className={styles.body}>{active.body.map((p,i)=>p.startsWith("## ")?<h2 key={i}>{p.slice(3)}</h2>:<p key={i}>{p}</p>)}</div><button className={styles.back} onClick={()=>open("")}>← Mais matérias da Blend News</button></article>:<>
 <section className={styles.intro}><span className={styles.label}>REVISTA REGIONAL · SANTANA DE PARNAÍBA</span><h1>Blend <em>News.</em></h1><p>Uma revista sobre empresários, profissionais e negócios de Santana de Parnaíba. Conheça as histórias e entrevistas da primeira edição.</p></section>
 <section className={styles.featured}><div className={styles.featureVisual}><img src="/_cdn/static/3596bcf2-14da-4397-bcc7-46ad59a09eb3-blend-news-capa-sem-faixa-de-rostos.png" alt="Capa original da edição 01 da Blend News, agosto de 2026"/></div><div className={styles.featureCopy}><span className={styles.label}>MATÉRIA DE CAPA</span><h2>{stories[0].title}</h2><p>{stories[0].excerpt}</p><small>Por {stories[0].author}</small><button onClick={()=>open(stories[0].slug)}>Ler matéria completa ↗</button></div></section>
 <section className={styles.list}><div className={styles.listHead}><div><span className={styles.label}>EDITORIAL BLEND</span><h2>As matérias da edição.</h2></div><p>Leia as entrevistas, colunas e histórias publicadas na edição 01 da revista.</p></div><div className={styles.filters}><input aria-label="Buscar matérias" placeholder="Buscar matérias ou profissionais" value={query} onChange={e=>setQuery(e.target.value)}/><div className={styles.categories}>{categories.map(c=><button className={category===c?styles.chosen:""} key={c} onClick={()=>setCategory(c)}>{c}</button>)}</div></div><div className={styles.grid}>{filtered.filter(s=>s!==stories[0]).map(s=><article key={s.slug}><span className={styles.label}>{s.category} · {s.date}</span><h3>{s.title}</h3><p>{s.excerpt}</p><small>Por {s.author}</small><button onClick={()=>open(s.slug)}>Ler matéria ↗</button></article>)}</div>{filtered.length===0&&<p>Nenhuma matéria encontrada.</p>}</section>
 <section className={styles.people}><span className={styles.label}>PESSOAS DA EDIÇÃO #01</span><h2>Quem faz parte dessa história.</h2><p>Profissionais apresentados na primeira edição. Novas histórias serão publicadas conforme a equipe editorial preparar as próximas edições.</p><div className={styles.peopleGrid}>{people.map(([name,role])=><div key={name}><strong>{name}</strong><span>{role}</span></div>)}</div></section>
 </>}</main><footer className={styles.footer}>Blend Digital · Estratégia, comunicação e audiovisual <a href="/">Voltar ao início ↗</a></footer></div>
}
