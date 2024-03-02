import {Component} from 'react';
import './index.css';

class Feedback extends Component{
  state = {stater : true}

  onChangeEl = () => {
    this.setState({stater : !this.state.stater})
  }
  
  render(){
    const {stater} = this.state;
  return(
    <div className='main-page'>

      {stater ? (
      <div className='review-card'>
          <h1 className='heading'>How satisfied are you with our
            <br/>customer support performance ?
          </h1>
          <div className='buttons'>
              <button className='emoji-btn' onClick={this.onChangeEl}><img src='https://i.ibb.co/YZRHtG9/sad.png' className='emoji'/><br/>
                <span className='text'>Sad</span>
              </button>
            
              <button className='emoji-btn' onClick={this.onChangeEl} ><img src='https://i.ibb.co/k1N83Jr/quiet.png' className='emoji'/><br/>
                <span className='text'>None</span>
              </button>
            
              <button className='emoji-btn' onClick={this.onChangeEl}><img src='https://i.ibb.co/mGhNyPt/smile.png' className='emoji'/><br/>
                <span className='text'>Happy</span>
              </button>
            </div>

      </div>) : (
      <div className='review-card'>
        <img src='https://i.ibb.co/LRjqnGF/heart.png' className='emoji'/>
        <h3>Thank You</h3>
        <p className='thank-you'>We will use your feed back to improve our customer support <br/>performance
        </p>
        <button className='re-review'  onClick={this.onChangeEl}>Re-Review</button>
      </div>)
      }
    </div>
  )}
}

export default Feedback;