import { crumblScraper } from './crumblScraper'

const app = async (): Promise<void> => {
  console.log('started app')
  await crumblScraper()
}

app().catch(e => {
  console.error(e)
})
