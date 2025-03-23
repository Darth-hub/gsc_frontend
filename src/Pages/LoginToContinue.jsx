import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function LoginToContinue() {
  return (
    <div className=''>
        <h1 className='text-white text-[30vw] text-center'>401</h1>
        <div className="text-white text-center text-xl">Login to continue.</div>
        <Link smooth to="/login">
            <Button ml={700} mt={100} mb={150} mr={700}>Go to Login/Register</Button>
        </Link>
    </div>
  );
}