
    var win    = $( this );
    var width  = wz.tool.desktopWidth() - 200;
    var height = wz.tool.desktopHeight() - 150;
    var left   = ( wz.tool.environmentWidth() / 2 ) - ( width / 2 );
    var top    = ( wz.tool.environmentHeight() / 2 ) - ( height / 2 );

    // To Do -> A la espera de métodos para conocer el tamaño de la ventana: var left   = screenX + wz.tool.environmentWidth() / 2 - width / 2 - 25;
    // To Do -> A la espera de métodos para conocer el tamaño de la ventana: var top    = screenY + wz.tool.environmentHeight() / 2 - height / 2 + wzWindow.outerHeight - wzWindow.innerHeight - 50;

    var windowObject = wz.popup( 'https://wikipedia.org/', width, height, left, top ).render();

    var timer = setInterval( function(){

        if( windowObject.closed ){

            wz.view.remove();
            clearInterval( timer );

        }

    }, 500 );

    win
    .on( 'ui-view-focus', function(){
        windowObject.focus();
    })

    .on( 'ui-view-removed', function(){
        windowObject.close();
    });

    // To Do -> A la espera de métodos para conocer cuando se va a cerrar Inevio
    /*
    wzWindow.onbeforeunload = function(){
        windowObject.close();
    };
    */
