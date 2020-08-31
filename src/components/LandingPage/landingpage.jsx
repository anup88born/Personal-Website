import React from 'react';

const LandingPage = ({routeChange}) => {
	return (
		<article className="vh-100 dt w-100 bg-article">
			  <div className="dtc v-mid tc white ph3 ph4-l">
			    <h1 className="f6 f2-m f-subheadline-l fw6 tc">Welcome to Anup Padakandla Portfolio</h1>
			    <button className="f3 ma3 pa3 br3 mr5 bg-green center grow shadow5 pointer" type="submit"  onClick={() => routeChange('register')}>Register</button>
			    <button className="f3 ma3 pa3 br3 bg-green center grow shadow5 pointer" type="submit"  onClick={() => routeChange('signin')}>SignIn</button>
			  </div>
		</article>
	);	
}

export default LandingPage;
