import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const containerStyle =
{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    height : 100,
    padding : 15,
    marginTop : 10,
    margnBottom : 30
}

const timeStyle =
{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    flexBasis:120,
    flexGrow: 1
}

const goalStyle =
{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flexStart',
    flexGrow: 2
}

const actionButtonStyle = 
{
    flexBasis:120,
    flexGrow: 1
}

const textStyle = 
{
    margin:5
}



class CommitCard extends React.Component {

    constructor(props) {
        super();
        //EthereumBridge.startWatch();
        var timeUp = false;
        var secondsLeft = props.endTimestamp - (Date.now()/1000);

        if (secondsLeft < 0)
        {
            timeUp = true;
            secondsLeft = 0-secondsLeft;
        }

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

        if(timeUp===true && props.state=== "ongoing")
        {
            timeLeft = "Time \nOut!"
            timeScale = "";
        }

        this.state = {
            "timeScale": timeScale,
            "timeLeft": timeLeft,
            "timeUp": timeUp,
        };
    }

    onResolve = () => {

        //this.props.onNewCommit();
    }

  
  render() {

    var actionButton = null;

    if(this.state.timeUp)
    {
        actionButton = <RaisedButton
          label = "Resolve"
          primary = {true}
          onTouchTap = {this.onResolve}
          disabled = {false}
        /> 
    }
        

    return (
        <Paper style={containerStyle} zDepth={1} >

            <div style = {timeStyle}>

                <div>
                    <h3 style={{textAlign:"center", margin:5}}>
                        {this.state.timeLeft}
                    </h3>
                </div>
                <div>
                    <h6 style={textStyle}>
                        {this.state.timeScale}
                    </h6>
                </div>

            </div>


            <div style = {goalStyle}>
                <p style={textStyle}>
                    to 
                </p>

                <h5 style={textStyle}>
                    {this.props.goal}
                </h5>
            </div>

            <div style = {actionButtonStyle}>
                {actionButton}
            </div>
            

        </Paper>
    );
  }
}

export default CommitCard;