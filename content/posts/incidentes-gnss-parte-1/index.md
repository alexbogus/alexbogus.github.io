---
title: "Un repaso a los incidentes de seguridad de los sistemas GNSS (Parte I)"
date: 2019-10-25
summary: "Los sistemas de posicionamiento global por satélite son un pilar silencioso de infraestructuras críticas. Un repaso a las amenazas de jamming y spoofing y a los primeros incidentes documentados."
tags: ["Ciberseguridad", "GNSS", "Militar", "RF"]
---

Hoy en día, los sistemas de posicionamiento global por satélite (GNSS) constituyen un sistema con cobertura global que proporciona información precisa y fiable sobre la posición y el tiempo. Actualmente son un accesorio indispensable en nuestras vidas: los utilizamos para llegar a un lugar determinado con nuestros vehículos, también los usan las aplicaciones de nuestros smartphones, pero quizás lo que desconocemos es que se emplean en muchas otras operaciones, algunas de ellas extremadamente críticas (tráfico aéreo, transacciones bancarias, sincronización horaria, etc.).

El sistema de posicionamiento más conocido, aunque no el único, es el GPS (Global Positioning System), que nos permite determinar en toda la Tierra la posición de un objeto, persona o vehículo con una gran precisión. Los satélites que proporcionan estas señales orbitan alrededor de la Tierra, y entre los sistemas actuales podemos encontrar el americano (GPS), el europeo (Galileo), el ruso (GLONASS) y el chino (BeiDou).

### Sistemas actuales de posicionamiento por satélite

Algunos sistemas de posicionamiento por satélite solo tienen cobertura en una región y, por tanto, no pueden considerarse sistemas GNSS propiamente dichos, pero no por ello debemos dejarlos de lado al enumerar los sistemas actuales de posicionamiento por satélite:

* **GPS**: desarrollado por el Departamento de Defensa (DoD) de EE. UU., fue el primero en desarrollar un sistema GNSS. Sin embargo, a futuro esto ha planteado problemas de dependencia tecnológica para otros países.
* **Galileo**: desde 2014, la UE trabaja en el proyecto GNSS que supondrá contar con 30 satélites.
* **BeiDou**: proyecto desarrollado por la República Popular China para proporcionar cobertura a China y a países limítrofes. Ofrece un servicio abierto con un margen de 10 m de exactitud en la posición y un segundo servicio, restringido a ciertos "clientes", con mayor precisión y mayores medidas de seguridad.
* **GLONASS**: de origen militar, este sistema fue desarrollado en 1976 por la antigua URSS, llegando a estar operativo en 1995. En 2010, tras diversos problemas, GLONASS alcanzó una cobertura del 100% del territorio ruso, y en octubre de 2011 se restauró la constelación orbital total de 24 satélites, lo que permite cobertura global completa.
* **QZSS** (Japón): siglas de Quasi-Zenith Satellite System, sistema de posicionamiento japonés cuyos satélites, al orbitar, dibujan una especie de ocho alrededor de Nueva Zelanda, Australia y Japón. Su nombre hace referencia a que, la mayor parte del tiempo, al menos un satélite se posicionará en torno al zénit. El primer satélite (QZS-1) fue lanzado en 2009, y el resto (QZS-2, QZS-3 y QZS-4) en 2017.
* **NavIC** (India), también denominado IRNSS (Indian Regional Navigation Satellite System), aunque con nombre comercial NavIC. El primer satélite de posicionamiento, denominado IRNSS-1G, fue lanzado en 2016 desde Andhra Pradesh.

### Amenazas a la seguridad de los sistemas de posicionamiento por satélite

La seguridad del sistema GPS ha sido reconocida como una de las amenazas de seguridad más serias de los últimos años, debido al uso intensivo y al grado de dependencia que hoy en día se hace de este sistema de posicionamiento. En especial, el uso que hacen de estas señales las aeronaves no tripuladas (UAV) y muchas otras aplicaciones de uso civil: seguimiento de flotas, logística, conducción autónoma, localización de personas, etc.

Hasta hace muy poco, nadie era capaz de imaginar que se pudiese manipular una señal de GPS de forma sencilla y con un coste relativamente bajo. El acceso al sistema GPS y sus capacidades han crecido tan rápido, y se ha convertido en algo tan normal y cotidiano, que no ha dado tiempo a que la gente se plantee la seguridad de este sistema y las implicaciones que pudiera tener la explotación de vulnerabilidades.

