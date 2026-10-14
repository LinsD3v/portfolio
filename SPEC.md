# SPEC.md --- Personal Tech Lab

**Status:** Especificação inicial aprovada para implementação\
**Versão:** 1.0\
**Idioma inicial:** Português do Brasil (`pt-BR`)\
**Marca:** Identidade híbrida --- pessoa como autora, laboratório como
identidade editorial\
**Domínio:** A definir; não bloquear a implementação por essa decisão

------------------------------------------------------------------------

## 1. Resumo do produto

Construir um site pessoal e laboratório técnico que combine:

-   identidade profissional e pessoal;
-   portfólio de projetos demonstráveis;
-   artigos técnicos e tutoriais úteis;
-   estética inspirada em terminais Linux e ferramentas de
    desenvolvimento;
-   arquitetura estática, rápida, acessível e preparada para SEO
    orgânico;
-   manutenção simples por Git, sem CMS ou backend obrigatório.

O site deve parecer um ambiente técnico autoral, não um template
genérico de portfólio. A estética de terminal é uma camada visual e
interativa, nunca um requisito para acessar conteúdo ou navegar.

### 1.1 Princípio central

**A estética atrai atenção; os projetos demonstram competência; os
artigos ajudam pessoas e geram descoberta orgânica; a apresentação
converte visitas em contatos e oportunidades.**

### 1.2 Objetivos

1.  Apresentar o autor de forma autêntica e profissional.
2.  Documentar projetos técnicos por meio de estudos de caso.
3.  Publicar tutoriais que respondam a dúvidas concretas.
4.  Facilitar contato para oportunidades profissionais e freelas.
5.  Ser rastreável e indexável por mecanismos de busca.
6.  Manter custos e complexidade operacional baixos.
7.  Permitir que um agente implemente e valide o projeto com o mínimo de
    decisões arbitrárias.

### 1.3 Fora dos objetivos iniciais

-   Aplicação web com autenticação ou contas de usuário.
-   Banco de dados ou backend próprio.
-   CMS externo ou painel administrativo.
-   Comentários, curtidas ou sistema social.
-   Formulário de contato que exija servidor.
-   Animações pesadas, WebGL ou experiências que prejudiquem leitura.
-   Produção automática de artigos por IA sem revisão humana.
-   Publicação de segredos, dados internos de empregadores ou
    informações confidenciais.
-   Promessas de posicionamento, volume de tráfego ou resultados
    profissionais garantidos.

------------------------------------------------------------------------

## 2. Marca e posicionamento

### 2.1 Arquitetura de marca

Adotar uma marca híbrida:

-   **Autor:** Gabriel Henrique.
-   **Identidade editorial:** Personal Tech Lab, nome funcional
    provisório.
-   **Relação entre ambos:** o laboratório é o espaço de projetos,
    artigos e experimentos do autor; não deve sugerir que seja uma
    empresa, equipe ou organização formal.
-   **Domínio:** não escolher, comprar nem assumir disponibilidade de
    domínio nesta fase.
-   **Nome visível:** usar "Gabriel Henrique" como nome do autor e
    "Personal Tech Lab" como nome descritivo do projeto até que uma
    decisão de naming seja feita.

O nome "Personal Tech Lab" é provisório e pode ser alterado sem
refatoração ampla. Centralizar nomes, descrição, URL-base e perfis
sociais em um módulo de configuração.

### 2.2 Posicionamento editorial

Tema principal: desenvolvimento, automação de processos, integração de
sistemas e experimentação técnica.

Temas que podem ser explorados conforme existirem experiências reais e
material demonstrável:

-   Python e automação;
-   APIs e integrações;
-   automação de desktop e produtividade;
-   ferramentas de desenvolvimento;
-   empacotamento e distribuição de scripts;
-   experimentos com infraestrutura e ambientes locais;
-   aprendizados, decisões técnicas e limitações de projetos.

Não declarar domínio profissional, certificações, experiência comercial,
cargos, resultados ou competências que não tenham sido confirmados pelo
autor.

### 2.3 Tom de voz

-   Direto, curioso, técnico e humano.
-   Informal com moderação; não imitar linguagem corporativa genérica.
-   Explicar termos técnicos sem presumir conhecimento avançado do
    leitor.
-   Preferir exemplos reproduzíveis e observações concretas a
    superlativos.
-   Distinguir fatos medidos, estimativas e opiniões.
-   Não usar frases vazias como "apaixonado por tecnologia" sem contexto
    específico.

### 2.4 Idioma

