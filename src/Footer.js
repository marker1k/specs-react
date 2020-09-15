import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<button className="footerButton" onClick={this.allFormatsClickHandler}>Все форматы</button>
      			<div className="contact"><a className="link" onClick={this.feedbackClickHandler}>Обратная связь</a></div>
      			<div className="copyright">{`© Яндекс ${new Date().getFullYear()}`}</div>
			</div>
		)
	}
}

export default Footer;