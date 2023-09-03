type User = {
  id: number
  name: string
}

type Post = {
  id: number
  slug: string
  title: string
}

type CachedUser = {
  value: User
  lastUpdated: Date
}

type CachedPost = {
  value: Post
  lastUpdated: Date
}

const acceptCachedUser = (input: CachedUser) => {
  console.log(`Value was last updated at ${input.lastUpdated}`)
}

const acceptCachedPost = (input: CachedPost) => {
  console.log(`Value was last updated at ${input.lastUpdated}`)
}
