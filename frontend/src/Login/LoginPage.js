import "./LoginPage.css";
function LoginPage() {
	return (
		<div className="background">
			<form className="login-form">
				<section className="main">
					<header>
						<h1 className="heading">Welcome back!</h1>
						<h4 className="sub-heading ">We're so excited to see you again!</h4>
					</header>
					<div className="fields">
						<field className="input-container input-container-margin">
							<label className="label"> 
                Email or Phone Number 
                <span className="required">*</span>
              </label>
							<input className="input"></input>
						</field>
						<field className="input-container">
							<label className="label">
                Password
                <span className="required">*</span>
              </label>
							<input className="input"></input>
						</field>
						<div className="forgot link login-font">Forgot your password?</div>
						<button className="login">
							<div className="login-font">Log In</div>
						</button>
						<div className="register-container">
							Need an account?
							<span className="register link">Register</span>
						</div>
					</div>
				</section>
				<section className="right">
					<div className="qrcode-container">
						<img alt="Scan me" src="data:image/png;base64,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"></img>
					</div>
					<h2 className="qrtext">Log in with QR Code</h2>
					<div className="qrsubtext ">Scan this with the <strong>Discord mobile app </strong>to log in instantly</div>
				</section>
			</form>
		</div>
	)
}

export default LoginPage;