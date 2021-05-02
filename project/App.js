

class App
{
    constructor()
    {
        sys.print( '[App::constructor]' ) ;

        this.mBackground = sys.color( 128, 128, 128 , 255 ) ;
        this.InputMgr = new InputMgr() ;
        this.CurrentScene = new TestScene() ;
        this.ObjMgr = new ObjMgr() ;
        


    }

    Init()
    {
        sys.print( '[App::Init]' ) ;

        this.InputMgr.Init() ;
        this.CurrentScene.Init() ;
        this.ObjMgr.Init() ;

    }

    Reset()
    {
        sys.print( '[App::Reset]' ) ;

        this.InputMgr.Reset() ;
        this.CurrentScene.Reset() ;
        this.ObjMgr.Reset() ;
    }

    Calc()
    {
        
        this.CurrentScene.Calc() ;

        this.ObjMgr.Calc() ;

        this.InputMgr.Calc() ;
    }

    Draw()
    {
        sys.background( this.mBackground ) ;
 
        this.ObjMgr.Draw() ;
        
        this.CurrentScene.Draw() ;
      
    }


}






// end of file
