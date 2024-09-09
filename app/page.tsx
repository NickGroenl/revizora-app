import { Metadata } from 'next';
import IndexLayout from './index.layout';

export const metadata: Metadata = {
  title: "Onboard on Revizora",
};

const Page = () => {
  return (<IndexLayout/>);
}

export default Page;