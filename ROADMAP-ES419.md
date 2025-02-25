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

- [ ] Actualizar LanguagePicker.tsx para incluir español latinoamericano
  - Ubicación: apps/nextjs-app/src/features/app/components/LanguagePicker.tsx
  - Cambios necesarios:
    - Agregar entrada para 'es-419' en el array de idiomas
    - Agregar título "Español (Latinoamérica)"

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

### Próximos Pasos (🔄)

1. Actualización de UI:
   - [ ] Modificar LanguagePicker.tsx para incluir soporte para es-419

2. Pruebas de Integración:
   - [ ] Verificar que todos los textos se muestren correctamente
   - [ ] Probar el cambio de idioma
   - [ ] Verificar que no haya textos sin traducir
   - [ ] Validar consistencia en términos y expresiones

3. Documentación:
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

## Progreso
- Total de archivos: 16
- Completados: 16
- Pendientes: 0
- Porcentaje completado: 100%
