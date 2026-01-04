import puppeteer from "puppeteer";
import * as path from "path";
import * as fs from "fs";
import { generateResumeHtml } from "./layout/generateHtml";

const my_name = "your-name-here"; // Substitua pelo seu nome para o arquivo padrão

function readVagaInfo(vagaFileName: string): {
  nomeDaVaga: string;
  empresa: string;
} {
  const vagaPath = path.resolve(__dirname, "./vaga", vagaFileName);

  if (!fs.existsSync(vagaPath)) {
    console.log(`Arquivo de vaga não encontrado. Usando nome padrão.`);
    return { nomeDaVaga: "", empresa: "" };
  }

  const content = fs.readFileSync(vagaPath, "utf-8");
  const lines = content.split("\n");

  let nomeDaVaga = "";
  let empresa = "";

  for (const line of lines) {
    if (line.toLowerCase().startsWith("nome da vaga:")) {
      nomeDaVaga = line.split(":")[1].trim();
    } else if (line.toLowerCase().startsWith("empresa:")) {
      empresa = line.split(":")[1].trim();
    }
  }

  return { nomeDaVaga, empresa };
}

function formatFileName(nomeDaVaga: string, empresa: string): string {
  if (!nomeDaVaga && !empresa) {
    return `${my_name}-curriculo-desenvolvedor.pdf`;
  }

  const normalize = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const vagaNormalizada = normalize(nomeDaVaga);
  const empresaNormalizada = normalize(empresa);

  return `${my_name}-curriculo-${vagaNormalizada}-${empresaNormalizada}.pdf`;
}

async function convertHtmlToPdf() {
  const layoutDir = path.resolve(__dirname, "./layout");

  const vagaFileName = process.argv[2] || "vaga-01.md";
  const { nomeDaVaga, empresa } = readVagaInfo(vagaFileName);

  const pdfFileName = formatFileName(nomeDaVaga, empresa);
  const outputPath = path.resolve(__dirname, "../output", pdfFileName);

  const htmlContent = generateResumeHtml();

  const staticHtmlPath = path.join(layoutDir, "curriculo.html");
  fs.writeFileSync(staticHtmlPath, htmlContent, "utf-8");
  console.log(`HTML salvo em: ${staticHtmlPath}`);

  const tempHtmlPath = path.join(layoutDir, "curriculo-temp.html");
  fs.writeFileSync(tempHtmlPath, htmlContent, "utf-8");

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage();

    await page.goto(`file://${tempHtmlPath}`, {
      waitUntil: "networkidle0",
    });

    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
      },
    });

    console.log(`PDF gerado com sucesso em: ${outputPath}`);
    console.log(`Vaga: ${nomeDaVaga}`);
    console.log(`Empresa: ${empresa}`);

    if (fs.existsSync(tempHtmlPath)) {
      fs.unlinkSync(tempHtmlPath);
    }
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);

    if (fs.existsSync(tempHtmlPath)) {
      fs.unlinkSync(tempHtmlPath);
    }

    throw error;
  } finally {
    await browser.close();
  }
}

convertHtmlToPdf().catch((error) => {
  console.error("Erro ao converter HTML para PDF:", error);
  process.exit(1);
});
