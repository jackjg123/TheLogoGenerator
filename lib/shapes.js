class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color;
  }
}

// Inherit properties for classes: Square, Circle, Triangle
class Square extends Shape {
  render() {
    return `<rect x='73' y='40 width='160' height='160' fill='${this.color}'/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x='73' y='40 width='160' height='160' fill='${this.color}'/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x='73' y='40 width='160' height='160' fill='${this.color}'/>`;
  }
}
