import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap-grid.min.css';
import './css/bootstrap.min.css';
//import './js/jquery-3.2.1.js';
//import './js/bootstrap.min.js';
//import './js/materialize.js';
import './index.css';

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
        "event_id":2,
        "title": "event2",
        "description": "this is the second event",
        "organisers_name": 1,
        "date_start":"2018-4-20",
        "date_end":"2018-4-21",
        "time_start": "03:00:00",
        "time_end": "04:00:00",
        "date_created":19-4-2018
    },
    {
        "event_id":3,
        "title": "event3",
        "description": "this is the first event",
        "organisers_name": 1,
        "date_start":"2018-4-20",
        "date_end":"2018-4-21",
        "time_start": "03:00:00",
        "time_end": "04:00:00",
        "date_created":19-4-2018
    },
];


//Changing the search bar into an image or icon might not work well
class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="search-container">
                    <form action="">
                        <input className="searchBar" type="text" placeholder="Search. . ." name="search" />
                        <button className="searchButton" type="submit">&nbsp;&nbsp;&nbsp;</button>
                    </form>
                </div>
                NDev
            </div>
        );
    }
}

class TabButton extends React.Component{
    render(){
        return(
            <div>
                hi
            </div>
        )
    }
}

class TabContent extends React.Component{
    render(){
        return(
            <div>
                hi
            </div>
        );
    }
}

class RightColumn extends React.Component {
    render() {
        return (
            <aside className=""> TEST RIGHT</aside>
        )
    }
}

class LeftColumn extends React.Component {
    render(){
        return(
            <aside>
                Test LEFT
            </aside>
        );
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <RightColumn />
                <LeftColumn />
            </div>
        );
    }
}

ReactDOM.render(
<App />, 
document.getElementById('root')
);