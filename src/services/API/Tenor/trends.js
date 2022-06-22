import { appConfig } from '@/config/appConfig'
import { fetchGet } from '@/services/API/fetch'

export const apiTenorGetTrending = (
  position = 0,
  limit = appConfig.api.tenor.pageLimit,
  mediaFilter = appConfig.api.tenor.mediaFilter,
  key = appConfig.api.tenor.key
) => {
  const params = {
    limit,
    position,
    key,
  }

  if (mediaFilter) {
    params['media_filter'] = mediaFilter
  }

  return fetchGet(
    `${appConfig.api.tenor.baseUrl}trending`,
    params,
  )
}
