# Gerador de Currículo PDF

Este projeto foi desenvolvido para facilitar a criação de currículos personalizados em PDF para diferentes processos seletivos. Ele permite que você mantenha todos os seus dados profissionais em um único local e gere automaticamente versões do seu currículo adaptadas para cada vaga específica.

O sistema organiza suas informações de forma estruturada e gera PDFs com nome personalizado incluindo o cargo e a empresa da vaga, tornando mais fácil gerenciar múltiplas candidaturas. Todas as suas experiências, projetos, habilidades e formação são mantidas em arquivos de dados que podem ser facilmente atualizados, enquanto o layout permanece consistente e profissional.

## Estrutura do Projeto

```
src/
├── vaga/
│   └── vaga-01.md           # Arquivos com informações das vagas
├── data/
│   └── data.ts              # Todos os dados do currículo (EDITE AQUI!)
├── layout/
│   ├── generateHtml.ts      # Template HTML que injeta os dados
│   ├── styles.css           # Estilos CSS
│   └── curriculo.html       # HTML gerado automaticamente
└── generate.ts              # Script principal para gerar PDF

output/
└── *.pdf                    # PDFs gerados com nomes personalizados
```

## Como Usar

### 1. Atualizar Dados do Currículo

Edite o arquivo `src/data/data.ts` com suas informações:

```typescript
export const resumeData: ResumeData = {
  contact: {
    name: "Seu Nome",
    email: "seu@email.com",
    // ... outros dados de contato
  },
  about: [
    "Primeira linha do sobre mim",
    "Segunda linha...",
  ],
  experiences: [...],
  // ... outros dados
};
```

### 2. Configure seu Nome no Gerador

Edite o arquivo `src/generate.ts` e localize a variável `my_name`. Altere o nome que aparece no início do template do nome do arquivo PDF:

```typescript
// Procure por esta linha e substitua pelo seu nome
const my_name = "leonardo-ferreira";
```

Isso garantirá que todos os PDFs gerados contenham seu nome no formato do arquivo.

### 3. Gerar PDF e HTML

```bash
npm run generate:html
```

Este comando irá:

- Gerar o HTML a partir dos dados em `data.ts`
- Salvar o HTML em `src/layout/curriculo.html`
- Criar o PDF em `output/*.pdf`

### 4. Personalizar o Currículo para a Vaga

Crie um arquivo `.md` na pasta `src/vaga/` com as informações da vaga:

```markdown
Nome da vaga: Desenvolvedor Full Stack
Empresa: Tech Company
Descrição: [Cole aqui a descrição completa da vaga]
Requisitos: [Liste os requisitos principais]
```

**Recomendação:** Use o **GitHub Copilot** ou outro assistente de IA do VSCode para adaptar seu currículo à vaga específica. Peça para a IA analisar a descrição da vaga e sugerir ajustes em suas experiências, projetos e habilidades que destaquem as competências mais relevantes para aquela posição.

Exemplo de prompt para o Copilot:

> "Analise a descrição da vaga em #file:vaga-01.md e personalize meu currículo em #file:data.ts seguindo rigorosamente as diretrizes abaixo:
>
> **Etapa 1 — Análise da vaga**
>
> Identifique requisitos obrigatórios, diferenciais, tecnologias citadas e palavras-chave relevantes (incluindo termos comuns a ATS).
>
> **Etapa 2 — Ajustes no currículo**
>
> - Adapte a seção `about` para refletir aderência direta aos requisitos da vaga, sem generalizações.
> - Reorganize e reescreva descrições de `experiences`, priorizando responsabilidades, resultados e tecnologias que atendam aos requisitos obrigatórios antes dos diferenciais.
> - Ajuste `projects` para enfatizar tecnologias, decisões técnicas e resultados que a vaga valoriza.
> - Atualize `skills`, ordenando-as por relevância para a vaga e alinhando a nomenclatura à descrição (ex: sinônimos técnicos e termos ATS).
>
> **Restrições**
>
> - Mantenha a estrutura do arquivo data.ts intacta (schema, campos e tipos).
> - Não crie, invente ou infira experiências, tecnologias ou resultados não presentes no currículo original.
> - Reescreva apenas quando houver ganho claro de aderência à vaga.
>
> **Entrega**
>
> Retorne o data.ts ajustado. Ao final, liste objetivamente cada alteração realizada e o motivo (ex: requisito da vaga, palavra-chave ATS, clareza técnica)."

### 5. Gerar PDF para a Vaga

Após personalizar os dados, gere o PDF com nome específico para a vaga:

```bash
npm run generate:html vaga-01.md
```

O PDF será gerado com o nome: `{seu-nome}-curriculo-{nome-da-vaga}-{empresa}.pdf`

## Vantagens deste Projeto

- ✅ **Personalização por Vaga**: Adapte rapidamente seu currículo para destacar as experiências e habilidades mais relevantes para cada processo seletivo
- ✅ **Organização Profissional**: Geração automática de PDFs com nomenclatura padronizada incluindo nome da vaga e empresa, facilitando o gerenciamento de múltiplas candidaturas
- ✅ **Atualização Centralizada**: Mantenha todas as suas informações profissionais em um único lugar e gere versões personalizadas sem reescrever o currículo do zero
- ✅ **Economia de Tempo**: Reutilize o mesmo template para diferentes vagas, alterando apenas os dados relevantes conforme a oportunidade
- ✅ **Consistência Visual**: Layout profissional e padronizado em todos os PDFs gerados, garantindo uma apresentação impecável
- ✅ **Versionamento Inteligente**: Facilidade para rastrear quais ajustes foram feitos para cada vaga e comparar diferentes versões do seu currículo

## Scripts Disponíveis

- `npm run generate:html` - Gera HTML e PDF a partir dos dados
- `npm run build` - Compila TypeScript

## Observações

- O arquivo `curriculo.html` é gerado automaticamente, **não edite manualmente**
- Todas as alterações devem ser feitas em `data.ts`
- O CSS permanece em `styles.css` para fácil customização de estilos
