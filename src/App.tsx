import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { GraphWrapper } from './GraphWrapper';
import { useTranslation } from 'react-i18next';
import './i18n';

import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>{t('appbar.title')}</Toolbar>
      </AppBar>
      <GraphWrapper />
    </>
  )
}

export default App;
