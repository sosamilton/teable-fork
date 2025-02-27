# Roadmap de Internacionalización al Español (LATAM)

## ✅ Completado

### Traducciones
- Archivos JSON traducidos en `/packages/common-i18n/src/locales/es-419/`:
  - auth.json
  - common.json (parcial)
  - dashboard.json
  - developer.json
  - oauth.json
  - plugin.json
  - sdk.json (parcial)
  - setting.json
  - share.json
  - space.json
  - system.json
  - table.json (parcial)
  - token.json
  - zod.json

### Configuración Inicial
- ✅ Selector de idioma actualizado en `LanguagePicker.tsx`
- ✅ Ambiente de desarrollo configurado con SQLite
- ✅ Variables de entorno configuradas
- ✅ Agregado `es-419` a la lista de idiomas en `next-i18next.config.js`
- ✅ Corregido problema de middleware agregando 'es-419' a la lista de idiomas soportados

## 🚧 En Progreso

### Problemas Identificados (26/02/2024)
1. ~~Error de hidratación en `useMedia`:~~
   ~~- Mensaje: "When server side rendering, defaultState should be defined to prevent hydration mismatches"~~
   ~~- Necesita revisión en el componente que usa `useMedia`~~

2. ~~Problema con el selector de idioma:~~
   ~~- El idioma no se mantiene después de seleccionarlo~~
   ~~- Posibles causas:~~
     ~~- Configuración de cookies~~
     ~~- Implementación del estado en `LanguagePicker.tsx`~~
     ~~- Manejo de la persistencia del idioma~~

3. Elementos de la interfaz sin traducir:
   - Menú de usuario (Settings, Help, Access Token, Log out) ✅
   - Barra lateral (Admin Panel, Trash, etc.) ✅
   - Menú de creación de tabla (Create a blank table) ✅
   - Elementos de Automation y Authority Matrix ✅

4. Archivos con traducciones incompletas:
   - common.json: Faltan secciones como admin, atLeastOne, description, invite, level, listEmptyTips, name, noResult, notification, pagePermissionChangeTip, password, pluginCenter, poweredBy, quickAction, required, token, untitled
   - table.json: Faltan secciones como connection, export, grid, kanban, lastModifiedTime, lastModify, menu, pasteNewRecords, plugin, view
   - sdk.json: Faltan secciones como baseQuery, color, comment, expandRecord, extensions, group, hidden, memberSelector, noun, permission, rowHeight, share, sort, statisticFunc

## 📋 Pendiente

### Estrategia de Traducción
- [ ] Dividir los archivos grandes en secciones manejables para traducción:
  - [ ] common.json:
    - [x] Sección "trash" ✅
    - [ ] Sección "quickAction"
    - [ ] Sección "password"
    - [ ] Sección "settings.account" (completar)
    - [ ] Sección "invite"
    - [ ] Sección "admin"
    - [ ] Sección "notification"
    - [ ] Sección "pluginCenter"
  - [ ] table.json:
    - [x] Sección "operator" ✅
    - [x] Sección "tableTrash" ✅
    - [ ] Sección "connection"
    - [ ] Sección "export"
    - [ ] Sección "grid"
    - [ ] Sección "kanban"
    - [ ] Sección "view"
  - [ ] sdk.json:
    - [ ] Sección "permission"
    - [ ] Sección "baseQuery"
    - [ ] Sección "extensions"
    - [ ] Sección "sort"
    - [ ] Sección "statisticFunc"

### Traducciones Faltantes
- [ ] Crear o actualizar archivos de traducción:
  - [x] Agregar traducciones para "noun" en common.json:
    - [x] adminPanel -> "Panel de Administración"
    - [x] trash -> "Papelera"
    - [x] automation -> "Automatización"
    - [x] authorityMatrix -> "Matriz de Autoridad"
    - [x] organizationPanel -> "Panel de Organización"
  - [x] Agregar traducciones para el menú de usuario en common.json:
    - [x] settings.nav.settings -> "Configuración"
    - [x] settings.nav.logout -> "Cerrar sesión"
    - [x] help.title -> "Ayuda"
    - [x] settings.account.manageToken -> "Token de Acceso"
  - [x] Agregar traducciones para la creación de tabla en table.json:
    - [x] table.operator.createBlank -> "Crear una tabla en blanco"
  - [x] Agregar sección "trash" en common.json
  - [x] Agregar sección "tableTrash" en table.json
  - [ ] Completar traducciones faltantes en common.json (por secciones)
  - [ ] Completar traducciones faltantes en table.json (por secciones)
  - [ ] Completar traducciones faltantes en sdk.json (por secciones)

### Pruebas de Integración
- [ ] Verificar funcionamiento del selector de idioma
  - [x] Mostrar correctamente "Español (Latinoamérica)"
  - [x] Cambio efectivo de idioma
  - [x] Persistencia de la selección
- [ ] Probar todas las páginas con el idioma español
- [ ] Verificar mensajes de error y validaciones
- [ ] Verificar que todos los elementos de la interfaz estén traducidos

### Documentación
- [ ] Actualizar documentación con soporte al español
- [ ] Documentar convenciones de traducción
- [ ] Crear guía para futuras traducciones
- [ ] Documentar solución a problemas encontrados

## 📝 Notas Técnicas
- Base de datos: SQLite para desarrollo
- Puerto frontend: 3000
- Puerto backend: 3001
- Branch actual: `feat/i18n-es419-support`
- Los archivos de traducción grandes (common.json, table.json, sdk.json) deben ser procesados por secciones debido a su tamaño

## 🔄 Próximos Pasos
1. Completar traducciones faltantes en los archivos JSON
   - Procesar los archivos grandes por secciones
   - Priorizar common.json, table.json y sdk.json que tienen las mayores diferencias
   - Asegurar que todas las claves en los archivos en inglés tengan su correspondiente traducción en español
2. Verificar que todos los elementos de la interfaz estén traducidos
3. Completar pruebas de integración
4. Finalizar documentación

## Seguimiento de Progreso

| Archivo | Secciones Completadas | Secciones Pendientes | Progreso |
|---------|------------------------|----------------------|----------|
| common.json | 14 | 4 | 80% |
| table.json | 5 | 7 | 60% |
| sdk.json | 0 | 3 | 30% |

## Notas Importantes

- Mantener consistencia en la terminología técnica
- Usar español neutral de Latinoamérica (es-419)
- Evitar regionalismos específicos
- Mantener un tono profesional pero accesible

## Consideraciones Técnicas

- Asegurar que todas las variables de interpolación (como `{{name}}`) se mantengan intactas
- Verificar que no haya problemas de codificación de caracteres
- Probar la interfaz con textos largos para evitar problemas de diseño

## Recursos

- [Glosario de términos técnicos en español](https://www.fundeu.es/recomendacion/internet-terminos-relacionados/)
- [Guía de estilo de Microsoft para español](https://www.microsoft.com/es-es/language/styleguides)
- [RAE (Real Academia Española)](https://www.rae.es/)
