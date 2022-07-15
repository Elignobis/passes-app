<template>




<!-- <div class="contact">
    <h1 class="text-white text-center">Contact Us:</h1>
</div> -->


  <!-- <div class="container">
  <form class="text-center" action="https://formspree.io/f/mpzbklkp" method="POST">
  <h3 class="text-white" id="h3">Enter your details</h3>
    <div id="form">
      <h4 class="text-white">FirstName<input class="mx-5" name="name" placeholder="Name here"></h4> <br><br>
      <h4 class="text-white">LastName<input class="mx-5" name="name" placeholder="Surname here"></h4> <br><br>
      <h4 class="text-white">Email<input id="input" class="" name="email" placeholder="Email here"></h4>
      <label><h4 class="text-white mr-5">Mess</h4></label>
      <textarea v-model="message" placeholder="Message here"></textarea> <br><br>
    <button type="submit" class="bg-primary text-white">submit</button>
    <button type="reset" class="bg-primary text-white" id="reset">reset</button>
    </div> <br>
  </form>
  </div> -->

  <div class="container my-5">

  <div class="card">
  <div class="card__side card__side--front" id="front-1">
    <div class="text-box">
      <!-- <h3 class="text-box-lower">PASS</h3>
      <h1 class="text-box-top">PASS?</h1> -->
      <h3 class="text-box-middle">PASSES!!</h3>
    </div>
  </div>
  <div class="card__side card__side--back" id="back-1">
    <div class="text-box">
      <h3 class="text-box-top">Cards Flipped</h3>
      <h1 class="text-box-middle">Great!</h1>
      <h3 class="text-box-lower">--- More Text ---</h3>
    </div>
  </div>
</div> <br><br><br>

      <!-- Contact Google Style -->

      <h2 class="text-center my-5 border border-primary" style="color: white">Get in touch
        <!-- <span>G</span><span>e</span><span>t</span><span>&nbsp;</span><span>i</span><span>n</span><span>&nbsp;</span><span
          style="color: #4285F4;">t</span><span>o</span><span
          style="color: rgb(52,168,83);">u</span><span>c</span><span>h</span><span>&nbsp;</span>--><span><i
            class="fas fa-paper-plane"></i></span>
      </h2>
      <div class="row gx-5 mx-4 my-5 d-flex justify-content-center">
        <div class="col-md-5 my-2">
          <div class="row">
            <h3 class="text-center border border-primary" style="color: white">Contact details</h3>
            <div class="container d-flex flex-column justify-content-center text-center contact-con">
              <ul class="list-unstyled text-decoration-none">
                <li>
                  <a href="https://rwayisibongile@gmail.com" target="_blank" class="text-decoration-none">
                    <i class="fas fa-envelope"></i>
                    <p style="color: white">rwayisibongile@gmail.com</p>
                  </a>
                </li>
                <hr>
                <li>
                  <a href="https://www.facebook.com/login/" target="_blank" class="text-decoration-none">
                    <i class="fab fa-facebook"></i>
                    <p style="color: white;">PAssES_TM</p>
                  </a>
                </li>
                <hr>
                <li>
                  <a href="https://www.instagram.com/accounts/login/" target="_blank" class="text-decoration-none">
                    <i class="fab fa-instagram fa-lg"></i>
                    <p style="color: white;">PAssES_TM09</p>
                  </a>
                </li>
                <hr>
                <li>
                  <a href="https://twitter.com/elignobisu" target="_blank" class="text-decoration-none">
                    <i class="fab fa-twitter"></i>
                    <p style="color: white;">@passesTM
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-5 my-2">
          <div class="row">
            <h3 class="text-center border border-primary" style="color: white;">Send me a message</h3>
            <form class="form form-con" action="https://formspree.io/f/myyobvqb" method="post">
              <div class="row mt-4">
                <div class="">
                  <input type="text" id="name" name="name" placeholder="Your name" class="form-control" required>
                </div>
              </div>
              <div class="row">
                <div class="my-3">
                  <input type="email" id="email" name="email" placeholder="Your Email" class="form-control" required>
                </div>
              </div>
              <div class="row">
                <div class="my-3">
                  <input type="text" id="subject" name="subject" placeholder="Subject" class="form-control" required>
                </div>
              </div>
              <div class="row">
              </div>
              <div class="row">
                <div class="my-3">
                  <textarea name="message" id="message" class="h-100 w-100" placeholder=" Type Message"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="my-3">
                  <input type="submit" class="btn border border-primary w-100 submit-con glow"
                    style="color: white; font-weight: bold;">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>



  <!-- <div class="container">
    <h3 class="text-white">Find us on</h3>
  </div> -->
