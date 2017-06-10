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
    margnBottom : 30,
    marginLeft:5,
    marginRight:5
}

const timeStyle =
{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    flexBasis:100,
    flexGrow: 1
}

const goalStyle =
{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flexStart',
    flexGrow: 4
}

const actionButtonStyle = 
{
    flexBasis:100,
    flexGrow: 1,
    textAlign: 'center'
}    

const textStyle = 
{
    margin:5
}

class CommitCard extends React.Component {

    constructor(props) {
        super();

        var timeUp = false;
        var secondsLeft = props.data.endTimestamp - (Date.now()/1000);
        var timeIndicator = "left"

        if (secondsLeft < 0)
        {
            timeUp = true;
            secondsLeft = 0-secondsLeft;
            timeIndicator = "ago"
        }

        var minutesLeft = secondsLeft/60;
        var hoursLeft = minutesLeft/60;
        var daysLeft = hoursLeft/24;

        var timeScale = "days";
        var timeLeft = daysLeft;
        var connectionText = "to"

        if(daysLeft > 1)
        {
            timeScale = "days" + timeIndicator;
            timeLeft = Math.round(daysLeft);
        }
        else if( hoursLeft > 1)
        {
            timeScale ="hours" + timeIndicator;;
            timeLeft = Math.round(hoursLeft);
        }
        else if( minutesLeft > 1)
        {
            timeScale = "min "+ timeIndicator;;
            timeLeft = Math.round(minutesLeft);
        }

        if(timeUp===true && props.data.state=== "ongoing")
        {
            timeLeft = "Time \nOut!"
            timeScale = "";
        }
 
        if (props.data.state === "succeeded")
        {
            connectionText = "You succeeded to"
        }
        else if (props.data.state === "failed")
        {
            connectionText = "You failed to"
        }

        this.state = {
            "timeScale": timeScale,
            "timeLeft": timeLeft,
            "timeUp": timeUp,
            "connectionText":connectionText
        };
    }

    onResolve = () =>
    {
        this.props.data.onResolve(this.props.data.commitId);
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
                    {this.state.connectionText}
                </p>

                <h5 style={textStyle}>
                    {this.props.data.goal}
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