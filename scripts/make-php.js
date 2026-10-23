// Turns build/index.html into build/index.php for PHP hosting.
// (GitHub Pages cannot run PHP - use this only on a PHP-capable host.)
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const html = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

const header = `<?php
// Site settings - edit these instead of the HTML
$siteTitle = "Orpilla's Portfolio";
$siteDescription = "Shekkaina's Portfolio";
header('Content-Type: text/html; charset=utf-8');
?>
`;

const php = header + html
  .replace(/<title>.*?<\/title>/s, '<title><?= htmlspecialchars($siteTitle) ?></title>')
  .replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    '<meta name="description" content="<?= htmlspecialchars($siteDescription) ?>" />'
  );

fs.writeFileSync(path.join(buildDir, 'index.php'), php);
fs.unlinkSync(path.join(buildDir, 'index.html'));
console.log('Created build/index.php (index.html removed). Upload the whole build/ folder.');
