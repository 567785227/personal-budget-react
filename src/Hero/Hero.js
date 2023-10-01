import React from 'react';


function Hero() {
  return (

    <div className="hero">
        {/* <!-- This is Semantic HTML Change --> */}
        <main> 
            <h1>Personal Budget</h1>
            <h2>A personal-budget management app</h2>
            {/* <!-- This is an A11y Change --> */}
                <h2 >Una aplicación de gestión de presupuesto personal</h2>
        </main>
    </div>
  
    
  );
}

export default Hero;