-   Lançamento em português brasileiro.
-   Código, nomes de bibliotecas e termos técnicos podem permanecer em
    inglês quando esse for o uso convencional.
-   Não criar páginas em inglês vazias ou traduzidas automaticamente.
-   A arquitetura deve permitir internacionalização futura, por exemplo
    com `/en/`, mas isso não faz parte do MVP.
-   Quando uma versão em inglês for adicionada, implementar URLs
    próprias, metadados localizados e `hreflang` corretamente. Não
    misturar dois idiomas na mesma página por padrão.

------------------------------------------------------------------------

## 3. Direção visual

### 3.1 Conceito

Estética "dark technical workspace": terminal Linux, documentação de
engenharia, ferramentas de desenvolvimento e interfaces discretas.

A interface deve ser contemporânea e legível, não uma imitação literal
de um terminal antigo. Usar elementos de terminal como linguagem visual
--- prompt, status, logs, labels e tipografia monoespaçada --- em áreas
pontuais.

### 3.2 Paleta de cores

Usar os seguintes valores como tokens iniciais:

  -----------------------------------------------------------------------
  Token                   Valor                   Uso
  ----------------------- ----------------------- -----------------------
  `color.bg`              `#0B0F10`               Fundo global

  `color.surface`         `#11191A`               Cards, painéis e
                                                  superfícies elevadas

  `color.surfaceAlt`      `#151F20`               Hover, blocos
                                                  secundários e áreas de
                                                  código

  `color.accent`          `#A3E635`               Ação primária, foco
                                                  visual e links
                                                  destacados

  `color.terminal`        `#6EE7B7`               Logs, status e detalhes
                                                  técnicos

  `color.text`            `#E5E7EB`               Texto principal

  `color.textMuted`       `#9CA3AF`               Metadados e texto
                                                  secundário

  `color.border`          `#263638`               Bordas e divisórias

  `color.danger`          `#F87171`               Erros e avisos
                                                  destrutivos

  `color.warning`         `#FBBF24`               Avisos não críticos

  `color.info`            `#7DD3FC`               Informações auxiliares
  -----------------------------------------------------------------------

Regras:

-   Fundo escuro como padrão; não implementar seletor de tema no MVP.
-   O verde-limão é um destaque, não uma cor para grandes blocos de
    texto.
-   Garantir contraste WCAG 2.2 AA para texto e componentes interativos.
    Se uma combinação não passar, ajustar o token ou o uso, não ignorar
    o requisito.
-   Não comunicar sucesso, erro ou estado apenas pela cor: combinar com
    texto ou ícone acessível.
-   Não introduzir cores decorativas aleatórias sem atualizar os tokens.

### 3.3 Tipografia

-   **Texto corrido:** `Inter`, com fallback `system-ui`, sans-serif.
-   **Elementos técnicos e títulos selecionados:** `JetBrains Mono`, com
    fallback `ui-monospace`, monospace.
-   Usar arquivos locais otimizados quando houver licença adequada e
    benefício claro; caso contrário, usar fontes de sistema para reduzir
    dependências externas.
-   Texto corrido com largura confortável, line-height aproximado de
    1.6.
-   Não usar fonte monoespaçada em todos os parágrafos longos se isso
    prejudicar a leitura.
-   Respeitar zoom do navegador e preferências de tamanho de fonte.

### 3.4 Forma, espaçamento e movimento

-   Bordas finas, superfícies discretas e raios moderados.
-   Sombras mínimas; evitar efeito glassmorphism excessivo.
-   Espaçamento consistente com escala baseada em múltiplos de 4 px.
-   Conteúdo central com largura máxima aproximada de 1100--1200 px.
-   Transições breves e funcionais, preferencialmente entre 120 e 220
    ms.
-   Respeitar `prefers-reduced-motion: reduce`.
-   Não usar cursor piscante, efeito de digitação ou animação contínua
    de forma obrigatória.
-   Não exibir loaders falsos, logs simulados que pareçam atividade real
    ou indicadores enganosos.

### 3.5 Referência visual de conteúdo

O cabeçalho pode ter uma pequena etiqueta como
`PERSONAL TECH LAB / ONLINE`, mas não deve afirmar estado operacional de
sistemas reais. Se usar `ONLINE`, deixar claro que é um detalhe
decorativo, não um monitoramento real.

Hero sugerido, editável pelo autor:

-   Título: "Building things. Breaking limits." ou alternativa em
    português, escolhida durante a implementação.
-   Subtítulo: "Desenvolvimento, automação e integrações. Problemas
    reais, soluções práticas e experimentos técnicos."
