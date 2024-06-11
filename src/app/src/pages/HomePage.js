import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return <Stack direction="horizontal" gap="3">
        <h1>Home</h1>
        <Link to="/login"><Button variant="outline-primary" className="border-0">Sign In</Button></Link>
    </Stack>;
}