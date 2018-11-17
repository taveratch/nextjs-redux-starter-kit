const colors = {
  'green': '21ce99',
  'darkgreen': '27ae60',
  'carrot': 'e67e22',
  "emerald": '2ecc71',
  'white': 'ffffff',
  'black': '000000',
  'greyF5': 'f5f5f5',
  'blue': '108ee9',
  'darkgrey': '3E3E3E',
  'lightgrey': '6c7980',
  'red': 'e74c3c',
  'smokywhite': 'fbfbfb',
  'whitegrey': 'fafafa',
  'divider': 'e9e9e9',
  'lightblue': '84C0EB48',
  'pink': 'ff7979',
  'orange': 'ffbe76',
  'mint': '00b894',
  'reptile_green': '26de81'
}

export default {
  get: (name) => `#${colors[name] || colors['white']}`
}