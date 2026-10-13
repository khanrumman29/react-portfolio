import { useState, useRef } from 'react'
import { siteConfig } from '../data/config'

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('00:00')
  const [duration, setDuration] = useState('00:00')
  const [hasStarted, setHasStarted] = useState(false)
  const videoRef = useRef(null)

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '00:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true)
        setHasStarted(true)
      }).catch((err) => {
        console.warn('Video playback notice:', err)
      })
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const current = videoRef.current.currentTime
    const total = videoRef.current.duration
    setCurrentTime(formatTime(current))
    if (total) {
      setProgress((current / total) * 100)
    }
  }

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return
    setDuration(formatTime(videoRef.current.duration))
  }

  const handleSeek = (e) => {
    if (!videoRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percent = Math.max(0, Math.min(1, clickX / rect.width))
    const newTime = percent * videoRef.current.duration
    videoRef.current.currentTime = newTime
    setProgress(percent * 100)
  }

  const toggleFullscreen = () => {
    if (!videoRef.current) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'k') {
      e.preventDefault()
      togglePlay()
    } else if (e.key === 'm') {
      e.preventDefault()
      toggleMute()
    }
  }

  return (
    <section
      className="showreel-section"
      id="showreel"
      aria-labelledby="showreel-heading"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="section-meta-header">
        <span className="section-meta-number">02</span>
        <h2 className="section-meta-title" id="showreel-heading">
          Showreel
        </h2>
        <span className="section-meta-tagline">{siteConfig.showreel.year} Reel Edition</span>
      </div>

      <div className="showreel-player-container">
        <div className="showreel-frame">
          <video
            ref={videoRef}
            src={siteConfig.showreel.videoUrl}
            poster={siteConfig.showreel.poster}
            playsInline
            muted={isMuted}
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            className="showreel-video"
            aria-label="Rumman showreel video player"
          />

          {/* Poster & Big Play Overlay if not playing */}
          {!isPlaying && (
            <div className="showreel-overlay" onClick={togglePlay}>
              <div className="showreel-badge">
                <span>CINEMATIC REEL</span>
                <span className="showreel-badge__year">{siteConfig.showreel.year}</span>
              </div>
              <button
                type="button"
                className="showreel-big-play"
                aria-label={hasStarted ? 'Resume Showreel' : 'Play Showreel'}
              >
                <span className="play-triangle">▶</span>
                <span className="play-ring" />
              </button>
              <div className="showreel-prompt">
                <span>CLICK TO PLAY REEL</span>
                <small>{siteConfig.showreel.duration} MIN COMPILATION</small>
              </div>
            </div>
          )}

          {/* Interactive Player Controls Bar */}
          <div className="showreel-controls-bar">
            {/* Progress Bar */}
            <div
              className="showreel-progress-track"
              onClick={handleSeek}
              role="slider"
              aria-label="Video scrubber"
              aria-valuenow={Math.round(progress)}
              aria-valuemin="0"
              aria-valuemax="100"
              tabIndex={0}
            >
              <div className="showreel-progress-fill" style={{ width: `${progress}%` }} />
            </div>

            <div className="showreel-controls-row">
              <div className="showreel-controls-left">
                <button
                  type="button"
                  className="control-btn"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? '❚❚' : '▶'}
                </button>
                <button
                  type="button"
                  className="control-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? '🔇' : '🔊'}
                </button>
                <span className="control-time">
                  {currentTime} / {duration}
                </span>
              </div>

              <div className="showreel-controls-right">
                <span className="control-badge">HD 1080P</span>
                <button
                  type="button"
                  className="control-btn"
                  onClick={toggleFullscreen}
                  aria-label="Toggle fullscreen"
                >
                  ⛶
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Caption & Metadata */}
        <div className="showreel-footer-meta">
          <p className="showreel-caption">
            <strong>{siteConfig.showreel.title}</strong> — {siteConfig.showreel.caption}
          </p>
          <div className="showreel-tags">
            <span>Sound Design</span>
            <span>Motion Graphics</span>
            <span>Commercial Cuts</span>
            <span>Speed Ramping</span>
          </div>
        </div>
      </div>
    </section>
  )
}
