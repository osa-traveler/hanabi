




///////////////////////////////////
///
//////////////////////////////////


class ObjParticle extends ObjBase 
{
    constructor( color, pos, vel ) 
    {
        super() ;

        this.mColor = color ;
        this.mPos   = pos ;
        this.mSpeed = vel ;
        this.mOldSpeed =  this.mSpeed ;

        this.mScale = new SpringF32( 1.0 ) ;
        this.mnFadeCounter = -1 ;
        this.mnCounter = 0 ;

    }
  
    Init()
    {
    }
   
    Reset()
    {
        this.mnCounter = 0 ;
    }
    
    Calc()
    {
        // scene
        //SceneParticle sp = (SceneParticle)app.mCurrentScene ;
      
        // grav
        this.mOldSpeed.set( this.mSpeed ) ;
        if( -1 == this.mnFadeCounter )
        {
            //mSpeed.add( sp.calcGravity( mPos ) ) ;    
        }
    
        this.mPos.x += this.mSpeed.x ;
        this.mPos.y += this.mSpeed.y ;
    
        if( 600 == this.mnCounter /*|| ( this.mnCounter == 15 && sp.mGGList.size()==0 ) */)
        {
            this.mnFadeCounter = 60 ;    
        }
    
        if( this.mnCounter == 60 /*&& sp.mGGList.size()==0 */)
        {
            this.mnFadeCounter = 60 ;
        }
    
        if( this.mnFadeCounter > -1 )
        {
            --this.mnFadeCounter  ;
            if( 0 == this.mnFadeCounter )
            {
                this.mbShouldRemove = true ;
           }
        }

        this.mScale.UpdateToTarget( 1.0, 0.05, 0.85 ) ;

        this.mSpeed.x *= 0.975 ;
        this.mSpeed.y *= 0.975 ;

        // color
        {
            var fSpeed = this.mSpeed.mag() ;
            if( fSpeed > 10 ) { fSpeed = 10 ; }
            var alpha = sys.map( fSpeed, 0, 10, 255, 64) ;
            this.mColor = sys.color( sys.red( this.mColor), sys.green( this.mColor), sys.blue( this.mColor), alpha ) ;//( this.mColor & 0x00ffffff ) | ( alpha << 24 ) ;
        }

        //if( sp.checkCollision( this ) )
        //{
        //    this.mbShouldRemove = true ;
        //}

        ++this.mnCounter  ;
    
    }

    Draw()
    {
        sys.strokeWeight( sys.sqrt( this.mSpeed.mag() ) / 0.5 ) ;
        sys.stroke(  this.mColor ) ;
        var fLength = 3 ;
        sys.line
        ( 
            this.mPos.x, this.mPos.y, 
            this.mPos.x + this.mSpeed.x * fLength, 
            this.mPos.y + this.mSpeed.y * fLength ) 
    }



    


}







///////////////////////////////////
///
//////////////////////////////////


class SceneParticle extends SceneBase
{

    constructor() 
    {
        super() ;
    }
  
    Init()
    {
        sys.print( "[TestScene::Init]" );

        app.ObjMgr.RequestAdd( new TestObj( sys.random(50,600), sys.random(0,400 )) ) ;

    }
    
    Reset()
    {
        sys.print( "[TestScene::Reset]" );

    }
    
    Calc()
    {
        if( app.InputMgr.isTrig('left') )
        {
            var c = sys.color( sys.int( sys.random(255) ), sys.int( sys.random(255) ), sys.int( sys.random(255) ),255 ) ;
            var pos   = sys.createVector( sys.random(300),sys.random(300) ,sys.random(300)  ) ;
            var vel   = sys.createVector( sys.random(5),sys.random(5) ,sys.random(5)  ) ;
            app.ObjMgr.RequestAdd( new ObjParticle( c, pos, vel  ) ) ;
         
        }



    }

    Draw()
    {

    }

}

// end of file
