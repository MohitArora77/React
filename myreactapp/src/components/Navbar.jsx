import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-3 shadow-md">
      <h1 className="text-2xl font-extrabold">MyApp</h1>
      <aside className="flex gap-6 text-md font-semibold">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/learn">Learn</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <Link to="/references">References</Link>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;



// a problem Might Occur that we not able to render the Navbar component 























// const Navbar=()=>{
//     return(
//         <nav>
//             <div>LOGO</div>
//             <ul>
//                 <li>Home</li>
//                 <li>Services</li>
//                 <li>Contacts</li>
//                 <li>Login</li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar