import { Pie } from '@nivo/pie'
import React from 'react'

const data = [
  {
    id: 'Protein',
    label: 'Protein',
    value: 573,
    color: '#AC6DDE'
  },
  {
    id: 'Fat',
    label: 'Fat',
    value: 95,
    color: '#DECB6D'
  },
  {
    id: 'Carbohydrate',
    label: 'Carbohydrate',
    value: 197,
    color: '#6DDEAC'
  }
]

export const MyResponsivePie: React.FC = () => (
  <Pie
    data={data}
    margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
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
)
