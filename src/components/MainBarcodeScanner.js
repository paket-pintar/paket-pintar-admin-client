import DBR from "../dbr";
import React from 'react';
import BarcodeScanner from './BarcodeScanner';

class MainBarcodeScanner extends React.Component {
  constructor(props){
    super(props);
    this.reader = null;
    this.refDivMessage = React.createRef();
    this.state = {
      messageKeyBase: 0,
      message: '',
      bShowScanner: true
    };
  }
  componentDidUpdate(){
    //this.refDivMessage.current.scrollTop = this.refDivMessage.current.scrollHeight;
  }
  componentWillUnmount(){
    if(this.reader){
      this.reader.destroy();
    }
  }
  render() {
    return (
      <div>
        
        { !this.state.bShowScanner ? (
          <div>
            {/* Choose image(s) to decode:
            <input onChange={this.onIptChange} type="file" multiple accept="image/png,image/jpeg,image/bmp,image/gif" />
            <br/><br/> */}
            <button className="btn-large" onClick={this.showScanner}>show scanner</button>
          </div>
        ) : (
          <div>
            {/* <button className="btn-large" onClick={this.hideScanner}>hide scanner</button> */}
            <BarcodeScanner appendMessage={this.appendMessage}></BarcodeScanner>
          </div>
        ) }
    
        {/* <div className="div-message" style={style.div_message} ref={this.refDivMessage}>
          { this.state.messages.map((message, index) => 
            <p key={ this.state.messageKeyBase + index }>
              { message }
            </p>
          ) }
        </div> */}
      </div>
    );
  }
  appendMessage = str => {
    this.setState(state=>{
      state.message = str;
      /* if(state.messages.length > 500){
        ++state.messageKeyBase;
        state.messages.splice(0, 1);
      } */
      console.log(state, '<<< isi state')
      state.bShowScanner = false
      this.props.navigateTo(`/customer-packages/${state.message}`)
      return state;
    });
  }
  onIptChange = event=>{
      // React can't get event.target in async func by default.
      // Thus get event.target in sync part.
    let input = event.target;
    (async ()=>{
      try{
        this.appendMessage("======== start read... ========");
        let reader = this.reader = this.reader || await DBR.BarcodeReader.createInstance();
        let files = input.files;
        for(let i = 0; i < files.length; ++i){
          let file = files[i];
          this.appendMessage(file.name + ':')
          let results = await reader.decode(file);
          for(let result of results){
            this.appendMessage(result.barcodeText);
          }
        }
        input.value = "";
        this.appendMessage("======== finish read ========");
      }catch(ex){
        this.appendMessage(ex.message);
        console.error(ex);
      }
    })();
  }
  showScanner = ()=>{
    this.setState({
      bShowScanner: true
    });
  }
  hideScanner = ()=>{
    this.setState({
      bShowScanner: false
    });
  }
}

const style = {
  div_message: {
    maxHeight: "200px",
    overflowY: "auto",
    resize: "both"
  }
}

export default MainBarcodeScanner;
