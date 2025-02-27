# Hoja de Ruta para la Internacionalización en Español (es-419)

Este documento detalla el plan y progreso para la implementación completa del soporte en español latinoamericano (es-419) en Teable.

## Objetivos

- Proporcionar una experiencia de usuario completamente localizada para usuarios hispanohablantes de Latinoamérica
- Asegurar la consistencia terminológica en todas las traducciones
- Mantener las traducciones actualizadas con las nuevas características
- Implementar pruebas de calidad para verificar la correcta visualización de los textos traducidos

## Archivos de Traducción

### Progreso Actual

| Archivo | Progreso | Secciones Completadas | Secciones Pendientes |
|---------|----------|------------------------|----------------------|
| common.json | 80% | actions, settings, guide, billing, role, noun, help, trash, quickAction, password, invite, admin, notification | error, auth, space, base |
| table.json | 75% | create, tableTrash, connection, export, operator, grid, form, kanban, toolbar | calendar, view, field, filter, sort, group |
| sdk.json | 0% | - | permission, baseQuery, extensions |

### Detalles por Archivo

#### common.json

Este archivo contiene las traducciones para elementos comunes de la interfaz de usuario que se utilizan en múltiples partes de la aplicación.

**Completado:**
- ✅ actions: Acciones comunes como crear, editar, eliminar, etc.
- ✅ settings: Configuraciones generales de la aplicación
- ✅ guide: Textos de guía y ayuda para usuarios
- ✅ billing: Información relacionada con facturación y planes
- ✅ role: Roles de usuario y permisos
- ✅ noun: Sustantivos comunes utilizados en la aplicación
- ✅ help: Mensajes de ayuda contextual
- ✅ trash: Gestión de elementos eliminados
- ✅ quickAction: Acciones rápidas en la interfaz
- ✅ password: Gestión de contraseñas
- ✅ invite: Sistema de invitaciones
- ✅ admin: Panel de administración
- ✅ notification: Sistema de notificaciones

**Pendiente:**
- ❌ error: Mensajes de error
- ❌ auth: Autenticación y autorización
- ❌ space: Gestión de espacios de trabajo
- ❌ base: Gestión de bases de datos

#### table.json

Este archivo contiene las traducciones relacionadas con la funcionalidad de tablas, vistas y campos.

**Completado:**
- ✅ toolbar: Barra de herramientas y opciones de interfaz
- ✅ create: Creación de tablas
- ✅ tableTrash: Gestión de tablas eliminadas
- ✅ connection: Conexiones a bases de datos externas
- ✅ export: Exportación de datos
- ✅ operator: Operadores para filtros y fórmulas
- ✅ grid: Vista de cuadrícula
- ✅ form: Vista de formulario
- ✅ kanban: Vista de tablero kanban

**Pendiente:**
- ❌ calendar: Vista de calendario
- ❌ view: Configuración general de vistas
- ❌ field: Tipos de campos y propiedades
- ❌ filter: Filtrado de datos
- ❌ sort: Ordenamiento de datos
- ❌ group: Agrupación de datos

#### sdk.json

Este archivo contiene traducciones relacionadas con el SDK y extensiones.

**Pendiente:**
- ❌ permission: Permisos y control de acceso
- ❌ baseQuery: Consultas a la base de datos
- ❌ extensions: Extensiones y plugins

## Plan de Implementación

### Fase 1: Traducción Inicial (Completado)
- ✅ Configuración del entorno de desarrollo
- ✅ Creación de archivos base para es-419
- ✅ Traducción de términos comunes y frecuentes

### Fase 2: Traducción Principal (En Progreso)
- ✅ Traducción de common.json (80%)
- ✅ Traducción de table.json (75%)
- ❌ Traducción de sdk.json (0%)

### Fase 3: Revisión y Pruebas
- ❌ Revisión de consistencia terminológica
- ❌ Pruebas de integración con la interfaz
- ❌ Corrección de problemas de diseño relacionados con longitud de texto

### Fase 4: Lanzamiento y Mantenimiento
- ❌ Lanzamiento oficial del soporte para es-419
- ❌ Documentación para contribuidores
- ❌ Plan de actualización para nuevas características

## Recursos

### Glosario de Términos

Para mantener la consistencia en las traducciones, se ha establecido un glosario de términos técnicos:

| Término en inglés | Traducción en español |
|-------------------|------------------------|
| Table | Tabla |
| View | Vista |
| Field | Campo |
| Record | Registro |
| Filter | Filtro |
| Sort | Ordenamiento |
| Group | Agrupación |
| Space | Espacio |
| Base | Base |
| Form | Formulario |
| Kanban | Kanban |
| Calendar | Calendario |
| Grid | Cuadrícula |
| Attachment | Adjunto |
| Lookup | Búsqueda |
| Rollup | Resumen |
| Formula | Fórmula |
| Link | Enlace |
| Permission | Permiso |
| Extension | Extensión |
| Dashboard | Panel |
| Widget | Widget |
| Automation | Automatización |
| Webhook | Webhook |
| API | API |
| SDK | SDK |
| Stack | Grupo (en contexto de Kanban) |
| Card | Tarjeta (en contexto de Kanban) |
| Toolbar | Barra de herramientas |
| Share | Compartir |
| Embed | Incrustar |

### Convenciones de Traducción

1. Mantener términos técnicos en inglés cuando sea convencional en español (ej. API, SDK, webhook)
2. Usar español neutro latinoamericano, evitando regionalismos específicos
3. Mantener la estructura gramatical del español en las oraciones
4. Adaptar las expresiones idiomáticas a equivalentes naturales en español
5. Mantener la coherencia en el tratamiento formal/informal (se usa "tú" en lugar de "usted")
6. Traducir términos específicos de la interfaz de usuario según el glosario establecido
7. Mantener la misma estructura de las claves JSON del archivo original
8. Preservar las variables de interpolación en el mismo formato (ej. {{name}})

### Enlaces Útiles

- [Documentación de i18next](https://www.i18next.com/)
- [Glosario de términos técnicos en español](https://www.fundeu.es/recomendacion/internet-terminos-relacionados/)
- [Guía de estilo de Microsoft para español](https://www.microsoft.com/es-es/language/styleguides)
- [RAE (Real Academia Española)](https://www.rae.es/)

## Contribución

Si deseas contribuir a las traducciones, por favor sigue estas pautas:

1. Familiarízate con el glosario de términos y convenciones
2. Realiza cambios en archivos individuales para facilitar la revisión
3. Mantén el formato JSON y las claves exactamente iguales al original
4. Prueba tus cambios en un entorno local antes de enviar
5. Actualiza este documento con el progreso realizado

## Notas de Prueba

Para probar las traducciones:

1. Configura el idioma del navegador a Español (Latinoamérica)
2. O cambia manualmente el idioma en la configuración de usuario
3. Verifica que todos los textos se muestren correctamente
4. Presta especial atención a textos que puedan expandirse y afectar el diseño

## Próximos Pasos

1. Completar la traducción de las secciones pendientes en common.json (error, auth, space, base)
2. Continuar con las traducciones de table.json, enfocándose en las vistas calendar y field
3. Iniciar la traducción de sdk.json
4. Realizar pruebas de integración para verificar la correcta visualización de los textos

---

Última actualización: 26 de febrero de 2025
