import siteData from '../data/site-data.json'

export const useSiteData = () => {
  return {
    site: siteData.site,
    images: siteData.images,
    navigation: siteData.navigation,
    languages: siteData.languages,
    pages: siteData.pages,
    footer: siteData.footer
  }
}
