const getVisual = async () => {
  const res = await fetch('https://archillect-api.now.sh/random')
  const image = await res.json()
  return image.source
}

const setHeaderBackground = async () => {
  const background = await getVisual()
  const header = document.querySelector('header')
  header.style.backgroundImage = `url(https://crossorig.in/?corsit=${background})`
}

setHeaderBackground()
