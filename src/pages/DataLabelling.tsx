import React, { useState } from 'react'
import { Download, Play, CheckCircle, AlertCircle, Brain, Database, Shield, Eye, Hash, Zap } from 'lucide-react'

const DataLabelling: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState('clip')
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  const models = [
    { 
      id: 'clip', 
      name: 'CLIP', 
      size: '1.2 GB', 
      accuracy: '97.8%',
      category: 'Visual-Text',
      description: 'Contrastive Language-Image Pre-training for visual content understanding'
    },
    { 
      id: 'blip-2', 
      name: 'BLIP-2', 
      size: '2.1 GB', 
      accuracy: '98.5%',
      category: 'Visual-Text',
      description: 'Bootstrapped Vision-Language Pre-training with Frozen Image Encoders'
    },
    { 
      id: 'phash', 
      name: 'pHash', 
      size: '45 MB', 
      accuracy: '94.2%',
      category: 'Perceptual',
      description: 'Perceptual hashing for duplicate and similar image detection'
    },
    { 
      id: 'ahash', 
      name: 'aHash', 
      size: '32 MB', 
      accuracy: '91.8%',
      category: 'Perceptual',
      description: 'Average hash algorithm for fast image similarity detection'
    },
    { 
      id: 'dhash', 
      name: 'dHash', 
      size: '38 MB', 
      accuracy: '92.5%',
      category: 'Perceptual',
      description: 'Difference hash for gradient-based image comparison'
    },
    { 
      id: 'facebook-pdq', 
      name: "Facebook's PDQ", 
      size: '156 MB', 
      accuracy: '96.1%',
      category: 'Content ID',
      description: 'Photo DNA Quality hash for robust image matching'
    },
    { 
      id: 'microsoft-videodna', 
      name: 'Microsoft VideoDNA', 
      size: '890 MB', 
      accuracy: '98.9%',
      category: 'Video',
      description: 'Advanced video fingerprinting and content identification'
    },
    { 
      id: 'xceptionnet', 
      name: 'XceptionNet', 
      size: '345 MB', 
      accuracy: '95.7%',
      category: 'Deep Learning',
      description: 'Extreme Inception architecture for image classification'
    },
    { 
      id: 'deepfakedetector', 
      name: 'DeepFakeDetector', 
      size: '567 MB', 
      accuracy: '97.3%',
      category: 'Authenticity',
      description: 'AI-powered detection of manipulated and synthetic content'
    }
  ]

  const modelCategories = [
    { id: 'all', name: 'All Models', icon: Brain },
    { id: 'Visual-Text', name: 'Visual-Text AI', icon: Eye },
    { id: 'Perceptual', name: 'Perceptual Hash', icon: Hash },
    { id: 'Content ID', name: 'Content ID', icon: Shield },
    { id: 'Video', name: 'Video Analysis', icon: Play },
    { id: 'Deep Learning', name: 'Deep Learning', icon: Zap },
    { id: 'Authenticity', name: 'Authenticity', icon: CheckCircle }
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredModels = selectedCategory === 'all' 
    ? models 
    : models.filter(model => model.category === selectedCategory)

  const processedRecordings = [
    {
      id: '1',
      name: 'desktop_demo_001.mp4',
      status: 'completed',
      confidence: 98.5,
      detections: ['copyrighted_music', 'trademarked_logo', 'protected_content'],
      infringement: true,
      processedAt: '2024-01-15 14:30',
      modelsUsed: ['CLIP', 'Microsoft VideoDNA', 'DeepFakeDetector']
    },
    {
      id: '2',
      name: 'mobile_app_002.mp4',
      status: 'processing',
      confidence: 0,
      detections: [],
      infringement: null,
      processedAt: null,
      modelsUsed: []
    },
    {
      id: '3',
      name: 'gaming_session_003.mp4',
      status: 'completed',
      confidence: 95.2,
      detections: ['background_music', 'game_assets'],
      infringement: false,
      processedAt: '2024-01-15 13:15',
      modelsUsed: ['pHash', 'Facebook\'s PDQ', 'XceptionNet']
    },
    {
      id: '4',
      name: 'streaming_content_004.mp4',
      status: 'completed',
      confidence: 99.1,
      detections: ['deepfake_detected', 'synthetic_audio', 'manipulated_video'],
      infringement: true,
      processedAt: '2024-01-15 12:45',
      modelsUsed: ['BLIP-2', 'DeepFakeDetector', 'Microsoft VideoDNA']
    }
  ]

  const handleDownloadModel = () => {
    setIsDownloading(true)
    setDownloadProgress(0)
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsDownloading(false)
          return 100
        }
        return prev + 8
      })
    }, 400)
  }

  const getModelIcon = (category: string) => {
    const categoryData = modelCategories.find(cat => cat.id === category)
    return categoryData ? categoryData.icon : Brain
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Data Labelling</h1>
        <p className="text-gray-600 mt-1">AI-powered screen recording analysis and copyright detection</p>
      </div>

      {/* Model Selection */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary-800" />
          AI Detection Model Selection
        </h2>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {modelCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {filteredModels.map((model) => {
            const ModelIcon = getModelIcon(model.category)
            return (
              <div
                key={model.id}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedModel === model.id
                    ? 'border-primary-800 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedModel(model.id)}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    selectedModel === model.id ? 'bg-primary-800' : 'bg-gray-100'
                  }`}>
                    <ModelIcon className={`w-5 h-5 ${
                      selectedModel === model.id ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{model.name}</h3>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded mt-1">
                      {model.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{model.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Size: {model.size}</span>
                  <span className="text-gray-600">Accuracy: {model.accuracy}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected Model Info */}
        {selectedModel && (
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-900">
                  {models.find(m => m.id === selectedModel)?.name} Selected
                </h3>
                <p className="text-sm text-primary-700">
                  {models.find(m => m.id === selectedModel)?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Download Progress */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              Model Download Progress
            </span>
            <span className="text-sm text-gray-500">{downloadProgress}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-800 h-2 rounded-full transition-all duration-300"
              style={{ width: `${downloadProgress}%` }}
            />
          </div>
          
          <button
            onClick={handleDownloadModel}
            disabled={isDownloading}
            className="btn-primary"
          >
            <Download className="w-5 h-5" />
            {isDownloading ? 'Downloading...' : `Download ${models.find(m => m.id === selectedModel)?.name}`}
          </button>
        </div>
      </div>

      {/* Multi-Model Analysis */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-primary-800" />
          Multi-Model Analysis Pipeline
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">Visual Analysis</h3>
            <p className="text-sm text-gray-600">CLIP, BLIP-2, XceptionNet</p>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Hash className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">Hash Matching</h3>
            <p className="text-sm text-gray-600">pHash, aHash, dHash</p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">Content ID</h3>
            <p className="text-sm text-gray-600">Facebook PDQ, VideoDNA</p>
          </div>
          
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <AlertCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">Authenticity</h3>
            <p className="text-sm text-gray-600">DeepFakeDetector</p>
          </div>
        </div>
      </div>

      {/* Batch Processing */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Database className="w-6 h-6 text-primary-800" />
          Batch Analysis
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Play className="w-6 h-6 text-primary-800" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Queue Recordings</h3>
            <p className="text-sm text-gray-600 mb-4">Add screen recordings to analysis queue</p>
            <button className="btn-secondary">Select Recordings</button>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
            <p className="text-sm text-gray-600">Recordings in Queue</p>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-1">~45 min</div>
            <p className="text-sm text-gray-600">Estimated Time</p>
          </div>
        </div>
      </div>

      {/* Analysis Results */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary-800" />
          Analysis Results
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Recording</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Confidence</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Models Used</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Detections</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Infringement</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Analyzed</th>
              </tr>
            </thead>
            <tbody>
              {processedRecordings.map((recording) => (
                <tr key={recording.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{recording.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`status-badge ${
                      recording.status === 'completed' ? 'status-processed' : 'status-unprocessed'
                    }`}>
                      {recording.status === 'completed' ? 'Completed' : 'Processing'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {recording.confidence > 0 ? `${recording.confidence}%` : '-'}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {recording.modelsUsed.map((model, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                          {model}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {recording.detections.map((detection, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {detection.replace('_', ' ')}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {recording.infringement === null ? (
                      <span className="text-gray-400">-</span>
                    ) : recording.infringement ? (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {recording.processedAt || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Model Performance Stats */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Model Performance Statistics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">98.9%</div>
            <p className="text-sm text-gray-600">Highest Accuracy</p>
            <p className="text-xs text-gray-500">Microsoft VideoDNA</p>
          </div>
          
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">156</div>
            <p className="text-sm text-gray-600">Total Analyses</p>
            <p className="text-xs text-gray-500">This month</p>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">23</div>
            <p className="text-sm text-gray-600">Infringements Detected</p>
            <p className="text-xs text-gray-500">14.7% detection rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataLabelling