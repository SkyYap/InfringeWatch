import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Tag, 
  Gift, 
  Users, 
  Monitor,
  Shield
} from 'lucide-react'
import { clsx } from 'clsx'

const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Tag, label: 'Data Labelling', path: '/data-labelling' },
    { icon: Gift, label: 'Rewards', path: '/rewards' },
    { icon: Users, label: 'Referral Program', path: '/referral' },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">InfringeWatch</h1>
            <p className="text-sm text-gray-500">Screen Analytics</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <li key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className={clsx('sidebar-item w-full text-left', {
                    'active': isActive
                  })}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <Monitor className="w-5 h-5 text-primary-800" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Premium Analyst</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar