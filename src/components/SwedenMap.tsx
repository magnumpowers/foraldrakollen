'use client'

import { MapContainer, TileLayer, CircleMarker, Popup, AttributionControl, useMap } from 'react-leaflet'
import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { kommunCoordinates } from '@/lib/kommuner'

interface SwedenMapProps {
  kommunStats: Record<string, number>
  highlightKommun?: string
}

function MapFlyTo({ position }: { position: [number, number] | null }) {
  const map = useMap()
  useEffect(() => {
    if (position) {
      map.flyTo(position, 7, { duration: 1.5 })
    }
  }, [position, map])
  return null
}

function getColor(count: number, isHighlight: boolean): string {
  if (isHighlight) return '#E07055' // coral
  if (count >= 20) return '#1B2D4F' // navy-800
  if (count >= 5) return '#4A7FB5'  // navy-400
  return '#A8C5E0' // navy-200
}

export default function SwedenMap({ kommunStats, highlightKommun }: SwedenMapProps) {
  const entries = Object.entries(kommunStats)
    .filter(([kommun]) => kommun in kommunCoordinates)
    .map(([kommun, count]) => ({
      kommun,
      count,
      pos: kommunCoordinates[kommun] as [number, number],
    }))

  const missing = Object.keys(kommunStats).filter(k => !(k in kommunCoordinates))
  const highlightPos = highlightKommun && kommunCoordinates[highlightKommun] ? kommunCoordinates[highlightKommun] : null

  return (
    <div>
      <div className="rounded-[1.5rem] overflow-hidden border border-warm-100" style={{ height: 480 }}>
        <MapContainer
          center={[62.5, 16.5]}
          zoom={4}
          className="h-full w-full"
          scrollWheelZoom={false}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
          />
          {entries.length === 0 && (
            <div />
          )}
          {entries.map(({ kommun, count, pos }) => {
            const isHighlight = kommun === highlightKommun
            return (
              <CircleMarker
                key={kommun}
                center={pos}
                radius={Math.min(6 + Math.sqrt(count) * 3.5, 28)}
                pathOptions={{
                  fillColor: getColor(count, isHighlight),
                  color: '#ffffff',
                  weight: 2,
                  fillOpacity: isHighlight ? 0.95 : 0.8,
                }}
              >
                <Popup closeButton={false} className="foraldrakollen-popup">
                  <div className="font-sans">
                    <div className="font-bold text-navy-900 text-base mb-0.5">{kommun}</div>
                    <div className="text-sm text-warm-500">
                      {count} {count === 1 ? 'rapport' : 'rapporter'}
                    </div>
                  </div>
                </Popup>
              </CircleMarker>
            )
          })}
          <AttributionControl position="bottomright" prefix={false} />
          <MapFlyTo position={highlightPos} />
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-warm-500 px-2">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-semibold text-warm-600">Antal rapporter:</span>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#A8C5E0' }} />
            <span>1–4</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-3.5 h-3.5 rounded-full" style={{ backgroundColor: '#4A7FB5' }} />
            <span>5–19</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: '#1B2D4F' }} />
            <span>20+</span>
          </div>
          {highlightKommun && (
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-3.5 h-3.5 rounded-full" style={{ backgroundColor: '#E07055' }} />
              <span>din kommun</span>
            </div>
          )}
        </div>
        {entries.length === 0 && (
          <span className="italic">Kartan fylls på när fler rapporterar</span>
        )}
      </div>

      {missing.length > 0 && (
        <p className="text-xs text-warm-400 mt-3 text-center">
          Även rapporter från: {missing.slice(0, 8).join(', ')}{missing.length > 8 ? ` +${missing.length - 8} till` : ''}
        </p>
      )}
    </div>
  )
}
