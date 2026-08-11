---
title: "Un repaso a los incidentes de seguridad de los sistemas GNSS (Parte II)"
date: 2020-03-05
summary: "De la navegación marítima al ámbito militar y las infraestructuras críticas: un recorrido por los incidentes de spoofing y jamming GPS más relevantes hasta 2020, y el proyecto europeo STRIKE3."
tags: ["Ciberseguridad", "GNSS", "Militar", "RF"]
---

Que los sistemas de posicionamiento como el GPS forman parte de nuestras vidas como algo esencial ya no cabe duda. Hoy en día la mayoría de nosotros llevamos uno encima, en nuestro coche, en nuestro smartwatch o en nuestro smartphone, por ejemplo.

Podemos encontrar abundante literatura que trata todo lo relacionado con la denegación o alteración de los sistemas GPS, sobre todo relacionada con la ciberguerra y las vulnerabilidades en infraestructuras críticas. Y, a tenor de lo expuesto en el artículo anterior, no es descabellado que pueda suceder. A continuación, daremos un repaso a algunos de los incidentes más relevantes que se han producido en los últimos años.

### Seguridad marítima e incidentes en los sistemas GNSS

De entre los incidentes que se han producido, los que más publicidad han recibido han sido los relacionados con la navegación marítima.

En 2017, en el Mar Negro, el capitán de un barco mercante avisó a otros barcos cercanos de que su GPS lo estaba situando en un lugar equivocado: según la información que recibía, su barco se encontraba a 32 km tierra adentro, más concretamente en un aeropuerto. Este no fue un caso aislado: según se pudo leer en varios medios, decenas de barcos también se vieron afectados, reportando que, según su sistema GPS, se encontraban tierra adentro.

