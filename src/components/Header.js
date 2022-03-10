import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Routes, Route } from 'react-router-dom';
import Home from './../pages/Home';
import Design from './../pages/Design';
import Culture from './../pages/Culture';
import Business from './../pages/Business';
import Politics from './../pages/Politics';
import Opinion from './../pages/Opinion';
import Science from './../pages/Science';
import Health from './../pages/Health';
import Style from './../pages/Style';
import Travel from './../pages/Travel';

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/culture" element={<Culture />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/politics" element={<Politics />}></Route>
        <Route path="/opinion" element={<Opinion />}></Route>
        <Route path="/science" element={<Science />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/style" element={<Style />}></Route>
        <Route path="/travel" element={<Travel />}></Route>
      </Routes>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
