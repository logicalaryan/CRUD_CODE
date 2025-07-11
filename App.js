
import Navbar from './components/Navbar'; //use ../ to use a file outside the source file 
import Alluser from './components/Alluser';
import AdduserComponent from './components/Adduser';
import Crudapp from './components/Crudapp';
import Edituser from './components/Edituser';

import {BrowserRouter,Routes,Route}from 'react-router-dom';

function App()
{
return(
<BrowserRouter>
          <Navbar />
              <Routes>
                 <Route path="/"element={<Crudapp/>}/>
                 <Route path="/add"element={<AdduserComponent/>}/>
                 <Route path='/all'element={<Alluser/>}/>
                 <Route path='/edit/:id'element={<Edituser/>}/>
                  </Routes>
</BrowserRouter>
);

}
export default App;