A raíz de este incidente, las investigaciones realizadas indicaron que podría tratarse del primer caso documentado de GPS spoofing, apuntando como posible causa a un dispositivo no identificado. Dos años más tarde, en mayo de 2019, [satellesinc.com](https://www.satellesinc.com/shipping-industry-faces-gps-jamming-in-persian-gulf/) destacaba otro supuesto incidente con los sistemas GPS. La nota emitida por la "Maritime Administration" indicaba que los buques afectados detectaron interferencias en los sistemas GPS cerca de Fujairah (Emiratos Árabes), y que estos incidentes pudieron tener relación con los ataques sufridos por varias embarcaciones en aquella zona.

Un poco más tarde, en agosto de 2019, se volvió a emitir una alerta sobre interferencias en los sistemas GPS y AIS (Automatic Identification System) a todos los buques con rutas alrededor del Golfo Pérsico, el Estrecho de Ormuz y el Golfo de Omán.

Fernando Ibáñez Gómez, en su artículo "Suplantación de GPS" en la publicación Revista Ejércitos, también se hace eco de la amenaza que supone para la seguridad marítima este tipo de incidentes, ya que podría causar colisiones entre embarcaciones si a este fallo le sumamos una mala meteorología.

Todos estos artículos nos hacen ver la importancia, y los riesgos asociados, de este tipo de ataques a los sistemas de posicionamiento.

### La importancia de los sistemas de posicionamiento en el ámbito militar

Si analizamos la importancia de estos sistemas en el ámbito militar, nos damos cuenta de que su uso es clave sobre todo en operaciones navales, donde evidentemente se depende mucho de los sistemas de posicionamiento, tanto para la navegación como para los sistemas de armas o de mando y control (C2). Algo similar ocurre en el resto de ejércitos (aire y tierra).

También cabe destacar que algunos servicios de radiocomunicación necesitan disponer de una señal de tiempo extremadamente precisa para la sincronización; es el caso de los sistemas de salto de frecuencia como HAVE QUICK.

No debemos olvidar que el sistema GPS fue creado por el Departamento de Defensa (DoD) de Estados Unidos exclusivamente para el ámbito militar, pero años más tarde, a raíz de un incidente de navegación aérea en el que un avión civil fue derribado al sobrevolar territorio soviético restringido, se decidió abrir el sistema a la aviación civil, que se vio ampliamente beneficiada por este uso.

En los últimos años son varios los casos de supuestos ataques contra las señales GPS que han tenido relación con un actor concreto. En 2017, la Autoridad Nacional de Comunicaciones de Noruega indicó que, coincidiendo con los ejercicios rusos Zapad 2017 (el 7 y el 15 de septiembre), una zona del país sufrió perturbaciones en las señales GPS, afectando sobre todo a la aviación civil.

En 2018, coincidiendo con el ejercicio Trident Juncture de la OTAN, medios como la BBC se hicieron eco de que, casi con total certeza, Rusia podría haber estado alterando las señales GPS. Otros medios apuntaron directamente a Rusia como origen de estas interferencias, indicando que estas disrupciones habrían sido deliberadamente ejecutadas para poner a prueba sus sistemas de guerra electrónica, con implicaciones directas más allá de lo militar, ya que pudieron verse afectados aviones, barcos y otros sistemas civiles.

Lo que parece claro es que cada vez hay más incidentes, con repercusiones cada vez mayores. Y, dada la dependencia tecnológica que sufrimos de los sistemas de posicionamiento, es necesario tomar medidas de detección y mitigación de estos ataques.

### Infraestructuras críticas y los sistemas GNSS

Hasta ahora, la mayoría de los escenarios observados tienen como objetivo la alteración del posicionamiento, dificultando la navegación. Pero no debemos olvidar que los sistemas GNSS no solo prestan servicio de posicionamiento: otra de sus funciones es proporcionar una fuente precisa y extraordinariamente estable de tiempo.

Esta precisión temporal es fundamental en múltiples infraestructuras modernas que necesitan una sincronización milimétrica para funcionar. Un ejemplo de infraestructura crítica con alta dependencia de esta fuente de tiempo es la red eléctrica, pero no la única: también podemos citar las redes de distribución de TDT.

Las redes de TDT disponen de arquitecturas de distribución SFN (Single Frequency Network), donde todos los transmisores y reemisores que componen la red hacen uso de la misma frecuencia de emisión para transmitir un determinado paquete de canales de televisión. Por el tipo de modulación empleada, se requiere una cuidada sincronización de tiempo en todos los centros emisores y reemisores, ya que de no existir esa sincronización la emisión podría verse afectada, con probabilidad de que los centros se interfieran entre sí.

### Proyecto STRIKE3

Ante una situación en la que, como hemos mostrado a lo largo del artículo, se ha demostrado que los sistemas GNSS son vitales para una gran cantidad de aplicaciones tanto en el ámbito civil como en el militar, la Unión Europea está llevando a cabo estudios para conocer los riesgos que supone que las señales de los sistemas de posicionamiento puedan verse alteradas y/o interrumpidas. Para ello se creó el [proyecto STRIKE3](http://www.gnss-strike3.eu/), que hasta la fecha ha encontrado cientos de miles de eventos de interferencia de bajo nivel y más de 50.000 eventos de interferencia intencionados, clasificados en más de 300 "familias" de interferencia.

El propósito del proyecto STRIKE3 es elaborar normas internacionales en el ámbito de la detección y notificación de amenazas relacionadas con los sistemas GNSS, así como clasificar y caracterizar las interferencias más comunes para poder diseñar un banco de pruebas que permita testear y analizar el comportamiento de los receptores GNSS frente a esas amenazas. Para lograr dicho objetivo, el proyecto ha desplegado una red de sensores que permite monitorizar las amenazas ([Detector Fingerprinting GNSS Threats](http://www.gnss-detector.eu/)).

## Conclusiones

Como se ha podido observar a lo largo de este artículo, las amenazas a los sistemas GNSS ya no son un hecho aislado; de hecho, se han convertido en un fenómeno mundial.

Las consecuencias de una disrupción de este tipo de sistemas son incalculables. Para tener una idea de la dimensión del problema, según un informe del gobierno del Reino Unido, se estimó que un fallo en los sistemas GPS tendría un coste de 1.000 millones de dólares por día en los primeros cinco días, siendo muy complicado calcularlo si el problema fuese más extenso.

Pero no solo debemos pensar en las consecuencias económicas: un fallo en estos sistemas afectaría a servicios esenciales, como las redes telefónicas (que se verían afectadas por la sincronización horaria), las transacciones bancarias, los mercados bursátiles, las redes eléctricas o la navegación aérea y marítima.

Mientras tanto, parece claro que debemos dedicar todos los esfuerzos posibles a proteger los sistemas actuales, conocer cuáles son las amenazas a las que se enfrentan, e impulsar en paralelo proyectos de innovación que permitan diseñar receptores más robustos frente a este tipo de amenazas, o dotar a los sistemas más críticos de un respaldo como eLoran o el sistema STL de Iridium.

Ciertamente, se podría continuar hablando largo y tendido de los incidentes ocurridos en los sistemas GNSS, más a raíz del informe publicado por C4ADS ("Above Us Only Stars"). Pero dejaremos el análisis del resto de los incidentes conocidos para siguientes entregas.

### Disclaimer

_Este artículo está basado en muchas horas de lectura. Probablemente pueda contener algún error en algún concepto o explicación. No me considero un experto en sistemas GNSS, por tanto, mis disculpas por adelantado si he cometido algún error._

### Serie: Incidentes de seguridad en sistemas GNSS

* [Parte I: Introducción a las amenazas GNSS]({{< ref "posts/incidentes-gnss-parte-1" >}})
* Parte II: Incidentes marítimos, militares e infraestructuras críticas (este artículo)
* [Parte III: GPS spoofing en el Golfo Pérsico y la navegación marítima]({{< ref "posts/incidentes-gnss-parte-3" >}})
* [Parte IV: GPS jamming en zonas de conflicto y monitorización global]({{< ref "posts/incidentes-gnss-parte-4" >}})
* [Parte V: El repunte del spoofing GPS en 2024]({{< ref "posts/incidentes-gnss-parte-5" >}})
* [Parte VI: Guerra electrónica en Ucrania e Israel]({{< ref "posts/incidentes-gnss-parte-6" >}})