-   Ações: "Explorar projetos", "Ler artigos" e "Entrar em contato".

Não tratar esses textos como fatos biográficos. São textos de interface
e podem ser refinados.

------------------------------------------------------------------------

## 4. Experiência e navegação

### 4.1 Navegação principal

Links visíveis e convencionais:

-   Início
-   Sobre
-   Projetos
-   Artigos
-   Contato

"Uses"/ferramentas pode ser adicionado se houver conteúdo real
suficiente. Não criar uma página vazia só para preencher navegação.

O cabeçalho deve ser responsivo. Em telas pequenas, usar menu simples
com botão acessível, estado anunciado e fechamento previsível. Evitar
depender de hover.

### 4.2 Terminal interativo

O terminal é um elemento complementar da página inicial, não a navegação
exclusiva.

Comandos mínimos sugeridos:

-   `help`: lista os comandos disponíveis.
-   `about`: mostra um resumo e link para `/about/`.
-   `projects`: mostra projetos em destaque e link para `/projects/`.
-   `blog`: mostra artigos recentes e link para `/blog/`.
-   `contact`: mostra links de contato.
-   `clear`: limpa a saída atual.
-   `whoami`: exibe o nome público do autor configurado.

Requisitos:

-   Disponibilizar botões ou links convencionais para as mesmas áreas.
-   O terminal não pode ser necessário para encontrar o conteúdo
    principal.
-   Entrada e saída devem funcionar com teclado e leitores de tela.
-   Usar rótulo visível ou acessível no campo de entrada; não depender
    apenas de placeholder.
-   Permitir foco visível e ordem de tabulação lógica.
-   Não executar comandos do sistema, shell, JavaScript arbitrário ou
    código enviado pelo usuário.
-   Tratar a entrada apenas como texto e comparar com uma lista fixa de
    comandos permitidos.
-   Mensagens de erro amigáveis, sem fingir que comandos reais foram
    executados.
-   Não roubar foco ao carregar a página.
-   Não criar loops de animação ou listeners globais desnecessários.
-   Em dispositivos móveis, manter o componente utilizável sem teclado
    físico.
-   Se houver falha no JavaScript, o restante da página deve continuar
    utilizável.

### 4.3 Conteúdo e descoberta

-   Exibir projetos e artigos em cards simples com título, resumo,
    categoria e links reais.
-   Incluir páginas individuais para conteúdo que mereça indexação.
-   Artigos devem incluir sumário quando o tamanho justificar, tempo de
    leitura aproximado e links relacionados.
-   Evitar filtros que escondam conteúdo do HTML sem alternativa
    navegável.
-   Não implementar pesquisa client-side no MVP, a menos que seja
    simples, acessível e realmente útil.

------------------------------------------------------------------------

## 5. Rotas e requisitos por página

Todas as rotas devem usar URLs limpas, sem extensões `.html` visíveis.
Definir política consistente para barra final e redirecionamentos
conforme a plataforma de hospedagem.

### 5.1 `/` --- Home

Objetivos: - Apresentar o autor e o laboratório. - Direcionar visitantes
para projetos, artigos e contato. - Comunicar em poucos segundos a área
técnica do site.

Seções: 1. Hero com nome/identidade e proposta. 2. Terminal interativo
opcional. 3. Projetos em destaque. 4. Artigos recentes. 5. Breve seção
"sobre". 6. Links profissionais e contato.

SEO: - `title` específico da home. - Meta description única. - Um `h1`
principal. - Links HTML rastreáveis para as seções importantes.

### 5.2 `/about/` --- Sobre

Conteúdo: - Apresentação em primeira pessoa. - Interesses técnicos. -
Forma de trabalhar e aprender. - Trajetória apenas com informações
fornecidas e aprovadas pelo autor. - Links profissionais.

Não inventar datas, empregos, formação, certificações ou realizações.
Usar placeholders claramente marcados durante o desenvolvimento e
removê-los ou substituí-los antes do lançamento.

### 5.3 `/projects/` --- Índice de projetos

Conteúdo: - Listagem de projetos publicados. - Resumo e tecnologias de
cada item. - Categorias apenas quando houver mais de um item útil por
categoria. - Estado do projeto: experimental, em desenvolvimento ou
concluído, quando confirmado.

Os filtros devem ser progressivos e não podem ser a única maneira de
descobrir projetos.

### 5.4 `/projects/[slug]/` --- Estudo de caso

