// Builds public/assets/main.css = legacy base (Bootstrap + original template/component
// styles, recovered from the original production bundle) + current compiled SCSS.
// The SCSS output is appended LAST so edits in src/scss always win over the legacy base.
// Run with: npm run build:css   (then `npm run build` to refresh dist/)
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const tmp = mkdtempSync(join(tmpdir(), 'physio-css-'))
const compiled = join(tmp, 'compiled.css')

try {
  execSync(`npx --yes sass src/scss/main.scss "${compiled}" --no-source-map --style=compressed --quiet-deps --silence-deprecation=import,global-builtin,color-functions`, {
    stdio: 'inherit',
  })
  const legacy = readFileSync('src/styles/legacy-base.css', 'utf8')
  const scss = readFileSync(compiled, 'utf8')
  const out = `${legacy}\n/* ---- compiled from src/scss (overrides legacy base above) ---- */\n${scss}`
  writeFileSync('public/assets/main.css', out)
  console.log(`public/assets/main.css written (${(out.length / 1024).toFixed(0)} KB)`)
} finally {
  rmSync(tmp, { recursive: true, force: true })
}
