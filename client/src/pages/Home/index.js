
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from '../../layout/Header';
import all_cats from './all_cats.png'
import all_dogs from './all_dogs.png'





function Home() {

return (
<>


<h1 className="home-title"> Adopter </h1>


<div className="btn-container">

     <ul>

        <Link  to='/cats'>
          <li className="list-btn"> <img  src={all_cats} alt="cat" className="cat-img" /> </li>
        </Link>
                    
        <Link  to='/dogs'>
          <li className="list-btn"> <img  src={all_dogs} alt="dogs" className="dog-img" /></li>
        </Link>

        <Link  to='/quiz'>
          <li className="list-btn"> Compatability Quiz</li>
        </Link>  

      </ul>

 </div>
  
 <div className="footer">
        <a>Shelter Login</a>
        <a>Shelter Register</a>
  </div>
 </>
                
  );
}

export default Home;
