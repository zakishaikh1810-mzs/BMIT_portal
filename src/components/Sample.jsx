import { SITE } from '../config'
// Small "Sample" tag next to placeholder content. Hidden when SITE.showSampleTags is false.
export default function Sample() {
  return SITE.showSampleTags ? <em className="smp">Sample</em> : null
}
