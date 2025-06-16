import React from 'react'
import { DollarSign, TrendingUp, Download, CreditCard, BarChart3, Coins } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import StatsCard from '../components/StatsCard'

const Rewards: React.FC = () => {
  const earningsData = [
    { month: 'Jan', earnings: 850 },
    { month: 'Feb', earnings: 920 },
    { month: 'Mar', earnings: 1100 },
    { month: 'Apr', earnings: 980 },
    { month: 'May', earnings: 1250 },
    { month: 'Jun', earnings: 1400 },
  ]

  const transactions = [
    {
      id: '1',
      type: 'earning',
      description: 'Screen recording analysis reward',
      amount: '+$45.50',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: '2',
      type: 'withdrawal',
      description: 'USDT withdrawal',
      amount: '-$200.00',
      date: '2024-01-14',
      status: 'pending'
    },
    {
      id: '3',
      type: 'earning',
      description: 'Referral bonus',
      amount: '+$25.00',
      date: '2024-01-13',
      status: 'completed'
    },
    {
      id: '4',
      type: 'earning',
      description: 'Copyright detection bonus',
      amount: '+$15.75',
      date: '2024-01-12',
      status: 'completed'
    },
    {
      id: '5',
      type: 'withdrawal',
      description: 'IFT Token withdrawal',
      amount: '-150 IFT',
      date: '2024-01-10',
      status: 'completed'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Rewards</h1>
        <p className="text-gray-600 mt-1">Track your analysis earnings and manage withdrawals</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Available Balance"
          value="$1,247.50"
          subtitle="Ready to withdraw"
          icon={DollarSign}
          color="success"
        />
        <StatsCard
          title="Total Earned"
          value="$5,890.25"
          subtitle="All time"
          icon={TrendingUp}
          trend={{ value: "18.2%", isPositive: true }}
          color="primary"
        />
        <StatsCard
          title="This Month"
          value="$1,400.00"
          subtitle="Current month"
          icon={BarChart3}
          trend={{ value: "12.1%", isPositive: true }}
          color="info"
        />
        <StatsCard
          title="Avg. Per Analysis"
          value="$8.95"
          subtitle="Analysis reward"
          icon={CreditCard}
          trend={{ value: "5.3%", isPositive: true }}
          color="warning"
        />
      </div>

      {/* Token Balance */}
      <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">InfringeWatch Token Balance</h3>
              <p className="text-sm text-gray-600">Earn IFT tokens for premium analysis rewards</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-600">1,247 IFT</div>
            <div className="text-sm text-gray-600">≈ $623.50 USD</div>
          </div>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Earnings History</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="earnings" 
                stroke="#2e7d32" 
                strokeWidth={3}
                dot={{ fill: '#2e7d32', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Withdrawal Options */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Withdrawal Options</h2>
          
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Bank Transfer</h3>
                  <p className="text-sm text-gray-600">2-3 business days</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Min: $50</p>
                  <p className="text-sm text-gray-600">Fee: $2.50</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">PayPal</h3>
                  <p className="text-sm text-gray-600">Instant transfer</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Min: $10</p>
                  <p className="text-sm text-gray-600">Fee: 2.9%</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Cryptocurrency (USDT)</h3>
                  <p className="text-sm text-gray-600">Near instant • Tether USD</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Min: $25</p>
                  <p className="text-sm text-gray-600">Fee: $1.00</p>
                </div>
              </div>
            </div>

            <div className="p-4 border border-purple-200 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:border-purple-300 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Coins className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">InfringeWatch Token (IFT)</h3>
                    <p className="text-sm text-gray-600">Instant • Native platform token</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Min: 50 IFT</p>
                  <p className="text-sm text-gray-600">Fee: 0%</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className="btn-primary w-full mt-6">
            <Download className="w-5 h-5" />
            Request Withdrawal
          </button>
        </div>

        {/* Transaction History */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Transactions</h2>
          
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'earning' ? 'bg-green-100' : 
                    transaction.description.includes('IFT') ? 'bg-purple-100' : 'bg-blue-100'
                  }`}>
                    {transaction.type === 'earning' ? (
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    ) : transaction.description.includes('IFT') ? (
                      <Coins className="w-5 h-5 text-purple-600" />
                    ) : (
                      <Download className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'earning' ? 'text-green-600' : 
                    transaction.description.includes('IFT') ? 'text-purple-600' : 'text-blue-600'
                  }`}>
                    {transaction.amount}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    transaction.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="btn-secondary w-full mt-4">
            View All Transactions
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rewards