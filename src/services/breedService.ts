import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
})

export const fetchRandomBreed = async () => {
  const res = await api.get(`/images/search`)

  return res.data[0]
}

export const fetchBreedById = async (id: string) => {
  const res = await api.get(`/breeds/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

  return res.data
}

export const fetchImages = async (limit: number = 10, order: string = 'rand', type: string = 'static', category: string = '') => {
  const res = await api.get(`/images/search?limit=${limit}&order=${order}&type=${type}${category ? '&breed_ids='+category : ''}&has_breeds=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
  
  return res.data
}

export const fetchCategories = async () => {
	const res = await api.get(`/images/search?limit=20&has_breeds=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

	let categories = res.data.map((image: any) => {
		return {
			id: image.breeds[0]?.id,
			name: image.breeds[0]?.name,
		}
	})

	// Removing Duplications
	categories = [...new Set(categories)]

	return categories
}

export const fetchBreedImage = async (id: string) => {
  const res = await api.get(`/images/search?limit=10&breed_ids=${id}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
  
  return res.data
}

export const uploadBreedImage = async (file: string) => {
  const res = await api.post(`/images/upload?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, { file })

  return res.data
}

export const fetchVotes = async () => {
  const res = await api.get(`/votes?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

  return res.data
}

// like --> 1
export const fetchLikes = async () => {
  const res = await api.get(`/votes?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

  const likes = res.data.filter((like: any) => like.value === 1)
  return likes
}

// favorite --> 2
export const fetchFavorites = async () => {
  const res = await api.get(`/votes?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

  const favorites = res.data.filter((like: any) => like.value === 2)
  return favorites
}

// dislike --> 3
export const fetchDislikes = async () => {
  const res = await api.get(`/votes?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)

  const dislikes = res.data.filter((like: any) => like.value === 3)
  return dislikes
}

/*
Values
1 - like
2 - favorite
3 - dislike
*/
export const voteBreed = async ({image_id, sub_id, value}: any) => {
  const res = await api.post(`/votes?api_key=${process.env.NEXT_PUBLIC_API_KEY}`, { image_id, sub_id, value })

  return res.data
}

export const deleteBreedVote = async (vote_id: number) => {
  const res = await api.delete(`/votes/${vote_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
  
  return res.data
}