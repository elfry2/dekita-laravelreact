import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { BoxArrowInRight } from 'react-bootstrap-icons';
import { handleLogin } from '../contexts/AuthContext';
import AuthLayout from '../layouts/AuthLayout';

export default function LoginPage() {
	return (
		<AuthLayout>
			<p className="text-center">Sign in to continue</p>
			<form class="mt-3" onSubmit={(e) => {handleLogin(e)}}>
				<div class="form-floating mt-3">
					<input type="email" className="form-control" id="emailEmailInput" placeholder="name@example.com" />
					<label for="emailEmailInput">Email address</label>
				</div>
				<div class="form-floating mt-3">
					<input type="password" className="form-control" id="passwordPasswordInput" placeholder="Password" />
					<label for="passwordPasswordInput">Password</label>
				</div>
				<Stack direction="horizontal" className="justify-content-end mt-3">
					<Button type="submit" variant="outline-primary" className="border-0">
						<BoxArrowInRight />
						<span className="ms-2">Sign In</span>
					</Button>
				</Stack>
			</form>
		</AuthLayout>
	);
}