### Ataques a los sistemas GNSS: spoofing y jamming

Es común confundir ambos términos, por lo que antes de profundizar en la definición de estos ataques es mejor dejar claras algunas consideraciones.

Cuando hablamos de spoofing nos referimos a la existencia de una señal generada por un actor malicioso que intenta sustituir a la señal legítima, tratando de engañar a nuestro receptor para que use esta señal falsa.

Otro concepto muy distinto es la interferencia (jamming): en este caso, el actor malicioso trata de degradar el servicio generando una señal que interfiera e imposibilite al receptor acceder a la señal legítima. Este tipo de ataque suele ser de baja tecnología y de fácil alcance (sobre todo en tiendas online chinas), aun siendo ilegal su venta y uso.

### Spoofing

Si bien un ataque de tipo jamming es capaz de enmascarar o interferir la señal GNSS para conseguir una denegación de servicio, el spoofing supone un nivel superior y, por tanto, es mucho más peligroso, ya que consiste en sustituir la señal original por una señal distinta emitida desde un dispositivo no autorizado.

## Un repaso a algunos incidentes recientes

A lo largo de este artículo, que por su extensión se ha dividido en varias partes, realizaremos un repaso a los incidentes más recientes que han ocurrido alrededor de los sistemas GNSS.

**Interferencias en Londres**

Investigadores de [CRFS](https://www.crfs.com/about-us/), una compañía especializada en la detección, identificación y localización de señales de RF, detectaron durante una campaña de monitorización de señales L1 y L2 en Londres una gran cantidad de señales interferentes. Algunas de ellas eran el resultado de equipos de RF que emitían señales espurias en las bandas L1 y L2, pero en otros casos se pudieron observar fuentes de RF con señales interferentes que sugieren un objetivo deliberado de interferir o degradar el servicio GPS.

Se sabe que en Londres los taxistas y los conductores de vehículos pesados usan jammers para eludir los límites de conducción, así como para evitar ser posicionados durante su jornada laboral.

En el mismo informe, CRFS indica que Corea del Sur estuvo sujeta a una importante campaña de interferencia sobre el sistema GPS, presuntamente desde Corea del Norte, según los estudios. Este tipo de ataques a las señales de GPS afectaron a la navegación de barcos y aviones. El uso de jammers no es selectivo, y su operación (ilegal) genera daños colaterales en otros servicios, la gran mayoría críticos, como el control del tráfico aéreo (ATC) o las operaciones de búsqueda y rescate (SAR).

También, en dicho informe, se indica que la Bolsa de Londres ha estado sujeta en repetidas ocasiones a interrupciones en el servicio GPS, lo que afecta al sellado de tiempo en las transacciones económicas. Para dimensionar el impacto que puede suponer la degradación o interferencia del sistema GPS con respecto a las operaciones bancarias: en 2007, debido a un ejercicio de la marina de EE. UU. en el que se experimentaba con la pérdida de la señal GPS, los ciudadanos del puerto de San Diego no pudieron retirar efectivo de los cajeros automáticos por la afectación al sellado de tiempo de las operaciones bancarias.

Este tipo de incidentes nos debe hacer reflexionar sobre la importancia de la seguridad de las comunicaciones RF. Muchas veces, cuando hablamos de seguridad, solo la aplicamos a las comunicaciones TCP/IP, wireless o bluetooth, pero debemos ser conscientes de que otros sistemas de telecomunicaciones pueden verse atacados y de que las consecuencias pueden ser, en algunos casos, muy relevantes.

En el próximo artículo seguiremos profundizando en diversos incidentes que han ocurrido recientemente y en las consecuencias que han tenido.

### Serie: Incidentes de seguridad en sistemas GNSS

* Parte I: Introducción a las amenazas GNSS (este artículo)
* [Parte II: Incidentes marítimos, militares e infraestructuras críticas]({{< ref "posts/incidentes-gnss-parte-2" >}})
* [Parte III: GPS spoofing en el Golfo Pérsico y la navegación marítima]({{< ref "posts/incidentes-gnss-parte-3" >}})
* [Parte IV: GPS jamming en zonas de conflicto y monitorización global]({{< ref "posts/incidentes-gnss-parte-4" >}})
* [Parte V: El repunte del spoofing GPS en 2024]({{< ref "posts/incidentes-gnss-parte-5" >}})
* [Parte VI: Guerra electrónica en Ucrania e Israel]({{< ref "posts/incidentes-gnss-parte-6" >}})
