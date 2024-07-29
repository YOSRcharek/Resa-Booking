import React from 'react';
import { Container, Divider, Grid, Paper, Typography, Box, Avatar, IconButton, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const guestReviews = [
    {
      id: 1,
      name: "Tonko",
      date: "March 2022",
      rating: 9.2,
      review: "Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores.",
      images: ["image1.jpg", "image2.jpg", "image3.jpg"],
      helpful: 0,
      notHelpful: 0,
    },
    // More reviews here...
  ];
  
export const Reviews = () => {
    return (
<Container maxWidth="lg" style={{ marginTop: '2rem', padding: '0 40px' }}>
<Divider style={{ margin: '1rem 0' }} />
<Grid container spacing={4}>
  <Grid item xs={12} md={3}>
    <Paper elevation={3} style={{ padding: '1.5rem', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h6" gutterBottom>
        Guest reviews
      </Typography>
      <Typography variant="h4" style={{ color: '#3f51b5' }}>
        4.8
      </Typography>
      <Typography variant="body1" gutterBottom>
        Exceptional <br /> 3,014 reviews
      </Typography>
      <Divider style={{ margin: '1rem 0' }} />
      {[
        { label: 'Location', value: 9.4 },
        { label: 'Staff', value: 9.4 },
        { label: 'Cleanliness', value: 9.4 },
        { label: 'Value for money', value: 9.4 },
        { label: 'Comfort', value: 9.4 },
        { label: 'Facilities', value: 9.4 },
        { label: 'Free WiFi', value: 9.4 },
      ].map((item, index) => (
        <Box key={index} mb={2}>
          <Typography variant="body2">{item.label}</Typography>
          <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <Box bgcolor="#f0f0f0" height="10px" borderRadius="5px" position="relative">
                <Box bgcolor="#3f51b5" height="10px" borderRadius="5px" width={`${item.value * 10}%`} />
              </Box>
            </Box>
            <Typography variant="body2" color="textSecondary">{item.value}</Typography>
          </Box>
        </Box>
      ))}
    </Paper>
  </Grid>
  <Grid item xs={12} md={9}>
    {guestReviews.map(review => (
      <Paper key={review.id} elevation={3} style={{ padding: '1.5rem', marginBottom: '1rem', backgroundColor: '#f9f9f9' }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar>{review.name.charAt(0)}</Avatar>
          <Box ml={2}>
            <Typography variant="body2">{review.name}</Typography>
            <Typography variant="body2" color="textSecondary">{review.date}</Typography>
          </Box>
        </Box>
        <Typography variant="h6" color="primary" style={{ marginBottom: '0.5rem' }}>
          {review.rating} Superb
        </Typography>
        <Typography variant="body1" gutterBottom>
          {review.review}
        </Typography>
        <Box display="flex" mt={2} mb={2}>
          {review.images.map((img, index) => (
            <Box key={index} mr={1}>
              <img src={img} alt={`Review ${review.id} - Image ${index}`} style={{ width: '80px', height: '80px', borderRadius: '8px' }} />
            </Box>
          ))}
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
          <Typography variant="body2" style={{ marginRight: '16px' }}>Helpful</Typography>
          <IconButton>
            <ThumbDownIcon />
          </IconButton>
          <Typography variant="body2">Not helpful</Typography>
        </Box>
      </Paper>
    ))}
    <Button variant="outlined" color="primary" fullWidth style={{ marginTop: '1rem' }}>
      Show all 116 reviews
    </Button>
  </Grid>
</Grid>
</Container>
    )}
