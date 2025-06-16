import React, { useState } from 'react'
import { Copy, Share2, Users, Gift, Trophy, ExternalLink } from 'lucide-react'
import StatsCard from '../components/StatsCard'

const ReferralProgram: React.FC = () => {
  const [referralCode] = useState('INFRINGEWATCH-2024-ABC123')
  const [copied, setCopied] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`https://infringewatch.com/join?ref=${referralCode}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', referrals: 45, earnings: '$1,125.00' },
    { rank: 2, name: 'Sarah Johnson', referrals: 38, earnings: '$950.00' },
    { rank: 3, name: 'Mike Rodriguez', referrals: 32, earnings: '$800.00' },
    { rank: 4, name: 'You', referrals: 23, earnings: '$575.00' },
    { rank: 5, name: 'Emma Wilson', referrals: 19, earnings: '$475.00' },
  ]

  const recentReferrals = [
    { name: 'John Doe', joinDate: '2024-01-15', status: 'active', earnings: '$25.00' },
    { name: 'Jane Smith', joinDate: '2024-01-14', status: 'active', earnings: '$25.00' },
    { name: 'Bob Wilson', joinDate: '2024-01-12', status: 'pending', earnings: '$0.00' },
    { name: 'Alice Brown', joinDate: '2024-01-10', status: 'active', earnings: '$25.00' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Referral Program</h1>
        <p className="text-gray-600 mt-1">Invite analysts and earn rewards together</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Referrals"
          value="23"
          subtitle="Active analysts"
          icon={Users}
          trend={{ value: "15.3%", isPositive: true }}
          color="primary"
        />
        <StatsCard
          title="Referral Earnings"
          value="$575.00"
          subtitle="All time"
          icon={Gift}
          trend={{ value: "8.7%", isPositive: true }}
          color="success"
        />
        <StatsCard
          title="This Month"
          value="5"
          subtitle="New referrals"
          icon={Share2}
          color="info"
        />
        <StatsCard
          title="Leaderboard Rank"
          value="#4"
          subtitle="Top 10%"
          icon={Trophy}
          color="warning"
        />
      </div>

      {/* Referral Link */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Referral Link</h2>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-1">Referral Code</p>
              <p className="font-mono text-lg font-semibold text-gray-900">{referralCode}</p>
            </div>
            <button
              onClick={handleCopyCode}
              className={`btn-primary ${copied ? 'bg-green-600 hover:bg-green-700' : ''}`}
            >
              <Copy className="w-5 h-5" />
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 mb-4">
          Share this link with content analysts to earn $25 for each successful referral!
        </div>
        
        <div className="flex gap-3">
          <button className="btn-secondary">
            <Share2 className="w-5 h-5" />
            Share on Social
          </button>
          <button className="btn-secondary">
            <ExternalLink className="w-5 h-5" />
            Email Invite
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reward Structure */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Reward Structure</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Successful Referral</h3>
                <p className="text-sm text-gray-600">When analyst completes first analysis</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">$25</p>
                <p className="text-sm text-gray-600">One-time</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Monthly Bonus</h3>
                <p className="text-sm text-gray-600">5+ active referrals per month</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-blue-600">$50</p>
                <p className="text-sm text-gray-600">Monthly</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Top Referrer</h3>
                <p className="text-sm text-gray-600">Monthly leaderboard winner</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-purple-600">$200</p>
                <p className="text-sm text-gray-600">Monthly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Leaderboard</h2>
          
          <div className="space-y-3">
            {leaderboard.map((user) => (
              <div 
                key={user.rank} 
                className={`flex items-center justify-between p-3 rounded-lg ${
                  user.name === 'You' ? 'bg-primary-50 border border-primary-200' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                    user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                    user.rank === 3 ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {user.rank}
                  </div>
                  <div>
                    <p className={`font-medium ${user.name === 'You' ? 'text-primary-900' : 'text-gray-900'}`}>
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-600">{user.referrals} referrals</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{user.earnings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Referrals */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Referrals</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Join Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Earnings</th>
              </tr>
            </thead>
            <tbody>
              {recentReferrals.map((referral, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{referral.name}</td>
                  <td className="py-3 px-4 text-gray-600">{referral.joinDate}</td>
                  <td className="py-3 px-4">
                    <span className={`status-badge ${
                      referral.status === 'active' ? 'status-processed' : 'status-unprocessed'
                    }`}>
                      {referral.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-semibold text-green-600">{referral.earnings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ReferralProgram