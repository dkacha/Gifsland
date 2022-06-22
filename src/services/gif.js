const mapGif = gif => {
  const gifMedia = gif.media[0].gif
  const dimension = gifMedia.dims

  return {
    id: gif.id,
    description: gif.content_description,
    image: gifMedia.url,
    width: dimension[0],
    height: dimension[1],
  }
}

export const mapGifs = gifs => {
  return gifs.map(mapGif)
}
