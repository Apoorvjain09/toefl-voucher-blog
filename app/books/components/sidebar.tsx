'use client';

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from 'lucide-react';
import { SidebarDesktop } from './sidebar-desktop';
import { SidebarItems } from '@/types';
import { SidebarButton } from './sidebar-button';
import { useMediaQuery } from 'usehooks-ts';
import { SidebarMobile } from './sidebar-mobile';
import { SignInButton} from '@clerk/nextjs';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Discount Codes', href: '/books/toefl-voucher', icon: Bell },
    { label: 'Score Reporting', href: '/books/score-reporting', icon: Mail },
    {
      href: '/books',
      icon: List,
      label: 'Books/ Materials',
    },
    {
      href: '/books/study-partner',
      icon: Bookmark,
      label: 'Find study partner',
    },
    {
      href: '/books/university-shortlisting',
      icon: Users,
      label: 'University Shortlisting',
    },
    {
      href: '/books/profile',
      icon: User,
      label: 'Profile',
    },
  ],
  extras: (
    <div className='flex flex-col gap-2'>
      <SidebarButton icon={MoreHorizontal} className='w-full'>
        More
      </SidebarButton>
      <SidebarButton
        className='w-[90%] justify-center text-white'
        variant='default'
      >
        <SignInButton/>
      </SidebarButton>
    </div>
  ),
};

export default function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}