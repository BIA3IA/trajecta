import { MapBaseLayer } from "./map-base-layer"
import { MapDefs } from "./map-defs"
import { MapLegend } from "./map-legend"
import { europeDemandMapVisual } from "./map-visual"
import { MapZonesLayer } from "./map-zones-layer"
import type { europeanDemandZone } from "./types"

export function EuropeDemandMap({ zones }: { zones: europeanDemandZone[] }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col items-start gap-2 text-start">
        <p className="typo-section-eyebrow">European demand map</p>
        <p className="typo-body-sm text-text-muted">
          Where this Skill Identity has stronger market pull across nearby European regions
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl">
        <svg
          viewBox={europeDemandMapVisual.viewBox}
          role="img"
          aria-label="Europe demand zone map"
          className="h-auto w-full"
        >
          <title>European demand zones for this Skill Identity</title>
          <MapDefs visual={europeDemandMapVisual} />

          <image
            href={europeDemandMapVisual.mapImageHref}
            x="0"
            y="0"
            width="1000"
            height="684"
            className={europeDemandMapVisual.mapImageClassName}
          />
          <MapBaseLayer visual={europeDemandMapVisual} />
          <MapZonesLayer zones={zones} visual={europeDemandMapVisual} />
        </svg>

        <MapLegend levelConfig={europeDemandMapVisual.levelConfig} />
      </div>
    </section>
  )
}

export { europeDemandMapVisual }
