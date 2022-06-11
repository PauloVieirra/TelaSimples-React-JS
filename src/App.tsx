import './App.css'
import Logonike from './images/nike.png';
import Lockd from './images/891399.png';
import Search from './images/search.webp';
import Menut from './images/menu.png';
import Facebook from './images/face.png';
import Twintte from './images/twitter.png';
import Instag from './images/Instagram.png';



function App() {
  return (
    <div className="App">

      <div className='App-header'>
        <div className='headerleft'>
             <img className='logo' src={Logonike} alt="" />
        </div>
        <div className='headerright'>
              <div className='m1'>
                <div className='m1a'>Inicio</div>
                <div className='m1a'>Cadastro</div>
                <div className='m1a'>Sobre</div>
              </div>
              <div className='m2'>
               <img className='lokeded' src={Lockd} alt="" />  
               <img className='searchin' src={Search} alt="" /> 
              </div>
              <div className='m3'>
              <img className='mennu' src={Menut} alt="" /> 
              </div>
        </div>
      </div>
          
          <div className='container'>

            <div className='banner'>
              <div className='tb'>
               
              </div>
              <div className='tbx'>
              
              </div>
            </div>
            
             <div className='columa'>
             </div>
             
           <div className='columb'>
              </div>

              <div className='columc'>
              </div>

              <div className='columd'>
                <div className='icons'>
                <img className='face' src={Facebook} alt="" /> 
                </div>
                <div className='icons'>
                <img className='twin' src={Twintte} alt="" /> 
                </div>
                <div className='icons'>
                <img className='insta' src={Instag} alt="" /> 
                </div>
              </div>
    
           </div>
     </div>

     
     
  )
}

export default App
