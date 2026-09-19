# Plan de desarrollo - Sistema de Rifas de Vehiculos

## Estado actual

- Existe una landing page estatica con `index.html`, `estilos.css` y `script.js`.
- El formulario calcula totales y prepara un mensaje de WhatsApp.
- No existe autenticacion, base de datos, reserva real de numeros, pagos automaticos ni panel administrativo.
- El sitio puede desplegarse como pagina estatica en Vercel.

## Objetivo

Convertir la landing page en una plataforma segura de rifas para Mexico y/o Estados Unidos, preparada para desplegarse en Vercel y conectarse a PostgreSQL administrado.

## Fase 0 - Definiciones del negocio

**Objetivo:** cerrar las reglas que afectan el modelo de datos y los pagos.

- [x] Se definieron dos rifas: una para el primer premio y otra para el segundo premio.
- [x] Asignacion de vehiculos: primer premio = Mazda CX-5 y Nissan X-Trail; segundo premio = Yamaha R3.
- [x] Definir cantidad total: 23,000 boletos.
- [x] Definir precios: $250 MXN para la rifa del primer premio y $150 MXN para la rifa del segundo premio.
- [x] Distribucion aprobada: 15,333 boletos para el primer premio y 7,667 para el segundo, para un total de 23,000 boletos.
- [x] Pais inicial: Mexico.
- [x] El sorteo se realiza el 1 de mayo de 2027 y la rifa se lleva a cabo el 28 de mayo de 2027 en Parque de la Familia, Tepeaca, Puebla.
- [x] Si el ganador no cumple o no responde, se sortea nuevamente.
- [x] La administracion estara a cargo del propietario y de los usuarios con rol `ADMIN`.
- [x] Los metodos mostrados actualmente son pago en linea (tarjeta, PayPal u OXXO) y transferencia bancaria.
- [ ] Definir reglas para numeros no pagados, pagos vencidos y cancelaciones.
- [ ] Definir metodo verificable para seleccionar ganadores.
- [ ] Confirmar proveedor de pagos definitivo para Mexico.
- [ ] Confirmar requisitos legales y fiscales aplicables.

**Salida:** reglas aprobadas y proveedor de pagos elegido.

## Fase 1 - Base tecnica

**Objetivo:** crear una base mantenible para el sistema.

- [ ] Crear aplicacion Next.js con TypeScript.
- [ ] Configurar Tailwind CSS y estructura modular.
- [ ] Configurar variables de entorno.
- [ ] Configurar linting, formateo y pruebas.
- [ ] Configurar PostgreSQL administrado.
- [ ] Configurar Prisma y la primera migracion.
- [ ] Preparar despliegue inicial en Vercel.

**Criterio de aceptacion:** la aplicacion inicia localmente, pasa las comprobaciones y se despliega en Vercel.

## Fase 2 - Modelo de datos

**Objetivo:** representar rifas, usuarios, numeros, ordenes y pagos.

- [ ] Crear `User` con roles `USER` y `ADMIN`.
- [ ] Crear `Raffle` con estado, fechas, moneda y precio.
- [ ] Crear `Vehicle` y relacionarlo con la rifa.
- [ ] Crear `RaffleNumber` con restriccion unica por rifa y numero.
- [ ] Crear `Order` y `OrderNumber`.
- [ ] Crear `Payment` sin almacenar datos sensibles de tarjetas.
- [ ] Definir enums de estados.
- [ ] Agregar indices para disponibilidad, reservas, ordenes y pagos.
- [ ] Ejecutar migraciones y sembrar datos de desarrollo.

**Criterio de aceptacion:** las restricciones de base de datos impiden duplicados y relaciones invalidas.

## Fase 3 - Autenticacion y autorizacion

**Objetivo:** proteger cuentas y operaciones administrativas.

- [ ] Implementar registro e inicio de sesion.
- [ ] Validar correo y credenciales de forma segura.
- [ ] Implementar recuperacion de cuenta.
- [ ] Proteger rutas de usuario.
- [ ] Proteger rutas administrativas por rol.
- [ ] Aplicar validacion en backend para todas las entradas.

**Criterio de aceptacion:** ningun dato sensible ni accion administrativa depende solamente del frontend.

## Fase 4 - Rifas y numeros

**Objetivo:** permitir consultar y reservar numeros de forma segura.

- [ ] Mostrar rifas activas y sus vehiculos.
- [ ] Mostrar numeros disponibles, reservados y pagados.
- [ ] Crear endpoint de reserva temporal.
- [ ] Ejecutar verificar + reservar dentro de una transaccion PostgreSQL.
- [ ] Definir duracion de reserva.
- [ ] Liberar reservas vencidas.
- [ ] Impedir que dos usuarios reserven el mismo numero.
- [ ] Crear pruebas de concurrencia y expiracion.

**Criterio de aceptacion:** una reserva nunca puede sobrescribir otra reserva valida.

## Fase 5 - Ordenes y pagos

**Objetivo:** completar compras y confirmar pagos mediante webhooks.

- [ ] Crear orden desde una reserva valida.
- [ ] Calcular el importe exclusivamente en backend.
- [ ] Crear checkout con el proveedor elegido.
- [ ] Verificar firmas y eventos de webhooks.
- [ ] Hacer idempotente el procesamiento de pagos.
- [ ] Marcar numeros como `PAID` solamente tras confirmar el pago.
- [ ] Manejar pagos fallidos, vencidos y cancelados.
- [ ] Enviar confirmacion al usuario.

**Criterio de aceptacion:** el frontend no puede modificar precio, estado de pago ni propiedad de un numero.

## Fase 6 - Experiencia de usuario

**Objetivo:** migrar la landing actual y completar los flujos.

- [ ] Convertir el diseño actual en componentes React.
- [ ] Crear pagina de inicio y detalle de rifa.
- [ ] Crear seleccion de numeros.
- [ ] Crear checkout.
- [ ] Crear cuenta del usuario.
- [ ] Mostrar ordenes, pagos y numeros comprados.
- [ ] Mostrar resultados del sorteo.
- [ ] Mantener accesibilidad y responsive design.

**Criterio de aceptacion:** un usuario puede registrarse, reservar, pagar y consultar su compra.

## Fase 7 - Panel administrativo

**Objetivo:** administrar el ciclo completo de una rifa.

- [ ] Crear dashboard administrativo.
- [ ] Administrar rifas y vehiculos.
- [ ] Administrar numeros y estados.
- [ ] Consultar usuarios y ordenes.
- [ ] Consultar pagos y webhooks.
- [ ] Publicar resultados del sorteo.
- [ ] Registrar auditoria de acciones criticas.

**Criterio de aceptacion:** las acciones sensibles quedan restringidas, validadas y auditables.

## Fase 8 - Seguridad, pruebas y lanzamiento

- [ ] Probar validaciones, permisos y sesiones.
- [ ] Probar reservas concurrentes.
- [ ] Probar webhooks duplicados y fuera de orden.
- [ ] Revisar secretos y variables de entorno.
- [ ] Configurar logs y monitoreo.
- [ ] Configurar dominio, correo y politicas legales.
- [ ] Ejecutar pruebas de aceptacion en staging.
- [ ] Hacer respaldo y preparar procedimiento de recuperacion.
- [ ] Lanzar a produccion.

## Primer entregable recomendado

Completar la Fase 0 y dejar documentadas las reglas de la rifa. Sin esas decisiones no se debe construir el modelo final de numeros, reservas ni pagos.
