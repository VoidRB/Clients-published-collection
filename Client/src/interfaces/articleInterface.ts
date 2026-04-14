interface content {
  id: number
  type: string
  content: string
}

export default interface Article {
  id: number
  title: string
  synopsis: string
  content: {
    body: Array<content>
    author: string
  }
  date_written: string
  slug: string
}
