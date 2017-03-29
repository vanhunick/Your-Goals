import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import GoalList from "../components/GoalList";
import PageTitle from "../components/PageTitle"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome, 0 goals are currently tracked come on mate!",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  getData(){
    return  [
      {
        name : "Nicky van Hulst",
        goals : [{goal : "Run every second day", wins : [1,0,0,1,1,1,0]},
                 {goal : "Don't eat junk food on weekdays", wins : [0,1,1,1,0,1,0]},
                 {goal : "Cook dinner every second night", wins : [0,1,0,1,0,1,0]}]
      },
    ];
  }

  render() {
    return (
      <div className="container myContainer text-center">
        <PageTitle title={"Welcome back here are Your tracked Goals you flipper"}/>
      <GoalList data={this.getData()} />
      <Footer />
      </div>
    );
  }
}
