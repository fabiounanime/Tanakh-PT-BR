# Tanakh PT-BR — versão de desenvolvimento

**A tradução inédita integral ainda NÃO está concluída.** O objetivo confirmado é traduzir diretamente o hebraico/aramaico e o grego para português brasileiro formal e literal, com os textos previamente incluídos e funcionamento offline. Não substituir por outra versão portuguesa sem nova instrução do usuário.

## Conteúdo atual

- 66 livros de origem: 39 do AT (OSHB/WLC) e 27 do NT (SBLGNT).
- Transliteração SBL pré-calculada dos 23.213 versículos do AT. É automática, não fonética portuguesa; trechos aramaicos e formas sem vogais exigem conferência.
- 88 versículos em português: Gênesis 1, Salmo 23 e João 1 completos. Rascunhos por IA, sem revisão especializada.
- Português como modo inicial, alternância para original e transliteração do AT.
- Download do acervo, instalação PWA e leitura offline após o primeiro download.
- Sem API, chave, servidor de tradução, conta ou cobranças de IA no uso do aplicativo.

## Retomar o trabalho

A decisão mais recente é **tradução inédita literal**, não incorporar uma tradução existente como substituta. Faltam a tradução dos demais capítulos e a revisão filológica de todo o português. Não marcar como Bíblia inteira traduzida.

`public/data/translations.json` contém os rascunhos por referência (`Gen.1.1`). `scripts/expand-translations.py` reproduz o lote atual. `public/data/provenance.json` preserva hashes/commits de origem. `public/data/coverage.json` registra a cobertura real. Não completar lacunas com versículos lembrados de outra edição.

Critérios: português formal; YHWH preservado no AT; palavras supridas entre colchetes; ambiguidades em notas; edição e numeração de origem preservadas. Na SBLGNT, João 1:34 tem “Eleito de Deus” e João 1:18 traz monogenes theos. O trecho de João 1:3–4 segue a pontuação da edição. Não harmonizar automaticamente essas leituras com outra Bíblia.

## Gerar pacote estático

Node e dependências do lockfile existente: `pnpm install`, depois `pnpm build:pages`.
O resultado em `pages/` é inteiramente estático. O comando prepara uma versão do cache baseada no conteúdo, compila o leitor e inclui todos os recursos de interface no service worker. Para testes locais: `python3 -m http.server 8080 --directory pages`.

O ZIP para Cloudflare deve conter os arquivos de `pages/` diretamente na raiz, com `index.html`. Não incluir `.env`, dependências, credenciais ou funções de servidor. Não abrir `index.html` por duplo clique: o leitor precisa de HTTP local ou HTTPS para carregar os livros e ativar a PWA.

## Publicar no Cloudflare Pages

1. No painel Cloudflare, abrir Workers & Pages e criar um projeto Pages com upload direto.
2. Enviar o ZIP estático, nomear o projeto `tanakh-pt-br` e publicar.
3. No projeto, abrir Custom domains e cadastrar, por exemplo, `tanakh.innovati.inf.br`.
4. Acompanhar a configuração DNS solicitada pelo painel e aguardar o HTTPS.
5. No celular, abrir o endereço e usar Instalar; no iPhone, Safari → Compartilhar → Adicionar à Tela de Início.
6. Com internet, tocar em Baixar para uso offline e aguardar Textos salvos. Só então testar em modo avião.

A publicação desse pacote não torna concluída a tradução. O aviso de desenvolvimento permanece no leitor.

Documentação: https://developers.cloudflare.com/pages/get-started/direct-upload/

## Licenças e origem

OSHB: texto WLC em domínio público; lemas/morfologia CC BY 4.0, crédito Open Scriptures Hebrew Bible Project (https://github.com/openscriptures/morphhb).
SBLGNT: © 2010 Society of Biblical Literature e Logos Bible Software. Editor Michael W. Holmes. CC BY 4.0 (https://sblgnt.com).
Transliteração: hebrew-transliteration 2.11.0 de Charles Loder, MIT.
Licenças em `public/licenses/`. Conversão para JSON, remoção de barras morfológicas na exibição e transliteração são modificações do projeto. Não implicam endosso dos titulares.

São edições de textos transmitidos por manuscritos, não autógrafos. O aparato grego completo não está incluído. Não se promete uma tradução sem qualquer interpretação ou erro.
