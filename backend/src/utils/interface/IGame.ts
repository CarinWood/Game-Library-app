export interface CreateGame {
    title: string
    system: string
    release_yr: number
    genre: string

}

export interface ReadGame {
    _id: string
    title: string
    system: string
    release_yr: number
    genre: string
}