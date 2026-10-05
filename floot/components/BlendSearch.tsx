import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowUpRight } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./Dialog";
import { Input } from "./Input";
import styles from "./BlendSearch.module.css";

type Result = {title:string; description:string; type:string; href:string; terms?:string};
const entries:Result[] = [
  {title:"A Blend",description:"Conheça a agência e sua metodologia.",type:"Seção",href:"/#sobre"},
  {title:"Serviços",description:"Estratégia, social media, design, audiovisual e sites.",type:"Seção",href:"/#servicos"},
  {title:"Pacotes",description:"Planos Essencial, Crescimento e Performance.",type:"Seção",href:"/#pacotes",terms:"preço plano orçamento"},
  {title:"Produção Audiovisual",description:"Videomaker, storymaker, captação e edição.",type:"Seção",href:"/#servico-audiovisual",terms:"vídeo reels filmes"},
  {title:"Colaboradores",description:"Pessoas e marcas que movimentam junto.",type:"Seção",href:"/#colaboradores"},
  {title:"Contato",description:"WhatsApp, e-mail e Instagram da Blend.",type:"Seção",href:"/#contato"},
  {title:"Estratégia de Posicionamento",description:"Identidade do negócio, público e direção estratégica.",type:"Serviço",href:"/#servico-posicionamento"},
  {title:"Social Media",description:"Gestão de redes e conteúdo estratégico.",type:"Serviço",href:"/#servico-social"},
  {title:"Identidade Visual & Design",description:"Marcas, manuais e peças institucionais.",type:"Serviço",href:"/#servico-design"},
  {title:"Google & Presença Local",description:"Perfil da empresa, mapas e canais de busca.",type:"Serviço",href:"/#servico-google"},
  {title:"WhatsApp Comercial",description:"Scripts de atendimento e caminhos de conversão.",type:"Serviço",href:"/#servico-whatsapp"},
  {title:"Sites & Landing Pages",description:"Sites institucionais e páginas de conversão.",type:"Serviço",href:"/#servico-sites"},
  {title:"Blend News",description:"Revista regional com histórias e entrevistas de Santana de Parnaíba.",type:"Blog",href:"/blend-news"},
  {title:"A música que transforma vidas",description:"Ricardo Borges e Arte Sobre as Cordas.",type:"Matéria",href:"/blend-news?materia=a-musica-que-transforma-vidas"},
  {title:"Carta do editor",description:"Matéria da edição #01 da Blend News.",type:"Matéria",href:"/blend-news?materia=carta-do-editor"},
  {title:"Susete Costa: muito além dos impostos",description:"Matéria da edição #01 da Blend News.",type:"Matéria",href:"/blend-news?materia=susete-costa-contabilidade"},
  {title:"Alimentação saudável é qualidade de vida",description:"Matéria da edição #01 da Blend News.",type:"Matéria",href:"/blend-news?materia=alimentacao-saudavel-qualidade-de-vida"},
  {title:"David Pedro: mercado imobiliário",description:"Matéria da edição #01 da Blend News.",type:"Matéria",href:"/blend-news?materia=david-pedro-mercado-imobiliario"},
  {title:"Treazo Arquitetura",description:"Matéria da edição #01 da Blend News.",type:"Matéria",href:"/blend-news?materia=treazo-arquitetura-negocios"},
  {title:"Matheus Matias: sua imagem fala antes de você",description:"Matéria da edição #01 da Blend News.",type:"Matéria",href:"/blend-news?materia=matheus-matias-imagem"},
  {title:"O cliente mudou?",description:"Matéria da edição #01 da Blend News.",type:"Matéria",href:"/blend-news?materia=o-cliente-mudou"},
  {title:"Google Meu Negócio",description:"Matéria da edição #01 da Blend News.",type:"Matéria",href:"/blend-news?materia=google-meu-negocio-presenca"},
  {title:"Reels e vídeos",description:"Matéria da edição #01 da Blend News.",type:"Matéria",href:"/blend-news?materia=o-video-e-a-nova-vitrine"},
  {title:"Posicionamento digital",description:"Matéria da edição #01 da Blend News.",type:"Matéria",href:"/blend-news?materia=quem-nao-aparece-nao-e-lembrado"},

];
const normalize=(value:string)=>value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();

export default function BlendSearch(){
 const navigate=useNavigate();
 const [open,setOpen]=useState(false);
 const [query,setQuery]=useState("");
 const words=normalize(query).split(/\s+/).filter(Boolean);
 const results=words.length?entries.filter(item=>words.every(word=>normalize([item.title,item.description,item.type,item.terms||""].join(" ")).includes(word))).slice(0,10):[];
 function selectResult(event:React.MouseEvent<HTMLAnchorElement>,href:string){
  event.preventDefault();
  setOpen(false);
  if(href.startsWith("/#")){
   const section=href.slice(2);
   window.setTimeout(()=>{
    const target=document.getElementById(section);
    if(target)window.scrollTo({top:target.getBoundingClientRect().top+window.scrollY-88,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
   },350);
  }else navigate(href);
 }
 return <Dialog open={open} onOpenChange={next=>{setOpen(next);if(!next)setQuery("")}}>
  <DialogTrigger asChild><button type="button" className={styles.trigger} aria-label="Pesquisar no site" title="Pesquisar no site"><Search size={21} strokeWidth={2}/></button></DialogTrigger>
  <DialogContent className={styles.content} onCloseAutoFocus={event=>event.preventDefault()}>
   <DialogHeader><DialogTitle>Encontre o que procura</DialogTitle><DialogDescription>Busque serviços, seções e matérias da Blend News.</DialogDescription></DialogHeader>
   <label className={styles.searchField}><Search size={20} aria-hidden="true"/><Input autoFocus type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Digite o que procura..." aria-label="Buscar no site da Blend"/></label>
   <div className={styles.results} aria-live="polite">
    {!words.length?null:results.length?results.map(item=><a href={item.href} key={item.title} className={styles.result} onClick={event=>selectResult(event,item.href)}><span><small>{item.type}</small><strong>{item.title}</strong><em>{item.description}</em></span><ArrowUpRight size={18} aria-hidden="true"/></a>):<p className={styles.hint}>Nenhum resultado para “{query}”. Tente outra palavra.</p>}
   </div>
  </DialogContent>
 </Dialog>;
}
