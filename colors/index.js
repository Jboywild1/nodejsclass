class Color {
  constructor(name, code) {


    this.name = name;
    this.code = code;


  }
}

const allColors = [
  new Color ('brightred', '#E74c3c3'),
  new Color ('soothinpurple', '#9b59b6'),
  new Color ('skyblue', '#48c9b0'),
  new Color ('leafygreen', '#5dad32'),
  new Color ('sunkissedyellow', '#f4d03f'),
  new Color ('groovegray', '#d7dbdd'),
];

exports.getRandomColor = () => {
  return allColors[Math.floor(Math.random() * allColors.length)];
}

exports.allColors = allColors;