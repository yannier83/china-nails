# Efecto "sale del teléfono y cae en el vaso" — guía y prompts

Guía para recrear con IA el efecto del reel: un teléfono muestra una foto, el
contenido "se derrama" fuera de la pantalla y cae dentro de un vaso, llenándolo.

- En vez de la foto de café → **tu foto** (diseño de uñas, logo, etc.)
- En vez del líquido → **tu clip de video** cayendo dentro del vaso

---

## Lo primero: qué puede y qué no puede hacer la IA aquí

| Parte del efecto | ¿IA sola? | Cómo se hace de verdad |
|---|---|---|
| Foto tuya en la pantalla del teléfono | ✅ Sí | Va en el **frame inicial** (imagen de partida) |
| El derrame saliendo de la pantalla | ✅ Sí | Prompt de movimiento en image-to-video |
| El chorro cayendo al vaso | ✅ Sí | Mismo prompt, con física de líquido |
| **Que lo que cae sea TU clip de video** | ❌ No | Esto se **compone después** en CapCut/edición |

Esa última fila es la clave y es donde la mayoría se atasca: ningún modelo de
video acepta "usa este clip como el líquido". Lo que sí funciona es un
**flujo híbrido**: la IA genera el movimiento y la física, y tú incrustas tu
clip encima con una máscara. Es exactamente lo que hacen los reels que ves.

---

## Flujo recomendado (3 pasos)

### Paso 1 — Armar el frame inicial

Necesitas **una sola imagen** con todo ya en su sitio, porque el video se
genera a partir de ella. En esa imagen deben verse:

- El teléfono (vertical, en mano o apoyado), con **tu foto** ocupando la pantalla
- El vaso **vacío**, abajo y ligeramente adelante del teléfono
- Fondo limpio y neutro (una mesa, mármol, madera clara)
- Luz suave lateral, sin sombras duras

Cómo armarla, de más fácil a más control:

1. **Canva** — plantilla de mockup de teléfono + tu foto encima + foto de un
   vaso vacío. Rápido y suficiente.
2. **Nano Banana / Seedream** (editores de imagen por IA) — subes tu foto y
   pides: *"place this image on a phone screen, phone held in hand over a
   marble table, empty clear glass on the table below the phone, soft studio
   light, photorealistic"*.
3. **Foto real** — pones tu foto en la pantalla del teléfono de verdad, colocas
   un vaso vacío delante y le haces una foto. Es la que mejor se ve, porque el
   teléfono, la mano y la luz ya son reales.

> Consejo: deja **espacio vacío entre el borde inferior del teléfono y el
> vaso**. Ahí es donde la IA va a dibujar el chorro. Si están pegados, el
> efecto no tiene por dónde caer.

### Paso 2 — Generar el video con IA (image-to-video)

Sube el frame del paso 1 a un generador **image-to-video** y usa uno de los
prompts de abajo. Herramientas que funcionan bien para esto ahora:

- **Veo 3.1** — la mejor física de líquidos y luz. Primera opción.
- **Kling 3.0** — muy bueno, y tiene *Motion Brush* para pintar exactamente
  dónde quieres el movimiento (píntalo sobre la pantalla y el chorro).
- **Higgsfield** — agrega varios modelos en una sola suscripción, útil si
  quieres probar Veo y Kling sin pagar dos.
- **Seedance 2.0** — buena opción para acabado comercial.

Configuración: **5 segundos**, vertical **9:16**, sin cámara en movimiento.

#### Prompt A — el más fiel al reel (recomendado)

```
The image on the phone screen turns into liquid and begins to spill over the
bottom edge of the phone, pouring downward in a smooth continuous stream into
the empty glass below. The glass fills gradually from the bottom up. The
liquid keeps the exact colors and texture of the image on the screen. Realistic
liquid physics, gentle ripples on the surface, small droplets. The phone, the
hand and the background stay completely still. Static camera, no camera
movement, soft studio lighting, photorealistic.
```

