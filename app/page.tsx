import LoginLayout from '@/modules/auth/lib/LoginLayout';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Sign up to Revizora",
};
const Page = () => {

  return (
    <LoginLayout/>
  );
}

export default Page;