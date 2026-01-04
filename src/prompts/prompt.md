# Prompt para Personalização de Currículo

## Objetivo

Analise a descrição da vaga do arquivo da vaga anexado e personalize os dados do meu currículo em #file:data.ts seguindo rigorosamente as diretrizes abaixo.

---

## Etapa 1 — Análise da Vaga

Identifique e documente:

- ✓ Requisitos obrigatórios
- ✓ Requisitos diferenciais
- ✓ Tecnologias e ferramentas citadas
- ✓ Palavras-chave relevantes (incluindo termos comuns a sistemas ATS)
- ✓ Competências comportamentais valorizadas

---

## Etapa 2 — Ajustes no Currículo

### 2.1 Seção `about`

Adapte para refletir aderência direta aos requisitos da vaga, eliminando generalizações e destacando alinhamento com a oportunidade.

### 2.2 Seção `experiences`

Reorganize e reescreva as descrições de experiências:

- Priorize responsabilidades e resultados que atendam aos **requisitos obrigatórios**
- Destaque tecnologias e metodologias mencionadas na vaga
- Use verbos de ação e quantifique resultados quando possível
- Mantenha apenas experiências relevantes em destaque

### 2.3 Seção `projects`

Ajuste para enfatizar:

- Tecnologias e stack técnico alinhados à vaga
- Decisões arquiteturais e técnicas relevantes
- Resultados mensuráveis e impacto dos projetos
- Metodologias de trabalho compatíveis com a empresa

### 2.4 Seção `skills`

Atualize seguindo estas regras:

- Ordene por relevância direta para a vaga
- Alinhe nomenclatura com termos da descrição (sinônimos técnicos e termos ATS)
- Agrupe tecnologias relacionadas de forma estratégica
- Destaque tempo de experiência nas tecnologias-chave da vaga

---

## Restrições Obrigatórias

⚠️ **IMPORTANTE - Não viole estas regras:**

1. **Estrutura**: Mantenha o schema, campos e tipos do arquivo `data.ts` intactos
2. **Veracidade**: Não crie, invente ou infira experiências, tecnologias ou resultados não presentes no currículo original
3. **Relevância**: Reescreva apenas quando houver ganho claro de aderência à vaga
4. **Formato**: Preserve o número de linhas das seções para manter o layout do PDF

---

## Entrega Esperada

### Formato da resposta:

1. **Arquivo `data.ts` completo** com as alterações aplicadas
2. **Changelog detalhado** listando objetivamente:
   - Cada alteração realizada
   - Justificativa técnica (ex: requisito obrigatório, palavra-chave ATS, otimização de clareza)
   - Seção afetada

### Exemplo de changelog:

```
ALTERAÇÕES REALIZADAS:

[ABOUT]
- Substituído "desenvolvedor full stack" por "desenvolvedor backend Java"
  → Requisito obrigatório da vaga

[EXPERIENCES]
- Reordenado bullets para destacar experiência com Spring Boot primeiro
  → Tecnologia principal citada 3x na descrição da vaga

[SKILLS]
- Movido PostgreSQL para primeiro lugar em banco de dados
  → Requisito obrigatório + termo ATS presente na vaga
```
