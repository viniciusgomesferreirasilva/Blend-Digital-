# Blend Digital

Versão atual importada do Floot em 5 de outubro de 2026. Esta versão agora ocupa a raiz do repositório; os arquivos da versão anterior do Google AI Studio foram removidos da branch main.

## Executar

`npm install` — instalar dependências.
`npm run dev` — iniciar desenvolvimento.
`npm run build` — compilar para produção.
`npm run preview` — conferir a compilação.

A configuração .npmrc habilita legacy-peer-deps para compatibilidade das dependências originais. A compilação desta configuração passou na transferência.

## Estrutura

- pages/_index.tsx: página inicial.
- pages/blend-news.tsx: revista e matérias.
- components/ e helpers/: componentes e utilitários originais.
- public/_cdn/static/: cinco imagens exportadas, com as URLs originais preservadas.
- base.css: estilos globais.
- main.tsx: entrada React e rotas adicionadas para execução fora do Floot.

O projeto Floot não possui banco de dados; o conteúdo atual está nos arquivos. Não foram transferidas credenciais, histórico de conversas, histórico de versões do Floot ou aplicativos móveis. Os arquivos *.example.tsx são exemplos do editor Floot e não são usados na aplicação publicada.

Para hospedar, configure fallback de rotas para index.html, incluindo /blend-news. As fontes externas usam Google Fonts.

## Continuar no Codex

Selecione este repositório e a branch main. O aplicativo está na raiz, sem necessidade de entrar na antiga pasta floot. Preserve os textos, imagens e identidade visual atuais, salvo pedido explícito de alteração.
