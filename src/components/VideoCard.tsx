import React from 'react'
import { Play, Trash2, Upload, Clock, Calendar, Monitor, Smartphone } from 'lucide-react'
import { clsx } from 'clsx'

interface VideoCardProps {
  id: string
  title: string
  thumbnail: string
  duration: string
  timestamp: string
  status: 'processed' | 'unprocessed'
  description: string
  deviceType: 'desktop' | 'mobile'
  hasAudio: boolean
  onDelete: (id: string) => void
  onUpload: (id: string) => void
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnail,
  duration,
  timestamp,
  status,
  description,
  deviceType,
  hasAudio,
  onDelete,
  onUpload
}) => {
  return (
    <div className="card hover:shadow-md transition-shadow duration-200 animate-fade-in">
      {/* Thumbnail */}
      <div className="relative mb-4 group">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-48 object-cover rounded-lg bg-gray-200"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {duration}
        </div>
        <div className="absolute top-2 left-2 flex gap-1">
          <div className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
            {deviceType === 'desktop' ? (
              <Monitor className="w-3 h-3" />
            ) : (
              <Smartphone className="w-3 h-3" />
            )}
            {deviceType}
          </div>
          {hasAudio && (
            <div className="bg-green-600 bg-opacity-90 text-white px-2 py-1 rounded text-xs">
              Audio
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          {timestamp}
        </div>

        <div className="flex items-center justify-between">
          <span className={clsx('status-badge', {
            'status-processed': status === 'processed',
            'status-unprocessed': status === 'unprocessed'
          })}>
            {status === 'processed' ? 'Analyzed' : 'Pending Analysis'}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onUpload(id)}
            className="btn-primary flex-1 text-sm"
          >
            <Upload className="w-4 h-4" />
            Submit for Analysis
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn-danger"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoCard