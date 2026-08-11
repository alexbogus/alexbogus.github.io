---
title: "Puesto de Mando Avanzado (PMA) y Despliegue Tecnológico en Emergencias"
date: 2026-08-11T21:50:41+02:00
summary: "Un Puesto de Mando Avanzado (PMA) es el centro neurálgico de control operativo que se despliega in situ durante una emergencia o evento de gran magnitud"
period: ""
tags: ["Emergencias", "Proteccion Civil"]
links: []

draft: false
---


Este proyecto aborda el diseño, la integración y el despliegue de la infraestructura tecnológica de un Puesto de Mando Avanzado (PMA) para la Agrupación de Protección Civil, enfocado en dar cobertura al Dispositivo de Riesgo Previsible (DRP) de la Noche de San Juan.

En un entorno crítico condicionado por la saturación de redes y la alta afluencia de público, el proyecto resuelve la necesidad de coordinación táctica mediante la convergencia de conectividad satelital redundante, geolocalización de flotas en tiempo real, análisis de datos de movilidad y una plataforma custom de videovigilancia IP de baja latencia. El sistema actúa como el cerebro operativo de la emergencia, transformando el flujo de datos masivos en decisiones estratégicas rápidas, seguras y eficientes para la protección de la ciudadanía.

### 📋 Descripción del Proyecto

Diseño, despliegue y gestión integral de la infraestructura tecnológica para un **Puesto de Mando Avanzado (PMA)** de Protección Civil, orientado a garantizar la **consciencia situacional en tiempo real**, la coordinación táctica de efectivos y la gestión eficiente de recursos sanitarios y de seguridad durante eventos multitudinarios de alto riesgo (DRP San Juan 2026).

El sistema centraliza las transmisiones de datos, geolocalización, transmisión de vídeo de alta definición y gestión de incidencias, optimizando la toma de decisiones del equipo directivo y coordinando a más de 26 voluntarios sobre el terreno.

---

### 🛠️ Tecnologías y Medios Desplegados

#### 1. Sistema de Videovigilancia y Consciencia Situacional (CCTV)
* **Infraestructura de Captura:** Despliegue en altura (mástil de 6,5 m) compuesto por **5 cámaras IP** (4 domos PTZ motorizados y 1 gran angular) con visión nocturna a color.
* **Plataforma Web de Visualización Custom (Desarrollada por ALVPC / PC Godella):** 
  * Aplicación a medida para el consumo e integración de streams de vídeo en directo con baja latencia via **go2rtc / WebRTC**.
  * Modos de visualización dinámicos (cuadrículas 2x2, 3x3, modo enfocado 1x5 y carrusel de cámaras).
  * Control y rotación de imágenes en tiempo real para observadores del PMA.

#### 2. Conectividad y Redes
* **Internet Satelital (Starlink):** Enlace satelital redundante de alta velocidad para garantizar conectividad continua e independiente de la saturación de las redes celulares locales durante la aglomeración de público.
* **Red Local Táctica:** Infraestructura IP local sobre la que convergen los sistemas de CCTV, terminales informáticos y consolas de mando.

#### 3. Geolocalización y Gestión de Flotas (DOTS)
* **Posicionamiento en Tiempo Real:** Monitorización de unidades intervinientes sobre cartografía e imágenes satelitales mediante el sistema **DOTS**, permitiendo ubicar recursos terrestres y patrullas de manera precisa.

#### 4. Comunicaciones Tácticas y Radio (TETRA / SDS)
* **Red de Comunicaciones TETRA:** Comunicaciones de voz cifradas y de alta fiabilidad entre los mandos del PMA y las unidades de campo.
* **Automatización vía SDS (Short Data Service):** Integración de envío de mensajes de datos estandarizados (SDS) a través de la red de radio para la activación inmediata y asignación de recursos sanitarios a incidencias concretas.

#### 5. Gestión del Tráfico y Movilidad Urbana
* **Integración API con Google Maps y Waze:** Notificación en tiempo real a través de APIs de movilidad para registrar cortes de calles y perímetros de seguridad. Esto permitió el reenrutamiento automático de los vehículos particulares para no colapsar las vías de emergencia.

#### 6. Seguridad Aérea
* **Sistema de Detección de Drones:** Monitorización del espacio aéreo en el perímetro del evento para la identificación de aeronaves no tripuladas no autorizadas.

---

### 📊 Resultados e Impacto Operativo

* **Gestión Centralizada:** Control y seguimiento íntegro de **28 atenciones sanitarias** registradas durante 12 horas continuadas de servicio.
* **Tiempos de Respuesta Reducidos:** Asignación optimizada de recursos (unidades *Víctor*, *Bravo*, *Sierra*, etc.) hacia los puntos de conflicto gracias a la combinación de geolocalización e imágenes en directo.
* **Nivel de Servicio:** Cero incidentes críticos desatendidos y resolución efectiva de llamadas P2 (Urgentes) y P3 (Demorables).