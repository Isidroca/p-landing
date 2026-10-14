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

const prompt = `Eres un experto en negocios y tecnología para pequeñas y medianas empresas en República Dominicana. 
Escribe un artículo de blog completo en español (dominicano, natural y amigable) sobre el siguiente tema: "${topic}"

El artículo es para el blog de ProVenta, un software POS (punto de venta) dominicano para Windows y Android.
Categoría del artículo: "${category}"

Devuelve ÚNICAMENTE un JSON válido con este formato exacto (sin markdown, sin texto extra antes o después):
{
  "slug": "slug-del-articulo-aqui",
  "title": "Título del artículo aquí",
  "excerpt": "Resumen de 1-2 oraciones para SEO",
  "date": "${dateStr}",
  "category": "${category}",
  "image": "${imageDefault}",
  "content": "<p>Contenido HTML completo aquí...</p>"
}

El contenido HTML debe:
- Tener entre 600-900 palabras
- Incluir etiquetas h3, p, ul/li
- Mencionar ProVenta naturalmente 2-3 veces
- Ser útil y práctico para dueños de negocios en RD
- NO incluir h1 ni h2 (el título ya se muestra fuera del content)`;

console.log(`🔄 Generando post sobre: "${topic}" (${category})`);

async function getAvailableModel(apiKey) {
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    if (res.ok) {
      const data = await res.json();
      const supported = (data.models || [])
        .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
        .map(m => m.name.replace(/^models\//, ''));
      console.log(`📋 Modelos disponibles para tu API key:`, supported.slice(0, 5).join(', '));
      // Priorizar gemini-3.8-flash o el primer modelo flash o gemini disponible
      const preferred = supported.find(m => m.includes('3.8-flash')) ||
                        supported.find(m => m.includes('flash')) ||
                        supported.find(m => m.startsWith('gemini')) ||
                        supported[0];
      return preferred || 'gemini-3.8-flash';
    }
  } catch (e) {
    console.warn(`No se pudo listar modelos: ${e.message}`);
  }
  return 'gemini-3.8-flash';
}

async function generateContentWithRetry(prompt, apiKey) {
  const chosenModel = await getAvailableModel(apiKey);
  console.log(`🎯 Modelo seleccionado dinámicamente: ${chosenModel}`);

  for (let attempt = 1; attempt <= 6; attempt++) {
    try {
      console.log(`📡 Solicitando a ${chosenModel} (intento ${attempt}/6)...`);
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${chosenModel}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        }
      );

      if (res.ok) {
        return await res.json();
      }

      const errText = await res.text();
      console.warn(`⚠️ Respuesta ${res.status}: ${errText}`);
      
      // Si hay alta demanda (503) o rate limit (429), usamos backoff progresivo (6s, 12s, 18s...)
      if (res.status === 503 || res.status === 429) {
        const waitSec = attempt * 6;
        console.log(`⏳ Alta demanda momentánea en Google. Esperando ${waitSec}s antes de reintentar...`);
        await new Promise((r) => setTimeout(r, waitSec * 1000));
        continue;
      }
      
      throw new Error(`Gemini API error ${res.status}: ${errText}`);
    } catch (err) {
      if (attempt === 6) throw err;
      const waitSec = attempt * 4;
      await new Promise((r) => setTimeout(r, waitSec * 1000));
    }
  }
  throw new Error("No fue posible generar el post tras varios intentos.");
}

const data = await generateContentWithRetry(prompt, apiKey);
let text = data.candidates[0].content.parts[0].text.trim();

// Limpiar posibles markdown code fences
text = text.replace(/^```json\n?/, '').replace(/^```\n?/, '').replace(/\n?```$/, '').trim();

const newPost = JSON.parse(text);

// 5. Función para serializar un post al formato del archivo posts.js
function serializePost(post) {
  const contentEscaped = post.content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');
  return `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    excerpt: ${JSON.stringify(post.excerpt)},
    date: ${JSON.stringify(post.date)},
    category: ${JSON.stringify(post.category)},
    image: ${JSON.stringify(post.image)},
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
