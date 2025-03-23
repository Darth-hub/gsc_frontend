import { Button } from "@mantine/core";

export default function UnAuthorized() {
  return (
    <div className=''>
        <h1 className='text-white text-[30vw] text-center'>401</h1>
        <div className="text-white text-center text-xl">You are not allowed to proceed further.</div>
        <Button ml={700} mt={100} mb={150} mr={700}>Go to Home</Button>
    </div>
  );
}