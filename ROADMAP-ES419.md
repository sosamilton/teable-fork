# Roadmap de Traducción al Español Latinoamericano (es-419)

Este documento rastrea el progreso de la traducción del sistema Teable al español latinoamericano.

## Archivos Principales (packages/common-i18n/src/locales/es-419/)

- [x] auth.json - Completado
- [x] common.json - Completado
- [x] dashboard.json - Completado
- [x] developer.json - Completado
- [x] oauth.json - Completado
- [x] plugin.json - Completado
- [x] sdk.json - Completado
- [x] setting.json - Completado
- [x] share.json - Completado
- [x] space.json - Completado
- [x] system.json - Completado
- [x] table.json - Completado
- [x] token.json - Completado
- [x] zod.json - Completado

## Plugins (plugins/src/locales/)

### Chart Plugin
- [x] chart/es-419.json - Completado

### Sheet Form View Plugin
- [x] sheet-form-view/es-419.json - Completado

## Componentes de UI

- [x] Actualizar LanguagePicker.tsx para incluir español latinoamericano
  - Ubicación: apps/nextjs-app/src/features/app/components/LanguagePicker.tsx
  - Cambios realizados:
    - Agregada entrada para 'es-419' en el array de idiomas
    - Agregado título "Español (Latinoamérica)"
    - Mejorado el manejo de códigos de idioma con región
    - Corregido operador de comparación de idiomas

## Estado Actual y Próximos Pasos

### Completado (✅)
1. Archivos de alta prioridad:
   - common.json
   - auth.json
   - dashboard.json
   - table.json
   - space.json
2. Archivos de media prioridad:
   - share.json
   - system.json
   - setting.json
3. Archivos de baja prioridad:
   - developer.json
   - oauth.json
   - plugin.json
   - sdk.json
   - token.json
   - zod.json
4. Plugins:
   - chart/es-419.json
   - sheet-form-view/es-419.json
5. Actualización de UI:
   - [x] LanguagePicker.tsx actualizado con soporte para es-419
6. Pruebas de Integración:
   - [x] Verificación de estructura de archivos
     - Confirmado: todos los archivos de traducción están presentes en `/packages/common-i18n/src/locales/es-419/`
     - Confirmado: plugins tienen sus archivos de traducción en `/plugins/src/locales/`
   - [x] Verificación de integridad de archivos
     - Todos los archivos JSON son válidos y tienen el formato correcto
     - No hay archivos faltantes o vacíos
   - [x] Validación de sintaxis JSON
     - Verificados archivos clave (common.json, auth.json) con `jq`
     - Confirmada la validez de la estructura JSON
     - Confirmada la consistencia en la jerarquía de claves
   - [x] Verificación de consistencia en términos técnicos
     - Se mantienen en inglés términos como "API", "token", "Client ID"
     - Términos de UI consistentes ("Guardar", "Cancelar", "Editar", etc.)
     - Mensajes de error y validación coherentes

### En Progreso (🔄)
1. Pruebas de Integración:
   - [ ] Pruebas del selector de idioma (requiere configuración del entorno de desarrollo)
     - [ ] Verificar que el selector muestre "Español (Latinoamérica)"
     - [ ] Verificar que el cambio de idioma funcione correctamente
     - [ ] Verificar que la preferencia de idioma se guarde en las cookies

### Pendiente (⏳)
1. Documentación:
   - [ ] Actualizar la documentación para incluir información sobre el soporte en español
   - [ ] Documentar las convenciones de traducción utilizadas
   - [ ] Crear guía de contribución para futuras traducciones

## Notas
- Mantener consistencia en el uso de términos técnicos
- Usar español neutro latinoamericano
- Evitar regionalismos específicos
- Mantener un tono profesional pero amigable
- Mantener términos técnicos en inglés cuando sea la convención (ej: API, query, token, client ID)
- Mantener nombres de funciones y palabras clave del sistema en inglés (ej: SUM, MID, MONTH)

## Notas de Pruebas
- Verificación estática completada exitosamente
- Pruebas de integración del selector de idioma pendientes (requieren configuración del entorno)
- Validación de archivos JSON exitosa
- Confirmada la consistencia en la terminología y estilo

### Problemas Encontrados
- La configuración del entorno de desarrollo requiere setup adicional (pnpm/npm)
- Se recomienda documentar el proceso de configuración del entorno para futuros contribuyentes

## Progreso
- Total de archivos: 16
- Completados: 16
- Pendientes: 0
- Porcentaje completado: 100%

## Siguiente Paso Inmediato
El siguiente paso es realizar las pruebas del selector de idioma y verificación de contenido para asegurar que la traducción y el selector de idioma funcionen correctamente.
