import { Banner } from '../../components/Banner/Banner'
import { Brand_promises } from '../../components/Brand_promises/Brand_promises'
import { Featured_products } from '../../components/Featured_products/Featured_products'
import { Story } from '../../components/Story/Story'
import { Newsletter } from '../../components/Newsletter/Newsletter'

export function Home() {
  return (
    <>
      <Banner />
      <Brand_promises />
      <Featured_products />
      <Story />
      <Newsletter />
    </>
  )
}