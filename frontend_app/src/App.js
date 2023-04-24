import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/accueil/Accueil';
import Client from './pages/Client/Client.js';
import Prospect from './pages/prospect/Prospect';

import Formateur from './pages/Formateur/Formateur.js';
import Formation from './pages/Formations/Formations';
import Financeur from './pages/Financeur/Financeur';
  
import Process from './pages/process/Process';
import Utilisateur from './pages/Utilisateur/Utilisateur'
import AuthPage from "./pages/authentification/AuthPage";
import Location from './pages/location/Location'
import Test from './pages/Test'
import Bilan from './pages/Bilan/Bilan'

import Paramettre from './pages/Paramettre/Paramettre'
const App = () => {
  return (
    <BrowserRouter>
  

        <Routes>
        <Route path="/" element={<AuthPage />} exact />
        <Route path="/test" element={<Test />}  />
        <Route path="/Bilan" element={<Bilan />}  />

        <Route path="/process/:id" element={<Process />}  />
        <Route path="/financeur" element={<Financeur />}  />
        <Route path="/location" element={<Location />}  />
        <Route path="/prospect" element={<Prospect />} />
        <Route path="/parametre" element={<Paramettre />} />

          <Route path="/accueil" element={<Accueil />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Formateur" element={<Formateur />} />
          <Route path="/utilisateur" element={<Utilisateur />} />

          <Route path="/formation" element={<Formation />} />

         
        </Routes>
  
    </BrowserRouter>
  );
};

export default App;