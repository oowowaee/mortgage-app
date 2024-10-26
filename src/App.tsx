import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import GraphForm from './graph/form';
import Graph from './graph/graph';
import { useTranslation } from 'react-i18next';
import './i18n';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>{t('appbar.title')}</Toolbar>
      </AppBar>
      <GraphForm />
      <Graph />
    </>
  )
}

export default App
