import {
  IconLayoutDashboard,
  IconPackages,
  IconUsers,
  IconTree,
  IconListCheck,
} from '@tabler/icons-react'
import {
  AudioWaveform,
  BoxIcon,
  Command,
  GalleryVerticalEnd,
  Ruler,
  Truck,
  TruckElectric,
  Warehouse,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'Menu',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        },

        {
          title: 'Masters',
          icon: IconPackages,
          items: [
            {
              title: 'Petani',
              url: '/petani',
              icon: IconUsers,
            },
            {
              title: 'Lahan',
              url: '/clerk/sign-up',
              icon: IconTree,
            },
            {
              title: 'Satuan',
              url: '/clerk/user-management',
              icon: Ruler,
            },
            {
              title: 'Kategori',
              url: '/clerk/user-management',
              icon: IconListCheck,
            },
            {
              title: 'Barang',
              url: '/clerk/user-management',
              icon: BoxIcon,
            },
            {
              title: 'Proses Pasca Panen',
              url: '/clerk/user-management',
              icon: TruckElectric,
            },
          ],
        },
        {
          title: 'Farm Maanagement',
          url: '/clerk/user-management',
          icon: Truck,
        },
        {
          title: 'Inventory Maanagement',
          url: '/clerk/user-management',
          icon: Warehouse,
        },
      ],
    },
    // {
    //   title: 'Pages',
    //   items: [
    //     {
    //       title: 'Masters',
    //       icon: IconPackages,
    //       items: [
    //         {
    //           title: 'Petani',
    //           url: '/petani',
    //           icon: Code2,
    //         },
    //       ],
    //     },
    // {
    //   title: 'Tasks',
    //   url: '/tasks',
    //   icon: IconChecklist,
    // },
    // {
    //   title: 'Apps',
    //   url: '/apps',
    //   icon: IconPackages,
    // },
    // {
    //   title: 'Chats',
    //   url: '/chats',
    //   badge: '3',
    //   icon: IconMessages,
    // },
    // {
    //   title: 'Users',
    //   url: '/users',
    //   icon: IconUsers,
    // },
    //     // {
    //     //   title: 'Auth',
    //     //   icon: IconLockAccess,
    //     //   items: [
    //     //     {
    //     //       title: 'Sign In',
    //     //       url: '/sign-in',
    //     //     },
    //     //     {
    //     //       title: 'Sign In (2 Col)',
    //     //       url: '/sign-in-2',
    //     //     },
    //     //     {
    //     //       title: 'Sign Up',
    //     //       url: '/sign-up',
    //     //     },
    //     //     {
    //     //       title: 'Forgot Password',
    //     //       url: '/forgot-password',
    //     //     },
    //     //     {
    //     //       title: 'OTP',
    //     //       url: '/otp',
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: 'Errors',
    //     //   icon: IconBug,
    //     //   items: [
    //     //     {
    //     //       title: 'Unauthorized',
    //     //       url: '/401',
    //     //       icon: IconLock,
    //     //     },
    //     //     {
    //     //       title: 'Forbidden',
    //     //       url: '/403',
    //     //       icon: IconUserOff,
    //     //     },
    //     //     {
    //     //       title: 'Not Found',
    //     //       url: '/404',
    //     //       icon: IconError404,
    //     //     },
    //     //     {
    //     //       title: 'Internal Server Error',
    //     //       url: '/500',
    //     //       icon: IconServerOff,
    //     //     },
    //     //     {
    //     //       title: 'Maintenance Error',
    //     //       url: '/503',
    //     //       icon: IconBarrierBlock,
    //     //     },
    //     //   ],
    //     // },
    //   ],
    // },
    // {
    //   title: 'Other',
    //   items: [
    //     {
    //       title: 'Settings',
    //       icon: IconSettings,
    //       items: [
    //         {
    //           title: 'Profile',
    //           url: '/settings',
    //           icon: IconUserCog,
    //         },
    //         {
    //           title: 'Account',
    //           url: '/settings/account',
    //           icon: IconTool,
    //         },
    //         {
    //           title: 'Appearance',
    //           url: '/settings/appearance',
    //           icon: IconPalette,
    //         },
    //         {
    //           title: 'Notifications',
    //           url: '/settings/notifications',
    //           icon: IconNotification,
    //         },
    //         {
    //           title: 'Display',
    //           url: '/settings/display',
    //           icon: IconBrowserCheck,
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Help Center',
    //       url: '/help-center',
    //       icon: IconHelp,
    //     },

    //   ],
    // },
  ],
}
