function generateSpiralMatrix(n) {
  // 创建一个 n*n 的矩阵，并将每个元素初始化为 0
  const matrix = Array.from(Array(n), () => new Array(n).fill(0));

  let num = 1; // 用于填充矩阵的数字
  let top = 0; // 上边界
  let bottom = n - 1; // 下边界
  let left = 0; // 左边界
  let right = n - 1; // 右边界

  while (num <= n * n) {
    // 从左到右填充上边界
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num;
      num++;
    }
    top++;

    // 从上到下填充右边界
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;

    // 从右到左填充下边界
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num;
      num++;
    }
    bottom--;

    // 从下到上填充左边界
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num;
      num++;
    }
    left++;
  }

  return matrix;
}

const n = 4; // 你可以根据需要设置 n 的值
const spiralMatrix = generateSpiralMatrix(n);
console.log(spiralMatrix);
