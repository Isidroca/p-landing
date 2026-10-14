import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const TOPICS = [
  { category: "Cómo lo hago", topic: "Cómo crear una factura en dólares en ProVenta" },
  { category: "Finanzas", topic: "Cómo calcular el margen de ganancia en tu negocio" },
  { category: "En RD", topic: "Cómo funciona la facturación electrónica (e-CF) en República Dominicana" },
  { category: "Cómo lo hago", topic: "Cómo configurar múltiples cajas en ProVenta" },
  { category: "Finanzas", topic: "Cómo controlar los gastos operativos de tu negocio con un POS" },
  { category: "En RD", topic: "Qué es el ITBIS y cómo aplicarlo correctamente en tu POS" },
  { category: "Cómo lo hago", topic: "Cómo hacer un cierre de caja correctamente en ProVenta" },
  { category: "Finanzas", topic: "Cómo leer los reportes de ventas para tomar mejores decisiones" },
  { category: "En RD", topic: "Registro Mercantil y RNC: qué necesitas para formalizar tu negocio en RD" },
  { category: "Cómo lo hago", topic: "Cómo agregar productos con variantes en ProVenta" },
  { category: "Finanzas", topic: "Diferencia entre flujo de caja y ganancia neta" },
  { category: "En RD", topic: "Cómo evitar multas de la DGII con una buena gestión fiscal" },
  { category: "Cómo lo hago", topic: "Cómo gestionar devoluciones y cambios en ProVenta" },
  { category: "Finanzas", topic: "Cómo fijar precios competitivos sin perder rentabilidad" },
  { category: "En RD", topic: "Ventajas de los comprobantes fiscales electrónicos para PyMEs dominicanas" }
];

// 1. Lee o crea topic-index.json
const indexFile = path.join(__dirname, 'topic-index.json');
let indexData = { index: 0 };
if (fs.existsSync(indexFile)) {
  indexData = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
}
const currentIndex = indexData.index % TOPICS.length;
const { category, topic } = TOPICS[currentIndex];

// 2. Construir la fecha
const today = new Date();
const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const dateStr = `${today.getDate()} de ${months[today.getMonth()]}, ${today.getFullYear()}`;

// 3. Imagen por defecto según categoría
const imageMap = {
  "Cómo lo hago": "/assets/img/blog/default-como-lo-hago.jpg",
  "Finanzas": "/assets/img/blog/default-finanzas.jpg",
  "En RD": "/assets/img/blog/default-en-rd.jpg"
};
const imageDefault = imageMap[category] || "/assets/img/blog/default-como-lo-hago.jpg";

// 4. Llamar a Gemini API
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) throw new Error('GEMINI_API_KEY no está definida');

const prompt = `Eres un experto en SEO, redacción comercial y tecnología para pequeñas y medianas empresas en República Dominicana. 
Escribe un artículo de blog completo en español (dominicano, natural y amigable) sobre el siguiente tema: "${topic}"

El artículo es para el blog de ProVenta, un software POS (punto de venta) dominicano para Windows y Android (https://www.proventa.app).
Categoría del artículo: "${category}"

Devuelve ÚNICAMENTE un JSON válido con este formato exacto (sin markdown, sin texto extra antes o después):
{
  "slug": "url-amigable-en-minusculas-con-guiones",
  "title": "Título completo del artículo aquí",
  "metaTitle": "Título SEO impactante con ProVenta (máx 60 caracteres)",
  "metaDescription": "Meta descripción atractiva con llamado a la acción (máx 155 caracteres)",
  "keywords": ["palabra clave 1", "palabra clave 2", "palabra clave 3", "palabra clave 4"],
  "excerpt": "Resumen claro de 1-2 oraciones del artículo",
  "date": "${dateStr}",
  "category": "${category}",
  "image": "${imageDefault}",
  "schemaJsonLd": {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.proventa.app/blog/{slug}/"
    },
    "headline": "{title}",
    "description": "{metaDescription}",
    "image": ["https://www.proventa.app${imageDefault}"],
    "datePublished": "${dateStr}",
    "author": {
      "@type": "Organization",
      "name": "Equipo ProVenta",
      "url": "https://www.proventa.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ProVenta",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.proventa.app/assets/img/logo-bg-black.png"
      }
    }
  },
  "content": "<p>Contenido HTML completo aquí...</p>"
}

Requisitos del contenido:
- Slug en minúsculas separado por guiones (sin tildes ni caracteres especiales).
- metaTitle no debe superar los 60 caracteres.
- metaDescription no debe superar los 155 caracteres e incluir una llamada a la acción.
- keywords debe contener entre 3 y 5 palabras clave relevantes para búsquedas en RD.
- schemaJsonLd debe ser un objeto válido BlogPosting con los datos reales completados.
- El contenido HTML debe tener entre 600-900 palabras con etiquetas h3, p, ul/li, mencionando ProVenta naturalmente 2-3 veces.
- NO incluir h1 ni h2 en content.`;

console.log(`🔄 Generando post sobre: "${topic}" (${category})`);

