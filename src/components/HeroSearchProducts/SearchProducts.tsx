import React from 'react';
import { arrayIndexingWithLength } from '../../utils/arrayIndexingWithLength';
import ProductShowcaseGrid from '../ProductShowcaseGrid';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './SearchProducts.styles';
import { CssBaseline, Hidden, IconButton, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import SideBar from '../SideBar';
import SearchBar from '../SearchBar';
import NavBar from '../NavBar';
import { spacing } from '@material-ui/system';
import useTexts from '../../hooks/useTexts';

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }
const SearchProducts: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>

        <nav className={classes.drawer} aria-label="filters">
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <SideBar />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <SideBar />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container spacing={3}>
            <SearchBar />
            {arrayIndexingWithLength(5).map((v) => (
              <Grid item xs={12} key={v}>
                <ProductShowcaseGrid />
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    </>
  );
};

export default SearchProducts;