#### Prompt B — más limpio, sin salpicaduras

```
Liquid slowly emerges from the phone screen and flows over the bottom edge in a
thin elegant stream, falling into the glass below and filling it smoothly. No
splashing. The liquid surface stays calm and glossy. Everything else in the
frame remains perfectly static. Locked-off camera, soft light, photorealistic,
slow motion.
```

#### Prompt C — solo el llenado (si generas el chorro por separado)

```
The glass fills up gradually with glossy liquid rising from the bottom to the
top. Calm surface, subtle reflections. Static camera, nothing else moves.
```

**Negative prompt** (donde el modelo lo permita — Kling sí):

```
camera movement, zoom, pan, distorted phone, warped hand, extra fingers,
text, watermark, blurry, glitch, phone melting, changing background
```

Notas de prompting que sí cambian el resultado:

- Repite **"static camera" / "nothing else moves"**. El fallo número uno es que
  el modelo mueva la cámara y se rompa la ilusión.
- Palabras como *slowly*, *gradually*, *smooth* controlan el ritmo. *Suddenly*
  y *quickly* te dan salpicaduras.
- Genera **3 o 4 versiones del mismo prompt** y quédate con la mejor. Es normal
  descartar; nadie acierta a la primera con líquidos.

### Paso 3 — Meter TU clip dentro del vaso (CapCut)

Aquí es donde el efecto deja de ser genérico y pasa a ser tuyo.

1. Pon el video generado por IA en la **pista 1**.
2. Pon **tu clip** en la **pista 2**, encima.
3. Escala y coloca tu clip sobre la zona del vaso (y sobre el chorro si quieres).
4. Aplica **máscara**:
   - Máscara de forma para el vaso, o
   - **Chroma key** si generaste el líquido en verde, o
   - Modo de fusión **Superponer / Luz suave** para que tome el brillo y las
     sombras del vaso de abajo (es el truco que hace que se vea integrado).
5. Baja la opacidad al 80–90% y añade un poco de desenfoque en los bordes de la
   máscara para que no se note el recorte.
6. Sincroniza: tu clip debe **aparecer al ritmo en que sube el líquido**. Usa
   fotogramas clave en la altura de la máscara siguiendo el nivel del vaso.

Truco extra: genera en el Paso 2 una versión con **líquido verde brillante**
(cambia "keeps the colors of the image" por *"bright green liquid"*). Así
tienes un chroma perfecto y meter tu clip es cuestión de un clic.

---

## Checklist antes de generar

- [ ] Foto tuya en vertical, buena resolución, sin texto pequeño
- [ ] Clip tuyo cortado a 5–8 segundos, vertical
- [ ] Frame inicial con teléfono + vaso vacío + espacio entre ambos
- [ ] Generador configurado en 9:16, 5 s, cámara estática
- [ ] 3–4 generaciones para elegir

---

## Fuentes

- [Kling 3.0 Prompt Guide — Atlabs AI](https://www.atlabs.ai/blog/kling-3-0-prompting-guide-master-ai-video-generation)
- [Kling 3.0 AI Video Guide: Mastering Physics — PicLumen](https://www.piclumen.com/hub/article/kling-30-the-professionals-guide-to-mastering-ai-video-physics-698ec65c96b86126289e3c55/)
- [The 5 Best AI Video Models in 2026 — Higgsfield](https://higgsfield.ai/blog/5-Best-AI-Video-Models-2026-Tested-Compared)
- [Vidu Q3 vs. Kling 3.0: Real-World Physics — Atlas Cloud](https://www.atlascloud.ai/blog/guides/vidu-q3-vs-kling-30-which-ai-video-model-wins-for-real-world-physics)
- [Kling AI Video: Features, Prompts & Workflow — AdCreate](https://adcreate.com/blog/kling-ai-video-guide-features-prompts)
