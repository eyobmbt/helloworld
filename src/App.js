import logo from './logo.svg';

import { Navbar, NavbarBrand } from 'reactstrap';
import Menue from './component/menuComponent';


function App() {
  return (
    <div>
     <Navbar dark color="primary">
       <div className="container">
         <NavbarBrand href="/">
           Ristoranate Conf Fusion.
         </NavbarBrand>
       </div>
     </Navbar>
     <Menue /> 
    </div>
  );
}

export default App;
