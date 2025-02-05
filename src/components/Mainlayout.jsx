
'use client'

import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Brand', href: '/brand', icon: HomeIcon },
  { name: 'Project', href: '/project', icon: UsersIcon },
  { name: 'Competitor Insights', href: '/competitor-insights', icon: FolderIcon },
  { name: 'Inspiration Banks', href: '/inspiration-banks', icon: CalendarIcon },
  { name: 'Creative Scoring AI', href: '/creative-scoring-ai', icon: DocumentDuplicateIcon },
  { name: 'Settings', href: '/settings', icon: ChartPieIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation() // Get current route

  return (
    <>
      <div>
        {/* Mobile Sidebar */}
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop className="fixed inset-0 bg-gray-900/80 transition-opacity" />
          <div className="fixed inset-0 flex">
            <DialogPanel className="relative flex w-full max-w-xs flex-1 bg-gray-900">
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex grow flex-col gap-y-5 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 items-center">
                  <img src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" className="h-8 w-auto" alt="Logo" />
                </div>
                <nav>
                  <ul role="list" className="space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={classNames(
                            location.pathname.startsWith(item.href)  // Check if path starts with item.href
                              ? 'bg-gray-800 text-white' // Active style for all sub-routes
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold'
                          )}
                        >
                          <item.icon className="size-6 shrink-0" aria-hidden="true" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Desktop Sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-gray-900 px-6">
          <div className="flex h-16 items-center">
            <img src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" className="h-8 w-auto" alt="Logo" />
          </div>
          <nav className="flex-1">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={classNames(
                      location.pathname.startsWith(item.href)  // Check if path starts with item.href
                        ? 'bg-white text-gray' // Active style for all sub-routes
                        : 'text-gray-400 hover:bg-white hover:text-black',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold'
                    )}
                  >
                    <item.icon className="size-6 shrink-0" aria-hidden="true" />
                    {item.name}
                  </Link>
                </li>
                
              ))}
              
            </ul>
            
          </nav>
          <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800"
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-gray-800"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
        </div>

        {/* Main Content */}
        <main className="py-3 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}





