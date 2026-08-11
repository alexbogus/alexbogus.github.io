---
title: "Ciberseguridad en 5G (Parte V): la evolución de las redes de emergencias hacia el 5G"
date: 2024-04-29
summary: "Las redes de radiocomunicaciones de emergencias basadas en TETRA se acercan a su techo tecnológico. El 5G y sus capacidades de misión crítica se perfilan como la siguiente generación, pero el camino no es solo técnico."
tags: ["Ciberseguridad", "5G", "Telecomunicaciones", "Emergencias"]
---

Hoy en día son muchas las comunidades autónomas que disponen de su propia red de radiocomunicaciones móviles de emergencias, destinadas a satisfacer las necesidades de los servicios de emergencias implantados en su territorio.

Estas comunicaciones, que hasta la fecha están basadas en tecnologías de banda estrecha, siendo la voz el principal servicio que prestan, están llegando a su máximo exponente tecnológico. Sus usuarios son, cada vez más, demandantes de sistemas que no solo les ofrezcan voz (PTT, Push to Talk), sino que han expresado su necesidad imperante de comunicaciones de mayor ancho de banda para poder incorporar a estas redes de emergencias acceso a aplicaciones, bases de datos y sistemas de transmisión de vídeo en tiempo real.

## Un poco de historia de las redes de comunicaciones en emergencias

A finales de los años 90, la mayor parte de los servicios públicos de emergencias con implantación en el territorio nacional disponían de su propia red radio PMR de tecnología analógica convencional que, muchas veces, procedía de los años ochenta, o bien utilizaban servicios de PAMR con tecnología de trunking analógica de los años noventa. Este tipo de redes presentaban muchos inconvenientes, tales como:

* Existían muchas redes heterogéneas, de modo que un terminal de una agencia no podía comunicarse con otro perteneciente a una red distinta. No existía interoperabilidad.
* A menudo se presentaban escenarios con problemas de saturación y falta de cobertura (sobre todo en redes monocelda).
* Existía una escasa, cuando no nula, capacidad de transmisión de datos.

Es alrededor del año 2000 cuando la Secretaría de Estado formalizó un contrato que tenía como objeto la implantación y despliegue de un "Sistema Integral de Radiocomunicaciones Digitales de Emergencias del Estado" (SIRDEE), que sirviera de soporte para la prestación de un servicio integral y seguro de comunicaciones de voz y datos a los efectivos de las Fuerzas y Cuerpos de Seguridad del Estado en todo el territorio nacional.

Este fue, quizás, el primer paso en la digitalización de las redes de comunicaciones de emergencias. A partir de este momento, muchas comunidades autónomas comenzaron el estudio e implantación de redes de comunicaciones para sus autonomías y sus servicios de emergencias.

Con esta modernización de las redes de emergencias, las comunidades autónomas buscaban proveer de nuevas funcionalidades a las agencias de emergencias adheridas a sus redes de comunicaciones; muchas de ellas adoptaron como tecnología a desplegar TETRA (Terrestrial Trunked Radio), creando así redes como:

* Canal Isabel II (Madrid)
* RESGAL (Galicia)
* RADIECARM (Murcia)
* RESCAT (Cataluña)
* COMDES (Comunidad Valenciana)
* SECORA (Sevilla)
* RESCAN (Canarias)

En la actualidad, en España se pueden encontrar redes TETRA no solo en las comunidades autónomas para su uso en emergencias, sino que durante este tiempo se han desplegado también para otro tipo de infraestructuras, tales como aeropuertos (Ibiza, Málaga, Alicante, Barcelona, Valencia, Madrid, entre otros), puertos (Valencia, Gandía) o líneas de tren (Llobregat-Anoia, el Vallés, entre otras).

### TETRA

TETRA (Terrestrial Trunked Radio) es un estándar desarrollado en la década de los 90 por el ETSI (Instituto Europeo de Normas de Telecomunicaciones), instituto internacional que produce y mantiene protocolos de comunicación que usamos todos los días, entre ellos el protocolo GSM.

La utilización de este estándar de comunicaciones está orientada a dar respuesta a la demanda de soluciones especializadas en el ámbito profesional, donde características como la seguridad, la compatibilidad, la calidad de la voz, el acceso a datos y la disponibilidad son factores esenciales.

En este artículo no vamos a entrar en el detalle de las comunicaciones TETRA, pero sí indicaremos cuáles son sus principales características:

* Diversos modos de operación: TMO, DMO, DMO Repeater, Gateway.
* Llamadas half duplex y full duplex.
* Llamadas individuales y de emergencia.
* Envío y recepción de mensajes cortos (SDS).
* Envío de posicionamiento GPS.
* Envío de mensajes tipo STATUS.
* Cifrado del interfaz aire-aire y autenticación de usuarios ante la red.
* Navegador WAP.
* Desactivación remota del terminal.
* Gestión de grupos remota y asignación dinámica de grupos (talkgroups).

> El 24 de julio de 2023 se hicieron públicos los hallazgos de un grupo de investigadores de seguridad que, en un congreso de ciberseguridad, descubrieron debilidades en varios de los algoritmos de cifrado usados por las redes TETRA. Más información en [tetraburst.com](https://www.tetraburst.com/).

Aunque las redes TETRA permitieron el acceso a servicios de datos de baja velocidad, como servicios de localización GPS, consultas a bases de datos y mensajes cortos, los intervinientes en emergencias demandan cada vez más datos de banda ancha para mejorar la toma de decisiones ante una emergencia. Existen nuevos retos que este tipo de redes, actualmente, no cumplen.

## Escenarios de evolución

Existe una necesidad creciente de banda ancha para servicios como el vídeo en streaming, la telegestión de dispositivos o el acceso a aplicaciones más demandantes de ancho de banda.

Tomando como punto de partida la situación existente en otras redes en Europa, donde la mayoría son TETRA, existen diversos escenarios:

* El primero sería evolucionar las redes TETRA hacia la tecnología TEDS (TETRA Enhanced Data System), que ofrece velocidades de 50 a 200 kbps, una tasa de bits que, si bien puede ser suficiente para algunas aplicaciones, no lo es para la transmisión de vídeo en tiempo real con el detalle que ahora mismo están demandando las agencias de emergencias.
* Un segundo escenario sería complementar la red TETRA con una tecnología de banda ancha como el 4G/5G, pudiendo desplegar una red propia o alquilando los servicios a un operador de telefonía móvil.
* Quizás el escenario que ofrece más garantías de crecimiento a futuro sería usar 5G con tecnología MCPTT (Mission Critical Push to Talk), implementable con tecnología comercial en una red dedicada o alquilando los servicios de comunicaciones a operadores de telefonía móvil.

## Evolución de las redes PMR a 5G: retos y problemáticas

La principal problemática a la que se enfrenta el sector de las telecomunicaciones, y más concretamente los usuarios de las redes de emergencias, es el paso de la tecnología actual PMR a una solución totalmente nueva que permita ofrecer esos, tan demandados, servicios de banda ancha a sus usuarios.

Para ello es fundamental que las redes 5G estén preparadas para dar soporte a las comunicaciones en todo momento, sobre todo en casos de situaciones críticas o de desastres. En estas situaciones, los usuarios de este tipo de redes deberán contar con herramientas que les permitan dar respuesta inmediata, con la mayor capacidad de red posible y con capacidad de ser resilientes frente a situaciones adversas como catástrofes naturales o eventos no planificados. Algunas de esas necesidades son, por ejemplo:

* Capacidad de operar en entornos difíciles.
* Autenticación segura.
* Capacidad de transmisión de audio y vídeo.
* Acceso instantáneo a los datos.
* Comunicaciones MCPTT (push-to-talk de misión crítica).
* Cobertura homogénea, constante y resiliente frente a situaciones adversas.

Pero no es sencillo hacer la transición a estas nuevas redes que, de seguro, ofrecen mejores prestaciones que las actuales redes PMR, donde los usuarios no pueden hacer uso del acceso de banda ancha.

Esta posible transición de las redes actuales al 5G no es solamente técnica, también es un cambio de modelo organizativo. Es necesario definir quién lidera la transición, qué tipo de red, qué ámbito tendrá dicha red, así como quién se encargará de su despliegue y posterior mantenimiento.

## Proyectos de innovación en el 112

Desde el primer plan de acción 5G en Europa, la Comisión Europea incentivó el desarrollo de pilotos de la tecnología 5G en diferentes verticales a través del proyecto de colaboración público-privada 5G PPP. Además, las autoridades nacionales, los operadores, los fabricantes de equipos y las organizaciones sectoriales han propiciado múltiples iniciativas de colaboración, con una gran participación de empresas especializadas, integradores, desarrolladores de aplicaciones e industrias de diferentes sectores productivos.

Con un presupuesto de 81 M€, se llevaron a cabo 10 pilotos de 5G con más de 125 casos de uso, de los que destacamos los siguientes por su relación directa con las redes de comunicaciones de emergencias:

* Piloto Orange en Valencia, para el desarrollo de un caso de uso donde se desplegó una unidad móvil para la gestión de emergencias basada en la navegación de drones pilotados, con imágenes a través de la red 5G.
* En Cataluña, se desplegó un piloto con la participación de la Guardia Urbana y Bombers de Barcelona para el uso de la red 5G en casos de emergencia:

{{< youtube yWHEecLRN0I >}}

Las capacidades de gran ancho de banda (eMBB), baja latencia y fiabilidad (URLLC) del 5G son clave para el desarrollo de estas redes de comunicaciones. Pero, a pesar de que su despliegue comercial ya está entre nosotros, desarrollar una red de estas características tiene otras implicaciones que no siempre son técnicas.

## Armonización de frecuencias destinadas a redes de emergencias

Otro aspecto clave para el desarrollo y despliegue de este tipo de redes es el espectro disponible, que debe estar específicamente reservado para su uso y debidamente licenciado. Hay que ir hacia un modelo de estandarización para maximizar la compatibilidad, pero sobre todo crear una armonización de frecuencias, debidamente licenciadas por el regulador, para que estas redes puedan estar protegidas frente a interferencias.

Por esta razón, diversas agencias europeas están colaborando con el Comité de Comunicaciones Electrónicas (ECC) para establecer una banda de frecuencias armonizada para la prestación de servicios de banda ancha de Seguridad Pública. Para ello se ha destinado a diversos equipos de trabajo, entre ellos el FM49, con el objetivo de disponer de espectro a medio y largo plazo (antes de 2025) y desarrollar una hoja de ruta con los hitos y pasos necesarios para conseguirlo. En la evaluación de las bandas más apropiadas para la armonización del espectro a nivel europeo se tienen en consideración aspectos relacionados con las comunicaciones transfronterizas y los requerimientos de aplicaciones relacionadas con la protección pública y la mitigación de desastres (PPDR, Public Protection and Disaster Relief), incluyendo la interoperabilidad.

En España, se publicó en el [BOE](https://www.boe.es/buscar/doc.php?id=BOE-A-2020-8286) del 13/07/2020 la regulación de la subbanda de 450 a 470 MHz para asignación a servicios PPDR:

> Los bloques pareados de frecuencias 452,000 a 457,500 MHz y 462,000 a 467,500 MHz se reservan, en aplicación de la Decisión ECC DEC(16)02 de la CEPT, a sistemas de protección pública y operaciones de socorro en caso de catástrofe (PPDR) de banda ancha, preferentemente para el sistema de ámbito nacional. No obstante, en aras de una mayor eficiencia, este recurso podrá ser compartido con sistemas PPDR de otros ámbitos territoriales si se identifican las condiciones técnicas y operativas que permitan dicha compartición.

De igual forma, en el citado BOE también se hace mención a la banda de 700 MHz:

> Se destinan los rangos de frecuencias 698-703 MHz/753-758 MHz y 733-736 MHz/788-791 MHz para su utilización por sistemas de protección pública y operaciones de socorro en caso de catástrofe (PPDR) de banda ancha, de conformidad con las condiciones técnicas armonizadas por la Decisión de Ejecución (UE) 2016/687.

## Conclusiones

Todavía no sabemos hacia dónde irán las redes de emergencias de nueva generación, aunque es muy probable que migren de tecnologías PMR hacia redes 5G. Si se elige un modelo que exija el uso de redes móviles comerciales, se deberá asegurar que estas redes ofrezcan las prestaciones requeridas por las autoridades en cuanto a cobertura, disponibilidad, interoperabilidad, acceso prioritario y calidad de servicio.

No obstante, como hemos mencionado, existen factores como el marco regulatorio europeo y español respecto a las redes PPDR, la asignación de espectro dedicado y armonizado en toda la UE, así como la elección por parte del Estado español del modelo de implantación más adecuado de este tipo de redes, su gestión y su mantenimiento, que condicionarán el resultado final.

Seguiremos atentos a la evolución de las redes de emergencias, y más adelante iremos ampliando con aspectos también relacionados con la ciberseguridad de dichas redes, no solo desde el ámbito IP sino también desde el ámbito de la seguridad de la parte RF.

### Referencias

* [Automotive and 5G Network Threats](https://www.8bellsresearch.com/wp-content/uploads/2022/06/Caramel-SancusWP4-3.pdf)
* [Evolución de RADIECARM a 5G](https://repositorio.upct.es/bitstream/handle/10317/8741/ddrc_C.pdf?sequence=5&isAllowed=y)
* [Diseño de una red 5G SA para la zona portuaria de Valencia](https://oa.upm.es/70542/1/TFG_DAVID_CASTRO_SANCHEZ.pdf)
* [Espectro Europeo de banda ancha para Seguridad Pública](https://emercomms.ipellejero.es/2011/12/19/espectro-europeo-de-banda-ancha-para-seguridad-publica/)
* [Monográfico Redes PPDR](https://upcommons.upc.edu/bitstream/handle/2117/101294/monografico_3_espectro.pdf;jsessionid=5E3ADC2B52067A3E4387DCCCFA4EEA5F?sequence=1)

### Serie: Ciberseguridad en 5G

* [Parte I: Introducción]({{< ref "posts/ciberseguridad-5g-parte-1-introduccion" >}})
* [Parte II: Redes de Misión Crítica]({{< ref "posts/ciberseguridad-5g-parte-2-redes-mision-critica" >}})
* [Parte III: NFV, SDN y arquitectura basada en servicios]({{< ref "posts/ciberseguridad-5g-parte-3-nfv-sdn" >}})
* [Parte IV: La nube táctica y el 5G en Defensa]({{< ref "posts/ciberseguridad-5g-parte-4-nube-tactica-defensa" >}})
* Parte V: La evolución de las redes de emergencias hacia el 5G (este artículo)
