'use client'

import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { kommunCoordinates } from '@/lib/kommuner'

interface SwedenMapProps {
  kommunStats: Record<string, number>
  highlightKommun?: string
}

export default function SwedenMap({ kommunStats, highlightKommun }: SwedenMapProps) {
  const entries = Object.entries(kommunStats)
    .filter(([kommun]) => kommun in kommunCoordinates)
    .map(([kommun, count]) => ({
      kommun,
      count,
      pos: kommunCoordinates[kommun] as [number, number],
    }))

  const mappedCount = entries.length
  const totalKommuner = Object.keys(kommunStats).length

  return (
    <div>
      <div className="rounded-[1.5rem] overflow-hidden border border-warm-100" style={{ height: 420 }}>
        <MapContainer
          center={[62.5, 16.5]}
          zoom={4}
          className="h-full w-full"
          scrollWheelZoom={false}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          {entries.map(({ kommun, count, pos }) => {
            const isHighlight = kommun === highlightKommun
            return (
              <CircleMarker
                key={kommun}
                center={pos}
                radius={Math.min(6 + Math.sqrt(count) * 3, 25)}
                pathOptions={{
                  fillColor: isHighlight ? '#1B2D4F' : '#4A7FB5',
                  color: '#ffffff',
                  weight: 2,
                  fillOpacity: isHighlight ? 0.95 : 0.75,
                }}
              >
                <Tooltip>
                  <span className="font-semibold">{kommun}</span>: {count} {count === 1 ? 'rapport' : 'rapporter'}
                </Tooltip>
              </CircleMarker>
            )
          })}
        </MapContainer>
      </div>
      {totalKommuner > mappedCount && (
        <p className="text-xs text-warm-400 mt-2 text-center">
          Visar {mappedCount} av {totalKommuner} kommuner på kartan
        </p>
      )}
    </div>
  )
}
