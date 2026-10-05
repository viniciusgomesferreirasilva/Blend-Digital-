import React, { useEffect, useState } from "react";
import styles from "./_index.module.css";
import { partnerLogos } from "../components/PartnerLogos";
import BlendSearch from "../components/BlendSearch";
import * as Dialog from "@radix-ui/react-dialog";

const services = [
  ["Estratégia de Posicionamento","Definição da identidade do negócio, tom de voz, público e direção estratégica para conectar todas as frentes da marca."],
  ["Social Media","Gestão de redes com foco em consistência, linguagem alinhada aos objetivos da empresa e construção de audiência qualificada."],
  ["Identidade Visual & Design","Construção e refinamento de marcas, manuais, peças institucionais e padrões visuais que transmitem segurança e solidez."],
  ["Produção Audiovisual, Videomaker & Storymaker","Captação e edição profissional de vídeos institucionais, reels de alto impacto e cobertura dinâmica para stories."],
  ["Google & Presença Local","Otimização do perfil no Google, mapas e canais de busca para atrair clientes da região com alta intenção de compra."],
  ["WhatsApp Comercial & Scripts de Atendimento","Estruturação de canais de atendimento, mensagens padronizadas e fluxos para converter contatos interessados em clientes."],
  ["Criação de Sites & Landing Pages","Sites institucionais e páginas de conversão responsivas que apresentam a empresa com clareza e facilitam o contato."]
];

const packages = [
  {name:"Essencial", desc:"Para empresas que precisam começar a construir presença digital de forma profissional e consistente.", items:["12 conteúdos/mês","4 Reels/mês","Stories estratégicos","Planejamento mensal","Legendas e CTAs","Calendário editorial","Relatório de resultados"]},
  {name:"Crescimento", desc:"Para empresas que querem crescer, fortalecer a marca e gerar mais oportunidades através do digital.", items:["Tudo do Plano Essencial","16 conteúdos/mês","8 Reels/mês","Fotos e vídeos","1 diária de produção","Gestão do Instagram","Gestão do WhatsApp","Google Meu Negócio","Campanhas estratégicas","Análise de métricas"]},
  {name:"Performance", desc:"Para empresas que querem um posicionamento digital completo, com produção, estratégia, presença multicanal e foco em performance.", items:["Tudo do Plano Crescimento","Até 20 conteúdos/mês","Até 12 Reels/mês","3 diárias audiovisuais","Gestão do Instagram","Google Meu Negócio","WhatsApp e campanhas","Comunicação corporativa","Tráfego pago*","Otimização contínua"]}
];

