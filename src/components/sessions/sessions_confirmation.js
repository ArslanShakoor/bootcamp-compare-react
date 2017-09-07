import React,{Component} from 'react';
 
export default class  SessionsConfirmation extends Component{
	constructor(props) {
        super(props);
    }
   componentDidMount(){
		const { confirmation_token } = this.props.params;
		console.log(confirmation_token);
		 
	} 
  render() { 
    const {params} = this.props
    return (
      <div>

         
      </div>
    )
  }
}
 