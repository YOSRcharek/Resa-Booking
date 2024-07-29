
import React from 'react';
import { Container, Divider, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import PartyModeIcon from '@mui/icons-material/PartyMode';
import PetsIcon from '@mui/icons-material/Pets';
const rules = [
  {
    icon: <EventAvailableIcon />,
    title: "Arrivée",
    description: "De 15h00 à 22h00\nVous devrez indiquer à l'avance votre heure d'arrivée à l'établissement."
  },
  {
    icon: <EventBusyIcon />,
    title: "Départ",
    description: "De 8h00 à 11h00"
  },
  {
    icon: <CheckCircleOutlineIcon />,
    title: "Annulation / Prépaiement",
    description: "Les conditions d'annulation et de prépaiement varient en fonction du type d'appartement. Veuillez saisir les dates de votre séjour et consulter les conditions de la chambre choisie."
  },
  {
    icon: <ChildFriendlyIcon />,
    title: "Enfants et lits",
    description: (
      <>
        <Typography>Conditions relatives aux enfants</Typography>
        <Typography variant="body2">Tous les enfants sont les bienvenus.</Typography>
        <Typography variant="body2">Pour voir les tarifs et les informations associés à la taille de votre groupe, veuillez ajouter à votre recherche le nombre d'enfants avec qui vous voyagez ainsi que leur âge.</Typography>
        <Box mt={2} p={2} bgcolor="#f7f7f7">
          <Typography variant="body2"><strong>Conditions relatives aux lits bébé et aux lits d'appoint</strong></Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography>0 - 2 ans</Typography>
            <Typography>Lit bébé sur demande</Typography>
            <Typography>Gratuit</Typography>
          </Box>
          <Typography variant="body2">Les suppléments ne sont pas automatiquement calculés dans le montant total de la réservation sur le site et doivent être réglés séparément directement auprès de l'établissement.</Typography>
          <Typography variant="body2">1 lit bébé disponible sur demande</Typography>
          <Typography variant="body2">Tous les lits bébé et lits d'appoint sont soumis à disponibilité.</Typography>
        </Box>
      </>
    )
  },
  {
    icon: <CheckCircleOutlineIcon />,
    title: "Aucune restriction d'âge",
    description: "Aucune restriction relative à l'âge ne s'applique pour l'enregistrement."
  },
  {
    icon: <SmokingRoomsIcon />,
    title: "Fumeurs/Non-fumeurs",
    description: "Cet hébergement est non-fumeurs."
  },
  {
    icon: <PartyModeIcon />,
    title: "Fêtes",
    description: "Les fêtes/événements ne sont pas autorisés."
  },
  {
    icon: <PetsIcon />,
    title: "Animaux domestiques",
    description: "Les animaux de compagnie ne sont pas admis au sein de l'établissement."
  }
];
export const Rules = () => {

    return (
<Container maxWidth="lg" style={{ marginTop: '2rem', padding: '0 40px' }}>
<Divider style={{ margin: '1rem 0' }} />
<Box sx={{ maxWidth: 1000, margin: '2px auto', padding: 2 }}>
 <Typography variant="h4" gutterBottom>
   Règles de la maison
 </Typography>
 <Typography variant="body2" color="textSecondary" gutterBottom>
  House</Typography>
 <List>
   {rules.map((rule, index) => (
     <Box key={index}>
       <ListItem alignItems="flex-start">
         <ListItemIcon>
           {rule.icon}
         </ListItemIcon>
         <ListItemText
           primary={rule.title}
           secondary={typeof rule.description === 'string' ? rule.description.split('\n').map((line, i) => (
             <Typography key={i} variant="body2" color="textSecondary">
               {line}
             </Typography>
           )) : rule.description}
         />
       </ListItem>
       {index < rules.length - 1 && <Divider />}
     </Box>
   ))}
 </List>
</Box>
</Container>
    )}