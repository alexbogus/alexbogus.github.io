---
title: "Un repaso a los incidentes de seguridad de los sistemas GNSS (Parte III)"
date: 2022-07-02
summary: "De la demostración de Todd Humphreys en 2013 al circular GPS spoofing sobre Teherán y los incidentes de la Royal Navy: un repaso al auge del GPS spoofing en el ámbito militar y marítimo."
tags: ["Ciberseguridad", "GNSS", "Militar", "RF"]
---

En anteriores artículos ([I]({{< ref "posts/incidentes-gnss-parte-1" >}}) y [II]({{< ref "posts/incidentes-gnss-parte-2" >}})) comentábamos que los sistemas [GNSS](https://es.wikipedia.org/wiki/Sistema_global_de_navegaci%C3%B3n_por_sat%C3%A9lite) forman parte importante de nuestras vidas, y de los cuales tenemos cierta dependencia tecnológica para las actividades diarias. El sistema [GPS](https://www.gps.gov/) (Sistema de Posicionamiento Global) de EE. UU., el más conocido por la población general, fue el primer sistema GNSS con satélites, lanzado en 1978.

Hasta hace muy poco, nadie era capaz de imaginar que se pudiese manipular una señal de GPS de forma sencilla y con un coste relativamente bajo. El acceso al sistema GPS y sus capacidades han crecido tan rápido, y se ha convertido en algo tan normal y cotidiano, que no ha dado tiempo a que la gente se plantee la seguridad de este sistema y las implicaciones que pudiera tener la explotación de vulnerabilidades.

El profesor Todd Humphreys y su equipo demostraron, ya en el año 2013, las capacidades que podría tener un atacante si se hiciese con el control de un dispositivo GPS:

{{< youtube r4UdHE3JNnU >}}

Las consecuencias de un ataque de este estilo pueden ser catastróficas, llegando al extremo de poner en peligro vidas humanas.

La seguridad del sistema GPS ha sido reconocida como una de las amenazas de seguridad más serias de los últimos años, debido al uso intensivo y al grado de dependencia que, hoy en día, se hace de este sistema de posicionamiento.

Durante 2021, algunas de estas amenazas se han vuelto endémicas, al menos en ciertas partes del globo. Lugares como el Círculo Polar Ártico, el Canal de Suez o zonas próximas a China y Rusia aparecen frecuentemente en los reportes de seguridad que emite el [Navigation Center](https://navcen.uscg.gov/gps-problem-report-status). Algunos ejemplos:

* **17/03/2022**: todo el equipamiento de navegación y comunicaciones fuera de servicio. Otros barcos reportaron problemas similares en la aproximación al puerto de Iskenderun.
* **12/04/2022**: el buque experimentó tanto jamming, con pérdida de señal, como spoofing, con la posición mostrada casi 400 millas náuticas al norte de la posición real.
* **30/04/2022**: buque en tránsito hacia el este por el Mediterráneo, 230 millas náuticas frente a la costa de Libia. GPS 1, GPS 2 y la brújula GPS perdieron la señal de satélite.
* **13/05/2022**: interferencia hasta la entrada al Canal de Suez, restaurada en la posición 31-27.8N/031-02.1E.
* **18/05/2022**: el buque, con doble DGPS, experimentó jamming y spoofing de GPS.

> Interferir o modificar la señal del GPS es ilegal, tal y como se refleja en [www.gps.gov](https://www.gps.gov).

Existen también otros reportes de interferencia en los sistemas GPS con consecuencias mucho más peligrosas:

* En 2011, Irán afirmó haber utilizado técnicas de GPS spoofing para lograr engañar a un dron Lockheed Martin RQ-170 "Sentinel", operado por la CIA sobre Afganistán, y hacer que aterrizara en un aeródromo iraní.
* En 2016, Irán probablemente usó técnicas de GPS spoofing para "atraer" a dos barcos de la marina de EE. UU. a aguas territoriales iraníes, donde la armada iraní parecía estar lista y esperándolos.
* En 2019, la inteligencia británica advirtió a los buques mercantes en el Golfo de que Irán podría estar usando técnicas de GPS spoofing para atraerlos a aguas iraníes como pretexto para apoderarse de ellos.

### Circular GPS spoofing

Nuevos informes de los últimos dos años indican que, desde marzo de 2020, el gobierno de EE. UU. empezó a recibir consultas sobre disrupciones en el servicio de GPS de un usuario en Irán que informaba de lo que parecía ser una "suplantación de identidad del sistema GPS en círculos": algunos dispositivos GPS empezaron a recibir señales falsificadas que hacían que el dispositivo se moviese en círculos alrededor de un punto en Teherán a una velocidad de 35 km/h. La hora era correcta, pero la posición se movía en círculos en sentido contrario a las agujas del reloj alrededor de un punto concreto.

Investigaciones posteriores indicaron que estas interferencias procedían de la denominada "Universidad de Guerra", escuela superior del ejército de Irán.

Otro ejemplo de "GPS circle spoofing" en la zona se puede observar si revisamos los mapas de la aplicación Strava: el mapa de calor de Strava para Teherán muestra que este tipo de técnicas de suplantación de señales GPS también se ha utilizado en, al menos, otra ubicación, en un complejo gubernamental que alberga oficinas de varias organizaciones relacionadas con la defensa y la tecnología.

### GPS spoofing y navegación marítima

Las técnicas de spoofing también han sido llevadas a otros escenarios, como es el caso de su aplicación con afectación a los sistemas AIS.

El ejemplo más remarcable, con gran impacto en la comunidad marítima y el comercio internacional, ocurrió en julio de 2019 en el Estrecho de Ormuz. Debido a la aplicación de técnicas de GPS spoofing, el petrolero británico Stena Impero alteró su rumbo hacia aguas iraníes y fue apresado por las fuerzas iraníes. Como resultado, muchas compañías navieras exigen que sus buques naveguen a gran velocidad y solo durante el día mientras transitan por el Estrecho de Ormuz.

Otro caso relevante asociado a la seguridad de la navegación marítima y la falsificación de señales GPS ocurrió en septiembre de 2020, cuando el Queen Elizabeth de la Royal Navy navegaba hacia el mar de Irlanda; sin embargo, imágenes satélite desmintieron la posición emitida por el sistema AIS.

Entre agosto de 2020 y julio de 2021, los investigadores descubrieron más de 100 casos en los que los sistemas AIS informaron erróneamente de las posiciones de muchos buques de guerra de la OTAN, creando en muchos casos posiciones de "buques de guerra fantasma".

Estos acontecimientos pueden llegar a tener consecuencias graves. Otro caso relevante fue lo que le ocurrió al destructor USS Roosevelt, que parecía estar navegando a cuatro millas dentro de aguas rusas, una grave violación de la soberanía territorial.

Recientes estudios parecen apuntar a un claro actor detrás de todos estos incidentes. En los últimos meses volvió a ocurrir un hecho similar, en este caso afectando al destructor de la Marina Real HMS Defender y a la fragata neerlandesa Evertsen: los datos de los sistemas AIS mostraban que ambas embarcaciones se encontraban "dentro del territorio controlado por Rusia".

Posicionar dos buques de guerra de la OTAN en la entrada de una importante base naval rusa sería ampliamente visto como una acción de provocación. Si bien los motivos de la utilización de estas medidas de spoofing no están claros, lo que realmente se plantea es que los sistemas AIS, actualmente, no son seguros ni fiables.

Casi todas las armadas pertenecientes a la OTAN están sufriendo este tipo de ataques. Es conocido que los servicios militares y de inteligencia rusos falsifican y bloquean las señales de GPS, en muchos casos con el objetivo de reforzar su discurso de propaganda contra los países de la OTAN.

Pero como efecto secundario, se está demostrando la ineficacia actual de los sistemas AIS, una tecnología destinada originalmente a mejorar la seguridad de las comunicaciones marítimas y cuya confianza está quedando en entredicho tras estos incidentes.

### Guerra de Ucrania y operaciones de EW

Algunos informes apuntan a que Rusia está realizando ataques de GPS spoofing durante el conflicto en Ucrania. El general David Thompson, en declaraciones a la cadena NBC News, afirmó que Rusia está interfiriendo las señales GPS en Ucrania; otros informes indican que estas disrupciones podrían haber afectado también a la aviación civil en las proximidades de Finlandia.

En febrero de 2022, los analistas de la empresa HawkEye 360 detectaron interferencias a lo largo de la frontera de Ucrania y Bielorrusia, poco antes de que comenzara la invasión rusa. Estas actividades de EW continuaron en la zona de exclusión de Chernóbil, lo que demuestra la integración de estas tácticas como arma para debilitar las capacidades de defensa de Ucrania.

### Siguientes pasos: un nuevo enfoque de la seguridad de los sistemas GNSS

Después de ver lo sucedido a lo largo de 2021, la industria alrededor de los sistemas GNSS no va a quedarse estática. Se están estudiando nuevas tecnologías para combatir los ataques de suplantación de ubicación (GPS spoofing).

Es aquí donde aparecen tecnologías como [OSNMA](https://www.gsc-europa.eu/galileo/services/galileo-open-service-navigation-message-authentication-osnma) (Galileo Open Service Navigation Message Authentication), un mecanismo de autenticación que permite a los receptores GNSS verificar la autenticidad de la información GNSS, asegurándose de que los datos que reciben son realmente de Galileo y no se han modificado de ninguna manera.

Por otro lado, el sistema GPS estadounidense también está desarrollando su propio mecanismo de autenticación, denominado CHIMERA. Los nuevos receptores GNSS preparados para el futuro serán diseñados de tal manera que permitan a los usuarios aprovechar las ventajas de OSNMA, CHIMERA y otros servicios de valor añadido de los sistemas GNSS tan pronto como estén disponibles públicamente.

### Disclaimer

_Este artículo está basado en muchas horas de lectura. Probablemente pueda contener algún error en algún concepto o explicación. No me considero un experto, por tanto, mis disculpas por adelantado si he cometido algún error._

### Referencias

* [GPS Signals being disrupted over Russia's territory to prevent the attacks of Ukraine](https://mil.in.ua/en/news/gps-signals-being-disrupted-over-russia-s-territory-to-prevent-the-attacks-of-ukraine/)
* [GPS Signals are being disrupted in Russian Cities](https://www.wired.com/story/gps-jamming-interference-russia-ukraine/)

### Serie: Incidentes de seguridad en sistemas GNSS

* [Parte I: Introducción a las amenazas GNSS]({{< ref "posts/incidentes-gnss-parte-1" >}})
* [Parte II: Incidentes marítimos, militares e infraestructuras críticas]({{< ref "posts/incidentes-gnss-parte-2" >}})
* Parte III: GPS spoofing en el Golfo Pérsico y la navegación marítima (este artículo)
* [Parte IV: GPS jamming en zonas de conflicto y monitorización global]({{< ref "posts/incidentes-gnss-parte-4" >}})
* [Parte V: El repunte del spoofing GPS en 2024]({{< ref "posts/incidentes-gnss-parte-5" >}})
* [Parte VI: Guerra electrónica en Ucrania e Israel]({{< ref "posts/incidentes-gnss-parte-6" >}})
