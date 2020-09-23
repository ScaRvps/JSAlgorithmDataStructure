class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vert) {
    if (!this.adjacencyList[vert]) this.adjacencyList[vert] = [];
    return this.adjacencyList;
  }

  addEdge(vert1, vert2, weight) {
    if (!this.adjacencyList[vert1] || !this.adjacencyList[vert2]) {
      console.log(`vertex doesn't exist`);
      return;
    }
    this.adjacencyList[vert1].push({ node: vert2, weight });
    this.adjacencyList[vert2].push({ node: vert1, weight });
    return this.adjacencyList;
  }

  removeEdge(vert1, vert2) {
    if (!this.adjacencyList[vert1] || !this.adjacencyList[vert2]) {
      console.log(`vertex doesn't exist`);
      return;
    }
    let vertex1 = this.adjacencyList[vert1];
    let vertex2 = this.adjacencyList[vert2];
    this.adjacencyList[vert1] = vertex1.filter((el) => el !== vert2);
    this.adjacencyList[vert2] = vertex2.filter((el) => el !== vert1);
    return this.adjacencyList;
  }

  removeVertex(vert) {
    if (!this.adjacencyList[vert]) {
      console.log(`vertex doesn't exist`);
      return;
    }
    this.adjacencyList[vert].forEach((element) => {
      this.removeEdge(vert, element);
    });
    delete this.adjacencyList[vert];
    return this.adjacencyList;
  }

  dfsRecursive(vertex) {
    let elements = [];
    let visited = {};

    const dfs = (vertex) => {
      if (!vertex) return null;
      elements.push(vertex);
      visited[vertex] = true;
      this.adjacencyList[vertex].forEach((el) => {
        if (!visited[el]) dfs(el);
      });
    };
    dfs(vertex);
    return elements;
  }

  dfsIterative(vertex) {
    let stack = [vertex];
    let visited = {};
    let elements = [];
    let element;

    visited[vertex] = true;
    while (stack.length !== 0) {
      element = stack.pop();
      elements.push(element);
      this.adjacencyList[element].forEach((el) => {
        if (!visited[el]) {
          visited[el] = true;
          stack.push(el);
        }
      });
    }
    return elements;
  }

  bfsIterative(vertex) {
    let queue = [vertex];
    let visited = {};
    let elements = [];
    let element;

    visited[vertex] = true;
    while (queue.length) {
      element = queue.shift();
      elements.push(element);
      this.adjacencyList[element].forEach((el) => {
        if (!visited[el]) {
          visited[el] = true;
          queue.push(el);
        }
      });
    }
    return elements;
  }
}