</template>

<style>

bod

.container{
  background-color: #3333;
  margin: 50px;
  padding: 50px;
  padding-bottom: 200px;
  justify-content: center;
}

#h3{
  margin-left: 100px;
  margin-bottom: 50px;
}

label{
  width: 100px;
  display: inline-block;
}

#form{
  border-radius: 10px;
  color: white;
  display:  block;
  width: auto;
  margin-left: 100px;
}

textarea #message{
  margin-top: 45px;
  padding-right: 40px;
  margin-left: 20px;
  margin-right: 90px;
}

#name{
  margin-top: 80px;
  margin-bottom: 30px;
}

#email{
  margin-bottom: 10px;
}

#subject{
  margin-bottom: 20px;
}



#input{
  margin-left: 50px;
}


#reset{
  margin-left: 10px;
}


.card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 25rem;
  width: 100%;
  transition: all ease-in-out 5s;
  cursor: pointer;
  opacity: 1;

}

.card:hover {
  transform: scale(1.05);
}

.card:active {
  transform: translateY(-1px);
}

.card__side {
  transition: all 0.8s ease;
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 25rem;
  width: 100%;
  backface-visibility: hidden;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
}

.card__side--front {
  background-color: #2196f3;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card__side--back {
  background-color: #303f9f;
  transform: rotateY(180deg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.showGreen {
  transform: rotateY(-180deg);
}

.showRed {
  transform: rotateY(0);
}

.text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}

.text-box-top {
  font-size: 2.2rem;
  text-shadow: 2px 2px 10px #0000006c;
  font-weight: 400;
}

.text-box-middle {
  font-size: 5.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 10px #0000006c;
}

.text-box-lower {
  font-size: 2rem;
  text-shadow: 2px 2px 10px #0000006c;
  font-weight: 400;
}

.heading {
  transition: all 0.6s linear;
}

.hide {
  visibility: hidden;
  opacity: 0;
}

.show {
  visibility: visible;
  opacity: 1;
}

#front-1 {
  background-image: linear-gradient(
      rgba(204, 30, 88, 0.6),
      rgba(20, 20, 20, 0.6)
    ),
    url("https://i.postimg.cc/SRygkw2R/841b5c9da29b973482ff43a094068469.gif");
}
#front-2 {
  background-image: linear-gradient(
      rgba(31, 136, 168, 0.767),
      rgba(14, 46, 65, 0.9)
    ),
    url("https://images.unsplash.com/photo-1508599804355-8ce5238b44b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80");
}



