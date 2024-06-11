import AuthLayout from '../layouts/AuthLayout';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import { BoxArrowInRight } from 'react-bootstrap-icons';
import { ChevronLeft } from 'react-bootstrap-icons';
import { handleLogin } from '../contexts/AuthContext';
import { useRef } from 'react';

export default function LoginPage() {

	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	return (
		<AuthLayout>
			<Link to="/">
				<Button variant="outline-secondary" className="border-0">
					<ChevronLeft />
					<span className="ms-2">Go Back</span>
				</Button>
			</Link>
			<p className="mt-5 text-center">Sign in to continue</p>
			<form onSubmit={
				(event) => {
					handleLogin(
						event,
						emailRef.current.value,
						passwordRef.current.value
					)
				}
			}>
				<div className="form-floating mt-3">
					<input
						type="email"
						className="form-control"
						id="emailEmailInput"
						placeholder="name@example.com"
						ref={emailRef}
						autoFocus
					/>
					<label for="emailEmailInput">Email address</label>
				</div>
				<div className="form-floating mt-3">
					<input
						type="password"
						className="form-control"
						id="passwordPasswordInput"
						ref={passwordRef}
						placeholder="Password"/>
					<label for="passwordPasswordInput">Password</label>
				</div>
				<Stack direction="horizontal" className="justify-content-end mt-5">
					<Button type="submit" variant="outline-primary" className="border-0">
						<BoxArrowInRight />
						<span className="ms-2">Sign In</span>
					</Button>
				</Stack>
			</form>
		</AuthLayout>
	);
}
