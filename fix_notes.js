const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'client/src/data/notes/');

fs.readdirSync(notesDir).forEach(file => {
  if (file.endsWith('.js') && file !== 'index.js') {
    const filePath = path.join(notesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace unescaped ${ with \${
    // We look for ${ that is not preceded by a backslash
    // Since lookbehind is not supported in all node versions easily in regex literals without flags, 
    // we use a group-based approach or a simple replace if we're careful.
    
    // Better: replace all ${ with \${ but first revert any already escaped ones to avoid double escaping
    // content = content.replace(/\\\$\{/g, '${'); 
    // Actually, let's just use a more surgical approach.
    
    let count = 0;
    const fixed = content.replace(/([^\\])\$\{/g, (match, p1) => {
      count++;
      return p1 + '\\${';
    });

    if (count > 0) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed ${count} occurrences in ${file}`);
    } else {
      console.log(`No changes needed for ${file}`);
    }
  }
});
