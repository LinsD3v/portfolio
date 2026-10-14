# Personal Tech Lab

Site pessoal e laboratório técnico para Gabriel Henrique, com foco em desenvolvimento, automação, integrações e experimentos práticos.

## Visão geral

Este projeto é um site estático construído com Astro e TypeScript, seguindo a especificação contida em `SPEC.md`. A implementação prioriza:

- HTML renderizado no build;
- páginas acessíveis e responsivas;
- conteúdo em coleções de dados;
- baixa dependência de JavaScript;
- SEO técnico básico com metadados, sitemap e robots;
- documentação clara sobre pendências antes do deploy final.

## Pré-requisitos

- Node.js 20+
- npm 10+

## Instalação

```bash
npm install
```

## Execução local

```bash
npm run dev
```

Acesse http://localhost:4321

## Build de produção

```bash
npm run build
```

## Verificação e testes

```bash
npm run check
npm test
```

## Estrutura principal

- `src/pages/` — rotas públicas
- `src/content/` — coleções de projetos e artigos
- `src/layouts/` — layout base e de artigo
- `src/components/` — blocos reutilizáveis
- `src/styles/` — tokens e estilos globais
- `src/config/site.ts` — configuração central do site
- `public/` — assets estáticos e `robots.txt`

## Configuração pendente antes do deploy

Antes de publicar, o autor precisa confirmar e preencher os dados abaixo em `src/config/site.ts`:

- URL base real do site (para canonical e sitemap);
- e-mail público;
- perfil do GitHub;
- perfil do LinkedIn.

Enquanto esses dados não forem preenchidos, o site mantém placeholders explícitos e evita links ou URLs fictícias.

## Conteúdo de demonstração

Os projetos e artigos criados neste repositório têm finalidade ilustrativa e estão claramente apresentados como exemplo de estrutura editorial. Eles não pretendem representar histórico profissional real, métricas, clientes ou resultados confirmados.

## Publicação

Como a URL-base ainda não foi definida, o deploy final deve ocorrer somente após configurar a variável de site e validar os links de produção. O repositório foi estruturado para permitir esse ajuste sem inventar domain names nem canonical inválidos.
