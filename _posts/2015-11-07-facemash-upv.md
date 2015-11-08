---
layout: post
title:  "FACEMASH UPV"
date:   2015-11-07 13:40:25
categories: facemash
tags: university facebook facemash
image: http://cdn.collider.com/wp-content/uploads/the_social_network_movie_image_andrew_garfield_01.jpg
---

##¿Por qué?

- <del>Porque puedo</del>.

Ya que estoy en **segundo curso de informática**, <del>y quería promocionar la aplicación de Calcula Notas</del> , me pareció divertido hacerle un pequeño homenaje al colega [Mark][1] que hizo lo mismo pero con imágenes robadas de perfiles privados, **yo no hice eso luego lo explicare**.

Quería hacerlo lo más parecido al de la peli de [La red social][2] que tanto ponen en las jornadas de acogida:

![La red social](http://dublindigital.ie/wp-content/uploads/2011/02/facemash.jpg)

![FACEMASH UPV](/assets/article_images/about/facemash-image.png)

##¿Como?

Bueno pues fue **muy fácil** ya sabía que se podían ver todas las fotos de la universidad en el **primer año** cuando entré pero ha sido en este segundo curso cuando le vi utilidad.

Bueno si quieres un resumen de **como lo hice** aquí puedes ver la versión divertida:

[![](http://img.youtube.com/vi/f8AuB5hPiCk/0.jpg)](https://www.youtube.com/watch?v=f8AuB5hPiCk)

Ahora en **serio**, pues coges tu foto de perfil miras que la URL es [http://intranet.upv...../numeritos.gif][3] y vas cambiando los números y **¡EUREKA!**, __las imágenes en la upv las puede ver cualquiera__ y **no pasa nada** porque puedes ver la de tus compañeros de clase en la intranet (orlas) etc...

Ahora solo hay que **automatizarlo** y hacer una página html que vaya cambiando las URL's, para hacerlo lo más sencillo posible y que la página sea muy rápida en cargar las fotos como solo hay que cambiar los numeritos, **desarrollé** un programa que vaya aumentando los números y los guarde en un **fichero**, y no tener que encontrar una imagen cada vez que quiera cambiarla, etc...

El problema es que el número es muuuuy **grande** y en la mayoría de combinaciones **no hay imagen** y te sale una gris fea :(.
**Problema solucionado**, cuando no encuentra una imagen de perfil aparece una imagen que siempre es la misma y encima más pequeña con lo que siempre pesa lo mismo (bytes) que más concretamente eran **5372 bytes**, todas las imágenes que fueran distintas de la imagen sin cara pues no lo añado al fichero y ya está.

Total que lo deje un ratito y cuando tenía **5141 números diferentes** lo deje porque sino hay demasiadas caras y la gente no se encuentra! 

El HTML con un poco de <del>sorpresas</del> javascript para que el cliente haga todo el trabajo y sea rapidisimo sin recargas ni nada y se acabó.

Aquí el código mágico:

```java

    // Code for collect facebooks in a file
    public static void main(String[] args) throws IOException {
        int cont = 0;

        for(int i=53177199; i < 99999999; i += 100) {
            PrintWriter printWriter = new PrintWriter(new FileOutputStream("faces", true));
            String urlPath = "https://intranet.upv.es/foto/get/" + i + ".gif";

            URL url = new URL(urlPath);

            InputStream is = url.openConnection().getInputStream();

            byte[] buffer = new byte[8192];
            int bytesRead;
            ByteArrayOutputStream output = new ByteArrayOutputStream();
            while ((bytesRead = is.read(buffer)) != -1)
            {
                output.write(buffer, 0, bytesRead);
            }

            if (output.toByteArray().length != 5372){
                printWriter.write(i + "abc");
                printWriter.close();
                System.out.println(cont++ + " id: "+i);
            }
        }

```

#No pulses la palabra OR


[1]: https://en.wikipedia.org/wiki/Mark_Zuckerberg
[2]: http://www.filmaffinity.com/en/film577699.html
[3]: https://intranet.upv.es/foto/get/52873099.gif