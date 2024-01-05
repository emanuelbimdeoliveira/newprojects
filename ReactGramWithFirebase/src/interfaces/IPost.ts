export interface IComment {
  comment: string
  user: string
}

export interface IPost {
  id: string
  comments: IComment[] 
  description: string 
  likes: string[] 
  timeNow: Record<string, string> 
  title: string 
  urlImage: string 
  user: string 
  userId: string 
}
