const fs = require('fs');
const path = require('path');

const directories = [
    path.join(__dirname, 'src', 'pages'),
    path.join(__dirname, 'src', 'components')
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Replace text colors
    content = content.replace(/text-white\/[0-9]+/g, 'text-[#4B5563]');
    content = content.replace(/text-white/g, 'text-[#1E1E1E]');

    // Replace dark backgrounds sections with light ones
    content = content.replace(/bg-\[#050505\]/g, 'bg-white');
    content = content.replace(/bg-dark\/[0-9]+/g, 'bg-[#1E1E1E]/5'); // for overlays, keep slightly dark or just transparent

    // Specific fix for programmes card backgrounds so they are distinct
    // If a card is white on a white bg it might need a border, but card-3d has a shadow.

    // Fix specifically bg-dark
    content = content.replace(/bg-dark(?![-\/])/g, 'bg-[#FDF9F1]');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            processFile(fullPath);
        }
    });
}

directories.forEach(dir => {
    if (fs.existsSync(dir)) {
        walkDir(dir);
    }
});