Cada projeto pode incluir: - Contexto e problema. - Objetivo. -
Abordagem e arquitetura. - Tecnologias efetivamente utilizadas. -
Decisões e trade-offs. - Demonstrações, imagens ou diagramas, quando
disponíveis. - Resultados medidos, se houver evidência. - Limitações e
próximos passos. - Link para repositório público, se existir e puder ser
divulgado. - Artigos relacionados.

Não criar métricas fictícias, depoimentos, logos de clientes ou números
de produtividade. Se o resultado não foi medido, explicar
qualitativamente ou omitir a seção de métricas.

### 5.5 `/blog/` --- Índice de artigos

Conteúdo: - Artigos publicados ordenados por data. - Título, resumo,
data de publicação e categorias. - Paginação somente se o volume tornar
isso necessário. - Não incluir rascunhos no build público.

### 5.6 `/blog/[slug]/` --- Artigo

Metadados e estrutura: - `title` exclusivo. - `description`
específica. - Data de publicação; data de atualização apenas quando
houver alteração real. - Autor associado a Gabriel Henrique, se
confirmado como nome público. - Conteúdo em Markdown/MDX. - Sumário
automático para artigos longos. - Blocos de código com linguagem
indicada e boa quebra/rolagem em telas pequenas. - Links para fontes,
documentação oficial e artigos relacionados. - Navegação de retorno ao
blog.

Não inventar fontes ou apresentar código não testado como testado. Se um
exemplo não foi executado, indicar que não foi verificado no ambiente
correspondente.

### 5.7 `/contact/` --- Contato

Conteúdo: - E-mail público, se fornecido pelo autor. - GitHub e
LinkedIn, se URLs forem fornecidas e confirmadas. - Mensagem curta sobre
oportunidades profissionais e projetos. - Sem formulário com backend no
MVP.

Não fabricar e-mail, perfil, endereço, telefone ou links sociais. Se os
dados não estiverem disponíveis, manter placeholders no arquivo de
configuração e deixar explícito no README que precisam ser preenchidos
antes do deploy.

### 5.8 `/uses/` --- Ferramentas (opcional)

Criar somente se houver conteúdo real. Pode listar editor, terminal,
ferramentas, linguagens e hardware que o autor optar por tornar público.
Todos os itens devem ser configuráveis e confirmados. Se não houver
dados, não publicar a rota.

### 5.9 `/404/` ou página 404 da plataforma

Criar uma página 404 personalizada com: - mensagem curta; - link para
home; - links para projetos e artigos; - visual consistente com a marca.

A resposta HTTP para URLs inexistentes deve ser 404 real, não um
`200 OK` genérico, quando a plataforma permitir configurar esse
comportamento.

------------------------------------------------------------------------

## 6. Arquitetura técnica

### 6.1 Stack preferencial

-   Astro em versão estável atual no início da implementação.
-   TypeScript com configuração estrita.
-   Astro Content Collections para projetos e artigos.
-   Markdown/MDX para conteúdo editorial.
-   CSS moderno com tokens centralizados.
-   Tailwind CSS é opcional; não instalar apenas por hábito. Se usado,
    não duplicar o sistema de tokens em lugares desconexos.
-   Lucide para ícones, apenas quando ajudarem na compreensão.
-   Git e GitHub para versionamento.
-   Hospedagem estática, preferencialmente Cloudflare Pages ou
    equivalente compatível com Astro.
-   Sem banco de dados e sem backend obrigatório.

O agente deve verificar a documentação oficial e compatibilidade das
versões no momento da implementação. Não fixar versões obsoletas nem
usar APIs depreciadas.

### 6.2 Princípios arquiteturais

1.  Static-first: gerar HTML no build para páginas de conteúdo.
2.  JavaScript mínimo: hidratar apenas componentes interativos.
3.  Componentes pequenos, reutilizáveis e com responsabilidades claras.
4.  Conteúdo separado do layout.
5.  Configuração centralizada.
6.  Nenhuma dependência de API externa para exibir conteúdo principal.
7.  Sem segredos no frontend, repositório ou variáveis públicas.
8.  Sem telemetria ou analytics não documentados.
9.  Não instalar dependências redundantes para funcionalidades simples.
10. Não adicionar infraestrutura antes de haver uma necessidade
    concreta.

### 6.3 Estrutura de repositório sugerida

``` text
personal-tech-lab/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── SiteFooter.astro
│   │   ├── Terminal.astro
│   │   ├── ProjectCard.astro
│   │   ├── ArticleCard.astro
│   │   ├── Breadcrumbs.astro
│   │   └── SeoHead.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── projects/
│   │   └── blog/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── tokens.css
│   │   └── global.css
│   └── config/
│       └── site.ts
├── tests/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── SPEC.md
```

