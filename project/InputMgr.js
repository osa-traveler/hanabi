


class InputMgr 
{
    constructor() 
    {
        this.OldPressed = { "right":false, "left":false, } ;
        this.Pressed = {  "right":false, "left":false, } ;
    }
  
    Init()
    {
        sys.print( "[InputMgr::Init]" );
    }
   
    Reset()
    {
        sys.print( "[InputMgr::Reset]" );
        
        for( var key in this.OldPressed )
        {
            this.OldPressed[ key ] = false ;
        }
        for( var key in this.Pressed )
        {
            this.Pressed[ key ]  = false ;
        }

        //mMousePos.set( mouseX, mouseY ) ;
    }
    
    Calc()
    {
        for( var key in this.OldPressed )
        {
            this.OldPressed[ key ] = this.Pressed[ key ] ;
            //sys.print(key);//right, left
        }




      
        // mouse
        //mbPressed[ Key.cMouse.ordinal()] = mousePressed ;
      
        //mMousePos.set( mouseX, mouseY ) ;
      
      
    }

    keyPressed()
    {
        switch( sys.key )
        {
        case '%' : { this.Pressed[ 'left' ] = true ;  break ; } 
        case '\'': { this.Pressed[ 'right' ] = true ; break ; } 
        case 'A': { this.Pressed[ 'a' ] = true ; break ; } 
        }


    }

    keyReleased()
    {
        switch( sys.key )
        {
        case '%' : { this.Pressed[ 'left' ] = false ; break ; } 
        case '\'': { this.Pressed[ 'right' ] = false ; break ; } 
        case 'A': { this.Pressed[ 'a' ] = false ; break ; } 
        

        }

    }
    

    isHold( k )
    {
        return this.Pressed[ k ] ;
    }
    isTrig( k )
    {
        return this.Pressed[ k ] && !this.OldPressed[ k ] ;
    }



  }













// end of file
