import React from 'react';
import Paper from 'material-ui/Paper';


const containerStyle =
{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    height : 100,
    padding : 15,
    margin : 20
}

const timeStyle =
{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    flexBasis:100
}

const goalStyle =
{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flexStart',
    flexGrow: 2
}

const textStyle = 
{
    margin:5
}

class CommitCard extends React.Component {

    constructor(props) {
        super();
        //EthereumBridge.startWatch();

        var secondsLeft = props.endTimestamp - (Date.now()/1000);
        var minutesLeft = secondsLeft/60;
        var hoursLeft = minutesLeft/60;
        var daysLeft = hoursLeft/24;

        var timeScale = "days";
        var timeLeft = daysLeft;

        if(daysLeft > 1)
        {
            timeScale = "days";
            timeLeft = Math.round(daysLeft);
        }
        else if( hoursLeft > 1)
        {
            timeScale ="hours";
            timeLeft = Math.round(hoursLeft);
        }
        else if( minutesLeft > 1)
        {
            timeScale = "minutes";
            timeLeft = Math.round(minutesLeft);
        }

        this.state = {
            "timeScale": timeScale,
            "timeLeft": timeLeft 
        };
    }

    onNewCommit = () => {

        //this.props.onNewCommit();
    }

  
  render() {

    return (
        <Paper style={containerStyle} zDepth={1} >

            <div style = {timeStyle}>

                <div>
                    <h1 style={textStyle}>
                        {this.state.timeLeft}
                    </h1>
                </div>
                <div>
                    <h4 style={textStyle}>
                        {this.state.timeScale}
                    </h4>
                </div>

            </div>


            <div style = {goalStyle}>
                <p style={textStyle}>
                    to 
                </p>

                <h3 style={textStyle}>
                    {this.props.goal}
                </h3>
            </div>

        </Paper>
    );
  }
}

export default CommitCard;