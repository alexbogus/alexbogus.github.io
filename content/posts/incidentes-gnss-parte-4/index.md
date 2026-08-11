---
title: "Un repaso a los incidentes de seguridad de los sistemas GNSS (Parte IV)"
date: 2022-10-16
summary: "De la guerra electrónica rusa a los cárteles en la frontera de EE. UU. y México: un repaso a los puntos calientes del GPS jamming en 2022, los proyectos de monitorización abierta y el JammerTest de Noruega."
tags: ["Ciberseguridad", "GNSS", "Militar", "RF"]
---

Como ya venimos contando en esta saga de artículos ([I]({{< ref "posts/incidentes-gnss-parte-1" >}}), [II]({{< ref "posts/incidentes-gnss-parte-2" >}}), [III]({{< ref "posts/incidentes-gnss-parte-3" >}})), los ataques a los sistemas GNSS tienen serias implicaciones en los sistemas que usamos a diario: la navegación aérea y marítima, la distribución de señales de televisión (DVB-T), el despliegue de redes 5G, las smart power grids, las transacciones financieras, etc.

Afortunadamente, hoy en día existen muchos métodos para detectar y localizar estas perturbaciones de las señales GPS. Además, como veremos en este artículo, existen grupos de expertos que se reúnen para estudiar métodos que mitiguen y mejoren la seguridad de los receptores GNSS.

### La situación actual

A raíz del conflicto con Ucrania, hemos podido observar cómo el ejército ruso ha tratado de sacar beneficio de sus equipos de [EW](https://en.wikipedia.org/wiki/Electronic_warfare) (Electronic Warfare). Esto no es algo nuevo: en la zona fronteriza entre Israel y Siria es frecuente detectar interferencias continuas por parte de las fuerzas rusas situadas en Siria.

Desde que se inició el conflicto, muchos "observadores" se hacen eco de forma continua de estas interferencias en los sistemas GPS a través de redes sociales como Twitter.

Pero no todos los ataques contra los sistemas GNSS se producen en ese teatro de operaciones. Otro punto conflictivo a nivel mundial es la frontera entre EE. UU. y México, donde los cárteles de la droga utilizan sistemas para perturbar las señales GPS e interferir en las operaciones de los drones de vigilancia fronteriza estadounidenses.

El periódico mexicano "El Economista" informó en varias ocasiones de que se están utilizando inhibidores o jammers para realizar robos sobre las mercancías transportadas por carretera. Este tipo de amenazas no hace más que incrementarse: la frontera de EE. UU. con México es uno de los puntos calientes, con cárteles usando sistemas que interfieren la señal GPS para dificultar los trabajos de los drones de vigilancia.

Otro de los puntos "calientes" es la zona situada alrededor del puerto de Shanghái, en China, donde los "piratas" usan sistemas para perturbar las señales GPS y confundir a embarcaciones y aeronaves en la ruta que pasa por esa zona.

### Monitorización de los sistemas GNSS

Aunque no nos demos cuenta, muchos de los sistemas que nos ofrecen una localización precisa sufren interrupciones (outages) que hacen que no estén disponibles. Este tipo de incidencias no suelen acabar reflejadas en las noticias, y los usuarios finales apenas notan sus efectos.

Pero en julio de 2019, el sistema Galileo sufrió una de las caídas más severas que se recuerdan. A raíz de esa interrupción del servicio, y de las ansias por aprender sobre los sistemas GNSS, nació el proyecto de código abierto [galmon.eu](https://galmon.eu/), que se encarga de supervisar sistemas GNSS usando receptores asequibles distribuidos por varios países.

El proyecto ha ido creciendo con el tiempo, y no solo monitoriza las señales de Galileo: también GPS (L1C/A, L2C), BeiDou (B1I, B2I) y GLONASS (L1, L2). De hecho, han creado dos dashboards donde se pueden visualizar los datos ([Dashboard 1](https://galmon.eu/) | [Dashboard 2](https://public.galmon.eu/)).

Para luchar contra este tipo de incidentes de seguridad no solo existen proyectos como galmon.eu: muchos expertos se reúnen de forma periódica para evaluar los sistemas y buscar soluciones que hagan a los receptores más resilientes frente a este tipo de perturbaciones.

### JammerTest 2022

Del 19 al 23 de septiembre de 2022 tuvo lugar el "JammerTest 2022" en el norte de Noruega. Durante cinco días se reunieron expertos de varios países con equipamiento avanzado para probar la resiliencia de los equipos GNSS frente a interferencias. Se generaron interferencias muy básicas con equipamiento que se puede adquirir fácilmente en tiendas online, así como escenarios muy sofisticados con ataques de suplantación de identidad.

El equipo de GPSPatron realizó un pequeño reportaje sobre el evento:

{{< youtube 8DdFCJED3Ak >}}

## Conclusiones

La actual dependencia que tenemos de los sistemas GNSS para muchas aplicaciones de uso cotidiano hace que debamos preocuparnos por su seguridad.

Los ataques a los sistemas GNSS creíamos que eran muy complicados de llevar a cabo, pero cada vez más podemos observar que no es así, lo cual nos hace reflexionar sobre si debemos dedicar más esfuerzos a la seguridad y la monitorización.

Sobre todo porque, aunque ahora no lo veamos, es posible que en un futuro muy próximo puedan llevarse a cabo ataques contra infraestructuras críticas usando este tipo de técnicas.

### Referencias

* Proyecto [Galmon.eu](https://galmon.eu/)
* [GNSS Spoofing](https://www.youtube.com/watch?v=ofSzwyfAM1M)
* [How to deal with GPS Jamming](https://www.crfs.com/blog/how-to-deal-with-gps-jamming-and-spoofing/)

### Serie: Incidentes de seguridad en sistemas GNSS

* [Parte I: Introducción a las amenazas GNSS]({{< ref "posts/incidentes-gnss-parte-1" >}})
* [Parte II: Incidentes marítimos, militares e infraestructuras críticas]({{< ref "posts/incidentes-gnss-parte-2" >}})
* [Parte III: GPS spoofing en el Golfo Pérsico y la navegación marítima]({{< ref "posts/incidentes-gnss-parte-3" >}})
* Parte IV: GPS jamming en zonas de conflicto y monitorización global (este artículo)
* [Parte V: El repunte del spoofing GPS en 2024]({{< ref "posts/incidentes-gnss-parte-5" >}})
* [Parte VI: Guerra electrónica en Ucrania e Israel]({{< ref "posts/incidentes-gnss-parte-6" >}})
