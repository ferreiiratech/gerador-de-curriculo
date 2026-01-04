# Copilot Instructions - Gerador de Currículo PDF

## Arquitetura do Projeto

Sistema de geração de currículos em PDF personalizados por vaga. A arquitetura separa dados, layout e lógica de geração:

- **`src/data/data.ts`**: Dados do currículo (contato, experiências, projetos, habilidades)
- **`src/data/type.d.ts`**: Definições de tipos TypeScript
- **`src/layout/generateHtml.ts`**: Template HTML com injeção de dados via template literals
- **`src/layout/styles.css`**: Estilos CSS com regras especiais para impressão
- **`src/generate.ts`**: Script principal que lê vaga, gera HTML e converte para PDF via Puppeteer
- **`src/vaga/*.md`**: Arquivos markdown com informações da vaga (formato: `Nome da vaga:` e `Empresa:`)

## Padrões Críticos de Posicionamento Dinâmico

O layout usa **posicionamento absoluto em `em`** com cálculos dinâmicos baseados no comprimento do conteúdo. Quando adicionar/modificar seções:

### 1. Seções Dinâmicas com IIFE

Seções que dependem de conteúdo variável usam IIFEs para calcular posições:

```typescript
${(() => {
  let sectionTop = baseTop;
  previousContent.forEach(item => {
    sectionTop += 2 + item.description.length + 1.5; // header + content + gap
  });
  return `<div style="top: ${sectionTop}em">...</div>`;
})()}
```

### 2. Fórmulas de Espaçamento

- **Experiências**: `2em` (título+empresa) + `description.length` + `1.5em` (gap)
- **Educação**: `3em` por item (título + descrição + gap)
- **Projetos**: `9.5em` por projeto (fixo por ter highlights)
- **Habilidades**: Prêmios e Cursos calculados dinamicamente baseados em número de items anteriores

### 3. Loop para Acumular Alturas

Para múltiplos itens da mesma seção:

```typescript
let baseTop = 14.5;
for (let i = 0; i < expIndex; i++) {
  baseTop += 2 + experiences[i].description.length + 1.5;
}
```

## Geração de PDF

### Comando Principal

```bash
npm run generate:html [arquivo-vaga.md]
```

### Fluxo de Geração

1. Lê arquivo de vaga de `src/vaga/` (ou usa padrão se não encontrado)
2. Gera HTML a partir de `data.ts` via `generateResumeHtml()`
3. Salva HTML temporário para Puppeteer carregar CSS externo
4. Gera PDF via `page.goto('file://...')` (necessário para CSS funcionar)
5. Nome do PDF: `{my_name}-curriculo-{vaga}-{empresa}.pdf` ou `{my_name}-curriculo-desenvolvedor.pdf`

### CSS @page para Multi-páginas

```css
@page :first {
  margin: 0px 10px;
} /* Primeira página */
@page {
  margin: 10px;
} /* Demais páginas */
```

## Workflows do Desenvolvedor

### Adicionar Nova Seção Dinâmica

1. Adicionar dados em `src/data/data.ts` e tipo em `type.d.ts`
2. Em `generateHtml.ts`, envolver seção com IIFE
3. Calcular `sectionTop` somando alturas das seções anteriores
4. Usar fórmula de espaçamento consistente com outras seções

### Customizar Nome do PDF

Editar `my_name` em `src/generate.ts`:

```typescript
const my_name = "seu-nome";
```

### Adicionar Linguagem de Programação

O objeto `programmingLanguages` aceita chaves dinâmicas. A seção "Prêmios" calcula posição automaticamente:

```typescript
programmingLanguages: {
  "3 years": ["JavaScript", "TypeScript"],
  "6 months": ["Java"],
  // A seção Prêmios desce automaticamente
}
```

## Convenções Específicas

- **Não editar `curriculo.html`**: Arquivo gerado automaticamente
- **Template strings**: HTML gerado via template literals com interpolação de dados
- **Classes CSS**: Prefixo `pdf24_` por legado de extração de PDF original
- **Espaçamento em strings**: `&nbsp;` usado extensivamente para controle preciso de layout
- **Arquivos de vaga**: Formato livre, mas requer linhas `Nome da vaga:` e `Empresa:`

## Integração com IA para Personalização

Padrão recomendado: usar GitHub Copilot para adaptar conteúdo às vagas

Prompt exemplo:

> "Analise #file:vaga-01.md e ajuste #file:data.ts para destacar experiências relevantes à vaga"

## Troubleshooting

- **CSS não carrega no PDF**: Usar `page.goto()` ao invés de `page.setContent()`
- **Conteúdo sobrepondo**: Verificar cálculos de `top` em seções dinâmicas com IIFE
- **Quebra de página ruim**: Ajustar regras `page-break-*` em `styles.css`
- **Nome de arquivo estranho**: Verificar encoding de acentos na função `normalize()`
