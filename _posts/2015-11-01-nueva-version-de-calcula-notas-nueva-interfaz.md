---
layout: post
title:  "Nueva versión de calcula notas, nueva interfaz"
date:   2015-11-01 17:12:25
categories: design
tags: android material design
image: /assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/v1.jpg
---

Hace poco menos de un año despues de los primeros examenes de la universidad cree [Calcula Notas][1], es una aplicación que calcula la nota de las asignaturas de la universidad poniendoles el sistema de evaluación que sigue cada una y añadiendo examenes.

La idea surgió de que cada vez que quería orientarme en la asignatura como iba con las notas sacaba la calculadora miraba como funcionaba la asignatura y las calculaba, como lo hacia con cada una de las asignaturas pues se me ocurrio hacer una aplicación y poder aprender nuevos conceptos de programación en android y probar 
un poco los nuevos componentes de la interfaz android.

#Primeros pasos

La aplicación tendría que mostrarme las notas de las diferentes partes de una asignatura como podía ser la nota de los examenes y la nota de cada grupo de evaluación (Teoría, Practicas, etc...), y todo ello poder verlo con un pequeño vistazo.

Por lo que se me ocurrió mostrar una asignatura en una pantalla con todo su contenido mediante desplegables, insertar la información mediante dialogos y editar manteniendo pulsado lo que se quería editar, de esta manera lo tenía todo a la vista.

Finalmente tenía:

	* Solo una pantalla principal
	* Lista de examenes con la barra lateral
	* Lista de grupos de evaluación que son desplegables con examenes
	* Dialogo para crear/modificar una asignatura, grupos de evaluación y examenes.

# V1 vs V2

![V1 vs V2](/assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/v1-vs-v2.jpg)

En la primera versión cuando te metias por primera vez aparecía un tutoríal que te explicaba como iba la aplicación porque puede que cuando entraras sin explicación no sabías hacer casi nada y esto más que la aplicación usaba dialogs para rellenar la información hicieron que se me ocurriera una mejor interfaz para una nueva versión al poco de crear la aplicación hace un año.

<blockquote class="twitter-tweet" lang="en"><p lang="es" dir="ltr">Pensando ya en la v2.0.0 de <a href="https://twitter.com/hashtag/CalculaNotas?src=hash">#CalculaNotas</a> mas intuitiva. Para el año que viene ya. <a href="http://t.co/ga4kqglefO">pic.twitter.com/ga4kqglefO</a></p>&mdash; Antonio López Marín (@tonilopezmr) <a href="https://twitter.com/tonilopezmr/status/590631903499268097">April 21, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

-- Este es el sketch que hice más o menos de lo que tenia en la cabeza.

La nueva interfaz debería de ser parecida (sin realizar un cambio demasiado brusco de repente) que la nota se viera bien en grande, que pudieras verlo todo igual de un vistazo, y que el comportamiento sea muy parecido, vamos lo que viene siendo que te metas en la aplicación y sigas sabiendo que es el calcula notas pero molón.

Ahora quitaría los horribles desplegables por simples cards y mostraría siempre los examenes (aun mejor visualización), tambien quitaría los dialogos para rellenar los datos y añadiría detalles de cada entidad, que es que por cada grupo o examen al pulsarlos vieras sus detalles completos (se fuera a otra pantalla a enseñarte el grupo entero o examen). 

//Detalles por cada entidad

Al tener cada entidad con su detalle las opciones que puedes hacer sobre cada una estan en ese mismo detalle, es decir, en la primera versión si querías modificar o borrar un examen tenias que manternerlo pulsado y aparecerían las opciones que puedes hacer sobre el, ahora las opciones no tienen que aparecer cuando lo tienes pulsado sino que aparecen cuando pinchas sobre un examen y se va a su detalle enseñandote toda la información y opciones que puedes hacer sobre el.

//Rellenar los datos

Ahora al tener cada detalle de cada entidad la edición y creación para rellenar datos se hará en ese mismo detalle enseñandote una pantalla entera para poder rellenar sus datos verificarlos y guardarlos.

