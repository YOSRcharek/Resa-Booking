import './home.css';


function FirstPage() {
    return (
            <div className="main">  
            
        <div>
        <div className="travel-planner">
      <h1>Destinations en vogue</h1>
      <p>Options les plus populaires parmi les voyageurs habitant en Tunisie</p>         
                <div className="Cities">

                    <div className="manchester">
                        <img src='/villes/paris.jpg' className='citesImage' alt="avatar2" />
                        <div>
                        <span className="headmanchester">
                        Paris <img src='/drapeau/frDrap.png' alt="Drapeau de Paris" className="flag-icon" />
                       
                    </span> <p className="childmanchester">
                        276 properties   </p> 
                    </div>
                    
                    </div>
                    
                    <div className="manchester">
                        
                        <img src='/villes/test.png' alt="avatar2" className='citesImage'/>
                        <span className="headmanchester">Istanbul <img src='/drapeau/turkDrap.png' alt="Drapeau de Turquie" className="flag-icon" />
                        </span>
                        <p className="childmanchester">
                            276 properties   </p> 
                        
                    </div>

                </div>
<br></br>
<br></br>
                <div className="citythree">
                    <div className="manchester">
                        <img src='/villes/zarzis2.png' alt="avatar2" className='threecitesImage' />
                        <span className="headmanchester">Zarzis <img src='/drapeau/tunisDrap.png' alt="Drapeau de Turquie" className="flag-icon" /></span>
                       </div>
                    <div className="manchester">
                        <img src='/villes/Hammamet2.png' alt="avatar2" className='threecitesImage'/>
                        <span className="headmanchester">Hammamet <img src='/drapeau/tunisDrap.png' alt="Drapeau de Turquie" className="flag-icon" /></span>
                      </div>
                    <div className="manchester">
                        <img src='/villes/djerba2.png' alt="avatar2" className='threecitesImage'/>
                        <span className="headmanchester">Djerba <img src='/drapeau/tunisDrap.png' alt="Drapeau de Turquie" className="flag-icon" /></span>
                    </div>
                </div>


            </div>
</div>
        </div>
    )

}



export default FirstPage
