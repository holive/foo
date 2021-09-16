import { Pie, PieTooltipProps } from '@nivo/pie'
import React from 'react'

import { Data, FoodTypeChartHook } from './FoodTypeChartHook'

export const FoodTypeChart: React.FC = () => {
  const {
    toPercentage,
    newData,
    formatArcLinkLabel,
    formatArcLabel,
    handleClick
  } = FoodTypeChartHook()

  const Tooltip = (
    data: React.PropsWithChildren<PieTooltipProps<Data>>
  ): JSX.Element => (
    <div className="py-1 px-2 shadow bg-white rounded text-xs">
      Total: <b>{data.datum.data.totalItems}</b>
    </div>
  )

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <Pie
          onClick={handleClick}
          valueFormat={toPercentage}
          arcLabel={formatArcLabel}
          arcLinkLabel={formatArcLinkLabel}
          tooltip={Tooltip}
          data={newData}
          margin={{ top: 20, right: 80, bottom: 30, left: 80 }}
          innerRadius={0}
          padAngle={0.7}
          cornerRadius={2}
          activeOuterRadiusOffset={8}
          borderWidth={0}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#666"
          arcLinkLabelsThickness={4}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          colors={{ datum: 'data.color' }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: 'ruby'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'scala'
              },
              id: 'lines'
            }
          ]}
          arcLinkLabelsStraightLength={80}
          activeInnerRadiusOffset={0}
          height={200}
          width={800}
        />
      </div>
    </div>
  )
}
