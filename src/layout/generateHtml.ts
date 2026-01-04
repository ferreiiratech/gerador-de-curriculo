import { resumeData } from "../data/data";

export function generateResumeHtml(): string {
  const { contact, about, experiences, education, projects, skills } =
    resumeData;

  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${contact.name} - Currículo</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="pdf24_ pdf24_02">
      <div class="pdf24_03"></div>
      <div class="pdf24_view">
        <div class="pdf24_05 pdf24_06">
          
          <div class="pdf24_01" style="left: 17.5942em; top: 1em">
            <span class="pdf24_07 pdf24_08 pdf24_09" style="word-spacing: 0.0021em">
              ${contact.name} &nbsp;
            </span>
          </div>

          ${
            contact.website
              ? `<div class="pdf24_01" style="left: 21em; top: 2.5em">
            <a href="${contact.website}" target="_blank" rel="noopener noreferrer">
              <span class="pdf24_12 pdf24_08 pdf24_13">${contact.website} &nbsp;</span>
            </a>
          </div>`
              : ""
          }

          <div class="pdf24_01" style="left: 3em; top: 2.5em">
            <a href="mailto:${contact.email}" target="_blank">
              <span class="pdf24_12 pdf24_08 pdf24_13">${
                contact.email
              } &nbsp;</span>
            </a>
          </div>

          <div class="pdf24_01" style="left: 3em; top: 3.5em">
            <span class="pdf24_12 pdf24_08 pdf24_13" style="word-spacing: -0.0061em">
              ${contact.phone} &nbsp;
            </span>
          </div>

          <div class="pdf24_01" style="left: 39.0883em; top: 2.5em">
            <a href="${
              contact.github
            }" target="_blank" rel="noopener noreferrer">
              <span class="pdf24_12 pdf24_08 pdf24_13">${
                contact.github
              } &nbsp;</span>
            </a>
          </div>

          <div class="pdf24_01" style="left: 35.7258em; top: 3.5em">
            <a href="${
              contact.linkedin
            }" target="_blank" rel="noopener noreferrer">
              <span class="pdf24_16 pdf24_08 pdf24_17">${
                contact.linkedin
              } &nbsp;</span>
            </a>
          </div>

          <div class="pdf24_01" style="left: 2.92em; top: 5.5em">
            <span class="pdf24_14 pdf24_08 pdf24_15">SOBRE MIM &nbsp;</span>
          </div>
          <div class="section-underline" style="left: 2.92em; top: 6.5em"></div>
          ${about
            .map(
              (line, index) => `
          <div class="pdf24_01" style="left: 2.92em; top: ${7.5 + index}em">
            <span class="pdf24_18 pdf24_08 ${
              ["pdf24_19", "pdf24_20", "pdf24_21", "pdf24_22"][index]
            }" style="word-spacing: ${
                ["-0.0021em", "-0.0039em", "-0.001em", "-0.0031em"][index]
              }">
              ${line} &nbsp;
            </span>
          </div>`
            )
            .join("")}

          <div class="experience-section">
          <div class="pdf24_01" style="left: 2.92em; top: 12.5em">
            <span class="pdf24_14 pdf24_08 pdf24_23">EXPERIÊNCIAS &nbsp;</span>
          </div>
          <div class="section-underline" style="left: 2.92em; top: 13.5em"></div>
          ${experiences
            .map((exp, expIndex) => {
              let baseTop = 14.5;
              for (let i = 0; i < expIndex; i++) {
                baseTop += 2 + experiences[i].description.length + 1.5;
              }

              return `
          <div class="pdf24_01" style="left: 3em; top: ${baseTop}em">
            <span class="pdf24_24 pdf24_08 pdf24_25">${exp.title} &nbsp;</span>
          </div>
          <div class="pdf24_01" style="left: 3em; top: ${baseTop + 1}em">
            <span class="pdf24_18_a pdf24_08 pdf24_19">${
              exp.company
            } &nbsp;</span>
          </div>
          <div class="pdf24_01" style="left: 40.5783em; top: ${baseTop + 1}em">
            <span class="pdf24_18_a pdf24_08 pdf24_19">${
              exp.period
            } &nbsp;</span>
          </div>
          ${exp.description
            .map(
              (line, index) => `
          <div class="pdf24_01" style="left: 2.92em; top: ${
            baseTop + 2 + index
          }em">
            <span class="pdf24_18 pdf24_08 pdf24_19">${line} &nbsp;</span>
          </div>`
            )
            .join("")}`;
            })
            .join("")}

          ${(() => {
            let educationTop = 12;
            experiences.forEach((exp) => {
              educationTop += 2 + exp.description.length + 1.5;
            });
            educationTop += 2;

            return `
          <div class="education-section">
          <div class="pdf24_01" style="left: 2.92em; top: ${educationTop}em">
            <span class="pdf24_14 pdf24_08 pdf24_23">EDUCAÇÃO &nbsp;</span>
          </div>
          <div class="section-underline" style="left: 2.92em; top: ${
            educationTop + 1
          }em"></div>
          ${education
            .map((edu, index) => {
              const topPosition = educationTop + 2 + index * 3;
              const periodLeft = "40.5783em";
              return `
          <div class="pdf24_01" style="left: 3em; top: ${topPosition}em">
            <span class="pdf24_24 pdf24_08 pdf24_25" style="word-spacing: ${
              index === 0 ? "0.0036em" : "-0.0008em"
            }">
              ${edu.institution} &nbsp;
            </span>
          </div>
          <div class="pdf24_01" style="left: 3em; top: ${topPosition + 1}em">
            <span class="pdf24_18 pdf24_08 ${
              index === 0 ? "pdf24_26" : "pdf24_28"
            }" style="word-spacing: ${index === 0 ? "-0.0005em" : "0.0091em"}">
              ${edu.degree} &nbsp;
            </span>
          </div>
          <div class="pdf24_01" style="left: ${periodLeft}; top: ${
                topPosition + 1
              }em">
            <span class="pdf24_18_a pdf24_08 ${
              index === 0 ? "pdf24_27" : "pdf24_29"
            }" style="word-spacing: ${index === 0 ? "0.0084em" : "0.0083em"}">
              ${edu.period} &nbsp;
            </span>
          </div>`;
            })
            .join("")}
          </div>`;
          })()}

          ${(() => {
            let projectsTop = 12;
            experiences.forEach((exp) => {
              projectsTop += 2 + exp.description.length + 1.5;
            });
            projectsTop += 2 + education.length * 3 + 2;

            return `
          <div class="projects-section">
          <div class="pdf24_01" style="left: 2.92em; top: ${projectsTop}em">
            <span class="pdf24_14 pdf24_08 pdf24_30" style="word-spacing: 0.0008em">
              MELHORES PROJETOS &nbsp;
            </span>
          </div>
          <div class="section-underline" style="left: 2.92em; top: ${
            projectsTop + 1
          }em"></div>
          ${projects
            .map((project, projectIndex) => {
              const baseTop = projectsTop + 2 + projectIndex * 9.5;
              const periodLeft = projectIndex === 0 ? "41.9983em" : "41.2483em";
              const periodClasses =
                projectIndex === 0
                  ? 'style="word-spacing: 0.0006em"'
                  : 'style="word-spacing: 0.0134em"';
              const separatorClasses =
                projectIndex === 0
                  ? 'style="word-spacing: 0.01em"'
                  : 'style="word-spacing: -0.0033em"';
              const endPeriodClasses =
                projectIndex === 0
                  ? 'style="word-spacing: 0.0158em"'
                  : 'style="word-spacing: -0.0019em"';

              const periodParts =
                projectIndex === 0
                  ? ["Maio", "Junho 2024"]
                  : ["Janeiro", "Março 2024"];

              return `
          <div class="pdf24_01" style="left: ${periodLeft}; top: ${baseTop}em">
            <span class="pdf24_18_a pdf24_08 ${
              projectIndex === 0 ? "pdf24_31" : "pdf24_28"
            }" ${periodClasses}>${periodParts[0]} </span>
            <span class="pdf24_18_a pdf24_08 pdf24_09" ${separatorClasses}>– </span>
            <span class="pdf24_18_a pdf24_08 ${
              projectIndex === 0 ? "pdf24_33" : "pdf24_38"
            }" ${endPeriodClasses}>${periodParts[1]} &nbsp;</span>
          </div>
          <div class="pdf24_01" style="left: 3.37em; top: ${baseTop}em">
            <span class="pdf24_24 pdf24_08 pdf24_34" ${
              projectIndex === 0 ? 'style="word-spacing: 0.0016em"' : ""
            }>
              ${project.name} &nbsp;
            </span>
          </div>
          ${project.description
            .map((line, index) => {
              const classes = [
                "pdf24_19",
                "pdf24_17",
                "pdf24_35",
                "pdf24_35",
                "pdf24_31",
              ];
              const spacing = [
                "-0.0019em",
                "0.0021em",
                "-0.0028em",
                "-0.0022em",
                "0.0009em",
              ];
              if (projectIndex === 1) {
                classes[1] = "pdf24_39";
                classes[2] = "pdf24_31";
                classes[3] = "pdf24_17";
                classes[4] = "pdf24_13";
                spacing[0] = "-0.0015em";
                spacing[1] = "-0.0016em";
                spacing[2] = "0.0027em";
                spacing[3] = "0.0018em";
                spacing[4] = "-0.0007em";
              }
              return `
          <div class="pdf24_01" style="left: 3.37em; top: ${
            baseTop + 1 + index
          }em">
            <span class="pdf24_18 pdf24_08 ${
              classes[index]
            }" style="word-spacing: ${spacing[index]}">
              ${line} &nbsp;
            </span>
          </div>`;
            })
            .join("")}
          ${project.highlights
            .map(
              (highlight, index) => `
          <div class="pdf24_01" style="left: 4.87em; top: ${
            baseTop + 6 + index
          }em">
            <span class="pdf24_36 pdf24_37 pdf24_09">▪</span>
          </div>
          <div class="pdf24_01" style="left: 6.372em; top: ${
            baseTop + 6 + index
          }em">
            <span class="pdf24_12 pdf24_08 ${
              index === 0
                ? projectIndex === 0
                  ? "pdf24_13"
                  : "pdf24_09"
                : index === 1
                ? "pdf24_38"
                : projectIndex === 0
                ? "pdf24_39"
                : "pdf24_40"
            }" style="word-spacing: ${
                index === 0
                  ? projectIndex === 0
                    ? "0.0025em"
                    : "0.0007em"
                  : index === 1
                  ? projectIndex === 0
                    ? "0.002em"
                    : "0.0031em"
                  : projectIndex === 0
                  ? "-0.0017em"
                  : "-0.0036em"
              }">
              ${highlight} &nbsp;
            </span>
          </div>`
            )
            .join("")}`;
            })
            .join("")}
          </div>`;
          })()}

          ${(() => {
            let skillsTop = 12.5;
            experiences.forEach((exp) => {
              skillsTop += 2 + exp.description.length + 1.5;
            });
            skillsTop += 2 + education.length * 3 + 2;
            skillsTop += 2 + projects.length * 9.5;

            return `
          <div class="skills-section">
          <div class="pdf24_01" style="left: 2.92em; top: ${skillsTop}em">
            <span class="pdf24_42 pdf24_08 pdf24_15">HABILIDADES &nbsp;</span>
          </div>
          <div class="section-underline" style="left: 2.92em; top: ${
            skillsTop + 1
          }em"></div>

          <div class="pdf24_01" style="left: 3.96em; top: ${skillsTop + 1.5}em">
            <span class="pdf24_43 pdf24_08 pdf24_44" style="word-spacing: -0.0056em">
              LINGUAGENS DE PROGRAMAÇÃO &nbsp;
            </span>
          </div>
          ${Object.entries(skills.programmingLanguages)
            .map((entry, index) => {
              const [years, languages] = entry;
              const topPosition = skillsTop + 2.5 + index;
              return `
          <div class="pdf24_01" style="left: 3.96em; top: ${topPosition}em">
            <span class="pdf24_12 pdf24_08 ${
              index === 2 ? "pdf24_26" : "pdf24_45"
            }" style="word-spacing: ${index === 2 ? "0.0093em" : "0.0107em"}">
              ${years}${index === 2 ? ":" : ": &nbsp;"}
            </span>
            <span class="pdf24_12 pdf24_08 pdf24_09" style="word-spacing: 1em">&nbsp;</span>
            <span class="pdf24_12 pdf24_08 ${
              index === 0 ? "pdf24_34" : index === 1 ? "pdf24_09" : "pdf24_30"
            }" ${
                index === 0
                  ? 'style="word-spacing: 0.0082em"'
                  : index === 2
                  ? 'style="word-spacing: 0.0141em"'
                  : ""
              }>
              ${languages.join(", ")} &nbsp;
            </span>
          </div>`;
            })
            .join("")}

          ${(() => {
            const programmingLanguagesCount = Object.keys(
              skills.programmingLanguages
            ).length;
            const awardsTop = skillsTop + 2.5 + programmingLanguagesCount + 0.5;

            return `
          <div class="pdf24_01" style="left: 3.96em; top: ${awardsTop}em">
            <span class="pdf24_43 pdf24_08 pdf24_47">PRÊMIOS &nbsp;</span>
          </div>
          ${skills.awards
            .map(
              (award, index) => `
          <div class="pdf24_01" style="left: 3.96em; top: ${
            awardsTop + 1 + index
          }em">
            <span class="pdf24_16 pdf24_08 ${
              index % 2 === 0
                ? "pdf24_31"
                : index === 1
                ? "pdf24_45"
                : "pdf24_46"
            }" style="word-spacing: ${
                index % 2 === 0
                  ? "0.0018em"
                  : index === 1
                  ? "0.0054em"
                  : "0.0075em"
              }">
              ${award} &nbsp;
            </span>
          </div>`
            )
            .join("")}`;
          })()}

          <div class="pdf24_01" style="left: 26.2542em; top: ${
            skillsTop + 1.5
          }em">
            <span class="pdf24_43 pdf24_08 pdf24_44">TECNOLOGIAS &nbsp;</span>
          </div>
          ${skills.technologies
            .map(
              (tech, index) => `
          <div class="pdf24_01" style="left: 26.2542em; top: ${
            skillsTop + 2.5 + index
          }em">
            <span class="pdf24_12 pdf24_08 ${
              index === 0 ? "pdf24_46" : index === 1 ? "pdf24_28" : "pdf24_20"
            }" style="word-spacing: ${
                index === 0
                  ? "0.0102em"
                  : index === 1
                  ? "0.0066em"
                  : "-0.0006em"
              }">
              ${tech} &nbsp;
            </span>
          </div>`
            )
            .join("")}

          ${(() => {
            const coursesTop =
              skillsTop + 2.5 + skills.technologies.length + 0.5;

            return `
          <div class="pdf24_01" style="left: 26.2542em; top: ${coursesTop}em">
            <span class="pdf24_43 pdf24_08 pdf24_48" style="word-spacing: -0.0042em">
              CURSOS ONLINES &nbsp;
            </span>
          </div>
          ${skills.courses
            .map(
              (course, index) => `
          <div class="pdf24_01" style="left: 26.2542em; top: ${
            coursesTop + 1 + index
          }em">
            <span class="pdf24_12 pdf24_08 ${
              index === 0
                ? "pdf24_49"
                : index === 1
                ? "pdf24_34"
                : index === 2 || index === 4
                ? "pdf24_45"
                : index === 3
                ? "pdf24_26"
                : "pdf24_11"
            }" style="word-spacing: ${
                index === 0
                  ? "0.0114em"
                  : index === 1
                  ? "0.0074em"
                  : index === 2 || index === 4
                  ? "0.0035em"
                  : index === 3
                  ? "-0.0004em"
                  : "-0.0064em"
              }">
              ${course} &nbsp;
            </span>
          </div>`
            )
            .join("")}`;
          })()}
          </div>`;
          })()}

        </div>
      </div>
    </div>
  </body>
</html>`;
}
