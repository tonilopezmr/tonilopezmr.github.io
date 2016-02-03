---
layout: post
title:  "Una forma de implementar Login en Android"
date:   2016-02-03 10:36:25
categories: android
tags: login android
image: /assets/article_images/2016-02-03-login-con-android/login_background.jpg
---

Ahora que estoy implementando el Login en calcula notas, voy a explicar cómo lo hago de forma que sea fácil de implementar en otras aplicaciones futuras, **no es una librería** pero sí una forma de hacerlo para que __“funcione solo”__ más o menos.

En este post **no voy a explicar como usar la API de autenticación en Twitter, Facebook o Google**, sino que voy a explicar como yo los uso.

Todo el código esta incluido en [Android-Examples][2] en el modulo [login][3].

##Abstract class SignInActivity:
</br>
Es una __actividad abstracta__ de la que habrá que **extender en nuestra actividad de login**, esta actividad es la encargada de inicializar los proveedores que se va a usar y la que los va a manejar. Resumiendo, lo que viene a ser todo el código que usa las API de cada proveedor y que luego no vas a ver en tu actividad de login.
 
De esta forma tu actividad de Login con los botones, etc… solo se preocupe de los componentes de la vista, mostrar ocultar cosas, etc…

Esto lo aprendí de [JorgeCastilloPrz][1] un repositorio que tenía llamado Mirage.

##SignInManager:
</br>
**Es el encargado de manejar las preferencias del teléfono**, la que manejara si ya se han logeado anteriormente en el móvil, **y con qué proveedor se han logueado** para luego poder manejarlo. __Es una instancia estática__ que podrá ser usada en cualquier momento y que deberá haber sido inicializada siempre al comienzo de la aplicación, de esta forma, ya podrá ser usada en el resto de la aplicación.

##Providers:
</br>
**Son clases que usan la API de cada proveedor**, es la que conecta y desconecta, donde se devuelve el usuario de cada uno. 
__Estos proveedores están fuertemente ligados a SignInActivity__, esto es una desventaja ya que deberían de ser independientes uno de otros, pero por tema de tiempo aun no los he desacoplado (se haría con una interfaz), en mi [código de ejemplo][2]. **Sería interesante que hicierais un pull request a el repositorio ;)**

##UserProfile:
</br>
**Es el modelo de usuario que voy a usar en mi aplicación**, con mis necesidades, __si necesitas más información de un usuario habría que cambiar el modelo y donde lo use__. Lo ideal sería crear un modelo de usuario para el login, común para todos los proveedores con la máxima información que podría interesar y luego transformarlo a nuestro usuario, de forma que no haya que cambiar el usuario que se obtiene en el login.

**Todo el código esta incluido en [Android-Examples][2] en el modulo [login][3].**


----------------

[2]: https://github.com/tonilopezmr/Android-Examples
[3]: https://github.com/tonilopezmr/Android-Examples/tree/master/navigationview
[1]: https://github.com/JorgeCastilloPrz