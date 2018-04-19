import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap-grid.min.css';
import './css/bootstrap.min.css';
import './js/bootstrap.min.js';
import './jquery-3.2.1.js';
import './materialize.js';
import './index.css';
import App from './App';

[
    {
    "event_id":1,
    "title": "event1",
    "description": "this is the first event",
    "organisers_name": "Arvy",
    "date_start":20-4-2018,
    "date_end":20-4-2018,
    "time_start": "3:00PM",
    "time_end": "4:00PM",
    "date_created":19-4-2018
    },
    {
    "event_id":2,
    "title": "event2",
    "description": "this is the second event",
    "organisers_name": "Arvy",
    "date_start":22-4-2018,
    "date_end":21-4-2018,
    "time_start": "3:00PM",
    "time_end": "4:00PM",
    "date_created":19-4-2018
    },
    {
    "event_id":3,
    "title": "event3",
    "description": "this is the first event",
    "organisers_name": "Arvy",
    "date_start":20-4-2018,
    "date_end":21-4-2018,
    "time_start": "3:00PM",
    "time_end": "4:00PM",
    "date_created":19-4-2018
    },
]



//Changing the search bar into an image or icon might not work well
class Header extends React.Component{
    render(){
        return(
            <div class = "header">
                <div class = "search-container">
                    <form action="">
                        <input class= "searchBar" classtype="text" placeholder="Search. . ." name="search" />
                        <button class= "searchButton" type="submit">&nbsp;&nbsp;&nbsp;</button>
                    </form>
                </div>
                NDev
            </div>
        );
    }
}

class TabContent extends React.Component{
    render(){
        return(
            <div>
                
            </div>
        );
    }
}

class Tabs extends React.Component{
    renderTabButton(i){
        return <TabButton />
    }

    renderTabContent(){
        return <TabContent />
    }
    render(){
        return(
          <div>
          <div>
            {this.renderTabButton("Current Events")}
            {this.renderTabButton("Past Events")}
          </div>
          <div class= "tab">
            CurrentEvent
          </div>
          </div>  
        );
    }
}

class SideNav extends React.Component{
    render(){
        return(
            <aside class = "sideNav">
                <Tabs />
            </aside>
        );
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <SideNav />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
