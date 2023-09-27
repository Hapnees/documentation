import { ComponentProps } from 'react'
import { TermList } from '../components/TermList'

export const uiLayerRules: ComponentProps<typeof TermList>['items'] = [
  {
    mark: {
      title: 'shared',
      color: 'red',
    },
    desc: 'абстрактные, независимые компоненты, не имеющие отношения к специфике приложения',
  },
  {
    mark: {
      title: 'entities',
      color: 'yellow',
    },
    desc: 'бизнес-сущность, объект из реального мира',
  },
  {
    mark: {
      title: 'features',
      color: 'brown',
    },
    desc: 'интерактивный компонент с бизнес-логикой',
  },
  {
    mark: {
      title: 'widgets',
      color: 'green',
    },
    desc: 'самостоятельный компонент, состоящий из фич и сущностей ',
  },
  {
    mark: {
      title: 'pages',
      color: 'blue',
    },
    desc: 'полноценная страница собранная из виджетов, фич и сущностей',
  },
]
