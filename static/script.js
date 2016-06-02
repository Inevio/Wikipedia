
  var win    = $( this );
  var width  = api.tool.desktopWidth();
  var height = api.tool.desktopHeight() - 70;
  var left   = ( wz.tool.environmentWidth() / 2 ) - ( width / 2 );
  var top    = ( wz.tool.environmentHeight() / 2 ) - ( height / 2 );
  var windowObject = api.popup( 'https://wikipedia.org/', width, height).render();
  
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
