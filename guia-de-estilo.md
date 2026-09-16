# Copa 5 de Mayo Puebla 2027 — Rifa de vehículos
## Guía de estilo del rediseño

### Idea
Estadio de noche: negro profundo, luz cálida entrando desde arriba y el oro usado como metal de trofeo, no como brillo decorativo. Todo lo dorado del original que solo adornaba se sacó; el oro quedó reservado para lo que el visitante tiene que ver sí o sí (premio 1, precio, botón de registro, WhatsApp).

### Color

| Token | Hex | Uso |
|---|---|---|
| `--tinta` | `#000000` | Fondo base |
| `--carbon` | `#111010` | Tarjetas y paneles |
| `--linea` | `#2A2419` | Bordes y divisores |
| `--oro` | `#D8A81B` | Acento principal, botones, números |
| `--oro-claro` | `#F3D77F` | Hover, textos sobre foto |
| `--oro-profundo` | `#6E5510` | Bordes de piezas destacadas |
| `--hueso` | `#F6F2E9` | Texto principal |
| `--gris` | `#9E9789` | Texto secundario |

### Tipografía
- **Big Shoulders** (condensada, bold) para titulares, cifras y botones. Lenguaje de estadio y marcador, sin caer en la tipografía deportiva genérica.
- **Instrument Sans** para todo el texto corrido. Alta legibilidad en párrafos cortos y en formulario.
- Escala: titular 92px / sección 52px / tarjeta 30px / cuerpo 16px / apoyo 13.5px.

### Layout
- Ancho de contenido: 1160px, márgenes laterales de 32px.
- Ritmo vertical: 86px entre secciones. El aire es la herramienta principal de limpieza.
- Los divisores son filetes de 1px, no cajas. Se eliminaron los recuadros redondeados apilados del original.
- Radio de esquina único: 6px en todo (tarjetas, inputs, botones).

### Criterios aplicados
1. **Una sola pantalla → scroll con secciones.** El original metía hero, precios, pasos y formulario en la misma vista, así que nada tenía jerarquía. Ahora cada bloque respira y el formulario llega después de que el visitante ya entendió qué gana y cuánto cuesta.
2. **Numeración solo donde hay secuencia.** Los pasos (01–04) y los puestos (1, 2, 3) son órdenes reales. El resto no lleva numerador decorativo.
3. **El primer premio pesa más.** Tarjeta más ancha, foto más alta y borde dorado; la 2ª y 3ª quedan en blanco hueso. En el original los tres premios competían igual.
4. **Se unificó el pago.** El original pedía el método de pago dos veces (un select "Método de pago" y abajo los radios "Elige tu forma de pago"). Quedó un solo grupo de opciones con la misma información.
5. **Los avisos son avisos.** El periodo de pago y la advertencia de pago incompleto están en la columna lateral del formulario, donde se leen justo antes de registrarse.

### Contenido conservado
Todo el texto del mockup original está en la página: nav completo, tres premios con "(o similar)", $250 MXN, sorteo 1 de mayo 2027 con sede por confirmar, los tres sellos de confianza, los cuatro pasos, los campos del formulario, ambas formas de pago, el periodo de pago desde febrero, la advertencia de pago incompleto, el WhatsApp 223 131 1554 y los tres lemas del pie.

### Pendiente de reemplazar
- **Fotos de los vehículos:** hoy son recortes del mockup original. Reemplazar por fotos reales o renders de los modelos que se van a rifar.
- **Logo:** el escudo del torneo está resuelto con un ícono vectorial provisional. Al tener el logo oficial en SVG/PNG, entra en el header y en el pie.
- **Acción del formulario:** el `<form>` apunta a `#`. Falta conectarlo a la pasarela de pago o al backend que registre el boleto.