Essa árvore é uma orientação, não uma obrigação literal. Usar o padrão
atual do Astro para rotas, conteúdo e configuração. Não criar arquivos
vazios sem função.

### 6.4 Conteúdo orientado a dados

Cada projeto deve ter um schema validado, por exemplo:

-   `title` (obrigatório)
-   `description` (obrigatório)
-   `pubDate` ou data de publicação (obrigatória quando fizer sentido)
-   `updatedDate` (opcional, só para atualização real)
-   `tags` (opcional)
-   `status` (opcional e limitado a valores definidos)
-   `featured` (booleano)
-   `repoUrl` (opcional)
-   `demoUrl` (opcional)
-   `cover`/imagem (opcional, com texto alternativo)

Cada artigo deve ter: - `title` - `description` - `pubDate` -
`updatedDate` opcional - `draft` booleano - `tags` - `author` - `cover`
opcional e texto alternativo correspondente

Validar links, datas e campos obrigatórios no build sempre que possível.
Não gerar páginas públicas de rascunhos.

### 6.5 Configuração central

Criar um arquivo único de configuração para: - nome do autor; - nome
editorial do laboratório; - descrição do site; - URL-base, inicialmente
configurável sem inventar domínio; - idioma padrão; - e-mail e links
sociais opcionais; - título e descrição padrão; - preferências de
metadados.

Se a URL-base ainda não estiver definida, documentar como configurá-la
antes do deploy final. Não gerar URLs canônicas inválidas, links de
sitemap com domínio fictício ou metadados `og:url` inventados.

### 6.6 Comandos de desenvolvimento

Oferecer scripts simples e documentados, conforme suportados pela stack
escolhida: - `npm run dev` - `npm run build` - `npm run preview` -
`npm run check` - `npm run test` (se houver testes automatizados)

O README deve informar pré-requisitos, versão recomendada de Node.js,
instalação, execução local, build, publicação e como adicionar conteúdo.

------------------------------------------------------------------------

## 7. SEO e descoberta orgânica

### 7.1 Requisitos técnicos

-   Renderizar no build o conteúdo principal, títulos, links e
    metadados.
-   Usar `<title>` e meta description únicos por rota indexável.
-   Um `h1` principal por página, com hierarquia lógica.
-   Usar HTML semântico (`header`, `nav`, `main`, `article`, `footer`).
-   Links internos em `<a href="...">` reais.
-   Criar `sitemap.xml` automaticamente e `robots.txt` coerente.
-   Definir canonical absoluto apenas após configurar a URL-base
    verdadeira.
-   Não indexar páginas de preview, ambientes temporários ou conteúdo
    marcado como rascunho.
-   Tratar páginas inexistentes com HTTP 404 real.
-   Garantir que recursos necessários à renderização não sejam
    bloqueados indevidamente.
-   Não usar `noindex` como substituto de canonicalização.
-   Não criar páginas automáticas de baixa qualidade apenas para
    capturar palavras-chave.

### 7.2 Metadados e compartilhamento

Cada página indexável deve permitir: - `title`; - `description`; -
canonical; - Open Graph (`og:title`, `og:description`, `og:type`,
`og:url`, `og:image` quando houver imagem real); - metadados de
compartilhamento compatíveis com as plataformas relevantes.

Não reutilizar a mesma descrição em todas as páginas. Evitar títulos
exagerados, repetitivos ou repletos de palavras-chave.

### 7.3 Dados estruturados

Adicionar JSON-LD somente quando o conteúdo visível sustentar os dados
descritos.

Tipos possíveis: - `Person` para a identidade pública do autor, com
apenas informações confirmadas; - `Article` ou `BlogPosting` para
artigos; - `BreadcrumbList` para trilhas de navegação, quando
implementadas; - `WebSite` para o site.

Regras: - Não inventar redes sociais, cargo, empregador, certificações,
avaliações ou imagens. - Não adicionar `Product`, `Organization`,
`Review` ou outros schemas sem correspondência real. - Os dados
estruturados devem refletir o conteúdo visível. - Validar sintaxe e
testar com ferramentas adequadas após configurar domínio e conteúdo
final.

### 7.4 Estratégia editorial

Focar inicialmente em temas de cauda longa que correspondam a dúvidas
reais e experiências próprias. Exemplos de ideias, não de palavras-chave
com volume confirmado:

