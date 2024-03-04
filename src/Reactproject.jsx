import React from 'react'

function Reactproject() 
{
  return (
    <div>
     <nav>
    <ul>
        <li>
        <a href=""  class="logo">
                <img src="./images/logo.png karma.webp"></img>
         </a>
               
        </li>
          <li>
            <a href="">Home</a>
        </li>
        <li>
            <a href="">Shop</a>
        </li>
        <li>
            <a href="">Blog</a>
        </li>
        <li>
            <a href="">Pages</a>
        </li>
        <li>
            <a href="">Contact</a>
        </li>
       
        <li>
        <div class="bag">
        <FontAwesomeIcon icon="fa-sharp fa-thin fa-bag-shopping" />
        </div>
        </li>
         
         <li>
         <div class="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
         </div>
         </li>
       

    </ul>
</nav>  

    </div>
  )
}

export default Reactproject