const method = [
  ["01","Apresentação & Identidade","Como a sua marca é percebida no primeiro segundo","Antes de publicar, a marca precisa mostrar com clareza quem é, o que oferece e por que merece a atenção do cliente."],
  ["02","Conteúdo & Distribuição","O que você publica e como alcança as pessoas certas","Conteúdo estratégico responde às dúvidas do público e mostra, de forma consistente, o que a empresa sabe fazer."],
  ["03","Presença Digital & Apoio","A prova de que a sua empresa existe e é confiável","Site, Google e canais atualizados reforçam a confiança quando alguém pesquisa sua empresa antes de entrar em contato."],
  ["04","Atendimento & Venda Rápida","A rota direta para continuar a conversa","Um atendimento claro e ágil ajuda a transformar o interesse inicial em uma conversa comercial de verdade."]
];
const methodDetails = [
  ["O primeiro contato acontece antes de uma reunião. Ele pode ser a busca no Google, um vídeo nas redes ou a visita ao site. Nesse momento, a identidade visual e a mensagem da marca precisam trabalhar juntas.", "Começamos entendendo o negócio, o público e os diferenciais. A partir daí, organizamos a apresentação da empresa, o tom de voz e a direção visual para que cada ponto de contato transmita a mesma ideia.", "Assim, a pessoa reconhece a marca, entende o que ela faz e encontra um caminho simples para dar o próximo passo.", "Por exemplo: uma fotografia profissional, uma descrição objetiva do serviço e a mesma linguagem no site e nas redes ajudam o cliente a perceber cuidado e coerência. Pequenos detalhes formam uma impressão forte quando aparecem juntos."],
  ["Publicar por publicar ocupa o calendário, mas não necessariamente ajuda o cliente a decidir. Um bom conteúdo parte de perguntas reais: o que as pessoas precisam entender, comparar ou sentir antes de confiar na empresa?", "A Blend transforma essas respostas em temas, roteiros, fotos, vídeos e textos com uma linguagem coerente. Bastidores mostram o trabalho; explicações tiram dúvidas; histórias de pessoas e negócios criam proximidade.", "Depois, escolhemos os canais e formatos certos para cada mensagem. O mesmo assunto pode virar um vídeo curto, um carrossel ou uma página mais completa no site. A distribuição leva o conteúdo até o público, enquanto a constância ajuda a construir lembrança.", "O objetivo é que cada publicação tenha uma função clara dentro da comunicação — apresentar, esclarecer, fortalecer confiança ou convidar para uma conversa."],
  ["Depois de conhecer uma empresa nas redes, é natural que o cliente procure mais informações. Um site claro, um perfil atualizado no Google e dados de contato corretos confirmam que a marca está pronta para recebê-lo.", "Organizamos esses pontos para que endereço, horários, serviços, imagens e formas de contato contem a mesma história. Quando as informações se contradizem ou faltam, a jornada perde fluidez.", "Uma presença digital bem cuidada facilita a pesquisa e dá apoio ao conteúdo publicado. O cliente encontra respostas sem precisar começar do zero em cada canal."],
  ["A comunicação continua depois do clique. Quando alguém chama no WhatsApp ou preenche um formulário, a resposta precisa ser simples, acolhedora e útil.", "Desenhamos caminhos de contato, perguntas iniciais e mensagens que ajudem a entender a necessidade de cada pessoa. Isso organiza o atendimento e evita que uma oportunidade se perca por falta de clareza.", "Da primeira pergunta ao orçamento, cada etapa deve facilitar a conversa. A tecnologia pode apoiar esse processo, mas a atenção de quem atende continua essencial."]
];

const news = [
  ["EMPRESÁRIO DESTAQUE · CULTURA","A música que transforma vidas: Ricardo Borges","A trajetória do fundador da Arte Sobre as Cordas e o impacto da educação musical em Santana de Parnaíba.","AGO 2026","/blend-news?materia=a-musica-que-transforma-vidas"],
  ["COLUNA CONTÁBIL · NEGÓCIOS","Susete Costa: muito além dos impostos","Como a contabilidade ajuda empresas a planejar, acompanhar números e tomar decisões mais seguras.","AGO 2026","/blend-news?materia=susete-costa-contabilidade"],
  ["MERCADO IMOBILIÁRIO · REGIÃO","David Pedro: imóveis, qualidade de vida e patrimônio","O corretor fala sobre orientação, planejamento e oportunidades para quem deseja comprar ou investir.","AGO 2026","/blend-news?materia=david-pedro-mercado-imobiliario"]
];

const whatsapp="https://wa.me/5511939417912?text="+encodeURIComponent("Olá! Gostaria de conversar com a equipe da Blend Digital sobre o posicionamento da minha empresa.");
const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

function Logo({white=false}:{white?:boolean}) {
  return <span className={styles.brandLogoWrap} data-footer={white}><img className={styles.brandLogo} src="/_cdn/static/47b63c91-2648-4a5d-8144-21612aceea24-blend-digital-logo-transparente.png" alt="Blend Digital — Marketing & Social Media"/></span>;
}

