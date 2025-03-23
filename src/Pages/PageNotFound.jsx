import { Button } from "@mantine/core";

export default function NotFoundTitle() {
  return (
    <div className=''>
        <h1 className='text-white text-[30vw] text-center'>404</h1>
        <div className="text-white text-center text-xl">You have found a hidden page.</div>
        <Button ml={700} mt={100} mb={150} mr={700}>Go to Home</Button>
    </div>
  );
}