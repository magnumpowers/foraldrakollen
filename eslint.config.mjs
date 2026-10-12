import next from 'eslint-config-next'

export default [
  ...next,
  { ignores: ['.next/**', 'node_modules/**'] },
  // localStorage läses i effekter efter hydrering; det är avsiktligt här
  { rules: { 'react-hooks/set-state-in-effect': 'warn' } },
]
