

import LmnReveal from '@/components/home/LmnReveal'
import LmnNav from '@/components/home/LmnNav'
import LmnHero from '@/components/home/LmnHero'
import LmnTicker from '@/components/home/LmnTicker'
import LmnAbout from '@/components/home/LmnAbout'
import LmnProducts from '@/components/home/LmnProducts'
import LmnStoryTeaser from '@/components/home/LmnStoryTeaser'
import LmnGallery from '@/components/home/LmnGallery'
import LmnOrder from '@/components/home/LmnOrder'
import LmnInstaFeed from '@/components/home/LmnInstaFeed'
import LmnFooter from '@/components/home/LmnFooter'

export default function Page() {
  

  return (
    <main className="lmn-grain font-[family-name:var(--font-syne)] bg-[#FFFDF5] text-[#2A1800] overflow-x-hidden max-w-[430px] mx-auto relative">
      <LmnReveal />
      <LmnNav />
      <LmnHero />
      <LmnTicker />
      <LmnAbout />
      <LmnProducts />
      <LmnStoryTeaser />
      <LmnGallery />
      <LmnOrder />
      <LmnInstaFeed />
      <LmnFooter />
    </main>
  )
}