body {
  background-color: #403060;
  background-image: url(https://i.postimg.cc/pXbS16Xw/vZKfwh.webp);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>









<script>
  var flipCheck = 0;

function rotateCards() {
  if (flipCheck === 0) {
    document.getElementById("front-2").classList.add("showGreen");
    document.getElementById("back-2").classList.add("showRed");

    document.getElementById("front-1").classList.add("showGreen");
    document.getElementById("back-1").classList.add("showRed");

    flipCheck = 1;

  } else {
    document.getElementById("front-2").classList.remove("showGreen");
    document.getElementById("back-2").classList.remove("showRed");

    document.getElementById("front-1").classList.remove("showGreen");
    document.getElementById("back-1").classList.remove("showRed");

    flipCheck = 0;
  }
}

/**
 * Ribbons Class File.
 * Creates low-poly ribbons background effect inside a target container.
 */
(function( name, factory )
{
   if( typeof window === "object" )
   {
       window[ name ] = factory();
   }

})( "Ribbons", function()
{
    var _w = window,
        _b = document.body,
        _d = document.documentElement;

    // random helper
    var random = function()
    {
        if( arguments.length === 1 ) // only 1 argument
        {
            if( Array.isArray( arguments[0] ) ) // extract index from array
            {
                var index = Math.round( random( 0, arguments[0].length - 1 ) );
                return arguments[0][ index ];
            }
            return random( 0, arguments[0] ); // assume numeric
        }
        else if( arguments.length === 2 ) // two arguments range
        {
            return Math.random() * ( arguments[1] - arguments[0] ) + arguments[0];
        }
        return 0; // default
    };

    // screen helper
    var screenInfo = function( e )
    {
        var width   = Math.max( 0, _w.innerWidth || _d.clientWidth || _b.clientWidth || 0 ),
            height  = Math.max( 0, _w.innerHeight || _d.clientHeight || _b.clientHeight || 0 ),
            scrollx = Math.max( 0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0 ) - ( _d.clientLeft || 0 ),
            scrolly = Math.max( 0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0 ) - ( _d.clientTop || 0 );

        return {
            width   : width,
            height  : height,
            ratio   : width / height,
            centerx : width / 2,
            centery : height / 2,
            scrollx : scrollx,
            scrolly : scrolly,
        };
    };

    // mouse/input helper
    var mouseInfo = function( e )
    {
        var screen = screenInfo( e ),
            mousex = e ? Math.max( 0, e.pageX || e.clientX || 0 ) : 0,
            mousey = e ? Math.max( 0, e.pageY || e.clientY || 0 ) : 0;

        return {
            mousex  : mousex,
            mousey  : mousey,
            centerx : mousex - ( screen.width / 2 ),
            centery : mousey - ( screen.height / 2 ),
        };
    };

    // point object
    var Point = function( x, y )
    {
        this.x = 0;
        this.y = 0;
        this.set( x, y );
    };
    Point.prototype = {
        constructor: Point,

        set: function( x, y )
        {
            this.x = ( x || 0 );
            this.y = ( y || 0 );
        },
        copy: function( point )
        {
            this.x = ( point.x || 0 );
            this.y = ( point.y || 0 );
            return this;
        },
        multiply: function( x, y )
        {
            this.x *= ( x || 1 );
            this.y *= ( y || 1 );
            return this;
        },
        divide: function( x, y )
        {
            this.x /= ( x || 1 );
            this.y /= ( y || 1 );
            return this;
        },
        add: function( x, y )
        {
            this.x += ( x || 0 );
            this.y += ( y || 0 );
            return this;
        },
        subtract: function( x, y )
        {
            this.x -= ( x || 0 );
            this.y -= ( y || 0 );
            return this;
        },
        clampX: function( min, max )
        {
            this.x = Math.max( min, Math.min( this.x, max ) );
            return this;
        },
        clampY: function( min, max )
        {
            this.y = Math.max( min, Math.min( this.y, max ) );
            return this;
        },
        flipX: function()
        {
            this.x *= -1;
            return this;
        },
        flipY: function()
        {
            this.y *= -1;
            return this;
        },
    };

    // class constructor
    var Factory = function( options )
    {
        this._canvas  = null;
        this._context = null;
        this._sto     = null;
        this._width   = 0;
        this._height  = 0;
        this._scroll  = 0;
        this._ribbons = [];
        this._options = {
            // ribbon color HSL saturation amount
            colorSaturation: "80%",
            // ribbon color HSL brightness amount
            colorBrightness: "60%",
            // ribbon color opacity amount
            colorAlpha: 0.65,
            // how fast to cycle through colors in the HSL color space
            colorCycleSpeed : 6,
            // where to start from on the Y axis on each side (top|min, middle|center, bottom|max, random)
            verticalPosition : "center",
            // how fast to get to the other side of the screen
            horizontalSpeed : 150,
            // how many ribbons to keep on screen at any given time
            ribbonCount: 3,
            // add stroke along with ribbon fill colors
            strokeSize: 0,
            // move ribbons vertically by a factor on page scroll
            parallaxAmount : -0.5,
            // add animation effect to each ribbon section over time
            animateSections : true,
        };
        this._onDraw   = this._onDraw.bind( this );
        this._onResize = this._onResize.bind( this );
        this._onScroll = this._onScroll.bind( this );
        this.setOptions( options );
        this.init();
    };

    // class prototype
    Factory.prototype = {
        constructor: Factory,

        // Set and merge local options
        setOptions: function( options )
        {
            if( typeof options === "object" )
            {
                for( var key in options )
                {
                    if( options.hasOwnProperty( key ) )
                    {
                        this._options[ key ] = options[ key ];
                    }
                }
            }
        },

        // Initialize the ribbons effect
        init: function()
        {
            try
            {
                this._canvas = document.createElement( "canvas" );
                this._canvas.style["display"] = "block";
                this._canvas.style["position"] = "fixed";
                this._canvas.style["margin"] = "0";
                this._canvas.style["padding"] = "0";
                this._canvas.style["border"] = "0";
                this._canvas.style["outline"] = "0";
                this._canvas.style["left"] = "0";
                this._canvas.style["top"] = "0";
                this._canvas.style["width"] = "100%";
                this._canvas.style["height"] = "100%";
                this._canvas.style["z-index"] = "-1";
                this._onResize();

                this._context = this._canvas.getContext( "2d" );
                this._context.clearRect( 0, 0, this._width, this._height );
                this._context.globalAlpha = this._options.colorAlpha;

                window.addEventListener( "resize", this._onResize );
                window.addEventListener( "scroll", this._onScroll );
                document.body.appendChild( this._canvas );
            }
            catch( e ) {
                console.warn( "Canvas Context Error: " + e.toString() );
                return;
            }
            this._onDraw();
        },

        // Create a new random ribbon and to the list
        addRibbon: function()
        {
            // movement data
            var dir    = ( Math.round( random( 1, 9 ) ) > 5 ) ? "right" : "left",
                stop   = 1000,
                hide   = 200,
                min    = 0 - hide,
                max    = this._width + hide,
                movex  = 0,
                movey  = 0,
                startx = ( dir === "right" ) ? min : max,
                starty = Math.round( random( 0, this._height ) );

            // asjust starty based on options
            if( /^(top|min)$/i.test( this._options.verticalPosition ) )
            {
                starty = 0 + hide;
            }
            else if( /^(middle|center)$/i.test( this._options.verticalPosition ) )
            {
                starty = ( this._height / 2 );
            }
            else if( /^(bottom|max)$/i.test( this._options.verticalPosition ) )
            {
                starty = this._height - hide;
            }

            // ribbon sections data
            var ribbon = [],
                point1 = new Point( startx, starty ),
                point2 = new Point( startx, starty ),
                point3 = null,
                color  = Math.round( random( 0, 360 ) ),
                delay  = 0;

            // buils ribbon sections
            while( true )
            {
                if( stop <= 0 ) break; stop--;

                movex = Math.round( ( Math.random() * 1 - 0.2 ) * this._options.horizontalSpeed );
                movey = Math.round( ( Math.random() * 1 - 0.5 ) * ( this._height * 0.25 ) );

                point3 = new Point();
                point3.copy( point2 );

                if( dir === "right" )
                {
                    point3.add( movex, movey );
                    if( point2.x >= max ) break;
                }
                else if( dir === "left" )
                {
                    point3.subtract( movex, movey );
                    if( point2.x <= min ) break;
                }
                // point3.clampY( 0, this._height );

                ribbon.push({ // single ribbon section
                    point1 : new Point( point1.x, point1.y ),
                    point2 : new Point( point2.x, point2.y ),
                    point3 : point3,
                    color  : color,
                    delay  : delay,
                    dir    : dir,
                    alpha  : 0,
                    phase  : 0,
                });

                point1.copy( point2 );
                point2.copy( point3 );

                delay += 4;
                color += this._options.colorCycleSpeed;
            }
            this._ribbons.push( ribbon );
        },

        // Draw single section
        _drawRibbonSection: function( section )
        {
            if( section )
            {
                if( section.phase >= 1 && section.alpha <= 0 )
                {
                    return true; // done
                }
                if( section.delay <= 0 )
                {
                    section.phase += 0.02;
                    section.alpha = Math.sin( section.phase ) * 1;
                    section.alpha = ( section.alpha <= 0 ) ? 0 : section.alpha;
                    section.alpha = ( section.alpha >= 1 ) ? 1 : section.alpha;

                    if( this._options.animateSections )
                    {
                        var mod = ( Math.sin( 1 + section.phase * Math.PI / 2 ) * 0.1 );

                        if( section.dir === "right" )
                        {
                            section.point1.add( mod, 0 );
                            section.point2.add( mod, 0 );
                            section.point3.add( mod, 0 );
                        } else {
                            section.point1.subtract( mod, 0 );
                            section.point2.subtract( mod, 0 );
                            section.point3.subtract( mod, 0 );
                        }
                        section.point1.add( 0, mod );
                        section.point2.add( 0, mod );
                        section.point3.add( 0, mod );
                    }
                }
                else { section.delay -= 0.5; }

                var s = this._options.colorSaturation,
                    l = this._options.colorBrightness,
                    c = "hsla("+ section.color +", "+ s +", "+ l +", "+ section.alpha +" )";

                this._context.save();

                if( this._options.parallaxAmount !== 0 )
                {
                    this._context.translate( 0, this._scroll * this._options.parallaxAmount );
                }
                this._context.beginPath();
                this._context.moveTo( section.point1.x, section.point1.y );
                this._context.lineTo( section.point2.x, section.point2.y );
                this._context.lineTo( section.point3.x, section.point3.y );
                this._context.fillStyle = c;
                this._context.fill();

                if( this._options.strokeSize > 0 )
                {
                    this._context.lineWidth = this._options.strokeSize;
                    this._context.strokeStyle = c;
                    this._context.lineCap = "round";
                    this._context.stroke();
                }
                this._context.restore();
            }
            return false; // not done yet
        },

        // Draw ribbons
        _onDraw: function()
        {
            // cleanup on ribbons list to rtemoved finished ribbons
            for( var i = 0, t = this._ribbons.length; i < t; ++i )
            {
                if( !this._ribbons[ i ] )
                {
                    this._ribbons.splice( i, 1 );
                }
            }
           
            // draw new ribbons 
            this._context.clearRect( 0, 0, this._width, this._height );

             for( var a = 0; a < this._ribbons.length; ++a ) // single ribbon
             {
                 var ribbon = this._ribbons[ a ],
                     numSections = ribbon.length,
                     numDone = 0;

                 for( var b = 0; b < numSections; ++b ) // ribbon section
                 {
                     if( this._drawRibbonSection( ribbon[ b ] ) )
                     {
                         numDone++; // section done
                     }
                 }
                 if( numDone >= numSections ) // ribbon done
                 {
                     this._ribbons[ a ] = null;
                 }
             }
             // maintain optional number of ribbons on canvas
             if( this._ribbons.length < this._options.ribbonCount )
             {
                 this.addRibbon();
             }
            requestAnimationFrame( this._onDraw );
        },

        // Update container size info
        _onResize: function( e )
        {
            var screen   = screenInfo( e );
            this._width  = screen.width;
            this._height = screen.height;

            if( this._canvas )
            {
                this._canvas.width  = this._width;
                this._canvas.height = this._height;
                
               if( this._context )
               {
                  this._context.globalAlpha = this._options.colorAlpha;
               }
            }
        },

        // Update container size info
        _onScroll: function( e )
        {
            var screen   = screenInfo( e );
            this._scroll = screen.scrolly;
        },

    };

    // export
    return Factory;
});


new Ribbons({
  colorSaturation: "60%",
  colorBrightness: "50%",
  colorAlpha: 0.5,
  colorCycleSpeed : 5,
  verticalPosition : "random",
  horizontalSpeed : 200,
  ribbonCount: 3,
  strokeSize: 0,
  parallaxAmount : -0.2,
  animateSections : true,
});


</script>