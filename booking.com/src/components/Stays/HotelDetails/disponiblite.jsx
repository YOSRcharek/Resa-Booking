import React from 'react';
import {
  Container,
  Box,
  CssBaseline,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TableContainer,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { SearchDeals } from '../SearchDeals/SearchDeals';

export const Disponibilite = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', padding: '0 40px' }}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ backgroundColor: '#f9f9f9', borderRadius: 2 }}>
          <TableContainer component={Paper} sx={{ margin: '0 auto', padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Disponibilité
            </Typography>
            <Typography variant="body2" color="error">
              Veuillez sélectionner des dates pour voir les disponibilités et les tarifs de cet établissement.
            </Typography>
            <Box sx={{ marginBottom: '5rem' }} /> {/* Fixed Div to Box */}
            <SearchDeals suggestions={[]} /> {/* Ensure `suggestions` prop is correctly provided */}
            <Box sx={{ marginBottom: '5rem' }} /> {/* Fixed Div to Box */}
            <Table sx={{ minWidth: 550, marginTop: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Type d'hébergement</TableCell>
                  <TableCell>Nombre de voyageurs</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box>
                      <Typography variant="body1" component="div">
                        <strong>Appartement 2 Chambres</strong>
                      </Typography>
                      <Typography variant="body2">Chambre 1: 1 lit double</Typography>
                      <Typography variant="body2">Chambre 2: 1 lit double</Typography>
                      <Typography variant="body2">Salon: 1 canapé-lit</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">×6</Typography>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      Voir les tarifs
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </LocalizationProvider>
    </Container>
  );
};
