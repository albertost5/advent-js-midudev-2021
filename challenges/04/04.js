function createXmasTree(height) {
  const tree = [];
  const width = height * 2 - 1;
  const base = `${'_'.repeat(height-1)}#${'_'.repeat(height-1)}`;
  for (let i = 1; i <= height; i++) {
    const underscore = width - (height-i) * 2;
    tree.push(`${'_'.repeat(height-i)}${'*'.repeat(underscore)}${'_'.repeat(height-i)}`);
  }
  tree.push(base);
  tree.push(base);
  
  return tree.join('\n');
}


createXmasTree(3);

createXmasTree(5);

createXmasTree(10);