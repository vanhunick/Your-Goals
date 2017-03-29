import React from "react";

import Goal from "./GoalList/Goal"

export default class GoalList extends React.Component {
  getGoalComponenets() {
    var goalList = [];
    this.props.data[0].goals.forEach( (g,i) =>{
      goalList.push(<Goal key={i} goalData={g} />);
    });
    return goalList;
  }

  render() {
    return (
      <div>
        <h2>Goal List</h2>
        {this.getGoalComponenets()}
      </div>
    );
  }
}
