import React from "react";
import Button from "@material-ui/core/Button";
import { ReactMic, saveRecording } from "react-mic";


export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blobObject: null,
      isRecording: false
    };
  }

  startRecording = () => {
    this.setState({
      record: true,
      isRecording: true
    });
  };

  stopRecording = () => {
    this.setState({
      record: false,
      isRecording: false
    });
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop = blobObject => {
    console.log('here', blobObject);
    // fdfdsfdsfds
    this.setState({
      blobURL: blobObject.blobURL
    });

  };

  onRecordStart = () => {
    console.log("Hello");
  };

  onStart = () => {
    console.log("You can tap into the onStart callback");
  };

  onSave = blobObject => {};

  render() {
    console.log(this.onData);
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          visualSetting="sinewave"
          audioBitsPerSecond={128000}
          onStop={this.onStop}
          onStart={this.onStart}
          onSave={this.onSave}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <br />
        <br />
        <Button
          className="btn"
          secondary={true}
          disabled={this.state.isRecording}
          onClick={this.startRecording}
        >
          Begin Rec
        </Button>
        <Button
          className="btn"
          secondary={true}
          disabled={!this.state.isRecording}
          onClick={this.stopRecording}
        >
          Stop Rec
        </Button>
      </div>
    );
  }
}
