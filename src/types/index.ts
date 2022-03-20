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

export type dialogTypes = {
    _id: string | number,
    avatar: string,
    owner: string | number,
    partner: string | number,
    fullName: string
}
