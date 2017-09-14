import React, {Component} from 'react';
import './css/index.css'

export default class FrontIndex extends Component{

  componentDidMount(){
    this.props.fetchCamps();
  }

  render(){
    return(
      <div> 
        <header className="masthead">
          <div className="overlay">
            <div className="container">
              <h1 className="display-1 text-white">Select Best Code School</h1>
              <h2 className="display-4 text-white">Every Coding Bootcamp is not same</h2>
            </div>
          </div>
        </header>
       

        <div className="container-fluid">
          <div className = 'row'>
            <div className = 'col-sm-3'> 
              <div className= 'row'>
                <div className = "camp-block">
                  <div class="school-middle">
                    <img className="favicon" src="https://flatironschool.com/assets/images/favicon.ico"/>
                    <div className="school-name"> Flatiron School </div> 
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
                  <img src="https://blogs.baylor.edu/madison_farrell/files/2015/04/3-5-stars-2bmbspe.png" width = "100px" height= "20px" />
                  </div>
                </div>  
              </div>
            </div>
              <div className = 'col-sm-3'> 
              <div className= 'row'>
                <div className = "camp-block">
                  <div class="span4">
                    <img className="favicon" src="https://generalassemb.ly/favicon.ico"/>
                    <div className="school-name"> General Assembly </div> 
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
                  <img src="https://blogs.baylor.edu/madison_farrell/files/2015/04/3-5-stars-2bmbspe.png" width = "100px" height= "20px" />
                  </div>
                </div>  
              </div>
              </div>
               <div className = 'col-sm-3'> 
              <div className= 'row'>
                <div className = "camp-block">
                  <div class="span4">
                    <img className="favicon" src="https://www.hackreactor.com/favicon.ico"/>
                    <div className="school-name"> Hack Reactor </div> 
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
                  <img src="https://blogs.baylor.edu/madison_farrell/files/2015/04/3-5-stars-2bmbspe.png" width = "100px" height= "20px" />
                  </div>
                </div>  
              </div>
              </div>
               <div className = 'col-sm-3'> 
              <div className= 'row'>
                <div className = "camp-block">
                  <div class="span4">
                    <img className="favicon" src="https://www.fullstackacademy.com/favicon.ico"/>
                    <div className="school-name"> FullStack Academy </div> 
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
                  <img src="https://blogs.baylor.edu/madison_farrell/files/2015/04/3-5-stars-2bmbspe.png" width = "100px" height= "20px" />
                  </div>
                </div>  
              </div>
              </div>
          </div>
        </div>
      </div>  

    );
  }
}