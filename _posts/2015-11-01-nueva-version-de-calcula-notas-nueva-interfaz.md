---
layout: post
title:  "Nueva versión de calcula notas, nueva interfaz"
date:   2015-11-01 17:12:25
categories: design
tags: android material design
image: /assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/v1.jpg
---

Hace poco menos de un año, después de los primeros exámenes de la universidad, cree [Calcula Notas][1]. Es una aplicación que calcula la nota de las asignaturas de la universidad poniéndoles el sistema de evaluación que sigue cada una y añadiendo exámenes.

La idea surgió de que cada vez que quería de cómo iba con las notas, sacaba la calculadora miraba cómo funcionaba la asignatura y las calcula, cómo lo hacía con cada una de las asignaturas pues se me ocurrió hacer una aplicación y poder aprender nuevos conceptos de programación en android y probar un poco los nuevos componentes de la interfaz android.

#Primeros pasos
</br>

La aplicación tendría que mostrarme las notas de las diferentes partes de una asignatura, cómo podía ser la nota de los exámenes y la nota de cada grupo de evaluación (Teoría, Prácticas, etc...), y todo ello poder verlo con un pequeño vistazo.

Por lo que se me ocurrió mostrar una asignatura en una pantalla con todo su contenido mediante desplegables, insertar la información mediante diálogos y editar manteniendo pulsado lo que se quería editar, de esta manera lo tenía todo a la vista.

Finalmente tenía:

	* Solo una pantalla principal
	* Lista de exámenes con la barra lateral
	* Lista de grupos de evaluación que son desplegables con exámenes
	* Diálogo para crear/modificar una asignatura, grupos de evaluación y exámenes.

####Sketching
</br>

![Primer sketch de Calcula Notas](/assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/sketch1.jpg)

El primer sketch que hice, que se vea bien la nota de la asignatura, los grupos y los exámenes dentro de ellos, también el NavigationView con todas las asignaturas.

![Primera versión de Calcula Notas](/assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/v1_app.jpg)

En la primera versión, cuando te metias por primera vez, aparecía un tutorial que te explicaba cómo iba la aplicación porque puede que, cuando entras sin explicación no sabías hacer casi nada y esto me decía que el diseño no era bueno. También usaba dialogs para rellenar la información. Por estas cosas me hicieron pensar una mejor interfaz para una nueva versión al poco de crear la aplicación, hace un año.

<blockquote class="twitter-tweet" lang="en"><p lang="es" dir="ltr">Pensando ya en la v2.0.0 de <a href="https://twitter.com/hashtag/CalculaNotas?src=hash">#CalculaNotas</a> más intuitiva. Para el año que viene ya. <a href="http://t.co/ga4kqglefO">pic.twitter.com/ga4kqglefO</a></p>&mdash; Antonio López Marín (@tonilopezmr) <a href="https://twitter.com/tonilopezmr/status/590631903499268097">April 21, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

La nueva interfaz debería de ser parecida pero sin realizar un cambio demasiado brusco de repente, que la nota se viera bien en grande, que pudieras verlo todo igual de un vistazo, y que el comportamiento sea muy parecido, vamos lo que viene siendo que te metas en la aplicación y sigas sabiendo que es calcula notas pero molón.

Ahora esto quitaría los horribles desplegables por simples cards y mostraría siempre los exámenes (aun mejor visualización), también quitaría los diálogos para rellenar los datos y añadiría detalles de cada entidad, que es que por cada grupo o examen al pulsarlos vieras sus detalles completos (se fuera a otra pantalla a enseñarte el grupo entero o examen). 

![Segunda versión Calcula Notas](/assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/v2_app.jpg)

La nota se ve claramente de la asignatura los grupos y los 2 primeros exámenes de cada grupo, si se desea ver más sobre un grupo pinchando sobre el grupo va hacía su detalle.

####Detalle por cada entidad 
</br>

![Detalles de grupo y examen](/assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/detail_activity.jpg)

Al tener cada entidad con su detalle las opciones que puedes hacer sobre cada una están en ese mismo detalle, es decir, en la primera versión si querías modificar o borrar un examen tenías que mantenerlo pulsado y aparecían las opciones que puedes hacer sobre él, ahora las opciones no tienen que aparecer cuando lo tienes pulsado sino que aparecen cuando pinchas sobre un examen y se va a su detalle enseñándote toda la información y opciones que puedes hacer sobre el.

