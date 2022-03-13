export type UserTypes = {
    _id: string | number,
    name: string,
    secondName?: string,
    lastName: string,
    photo?: string
}

export type MessageTypes = {
    userName: string,
    content: string,
    own?: boolean,
    timestamp: number
}
