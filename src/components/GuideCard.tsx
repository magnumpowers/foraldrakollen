'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, CheckCircle2, Lightbulb, Apple, Smartphone, Moon, MessageSquareOff, MapPinOff, ShieldAlert, AppWindow, CreditCard } from 'lucide-react'
import type { Guide } from '@/lib/guides-data'

interface GuideCardProps {
  guide: Guide
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Moon,
  Smartphone,
  MessageSquareOff,
  MapPinOff,
  ShieldAlert,
  AppWindow,
  CreditCard,
}

function getPlatformIcon(platform: string) {
  const lower = platform.toLowerCase()
  if (lower.includes('ios') || lower.includes('apple') || lower.includes('iphone') || lower.includes('ipad')) {
    return <Apple className="w-4 h-4" />
  }
  if (lower.includes('android') || lower.includes('google')) {
    return <Smartphone className="w-4 h-4" />
  }
  return null
}

export function GuideCard({ guide }: GuideCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
  const Icon = iconMap[guide.iconName] || Moon
  const isCoralAccent = guide.color === 'coral'

  const toggleStep = (stepId: string) => {
    const newCompleted = new Set(completedSteps)
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId)
    } else {
      newCompleted.add(stepId)
    }
    setCompletedSteps(newCompleted)
  }

  const totalSteps = guide.platforms.reduce((acc, p) => acc + p.steps.length, 0)
  const completedCount = completedSteps.size
  const progressPercent = totalSteps > 0 ? (completedCount / totalSteps) * 100 : 0

  return (
    <div
      id={guide.id}
      className="bg-white rounded-3xl border border-sand-200 overflow-hidden scroll-mt-24"
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-sand-50 transition-colors"
      >
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
            isCoralAccent
              ? 'bg-coral-100 text-coral-500'
              : 'bg-primary-100 text-primary-500'
          }`}>
            <Icon className="w-7 h-7" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                isCoralAccent
                  ? 'bg-coral-100 text-coral-600'
                  : 'bg-primary-100 text-primary-600'
              }`}>
                Steg {guide.priority}
              </span>
              {completedCount > 0 && (
                <span className="text-xs text-gray-500">
                  {completedCount} av {totalSteps} klart
                </span>
              )}
            </div>
            <h2 className="font-display font-bold text-xl text-gray-900 mb-2">
              {guide.title}
            </h2>
            <p className="text-gray-600 line-clamp-2">
              {guide.why.substring(0, 150)}...
            </p>

            {/* Progress bar */}
            {completedCount > 0 && (
              <div className="mt-3 h-2 bg-sand-100 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 rounded-full ${
                    isCoralAccent ? 'bg-coral-400' : 'bg-primary-400'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            )}
          </div>

          <div className={`p-2 rounded-xl ${isExpanded ? 'bg-sand-100' : ''}`}>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-sand-100">
          {/* Why section */}
          <div className="mt-6 p-4 bg-sand-50 rounded-2xl">
            <h3 className="font-semibold text-gray-900 mb-2">Varför är detta viktigt?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{guide.why}</p>
          </div>

          {/* Key point */}
          <div className={`mt-4 p-4 rounded-2xl border-l-4 ${
            isCoralAccent
              ? 'bg-coral-50 border-coral-400'
              : 'bg-primary-50 border-primary-400'
          }`}>
            <div className="flex items-start gap-2">
              <Lightbulb className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                isCoralAccent ? 'text-coral-500' : 'text-primary-500'
              }`} />
              <p className={`text-sm font-medium ${
                isCoralAccent ? 'text-coral-800' : 'text-primary-800'
              }`}>
                {guide.keyPoint}
              </p>
            </div>
          </div>

          {/* Platform instructions */}
          <div className="mt-6 space-y-4">
            <h3 className="font-semibold text-gray-900">Så här gör du:</h3>

            {guide.platforms.map((platform, platformIndex) => (
              <div key={platformIndex} className="border border-sand-200 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-sand-50 border-b border-sand-200">
                  {getPlatformIcon(platform.platform)}
                  <span className="font-medium text-gray-800">{platform.platform}</span>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {platform.steps.map((step, stepIndex) => {
                      const stepId = `${guide.id}-${platformIndex}-${stepIndex}`
                      const isChecked = completedSteps.has(stepId)

                      return (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <button
                            onClick={() => toggleStep(stepId)}
                            className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                              isChecked
                                ? isCoralAccent
                                  ? 'bg-coral-400 border-coral-400'
                                  : 'bg-primary-400 border-primary-400'
                                : 'border-sand-300 hover:border-sand-400'
                            }`}
                          >
                            {isChecked && <CheckCircle2 className="w-4 h-4 text-white" />}
                          </button>
                          <span className={`text-sm leading-relaxed ${
                            isChecked ? 'text-gray-400 line-through' : 'text-gray-700'
                          }`}>
                            {step}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Tips att tänka på:</h3>
            <ul className="space-y-2">
              {guide.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    isCoralAccent ? 'text-coral-400' : 'text-primary-400'
                  }`} />
                  <span className="text-sm text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
