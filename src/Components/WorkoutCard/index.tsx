import * as React from "react";
import Icon from "../Icon";
import "./WorkoutCard.scss";
import WorkoutChart from "../../Assets/WorkoutChart.svg";

interface WorkoutCardProps {
  zonetype: string;
  title: string;
  hour: string;
  min: string;
  sec: string;
  tss: number;
  int: number;
  cal: number;
}

const WorkoutCard = (props: WorkoutCardProps) => {
  return (
    <div className="WorkoutCard">
      <div className="DataVis">
        <img src={WorkoutChart} alt="placeholder WorkoutChart" />
      </div>
      <div className="DataDisplay">
        <div className="DataDisplay-Info">
          <span className="DataDisplay-Info--ZoneType">{props.zonetype}</span>
          <div className="DataDisplay-Info--Title">
            <span>{props.title}</span>
            <Icon name="star" className="Favorite" />
          </div>
        </div>
        <div className="DataDisplay-Data">
          <div className="DataDisplay-Data-Section Duration">
            <span>
              {props.hour}:{props.min}:<span className="sec">{props.sec}</span>
            </span>
            <p className="DataDisplay-Data-Section--Title">Duration</p>
          </div>
          <div className="DataDisplay-Data-Section TSS">
            <span>{props.tss}</span>
            <p className="DataDisplay-Data-Section--Title">TSS</p>
          </div>
          <div className="DataDisplay-Data-Section Int">
            <span>
              {props.int}%<Icon name="trip_origin" className="IntIcon" />
            </span>
            <p className="DataDisplay-Data-Section--Title">INT</p>
          </div>
          <div className="DataDisplay-Data-Section Cal">
            <span>{props.cal}</span>
            <p className="DataDisplay-Data-Section--Title">KJ(Cal)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
