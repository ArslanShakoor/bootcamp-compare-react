import React, {Component} from 'react';
import {fetchCamps} from '../../actions';
import {connect} from 'react-redux';
import ReactStars from 'react-stars';
import { Link } from "react-router-dom";
import './css/index.css';

class FrontIndex extends Component{

  componentDidMount(){
    this.props.fetchCamps();
  }

  renderHeader(){
    return(
      <header className="masthead">
        <div className="overlay">
          <div className="container">
            <h1 className="display-1 text-white">Select Best Code School</h1>
            <h2 className="display-4 text-white">Every Coding Bootcamp is not same</h2>
          </div>
        </div>
      </header>
    );
  }

  renderSingleCamp(camp){
    return(
      <div className = 'col-sm-3'>
        <div className = "camp-block">
          <div class="school-middle">
            <img className="favicon" src={`https://api.statvoo.com/favicon/?url=${camp.website}`}/>
            <div className="school-name"> {camp.name}</div>
          </div>
          <div className="stack">Ruby, Rails, Javascript</div>

          <div className = "review-decor">
          <p>

          i really liked this bootcamp and it transformed my life and i got the job very easily
          i have background of programming but i was not getting any job. I found it is the besy
          way to come into the market with right mind set.
          </p>
          </div>
          <div className='rating'>
            <ReactStars
              count={5}
              size={20}
              value={camp.avg.parseInt}
              edit = {false}
            />
          </div>
        </div>
      </div>
    );
  }
  renderBox(){
    return _.map(this.props.camps, camp=>{

      return(
        <Link to = {`/camps/show/${camp.id}`}>
        {this.renderSingleCamp(camp)}
        </Link>
      );
    });
  }

  render(){
    return(
      <div>
      {this.renderHeader()}
      {this.renderBox()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    camps: state.camps
  };
};

export default connect(mapStateToProps, {fetchCamps})(FrontIndex)
