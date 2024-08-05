import { Link, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { MenuLinkType } from 'layouts/main-layout/sidebar/MenuLinks'; // Import MenuLinkType

interface MenuListItemProps {
  menuItem: MenuLinkType;
  isActive: boolean;
  onMenuItemClick: (title: string) => void;
  onDrawerClose?: () => void; // Ajoutez cette ligne
}

const MenuListItem = ({ menuItem, isActive, onMenuItemClick, onDrawerClose }: MenuListItemProps) => {
  const { icon: Icon } = menuItem;
  const itemIcon = Icon ? (
    <Icon
     sx={{ width: { xs: 20, xl: 24 },
      height: { xs: 20, xl: 24 } ,
      color: isActive ? 'primary.main' : 'inherit'   }}
      />
  ) : null;
  const handleClick = () => {
    onMenuItemClick(menuItem.title);
    if (onDrawerClose) {
      onDrawerClose(); // Appeler onDrawerClose si elle est définie
    }
  };

  return (
    <ListItem
      key={menuItem.id}
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          bgcolor: isActive ? 'primary.main' : 'transparent',
          top: 0,
          bottom: 0,
          left: 0,
          width: 6,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          transition: 'background-color 0.5s ease',
          color: isActive ? 'primary.main' : menuItem.available ? 'grey[700]' : 'action.disabled',
         
        },
      }}
    >
      <Link
        href={menuItem.link}
        onClick={handleClick}
        sx={{
          py: 1.5,
          px: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 3.125,
          flex: 1,
          borderRadius: 2,
          color: isActive ? 'primary.main' : menuItem.available ? 'grey[700]' : 'action.disabled',
          transition: 'color 0.35s ease',
          '&:hover, &:focus': {
            backgroundColor: 'neutral.light',
            boxShadow: 'shadows[10]',
            color: !menuItem.available ? 'action.disabled' : 'primary.main',
            '& .MuiSvgIcon-root': {
              color: !menuItem.available ? 'action.disabled' : 'primary.main',
            },
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 'auto',
            color: isActive ? 'primary.main' : menuItem.available ? 'grey[700]' : 'action.disabled',
         
          }}
        >
          {itemIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              sx={{
                fontSize: { xs: 'body1.fontSize', xl: 'h6.fontSize' },
                fontWeight: 500,
                textTransform: 'capitalize',
                color: isActive ? 'primary.main' : menuItem.available ? 'grey[700]' : 'action.disabled',
         
              }}
            >
              {menuItem.title}
            </Typography>
          }
        />
      </Link>
    </ListItem>
  );
};

export default MenuListItem;
