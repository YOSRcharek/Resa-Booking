import { useState } from 'react';
import { Drawer, List, MenuItem, Toolbar } from '@mui/material';
import Logo from 'components/common/Logo';
import { menuLinks } from 'layouts/main-layout/sidebar/MenuLinks';
import MenuListItem from 'layouts/main-layout/sidebar/MenuListItem';
import SimpleBar from 'simplebar-react';
import { useLocation } from 'react-router-dom';

interface SidebarProps {
  drawerWidth: {
    lg: number;
    md: number;
    sm: number;
  };
}

const Sidebar = ({ drawerWidth }: SidebarProps) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(
    menuLinks.find((item) => item.link === location.pathname)?.title || ''
   
  );

  const handleMenuItemClick = (title: string) => {
    setActiveItem(title);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: {
            xs: drawerWidth.sm,
            lg: drawerWidth.md,
            xl: drawerWidth.lg,
          },
        },
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        gap: 2,
        py: 3.5,
        overflow: 'hidden',
        width: {
          xs: drawerWidth.sm,
          lg: drawerWidth.md,
          xl: drawerWidth.lg,
        },
      }}
    >
      <Toolbar sx={{ gap: 1, minHeight: 100, cursor: 'pointer' }}>
        <Logo />
      </Toolbar>

      <SimpleBar style={{ maxHeight: 'calc(100vh - 100px)' }}>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {menuLinks.map((menu) => (
            <MenuListItem
              key={menu.id}
              menuItem={menu}
              isActive={menu.title === activeItem}
              onMenuItemClick={handleMenuItemClick}
            />
          ))}
        </List>
      </SimpleBar>
    </Drawer>
  );
};

export default Sidebar;
