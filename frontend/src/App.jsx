import React, { useState } from 'react';
import NewsTabs from './components/NewsTabs';
import { Container, Grid, Card, CardContent, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateOption, setDateOption] = useState('today');

  // Function to handle date selection from dropdown
  const handleDateOptionChange = (event) => {
    setDateOption(event.target.value);
    // Logic for updating selectedDate based on dropdown selection
    switch (event.target.value) {
      case 'today':
        setSelectedDate(new Date());
        break;
      case 'tomorrow':
        setSelectedDate(new Date(Date.now() + 24 * 60 * 60 * 1000));
        break;
      case 'yesterday':
        setSelectedDate(new Date(Date.now() - 24 * 60 * 60 * 1000));
        break;
      default:
        break;
    }
  };

  // Function to handle manual date change from DatePicker
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDateOption('');
  };

  return (
    <Container maxWidth="md" className="app-container">
      <Typography variant="h2" align="center" gutterBottom>
        News Dashboard
      </Typography>

      <Grid container spacing={3} className="controls-container" justifyContent="center">
        {/* Date Selector */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="date-option-label">Select Date</InputLabel>
            <Select
              labelId="date-option-label"
              value={dateOption}
              onChange={handleDateOptionChange}
              fullWidth
            >
              <MenuItem value="today">Today</MenuItem>
              <MenuItem value="yesterday">Yesterday</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Calendar for manual date selection */}
        <Grid item xs={12} md={6}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="date-picker"
            showPopperArrow={false}
          />
        </Grid>
      </Grid>

      {/* News cards */}
      <Grid container spacing={3} className="news-cards-container">
        {/* Sample News Card */}
        <Grid item xs={12}>
          <Card className="news-card">
            <CardContent>
              <Typography variant="h5">News Title 1</Typography>
              <Typography variant="body2">
                This is a summary of the news article. Click here to read more...
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Repeat similar structure for multiple news cards */}
        <Grid item xs={12}>
          <Card className="news-card">
            <CardContent>
              <Typography variant="h5">News Title 2</Typography>
              <Typography variant="body2">
                Another news article summary goes here...
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* More news cards */}
        <Grid item xs={12}>
          <Card className="news-card">
            <CardContent>
              <Typography variant="h5">News Title 3</Typography>
              <Typography variant="body2">
                A brief summary of the news article will be displayed here...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
