import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import PersistentDrawer from './PersistentDrawerLeft';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#8eacbb',
            main: '#607d8b',
            dark: '#34515e',
            contrastText: '#000',
        },
    },
});

let data = [
    {
        "event_id":1,
        "title": "event1",
        "description": "this is the first event",
        "organisers_name": 1,
        "date_start":"2018-04-20",
        "date_end":"2018-04-20",
        "time_end": "04:00:00",
        "time_start": "03:00:00",
        "date_created":"2018-04-19"
    },
    {
        "event_id": 2,
        "title": "event2",
        "description": "this is the second event",
        "organisers_name": 1,
        "date_start":"2018-4-20",
        "date_end":"2018-4-21",
        "time_start": "03:00:00",
        "time_end": "04:00:00",
        "date_created": "2018-04-19"
    },
    {
        "event_id": 3,
        "title": "event3",
        "description": "this is the first event",
        "organisers_name": 1,
        "date_start":"2018-4-20",
        "date_end":"2018-4-21",
        "time_start": "03:00:00",
        "time_end": "04:00:00",
        "date_created": "2018-04-19"
    },
];

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <PersistentDrawer />
        </MuiThemeProvider>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);