-   automatizar impressão de PDFs com Python no Windows;
-   empacotar scripts Python em executáveis;
-   consumir APIs REST com Python;
-   tratar erros HTTP e respostas JSON;
-   automatizar tarefas de Excel com AutoHotkey v2;
-   depurar automações de desktop.

Cada artigo deve responder a uma pergunta clara e incluir, conforme
aplicável: 1. problema e resultado esperado; 2. pré-requisitos; 3.
instruções reproduzíveis; 4. código e explicação; 5. limitações e erros
comuns; 6. fontes oficiais; 7. data e ambiente testado, quando
confirmado; 8. links para projetos e artigos relacionados.

Não publicar dezenas de artigos gerados automaticamente. Priorizar
qualidade, originalidade, utilidade e manutenção.

### 7.5 Search Console e mensuração

Documentar no README como: - verificar propriedade do domínio no Google
Search Console; - enviar o sitemap; - inspecionar URLs; - acompanhar
impressões, cliques, consultas e indexação.

Não afirmar que o site está indexado antes de verificar. Não prometer
ranking ou tráfego. Analytics adicional é opcional e deve respeitar
privacidade e legislação aplicável.

------------------------------------------------------------------------

## 8. Acessibilidade

Meta: conformidade prática com WCAG 2.2 nível AA, dentro do escopo do
site.

Requisitos: - HTML semântico e landmarks. - Navegação integral por
teclado. - Foco visível em links, botões e campos. - Contraste adequado
de texto, controles e foco. - Links com nomes compreensíveis fora do
contexto visual. - Texto alternativo para imagens informativas; imagens
decorativas com `alt=""`. - Formulários, se adicionados futuramente, com
rótulos e mensagens de erro associadas. - `aria-label`/ARIA apenas
quando necessário; preferir HTML nativo. - Menu móvel com estado
acessível, foco previsível e fechamento por Escape quando apropriado. -
Terminal interativo com entrada rotulada e saída anunciada de maneira
não intrusiva. - Não depender de cor, animação, som ou hover para
transmitir informação. - Respeitar `prefers-reduced-motion`. - Zoom de
200% sem perda de conteúdo ou funcionalidades. - Testes manuais com
teclado e verificações automatizadas.

------------------------------------------------------------------------

## 9. Desempenho e qualidade

O objetivo é um site rápido em dispositivos móveis e conexões comuns,
sem sacrificar legibilidade.

Requisitos: - Minimizar JavaScript enviado ao navegador. - Evitar
bibliotecas grandes para interações simples. - Imagens otimizadas e
dimensionadas; preferir formatos modernos quando apropriado. - Declarar
`width` e `height` ou proporção das imagens para reduzir layout shift. -
Lazy-load para imagens abaixo da dobra; não aplicar lazy-load à imagem
LCP principal sem avaliação. - Evitar scripts de terceiros
desnecessários. - Carregar fontes de forma responsável, com fallbacks. -
Evitar animações que causem layout shift. - Usar cache e compressão da
plataforma de hospedagem quando disponíveis.

Metas de referência para Core Web Vitals, avaliadas em dados de campo
quando disponíveis: - LCP ≤ 2,5 s; - INP ≤ 200 ms; - CLS ≤ 0,1.

No ambiente de desenvolvimento, Lighthouse pode ser usado como
diagnóstico, não como garantia de resultado real. O agente deve
registrar problemas relevantes encontrados e corrigir os que estiverem
sob seu controle.

------------------------------------------------------------------------

## 10. Segurança, privacidade e confidencialidade

-   Nunca incluir chaves de API, tokens, cookies, senhas ou credenciais
    no repositório.
-   Não incluir código ou dados internos de empregadores sem autorização
    explícita.
-   Não publicar dados de clientes, pedidos, produtos confidenciais,
    logs privados ou identificadores reais.
-   Usar dados fictícios em exemplos quando necessário.
-   Não executar entrada do terminal interativo como comando de sistema.
-   Não adicionar dependências ou scripts remotos sem avaliar origem,
    manutenção e necessidade.
-   Não ativar analytics, rastreadores ou coleta de dados sem documentar
    o que é coletado e como desativar.
-   Não expor informações pessoais além das que o autor aprovar para
    publicação.
-   Verificar links externos e usar `rel="noopener noreferrer"` quando
    apropriado para novas abas.
-   Manter dependências atualizadas dentro de versões estáveis e evitar
    pacotes abandonados quando houver alternativa adequada.

------------------------------------------------------------------------

## 11. Política contra informações inventadas

