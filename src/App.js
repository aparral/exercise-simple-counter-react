import './App.css';


function Simplecounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        
      </div>
      <div className="clock_four">{props.digitfour % 10}</div>
      <div className="clock_three">{props.digitthree % 10}</div>
      <div className="clock_two">{props.digittwo % 10}</div>
      <div className="clock_one">{props.digitone % 10}</div>
    </div>


  );
}

export default Simplecounter;
