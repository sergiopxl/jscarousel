"use strict";
//alert("cargo");
class djvCarousel {


    djvCarouselInit(djvCarouselTheme, duracion) {
        // Declaración de variables
        var djvCarouselChildrens;
        var djvCarouselParent;
        var djvCarouselVisor;
        var djvCarouselContainer;
        var djvCarouselElements;
        var djvCarouselElementsCount;
        var djvNewWitdh;
        var intervaloEntreImagenes;
        var djv;
        //var topePosicion;
        // Asignación de valores

        this.intervaloEntreImagenes = duracion;
        this.djvCarouselParent = document.getElementById(djvCarouselTheme);
        this.djvCarouselChildrens = this.djvCarouselParent.children;
        this.djvCarouselVisor = this.djvCarouselChildrens[0];
        this.djvCarouselChildrens = this.djvCarouselVisor.children;
        this.djvCarouselContainer = this.djvCarouselChildrens[0];
        this.djvCarouselChildrens = this.djvCarouselContainer.children;
        this.djvCarouselElements = this.djvCarouselChildrens;
        this.djvCarouselElementsCount = this.djvCarouselElements.length;
        this.djvNewWitdh = this.djvCarouselElements[0].offsetWidth;
        this.djvNewWitdh = this.djvNewWitdh * 3;
        this.djvCarouselContainer.style.width = this.djvNewWitdh + "px";

    }
    djvCarouselMove() {
        var leftPosition;
        var content = this.djvCarouselContainer;
        var coleccionElementos = this.djvCarouselElements;
        var intervaloEspera;
        var intervaloMovimiento;
        var maximaPosicion;
        leftPosition = this.djvCarouselContainer.offsetLeft;
        this.intervaloEspera = setInterval(function() {
            maximaPosicion = coleccionElementos[0].offsetWidth;
            this.intervaloMovimiento = setInterval(function() {
                if (leftPosition >= (-maximaPosicion)) {
                    leftPosition -= 10;
                    //txt2 = "<br>antes leftPosition: " + leftPosition + " vueltas: " + contador; //lineas para borrar
                    //segundaconsola.innerHTML = txt2;
                    content.style.left = leftPosition + "px";

                } else {
                    //txt += "<br>entro: " + leftPosition; //lineas para borrar
                    //consola.innerHTML = txt;
                    clearInterval(this.intervaloMovimiento);
                    var elementoactual = coleccionElementos[0];
                    //console.log(elementoactual);
                    content.appendChild(elementoactual);
                    leftPosition = 0;
                    content.style.left = leftPosition + "px";
                    //txt +="<br> despues leftPosition: " + leftPosition + "px "+ " maximaPosicion: " + maximaPosicion + " ********** "; //lineas para borrar
                    //consola.innerHTML = txt; //lineas para borrar
                }
            }, 10);
        }, this.intervaloEntreImagenes);

        // depurando
        var consola = document.getElementById("consola");
        var segundaconsola = document.getElementById("segundaconsola");
        var txt2;
        var txt = "Ancho carousel: " + this.djvCarouselParent.offsetWidth;
        var contador = 0;
        txt += " - leftPosition: " + leftPosition;
        txt += " - Ancho visor: " + this.djvCarouselVisor.offsetWidth;
        //txt += " - Ancho container: " + this.djvCarouselContainer.offsetWidth;
        //txt += " - Ancho Element: " + this.djvCarouselElements[0].offsetWidth;
        //txt += " - djvNewWitdh: " + this.newWidht;
        consola.innerHTML = txt;
        // fin depurando
    }

    djvCarouselStop() {
        clearInterval(this.intervaloEspera);
    }
    djvCarouselGoPlay() {}

}