//Flujo de la aplicación

Como ya he dicho en la primera versión solo había una pantalla donde lo tenias todo, y para poder interactuar con los elementos había que mantenerlos pulsados durante unos segundos.

Ahora hay un flujo entre las diferentes tres pantallas que existen pantalla principal (main), pantalla del detalle de grupo y otra para el detalle de examen.

El flujo es el siguiente:

 	1. Creas una asignatura, esta asignatura te sugiere que crees un grupo.
 	2. Creas un grupo, este grupo te sugiere que crees examenes.
 	3. Creas un examen y este te invita a que rellenes su información.
 	4. Vuelves a el grupo, y este te sugiere que crees otro examen si tienes más examenes en ese grupo.
 	5. Vuelves a la asignatura, esta te sugiere que crees otro grupo.

Aun si del paso 2 no pasas al paso 3 sino que vuelves a la asignatura no importa porque desde la asignatura que tendra el grupo creado, dentro de este grupo te sugerirá que crees un examen para ese grupo, todo mucho más logico y sencillo sin tener que mantener pulsados elementos ni tener que adivinar como funcionan las cosas.

//mostra imagen o sketch explicando asignatura -> grupo -> examen

//logitipo

El cambio en el logotipo tambíen ha sido importante ya que pase de el primer logo creado con un amigo a hacerlo totalmente material(poner aqui el link: https://www.google.com/design/spec/style/icons.html), en principio iba a seguir siendo cuadrado, pero un amigo me sugirió hacerlo redondo a mi no me convencía pero cuando lo cree redondo y pase esta encuensta: https://plus.google.com/111286730211804417846/posts/dS2JRxX7Mj9 , gano brutalmente y decidi ponerla redonda.

//animaciones

Las animaciones que tan chulas hacen las aplicaciones en la versión 2 se dejan ver un poco, sobre todo transiciones con animación, podría haber añadido más pero por falta de tiempo y ganas puse solo animaciones al crear las entidades.

Transición al crear un grupo:

Transiciíon al crear un examen:

//Mejoras

Aun podría haberse mejorado más cosas como cuando muestra el mensaje de que has borrado una asignatura puedas hacer rollback diciendo que deseche el cambio y se restablezca todo como estaba, también se podría haber quitado el NavigationView (la barra lateral que se desliza) por pestañas (Tabslayout) ya que muchos diseñadores nombran a las 3 barras verticales del NavigationView, menu hamburgesa y a los menus de la derecha con 3 puntos verticales, menu kebab:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Don&#39;t ever say you don&#39;t have choices on mobile. <a href="http://t.co/Atu3Ogi58j">pic.twitter.com/Atu3Ogi58j</a></p>&mdash; Luke Wroblewski (@lukew) <a href="https://twitter.com/lukew/status/591296890030915585">April 23, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

//Nuevas versiones

En una versión intermedia voy a permitir identificarte en la aplicación para que las asignaturas se puedan quedar guardadas en la nube y no perderlas si cambias de movil, y tambien para poder hacer una versión web para aprender a hacer aplicaciones web.

Para la version 3 haré que se puedan compartir las asignaturas con los porcentajes de los grupos y asignaturas, es decir poder pasar las estructura que sigue cada asignatura a tus amigos y no tener que ir mano a mano creando grupos que toda una clase tiene igual o incluso un curso entero.


#####Sketching

![Primera visión de Calcula Notas](/assets/article_images/2015-11-01-nueva-version-de-calcula-notas-nueva-interfaz/sketch1.jpg)

La idea se me ocurrio mientras estudiaba y como me venian las ideas de como quería que se viera las apuntaba en una hoja en la que estaba estudiando y cuando estudio suelo dibujar muchos monigotes ¯(°_o)/¯


//Poniendo cosas locas y luego organizar //

#### Calcula notas versión 2





[1]: http://tonilopezmr.com/calculanotas
[2]: http://developer.android.com/intl/es/training/material/lists-cards.html
