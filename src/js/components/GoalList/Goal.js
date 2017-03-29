import React from "react";

import GoalTitle from "./GoalTitle";


export default class Goal extends React.Component {
  getGoalBoxes(){
    const boxes = [];
    this.props.goalData.wins.forEach( (w,i) => {
        boxes.push(<div key={i} className={w === 1 ? "complete" : "fail"}></div>)
    })
    return boxes;
  }

  getGoalTitle(){
    return this.props.goalData.goal;
  }

  render() {
    return (
      <div className ="row text-left">
        <div className="col-md-12">
          <h3 className="goal-title">{this.getGoalTitle()}</h3>
          {this.getGoalBoxes()}
        </div>
      </div>
    );
  }
}