async function getSupportedModels(apiKey) {
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    if (res.ok) {
      const data = await res.json();
      const supported = (data.models || [])
        .filter(m => {
          const isGenerateContent = m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent');
          const name = m.name.toLowerCase();
          // Excluir modelos de voz (tts), embeddings, o imagen
          const isText = !name.includes('tts') && !name.includes('embedding') && !name.includes('imagen');
          return isGenerateContent && isText;
        })
        .map(m => m.name.replace(/^models\//, ''))
        .sort((a, b) => {
          // Priorizar modelos gemini oficiales sobre gemma
          const aIsGemini = a.startsWith('gemini');
          const bIsGemini = b.startsWith('gemini');
          if (aIsGemini && !bIsGemini) return -1;
          if (!aIsGemini && bIsGemini) return 1;
          return 0;
        });
      console.log(`📋 Modelos de texto encontrados (${supported.length}):\n`, supported.join(', '));
      return supported;
    }
  } catch (e) {
    console.warn(`No se pudo listar modelos: ${e.message}`);
  }
  return ['gemini-3.8-flash'];
}

async function generateContentWithRetry(prompt, apiKey) {
  const models = await getSupportedModels(apiKey);

  for (const model of models) {
    console.log(`\n🎯 Probando con modelo: ${model}...`);
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.log(`📡 Solicitando a ${model} (intento ${attempt}/2)...`);
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                response_mime_type: "application/json"
              }
            })
          }
        );

        if (res.ok) {
          console.log(`✨ ¡Éxito con el modelo ${model}!`);
          return await res.json();
        }

        const errText = await res.text();
        console.warn(`⚠️ Modelo ${model} respondió con status ${res.status}`);

        // Si es 503 o 429, probamos una vez más o pasamos rápido al siguiente modelo
        if (res.status === 503 || res.status === 429) {
          if (attempt === 1) {
            console.log(`⏳ Esperando 4s antes de probar otro modelo...`);
            await new Promise((r) => setTimeout(r, 4000));
            continue;
          }
          break;
        }

        if (res.status === 404 || res.status === 400) {
          break; // Incompatible o no disponible, probar el siguiente modelo
        }

        throw new Error(`Gemini API error ${res.status}: ${errText}`);
      } catch (err) {
        console.warn(`Aviso con ${model}: ${err.message}`);
        break;
      }
    }
  }
  throw new Error("No fue posible generar el post con ninguno de los modelos devueltos por Google.");
}

const data = await generateContentWithRetry(prompt, apiKey);

// Unir todas las partes de texto devueltas
const candidate = data.candidates && data.candidates[0];
if (!candidate || !candidate.content || !candidate.content.parts) {
  throw new Error(`Respuesta inválida de la API: ${JSON.stringify(data)}`);
}

let fullText = candidate.content.parts
  .map(p => p.text || '')
  .join('\n')
  .trim();

// Extraer el bloque JSON más externo
let jsonMatch = fullText.match(/\{[\s\S]*\}/);
if (!jsonMatch) {
  // Limpiar posibles code blocks
  fullText = fullText.replace(/^```json\n?/, '').replace(/^```\n?/, '').replace(/\n?```$/, '').trim();
  jsonMatch = fullText.match(/\{[\s\S]*\}/);
}

if (!jsonMatch) {
  throw new Error(`No se encontró un bloque JSON válido en la respuesta del modelo:\n${fullText}`);
}

const newPost = JSON.parse(jsonMatch[0]);

// 5. Función para serializar un post al formato del archivo posts.js
function serializePost(post) {
  const contentEscaped = post.content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
  
  const metaTitle = post.metaTitle ? `,\n    metaTitle: ${JSON.stringify(post.metaTitle)}` : '';
  const metaDescription = post.metaDescription ? `,\n    metaDescription: ${JSON.stringify(post.metaDescription)}` : '';
  const keywords = post.keywords ? `,\n    keywords: ${JSON.stringify(post.keywords)}` : '';
  const schemaJsonLd = post.schemaJsonLd ? `,\n    schemaJsonLd: ${JSON.stringify(post.schemaJsonLd, null, 6).trim()}` : '';

  return `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)}${metaTitle}${metaDescription}${keywords},
    excerpt: ${JSON.stringify(post.excerpt)},
    date: ${JSON.stringify(post.date)},
    category: ${JSON.stringify(post.category)},
    image: ${JSON.stringify(post.image)}${schemaJsonLd},
    content: \`${contentEscaped}\`
  }`;
}

// 6. Leer posts actuales importándolos como módulo
const postsFile = path.join(ROOT, 'src/data/posts.js');
const currentSource = fs.readFileSync(postsFile, 'utf8');

// Escribir un archivo temporal ES module para importar los posts actuales
const tempFile = path.join(__dirname, `_temp_posts_${Date.now()}.mjs`);
fs.writeFileSync(tempFile, currentSource);
const { posts: existingPosts } = await import(tempFile);
fs.unlinkSync(tempFile);

const allPosts = [newPost, ...existingPosts];

const newContent = `export const posts = [\n${allPosts.map(serializePost).join(',\n')}\n];\n`;

fs.writeFileSync(postsFile, newContent, 'utf8');

// 7. Actualizar topic-index
fs.writeFileSync(indexFile, JSON.stringify({ index: indexData.index + 1 }, null, 2));

console.log(`✅ Post generado: ${newPost.title}`);
console.log(`📂 Categoría: ${newPost.category}`);
console.log(`🔗 Slug: ${newPost.slug}`);
console.log(`📅 Fecha: ${newPost.date}`);
