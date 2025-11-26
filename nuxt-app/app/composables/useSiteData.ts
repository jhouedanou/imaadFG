import siteData from '../data/site-data.json'

export const useSiteData = () => {
  return {
    site: siteData.site,
    navigation: siteData.navigation,
    languages: siteData.languages,
    pages: siteData.pages
  }
}
