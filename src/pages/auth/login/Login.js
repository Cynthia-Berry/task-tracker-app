import {useState} from "react";
import {useQuery} from "@apollo/client";
import {LOGIN} from "../../../utils/helpers/mutations/user.mutation";
import TokenHelper from "../../../utils/helpers/tokenHelper"

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordType, updatePasswordType] = useState("password");
	const [emailValidator, setEmailValidator] = useState(null);
	const isLoggedIn = TokenHelper.checkIfLoggedIn();
	const ifValidated = !email || !password;
	
	const togglePasswordField = type => {
		updatePasswordType(type);
		document.getElementById('password').type = type;
	}
	
	const handleEmailValidator = event => {
		const pattern = /\S+@\S+\.\S+/, email = event.target.value.toLowerCase().replace(/ /g, "");
		if (!pattern.test(email)) setEmailValidator('Please enter a valid email');
		else {
			setEmailValidator(null);
			setEmail(email)
		}
	}
	
	const {loading, data} = useQuery(LOGIN, {variables: {email, password}});
	if (data) {
		console.log(data)
		console.log(data.login)
	}
	
	return (
		<div>
			<form>
				<div className="form-group text-start">
					<label>Email or Phone Number</label>
					<input className="form-control" placeholder="Enter your email or phone number" type="text"
					       value={email} onChange={event => setEmail(event.target.value)} onInput={handleEmailValidator}/>
					{emailValidator ? <small className="text-danger">{emailValidator}</small> : ''}
				</div>
				<div className="form-group text-start pos-relative">
					<label>Password</label>
					<input className="form-control" onChange={e => setPassword(e.target.value)}
					       value={password} placeholder="Enter your password" type="password" id="password"/>
					<div className="eye-right">
						{passwordType === "password" ?
							<i onClick={() => togglePasswordField("text")} className="fe fe-eye"/> :
							<i onClick={() => togglePasswordField("password")} className="fe fe-eye-off"/>
						}
					</div>
				</div>
				<button className="btn ripple btn-main-primary btn-block" disabled={ifValidated} type="button"
				        onClick={useQuery}>
					Sign In{loading ? <>&nbsp;<i className="fa fa-spin fa-spinner"/> </> : ""}
				</button>
			</form>
		</div>
	)
}

export default Login;