Ahora al tener cada detalle de cada entidad, la edición y creación para rellenar datos se hará en ese mismo detalle enseñándote una pantalla entera para poder rellenar sus datos verificarlos y guardarlos.

####Flujo de la aplicación
</br>
Como ya he dicho en la primera versión solo había una pantalla donde lo tenías todo, y para poder interactuar con los elementos había que mantenerlos pulsados durante unos segundos.

Ahora hay un flujo entre las diferentes tres pantallas que existen; pantalla principal (main), pantalla del detalle de grupo y otra para el detalle de examen.

El flujo es el siguiente:

![Flujo de la Calcula Notas](/assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/flujo_app.jpg)

 	1. Creas una asignatura, esta asignatura te sugiere que crees un grupo.
 	2. Creas un grupo, este grupo te sugiere que crees exámenes.
 	3. Creas un examen y este te invita a que rellenes su información.
 	4. Vuelves a el grupo, y este te sugiere que crees otro examen si tienes más exámenes en ese grupo.
 	5. Vuelves a la asignatura, esta te sugiere que crees otro grupo.

Aun si del paso 2 no pasas al paso 3 sino que vuelves a la asignatura no importa porque desde la asignatura que tendrá el grupo creado, dentro de este grupo te sugerirá que crees un examen para ese grupo, todo mucho más lógico y sencillo sin tener que mantener pulsados elementos ni tener que adivinar cómo funcionan las cosas.

#### Icono

![V1 vs V2](/assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/v1-vs-v2.jpg)

El cambio en el logotipo también ha sido importante, ya que pase del primer logo creado con un amigo, a hacerlo totalmente material siguiendo las [Icons guidelines][3], en principio iba a seguir siendo cuadrado, pero un amigo me sugirió hacerlo redondo a mi no me convencía pero cuando lo cree redondo y pase esta encuesta:

<!-- Place this tag in your head or just before your close body tag. -->
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>

<div class="g-post" data-href="https://plus.google.com/+AntonioL%C3%B3pezMar%C3%ADn/posts/eTfrVZ8RMLU"></div>

Ganó brutalmente y decidí poner la redonda.

#### Animaciones
</br>
Las animaciones que hacen que se vea una aplicación tan chula, en la versión 2 se dejan ver un poco, sobre todo transiciones con animación, podría haber añadido más pero por falta de tiempo y ganas puse solo animaciones al crear las entidades.

![Transición al crear un grupo](/assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/group_animation.gif)

![Transición al crear un examen](/assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/exam_animation.gif)

#### Mejoras
</br>
Aún podrían haberse mejorado más cosas como cuando muestra el mensaje de que has borrado una asignatura puedas hacer rollback diciendo que deseche el cambio y se restablezca todo cómo estaba, también se podría haber quitado el NavigationView (la barra lateral que se desliza) por pestañas (Tabslayout) ya que muchos diseñadores nombran a las 3 barras verticales del NavigationView, menú hamburguesa y a los menús de la derecha con 3 puntos verticales, menú kebab:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Don&#39;t ever say you don&#39;t have choices on mobile. <a href="http://t.co/Atu3Ogi58j">pic.twitter.com/Atu3Ogi58j</a></p>&mdash; Luke Wroblewski (@lukew) <a href="https://twitter.com/lukew/status/591296890030915585">April 23, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

</br>
#### Un futuro no muy lejano
</br>
En una versión intermedia voy a permitir identificarse en la aplicación para que las asignaturas se puedan quedar guardadas en la nube y no perderlas si cambias de movil, y también para poder hacer una versión web para aprender a hacer aplicaciones web.

Para la versión 3 haré que se puedan compartir las asignaturas con los porcentajes de los grupos y asignaturas, es decir poder pasar las estructura que sigue cada asignatura a tus amigos y no tener que ir mano a mano creando grupos que toda una clase tiene igual o incluso un curso entero.

Puedes descargarte el [calcula notas][1] y me cuentas.

[1]: http://tonilopezmr.com/calculanotas
[2]: http://developer.android.com/intl/es/training/material/lists-cards.html
[3]: https://www.google.com/design/spec/style/icons.html#icons-product-icons
