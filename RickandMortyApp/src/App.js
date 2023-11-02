
import './App.css';
import { Route, Routes } from "react-router-dom"
import { Location } from './pages/Location';
import { Card } from './pages/Characters';  
import { Episodes } from './pages/Episodes';
import { Search } from './pages/Search';
import { FilterGender } from './pages/FilterGender';
import { FilterSpecies } from './pages/FilterBySpecies';
import { FilterStatus } from './pages/FilterByStatus';



function App() {
  return (
    <>

    <Routes>
      
      <Route path='' element = {<Card></Card>}/>
      <Route path='RickandMortyApp' element = {<Card></Card>}/>
      <Route path='/locations' element = {<Location/>}/>
      <Route path='/episodes' element = {<Episodes/>}/>
      <Route path='/search' element = {<Search/>}/>
      <Route path='/gender' element = {<FilterGender/>}/>
      <Route path='/species' element = {<FilterSpecies/>}/>
      <Route path='/status' element = {<FilterStatus/>}/>
    </Routes>

    </>
    
  );
}

export default App;
