import React, { useState } from 'react'
import { Search, Filter, DollarSign, Monitor, Users, TrendingUp, Calendar, Clock, Smartphone, Volume2, VolumeX, Shield, AlertCircle, CheckCircle, Upload, UploadCloud as CloudUpload } from 'lucide-react'
import StatsCard from '../components/StatsCard'

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('timestamp')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterDevice, setFilterDevice] = useState('all')
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  // Mock data for screen recordings from screenpi.pe
  const recordings = [
    {
      id: '1',
      filename: 'desktop_software_demo_20240115_143022.mp4',
      deviceType: 'desktop' as const,
      duration: '15:23',
      timestamp: '2024-01-15 14:30:22',
      status: 'analyzed' as const,
      hasAudio: true,
      fileSize: '245.8 MB',
      resolution: '1920x1080',
      infringementDetected: true,
      confidence: 98.5,
      detections: ['copyrighted_music', 'trademarked_logo']
    },
    {
      id: '2',
      filename: 'mobile_app_recording_20240115_120045.mp4',
      deviceType: 'mobile' as const,
      duration: '8:45',
      timestamp: '2024-01-15 12:00:45',
      status: 'pending' as const,
      hasAudio: false,
      fileSize: '89.2 MB',
      resolution: '1080x1920',
      infringementDetected: null,
      confidence: null,
      detections: []
    },
    {
      id: '3',
      filename: 'desktop_gaming_session_20240114_193015.mp4',
      deviceType: 'desktop' as const,
      duration: '45:12',
      timestamp: '2024-01-14 19:30:15',
      status: 'analyzed' as const,
      hasAudio: true,
      fileSize: '1.2 GB',
      resolution: '2560x1440',
      infringementDetected: false,
      confidence: 95.2,
      detections: ['background_music']
    },
    {
      id: '4',
      filename: 'mobile_streaming_app_20240114_160030.mp4',
      deviceType: 'mobile' as const,
      duration: '22:30',
      timestamp: '2024-01-14 16:00:30',
      status: 'analyzed' as const,
      hasAudio: true,
      fileSize: '456.7 MB',
      resolution: '1080x1920',
      infringementDetected: true,
      confidence: 92.8,
      detections: ['protected_content', 'copyrighted_music']
    },
    {
      id: '5',
      filename: 'desktop_presentation_20240113_100012.mp4',
      deviceType: 'desktop' as const,
      duration: '32:18',
      timestamp: '2024-01-13 10:00:12',
      status: 'analyzed' as const,
      hasAudio: true,
      fileSize: '678.3 MB',
      resolution: '1920x1080',
      infringementDetected: false,
      confidence: 97.1,
      detections: []
    }
  ]

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  }

  const sortRecordings = (recordings: typeof recordings) => {
    return [...recordings].sort((a, b) => {
      switch (sortBy) {
        case 'timestamp':
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        case 'duration':
          const aDuration = a.duration.split(':').reduce((acc, time) => (60 * acc) + +time, 0)
          const bDuration = b.duration.split(':').reduce((acc, time) => (60 * acc) + +time, 0)
          return bDuration - aDuration
        case 'filename':
          return a.filename.localeCompare(b.filename)
        case 'status':
          return a.status.localeCompare(b.status)
        default:
          return 0
      }
    })
  }

  const filteredRecordings = sortRecordings(
    recordings.filter(recording => {
      const matchesSearch = recording.filename.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = filterStatus === 'all' || recording.status === filterStatus
      const matchesDevice = filterDevice === 'all' || recording.deviceType === filterDevice
      return matchesSearch && matchesStatus && matchesDevice
    })
  )

  const pendingRecordings = recordings.filter(recording => recording.status === 'pending')
  const totalPendingSize = pendingRecordings.reduce((total, recording) => {
    const size = parseFloat(recording.fileSize.replace(/[^\d.]/g, ''))
    const unit = recording.fileSize.includes('GB') ? 1024 : 1
    return total + (size * unit)
  }, 0)

  const handleUploadAll = () => {
    if (pendingRecordings.length === 0) {
      alert('No pending recordings to upload')
      return
    }

    setIsUploading(true)
    setUploadProgress(0)
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          alert(`Successfully uploaded ${pendingRecordings.length} recordings for analysis!`)
          return 100
        }
        return prev + 5
      })
    }, 200)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Screen recordings from screenpi.pe - analyze for copyright infringement</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleUploadAll}
            disabled={isUploading || pendingRecordings.length === 0}
            className={`btn-primary ${isUploading ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            <CloudUpload className="w-5 h-5" />
            {isUploading ? 'Uploading...' : `Upload All (${pendingRecordings.length})`}
          </button>
        </div>
      </div>

      {/* Upload Progress */}
      {isUploading && (
        <div className="card bg-blue-50 border-blue-200">
          <div className="flex items-center gap-4">
            <CloudUpload className="w-8 h-8 text-blue-600" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-blue-900">
                  Uploading {pendingRecordings.length} recordings for analysis
                </h3>
                <span className="text-sm text-blue-700">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-sm text-blue-700 mt-2">
                Total size: {totalPendingSize.toFixed(1)} MB • Estimated time: ~{Math.ceil(totalPendingSize / 50)} minutes
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Earnings"
          value="$1,247.50"
          subtitle="This month"
          icon={DollarSign}
          trend={{ value: "12.5%", isPositive: true }}
          color="success"
        />
        <StatsCard
          title="Recordings Analyzed"
          value="156"
          subtitle="All time"
          icon={Monitor}
          trend={{ value: "8.2%", isPositive: true }}
          color="primary"
        />
        <StatsCard
          title="Infringements Found"
          value="23"
          subtitle="This month"
          icon={Shield}
          trend={{ value: "15.3%", isPositive: true }}
          color="warning"
        />
        <StatsCard
          title="Detection Accuracy"
          value="94.2%"
          subtitle="Average confidence"
          icon={TrendingUp}
          trend={{ value: "2.1%", isPositive: true }}
          color="info"
        />
      </div>

      {/* Quick Actions */}
      {pendingRecordings.length > 0 && !isUploading && (
        <div className="card bg-yellow-50 border-yellow-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Upload className="w-5 h-5 text-yellow-700" />
              </div>
              <div>
                <h3 className="font-semibold text-yellow-900">
                  {pendingRecordings.length} recordings ready for analysis
                </h3>
                <p className="text-sm text-yellow-700">
                  Upload all pending recordings to start earning from copyright detection
                </p>
              </div>
            </div>
            <button 
              onClick={handleUploadAll}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <CloudUpload className="w-4 h-4" />
              Upload All Now
            </button>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search recordings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="timestamp">Sort by Date/Time</option>
              <option value="duration">Sort by Duration</option>
              <option value="filename">Sort by Filename</option>
              <option value="status">Sort by Status</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="analyzed">Analyzed</option>
              <option value="pending">Pending Analysis</option>
            </select>
            <select
              value={filterDevice}
              onChange={(e) => setFilterDevice(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Devices</option>
              <option value="desktop">Desktop</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
        </div>
      </div>

      {/* Recordings Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Recording</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Device</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Date & Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Duration</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Infringement</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Details</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecordings.map((recording) => {
                const { date, time } = formatTimestamp(recording.timestamp)
                return (
                  <tr key={recording.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{recording.filename}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                          <span>{recording.fileSize}</span>
                          <span>•</span>
                          <span>{recording.resolution}</span>
                          {recording.hasAudio ? (
                            <Volume2 className="w-3 h-3 text-green-600" />
                          ) : (
                            <VolumeX className="w-3 h-3 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {recording.deviceType === 'desktop' ? (
                          <Monitor className="w-4 h-4 text-blue-600" />
                        ) : (
                          <Smartphone className="w-4 h-4 text-purple-600" />
                        )}
                        <span className="text-sm capitalize">{recording.deviceType}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">{date}</div>
                        <div className="text-gray-500">{time}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1 text-sm text-gray-900">
                        <Clock className="w-3 h-3" />
                        {recording.duration}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`status-badge ${
                        recording.status === 'analyzed' ? 'status-processed' : 'status-unprocessed'
                      }`}>
                        {recording.status === 'analyzed' ? 'Analyzed' : 'Pending'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {recording.infringementDetected === null ? (
                          <span className="text-gray-400 text-sm">Pending</span>
                        ) : recording.infringementDetected ? (
                          <>
                            <AlertCircle className="w-4 h-4 text-red-500" />
                            <span className="text-red-600 text-sm font-medium">Found</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-green-600 text-sm font-medium">Clean</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      {recording.status === 'analyzed' && (
                        <div className="text-sm">
                          <div className="text-gray-900 font-medium">
                            {recording.confidence}% confidence
                          </div>
                          {recording.detections.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {recording.detections.slice(0, 2).map((detection, index) => (
                                <span key={index} className="px-1.5 py-0.5 bg-red-100 text-red-700 text-xs rounded">
                                  {detection.replace('_', ' ')}
                                </span>
                              ))}
                              {recording.detections.length > 2 && (
                                <span className="text-xs text-gray-500">
                                  +{recording.detections.length - 2} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      {recording.status === 'pending' && (
                        <button 
                          className="btn-primary text-xs px-3 py-1"
                          onClick={() => {
                            alert(`Uploading ${recording.filename} for analysis...`)
                          }}
                        >
                          <Upload className="w-3 h-3" />
                          Upload
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {filteredRecordings.length === 0 && (
        <div className="text-center py-12">
          <Monitor className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No recordings found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Summary */}
      <div className="card bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Showing {filteredRecordings.length} of {recordings.length} recordings
            </h3>
            <p className="text-sm text-gray-600">
              Data automatically synced from screenpi.pe • {pendingRecordings.length} pending analysis
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Last sync</div>
            <div className="text-sm font-medium text-gray-900">2 minutes ago</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard