import SideBarLayout from '@/modules/sidebar/lib/sidebar.layout';
import { Skeleton } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dashboard - Revizora",
};

const Page = () => {
  return (<SideBarLayout sideBarChildren={
    <div>
        <Skeleton variant="rectangular" width='100%' height='500px' />
    </div>
  }/>);
}

export default Page;