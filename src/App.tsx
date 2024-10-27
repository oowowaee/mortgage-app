import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import TranslateIcon from '@mui/icons-material/Translate';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';

import { GraphWrapper } from './GraphWrapper';
import { useTranslation } from 'react-i18next';
import './i18n';

import './App.css';

type supportedLanguage = 'en' | 'es';

const LanguageSelect = () => {
  const { i18n } = useTranslation()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };

  const selectLanguage = (language: supportedLanguage) => {
    i18n.changeLanguage(language);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <TranslateIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => selectLanguage('es')}>ES</MenuItem>
        <MenuItem onClick={() => selectLanguage('en')}>EN</MenuItem>
      </Menu>
    </>
  );
}

function App() {
  const { t } = useTranslation();

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography align="left" sx={{ flexGrow: 1 }}>
            {t('appbar.title')}
          </Typography>
          <LanguageSelect />
        </Toolbar>
      </AppBar>
      <GraphWrapper />
    </>
  )
}

export default App;