Esta seção é obrigatória e prevalece sobre qualquer instrução estética
ou de preenchimento de conteúdo.

O agente não tem autorização para inventar nem inferir como fatos: -
histórico profissional; - datas de emprego ou formação; - cargos e
responsabilidades; - experiência em anos; - clientes, empresas atendidas
ou depoimentos; - certificações, prêmios ou qualificações; - números de
produtividade, receita, economia ou desempenho; - volume de usuários,
visitas, downloads ou uso; - métricas de SEO ou resultados de ranking; -
repositórios, URLs, demonstrações, e-mail ou perfis sociais; -
ferramentas efetivamente utilizadas em projetos quando não
confirmadas; - resultados de testes que não foram executados.

### Procedimento para conteúdo ausente

1.  Criar estrutura e componentes com placeholders claramente
    identificados em conteúdo de desenvolvimento.
2.  Centralizar itens pendentes em uma seção "Informações necessárias do
    autor" no README.
3.  Não publicar placeholders, links fictícios ou afirmações genéricas
    como se fossem fatos.
4.  Se um dado não for essencial, omitir a seção no build público.
5.  Se um dado for necessário para finalizar a publicação --- por
    exemplo, URL-base para canonical e sitemap --- documentar a
    pendência e não fingir que a configuração está concluída.
6.  Diferenciar exemplos fictícios de projetos reais por rótulos
    explícitos, como "Demonstração ilustrativa".
7.  Não inventar resultados para tornar o portfólio mais impressionante.
8.  Não substituir fatos ausentes por texto gerado que soe plausível.

### Dados pessoais conhecidos e aprovados para uso neste projeto

-   Nome público solicitado para a arquitetura de marca: Gabriel
    Henrique.
-   O nome "Personal Tech Lab" é um rótulo provisório para o projeto,
    não uma empresa estabelecida.
-   Áreas de interesse a explorar editorialmente: automação, Python,
    APIs e integrações, conforme o autor escolher o que deseja publicar.

Mesmo esses itens devem ser expostos apenas no contexto necessário para
o site e não devem ser expandidos com inferências biográficas.

------------------------------------------------------------------------

## 12. Testes e validação

### 12.1 Build e tipagem

-   O build de produção termina sem erros.
-   A checagem de tipos e a validação de conteúdo passam.
-   Não existem imports quebrados nem rotas duplicadas.
-   Os rascunhos não aparecem em índices, sitemap ou build público.

### 12.2 Rotas e links

-   Todas as rotas listadas funcionam.
-   Links internos não retornam 404.
-   Links externos configurados são válidos ou marcados como pendentes.
-   URLs inexistentes retornam página e status 404 adequados.
-   Canonical, sitemap e Open Graph não apontam para domínios fictícios.

### 12.3 Renderização e SEO

-   Verificar o HTML gerado de home, about, índice de projetos, detalhe
    de projeto, índice do blog e artigo.
-   O conteúdo principal está presente no HTML sem exigir execução de
    JavaScript.
-   Cada rota indexável tem título e descrição próprios.
-   Validar JSON-LD com ferramentas adequadas quando os dados finais
    estiverem disponíveis.
-   Confirmar que `robots.txt` não bloqueia páginas ou recursos
    importantes.
-   Confirmar que rascunhos e páginas de preview não são indexáveis.

### 12.4 Acessibilidade

-   Navegar pelas páginas usando apenas teclado.
-   Verificar foco visível, ordem de tabulação e nomes acessíveis.
-   Testar menu móvel e terminal.
-   Executar pelo menos uma ferramenta automatizada de acessibilidade,
    quando disponível.
-   Corrigir violações críticas e sérias detectadas; documentar
    limitações remanescentes.

### 12.5 Responsividade

Verificar, no mínimo: - celular estreito (aproximadamente 320--375
px); - celular comum (aproximadamente 390--430 px); - tablet; -
desktop; - zoom de 200%.

Não deve haver rolagem horizontal global acidental, texto cortado ou
controles impossíveis de usar. Blocos de código podem ter rolagem
horizontal localizada.

### 12.6 Desempenho

-   Executar Lighthouse ou ferramenta equivalente em build de produção.
-   Corrigir recursos pesados, imagens desnecessárias e JavaScript
    evitável.
-   Registrar resultados de diagnóstico no relatório final do agente,
    sem apresentá-los como métricas de campo.
-   Não declarar Core Web Vitals "aprovados em campo" sem dados de
    usuários reais.

------------------------------------------------------------------------

## 13. Critérios de aceite do MVP