export default function Home(){
  const [step,setStep]=useState(0);
  const [expandedStep,setExpandedStep]=useState<number|null>(null);
  const [menu,setMenu]=useState(false);
  useEffect(()=>{if(window.location.hash){const id=decodeURIComponent(window.location.hash.slice(1));requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView());}},[]);
  return <div className={styles.page}>
    <header className={styles.header}>
      <button className={styles.brandButton} onClick={()=>go("home")}><Logo/></button>
      <nav className={styles.nav}>
        <button onClick={()=>go("sobre")}>A Blend</button><button onClick={()=>go("servicos")}>Serviços</button><button onClick={()=>go("audiovisual")}>Audiovisual</button><button onClick={()=>go("news")}>Blend News</button><button onClick={()=>go("contato")}>Contato</button>
      </nav>
      <BlendSearch/>
      <a className={styles.headerCta} href={whatsapp} target="_blank" rel="noreferrer">Falar com a Blend</a>
      <button className={styles.menu} onClick={()=>setMenu(!menu)} aria-label={menu?"Fechar menu":"Abrir menu"} aria-expanded={menu} aria-controls="blend-mobile-nav">☰</button>
      {menu&&<div id="blend-mobile-nav" className={styles.mobileNav}>{["sobre","servicos","audiovisual","news","contato"].map(x=><button key={x} onClick={()=>{go(x);setMenu(false)}}>{x==="sobre"?"A Blend":x==="news"?"Blend News":x[0].toUpperCase()+x.slice(1)}</button>)}</div>}
    </header>

    <main>
      <section id="home" className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.eyebrow}>MARKETING & SOCIAL MEDIA</div>
            <h1>Posicionamento que <em>conecta.</em><br/>Comunicação que <span>movimenta.</span></h1>
            <p>A Blend Digital é uma empresa de marketing focada em posicionamento digital estratégico, comunicação e produção audiovisual de alto padrão para negócios que buscam autoridade e vendas.</p>
            <div className={styles.actions}><button onClick={()=>go("servicos")}>Conhecer os Serviços <span>→</span></button><a href={whatsapp} target="_blank" rel="noreferrer">Iniciar conversa no WhatsApp</a></div>
          </div>

        </div>
      </section>

      <section id="sobre" className={styles.sectionWhite}>
        <div className={styles.twoCol}>
          <div><div className={styles.kicker}>01 — A BLEND</div><h2 className={styles.redTitle}>Marketing não é só aparecer.<span> É ocupar um lugar.</span></h2></div>
          <div className={styles.copy}><p>A <b>Blend Digital</b> nasceu para aproximar estratégia e criatividade. A gente acredita que uma empresa boa merece uma comunicação à altura do que entrega.</p><p>Por isso, construímos presença digital com intenção: cada conteúdo tem um porquê, cada detalhe reforça o posicionamento e cada ação aponta para um objetivo.</p><div className={styles.pillars}>ESTRATÉGIA <i/> CRIATIVIDADE <i/> RESULTADO</div></div>
        </div>
        <div className={styles.methodHead}><div className={styles.kicker}>A METODOLOGIA BLEND DIGITAL</div><h3>Posicionamento digital é um conjunto de <em>ações conectadas.</em></h3><p>Ter uma rede social bonita não resolve se o WhatsApp demora para responder. Na Blend Digital, cada frente fortalece as demais.</p></div>
        <div className={styles.methodGrid}><div className={styles.stepList}>{method.map((m,i)=><button type="button" key={m[0]} className={step===i?styles.activeStep:""} onClick={()=>{setStep(i);setExpandedStep(i)}} aria-haspopup="dialog"><b>{m[0]}</b><span><strong>{m[1]}</strong><small>{m[2]}</small><em className={styles.stepPreview}>{m[3].slice(0,92)}…</em></span><i className={styles.stepToggle} aria-hidden="true">•••</i></button>)}</div><div className={styles.stepDetail}><small>ETAPA {method[step][0]} DE 04</small><h3>{method[step][1]}</h3><p>{method[step][3]}</p><div className={styles.rule}/><b>{method[step][2]}</b><button onClick={()=>setExpandedStep(step)}>Ler a etapa completa →</button></div></div>
      </section>
      <Dialog.Root open={expandedStep!==null} onOpenChange={open=>{if(!open)setExpandedStep(null)}}>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.methodOverlay}/>
          <Dialog.Content className={styles.methodFull}>
            {expandedStep!==null&&<>
              <div className={styles.methodFullTop}><span>BLEND DIGITAL · METODOLOGIA</span><Dialog.Close className={styles.methodFullClose}>Fechar <span aria-hidden="true">×</span></Dialog.Close></div>
              <div className={styles.methodFullBody}>
                <span className={styles.methodFullLabel}>ETAPA {method[expandedStep][0]} / 04</span>
                <Dialog.Title className={styles.methodFullTitle}>{method[expandedStep][1]}</Dialog.Title>
                <Dialog.Description className={styles.methodFullIntro}>{method[expandedStep][2]}</Dialog.Description>
                <div className={styles.methodFullText}>{methodDetails[expandedStep].map((paragraph,i)=><p key={i}>{paragraph}</p>)}</div>
                <div className={styles.methodFullBottom}><span>Estratégia, comunicação e presença conectadas.</span><button type="button" onClick={()=>{const next=(expandedStep+1)%method.length;setStep(next);setExpandedStep(next)}}>Próxima etapa <span aria-hidden="true">↗</span></button></div>
              </div>
            </>}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <section id="servicos" className={styles.section}>
        <div className={styles.sectionHeading}><div><div className={styles.kicker}>02 — O QUE FAZEMOS</div><h2>Uma operação completa <span>para a sua marca.</span></h2></div><p>Do diagnóstico à publicação. Conheça as frentes que a Blend conecta para fortalecer sua empresa.</p></div>
        <div className={styles.serviceGrid}>{services.map((s,i)=><article id={["servico-posicionamento","servico-social","servico-design","servico-audiovisual","servico-google","servico-whatsapp","servico-sites"][i]} key={s[0]}><div className={styles.serviceNum}>{String(i+1).padStart(2,"0")}</div><h3>{s[0]}</h3><p>{s[1]}</p><a href={"https://wa.me/5511939417912?text="+encodeURIComponent("Olá! Vi no site da Blend o serviço de "+s[0]+". Gostaria de conversar sobre minha empresa.")} target="_blank" rel="noopener noreferrer">Conversar sobre este serviço →</a></article>)}</div>
        <div className={styles.guidance}><div><small>POR ONDE COMEÇAR</small><h3>Não sabe qual serviço faz sentido para sua empresa?</h3><p>Conte para a gente qual é o seu desafio. A Blend ajuda a definir as prioridades antes de escolher um pacote.</p></div><a href={whatsapp} target="_blank" rel="noopener noreferrer">Explicar meu projeto ↗</a></div>
        <div id="pacotes" className={styles.packageHead}><div className={styles.kicker}>03 — PACOTES</div><h2>Escolha o ritmo. <span>A gente constrói o caminho.</span></h2></div>
        <div className={styles.packageGrid}>{packages.map((p,i)=><article key={p.name}><div className={styles.pkgTop}><small>0{i+1}</small></div><h3>{p.name}</h3><p>{p.desc}</p><div className={styles.pkgRule}/><ul>{p.items.map(x=><li key={x}>+ {x}</li>)}</ul><a href={"https://wa.me/5511939417912?text="+encodeURIComponent("Olá! Gostaria de conversar com a Blend Digital sobre o Pacote "+p.name+".")} target="_blank" rel="noreferrer">Quero este pacote →</a></article>)}</div>
      </section>

      <section className={styles.capabilityRail} aria-label="Especialidades Blend"><div><span>ESTRATÉGIA</span><i>✦</i><span>SOCIAL</span><i>✦</i><span>AUDIOVISUAL</span><i>✦</i><span>DESIGN</span><i>✦</i><span>PERFORMANCE</span><i>✦</i><span>WEB</span><i>✦</i><span>CONTEÚDO</span><i>✦</i><span>ESTRATÉGIA</span><i>✦</i><span>SOCIAL</span><i>✦</i><span>AUDIOVISUAL</span></div></section>

      <section id="audiovisual" className={styles.sectionWhite}>
        <div className={styles.sectionHeading}><div><div className={styles.kicker}>LINGUAGEM DE RETENÇÃO & CONEXÃO</div><h2>Produção Audiovisual, Videomaker & <span>Storymaker.</span></h2></div><p>O vídeo é o formato mais eficiente para gerar autoridade imediata e prender a atenção. Da narrativa institucional à cobertura dinâmica de rotina.</p></div>
        <div className={styles.cinemaShowcase}>
          <div className={styles.cinemaStage}><div className={styles.cinemaOrb}/><div className={styles.cinemaWord}>BLEND<span>FILMS</span></div><button onClick={()=>go("contato")} aria-label="Conversar sobre produção audiovisual"><b>↗</b><small>CONVERSAR SOBRE<br/>AUDIOVISUAL</small></button></div>
          <div className={styles.cinemaInfo}><span>CONCEITO · CAPTAÇÃO · EDIÇÃO · DISTRIBUIÇÃO</span><h3>Ideias que ganham <em>movimento.</em></h3><p>Do primeiro frame ao conteúdo final, pensamos cada produção para funcionar como parte da estratégia da marca — não como uma peça isolada.</p><a href={whatsapp} target="_blank" rel="noreferrer">Criar um projeto audiovisual →</a></div>
        </div>
      </section>

      <section className={styles.workShowcase}>
        <div className={styles.workIntro}><div><small>SELECTED CAPABILITIES · BLEND DIGITAL</small><h2>Uma marca. <em>Vários pontos de contato.</em></h2></div><p>Estratégia, conteúdo e tecnologia trabalhando como uma única experiência — do primeiro contato até a conversa comercial.</p></div>
        <div className={styles.workMosaic}>
          <article className={styles.workMain}><span>01 / POSICIONAMENTO</span><h3>Marcas com direção antes de ganhar volume.</h3><p>Estratégia, identidade e linguagem conectadas para construir reconhecimento.</p><button onClick={()=>go("servicos")}>Explorar estratégia ↗</button></article>
          <article><span>02 / CONTEÚDO</span><h3>Social que parece marca, não calendário.</h3><p>Conteúdo pensado para consistência, retenção e presença.</p></article>
          <article><span>03 / EXPERIÊNCIA</span><h3>Digital que transforma atenção em ação.</h3><p>Sites, Google e canais comerciais conectados à comunicação.</p></article>
        </div>
      </section>


      <section className={styles.whyBlend}>
        <div className={styles.whyTitle}><small>POR QUE BLEND?</small><h2>Menos peças soltas.<br/><em>Mais conexão.</em></h2></div>
        <div className={styles.whyGrid}>
          <article><b>01</b><h3>Visão integrada</h3><p>Posicionamento, conteúdo, audiovisual e presença digital pensados para falar a mesma língua.</p></article>
          <article><b>02</b><h3>Estratégia antes da estética</h3><p>O visual chama atenção. A direção certa faz essa atenção trabalhar a favor da marca.</p></article>
          <article><b>03</b><h3>Contato que vira ação</h3><p>Da descoberta ao WhatsApp, desenhamos caminhos claros para a comunicação continuar avançando.</p></article>
        </div>
      </section>

      <section id="news" className={styles.news}>
        <div className={styles.newsTop}><div><div className={styles.kickerLight}>BLEND NEWS · EM DESTAQUE</div><h2>Histórias que movimentam <em>a nossa região.</em></h2></div><p>Empresários, profissionais e iniciativas de Santana de Parnaíba na primeira edição da Blend News.</p></div>
        <a className={styles.newsArchive} href="/blend-news">Conhecer a edição 01 da Blend News · entrevistas e matérias ↗</a>
        <div className={styles.newsGrid}>{news.map(n=><article key={n[1]}><div className={styles.newsVisual}>Blend<span>news</span></div><div className={styles.newsBody}><div className={styles.newsMeta}><small>{n[0]}</small><time dateTime="2026-08">{n[3]}</time></div><h3>{n[1]}</h3><p>{n[2]}</p><a className={styles.readNews} href={n[4]}>Ler matéria completa <span aria-hidden="true">↗</span></a></div></article>)}</div>
      </section>

      <section id="colaboradores" className={styles.sectionWhite}><div className={styles.centerHead}><div className={styles.kicker}>REDE & COLABORAÇÃO</div><h2>As pessoas e marcas que <span>movimentam junto.</span></h2><p>Conexões fazem parte da forma como a Blend constrói comunicação e oportunidades.</p></div><div className={styles.partnerGrid}>
          {partnerLogos.map(([name,PartnerLogo])=><div className={styles.partnerCard} key={name} aria-label={name}><PartnerLogo/></div>)}
        </div></section>

      <section id="como-trabalhamos" className={styles.section}><div className={styles.centerHead}><div className={styles.kicker}>COMO TRABALHAMOS</div><h2>Um projeto com a Blend em <span>3 momentos.</span></h2></div><div className={styles.process}>{[["01","Diagnóstico","Entendemos o momento, os objetivos e os desafios da sua marca."],["02","Estratégia & Produção","Transformamos direção em conteúdo, design, presença e comunicação."],["03","Acompanhamento","Analisamos resultados e ajustamos a rota para manter a evolução."]].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>

      <section id="contato" className={styles.contact}><div><div className={styles.kickerLight}>FALE COM A BLEND</div><h2>Vamos posicionar sua marca para o <em>próximo nível?</em></h2><p>Conte para a gente sobre seu negócio e vamos identificar o melhor caminho para sua presença digital.</p><div className={styles.contactInfo}><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp · +55 11 93941-7912</a><a href="mailto:Blenddigitalmkt@gmail.com">Blenddigitalmkt@gmail.com</a><a href="https://www.instagram.com/blenddigital_" target="_blank" rel="noreferrer">Instagram · @blenddigital_</a><span>Segunda a Sexta, das 09h às 18h</span></div></div><div className={styles.contactCard}><small>ATENDIMENTO COMERCIAL</small><h3>Comece uma conversa.</h3><p>Para agilizar o atendimento, fale diretamente com a equipe pelo WhatsApp e conte o que sua empresa precisa.</p><a href={whatsapp} target="_blank" rel="noreferrer">Conversar com a Blend →</a></div></section>
    </main>

    <footer className={styles.footer}><div><Logo white/><p>Marketing, posicionamento digital, comunicação estratégica e produção audiovisual.</p></div><div><b>NAVEGAÇÃO</b><button onClick={()=>go("sobre")}>A Blend</button><button onClick={()=>go("servicos")}>Serviços</button><button onClick={()=>go("news")}>Blend News</button></div><div><b>CANAIS OFICIAIS</b><a href={whatsapp} target="_blank" rel="noreferrer">+55 11 93941-7912</a><a href="mailto:Blenddigitalmkt@gmail.com">Blenddigitalmkt@gmail.com</a><span>Santana de Parnaíba e São Paulo, Brasil</span></div><small>© {new Date().getFullYear()} Blend Digital — Todos os direitos reservados.</small></footer>
    <a className={styles.whatsapp} href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp Blend Digital">✦ <span>WhatsApp</span></a>
  </div>
}