O trabalho é considerado concluído quando:

-   [ ] A identidade visual segue a paleta e as regras deste documento.
-   [ ] O site é responsivo e utilizável em celular e desktop.
-   [ ] Home, Sobre, Projetos, Blog, Contato e 404 estão implementadas.
-   [ ] Páginas individuais de projeto e artigo são geradas a partir de
    conteúdo versionado.
-   [ ] O terminal interativo é opcional, seguro e acessível.
-   [ ] Os links principais funcionam sem depender do terminal.
-   [ ] O conteúdo essencial está presente no HTML gerado.
-   [ ] Sitemap, `robots.txt`, canonical configurável e metadados estão
    implementados.
-   [ ] Não há informações pessoais, métricas ou projetos inventados.
-   [ ] Conteúdo de exemplo é claramente identificado como ilustrativo
    ou permanece fora do build público.
-   [ ] Build, checagem de tipos e testes configurados passam.
-   [ ] O README explica como instalar, executar, testar, buildar,
    publicar e adicionar conteúdo.
-   [ ] Existe uma lista clara de dados que o autor precisa fornecer
    antes do lançamento final.
-   [ ] Não há dependência de backend, banco de dados ou serviço pago
    para o funcionamento essencial.

------------------------------------------------------------------------

## 14. Entregáveis exigidos do agente

1.  Código-fonte completo.
2.  `SPEC.md` incluído no repositório.
3.  `README.md` com instruções de desenvolvimento e deploy.
4.  Arquivos de configuração e scripts de build/teste.
5.  Componentes e páginas descritos neste escopo.
6.  Conteúdo de demonstração mínimo, sem fingir ser histórico real do
    autor.
7.  Resultado de build e testes executados.
8.  Relatório final conciso com:
    -   funcionalidades implementadas;
    -   decisões técnicas relevantes;
    -   testes executados e resultados observados;
    -   problemas conhecidos;
    -   configurações pendentes;
    -   informações que precisam ser fornecidas pelo autor.
9.  Nenhuma alegação de deploy bem-sucedido se o deploy não tiver sido
    executado e verificado.

------------------------------------------------------------------------

## 15. Plano de implementação recomendado

### Etapa 1 --- Fundação

-   Criar projeto Astro com TypeScript.
-   Configurar tokens, estilos globais e layout base.
-   Criar navegação, rodapé e responsividade.
-   Criar configuração central do site.

### Etapa 2 --- Conteúdo

-   Configurar coleções e schemas de projetos e artigos.
-   Implementar índices e páginas de detalhe.
-   Criar About, Contact e 404.
-   Preparar exemplos explicitamente ilustrativos ou páginas sem
    conteúdo real até o autor preencher.

### Etapa 3 --- Identidade interativa

-   Implementar terminal opcional e lista de comandos permitidos.
-   Testar navegação alternativa, teclado, leitores de tela e modo de
    movimento reduzido.

### Etapa 4 --- SEO e qualidade

-   Implementar metadados, canonical configurável, sitemap,
    `robots.txt`, RSS e JSON-LD apropriado.
-   Validar HTML gerado, links, acessibilidade e responsividade.
-   Executar build de produção e diagnósticos de desempenho.

### Etapa 5 --- Documentação e entrega

-   Completar README.
-   Registrar pendências de conteúdo e domínio.
-   Executar os testes finais.
-   Entregar resumo do que foi realmente feito, sem alegações não
    verificadas.

------------------------------------------------------------------------

## 16. Instrução final ao agente de programação

Implemente este documento como especificação de produto. Antes de
adicionar qualquer tecnologia, dependência, página ou funcionalidade não
prevista, avalie se é necessária ao MVP e prefira a solução mais simples
que satisfaça os requisitos.

Não transforme o projeto em um template genérico. Não deixe a estética
de terminal prejudicar SEO, acessibilidade, desempenho ou navegação. Não
invente dados pessoais, histórico, resultados, links ou métricas. Não
esconda falhas de build ou testes. Se uma decisão depender de informação
que o autor ainda não forneceu, use uma configuração explícita e
documente a pendência, sem bloquear partes independentes do trabalho.

Prioridade de decisão:

1.  Correção e veracidade.
2.  Acessibilidade e usabilidade.
3.  HTML rastreável e SEO técnico.
4.  Desempenho e simplicidade.
5.  Fidelidade visual à identidade definida.
6.  Efeitos e recursos opcionais.

O resultado deve ser um site publicável, sustentável e fácil de manter,
e não apenas uma demonstração visual.
