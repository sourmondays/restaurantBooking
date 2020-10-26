export const DefaultUser = {
    date: '',
    time: '',
    noPersons: '',
    firstName: '',
    lastName: '',
    email: '',
}

export const UserReducer = (user, { type, payload }) => {
    switch (type) {
        case 'DATE_TIME_PEOPLE_INFO':
            return {
                ...user,
                ...payload,
            }
        case 'RESERVATION_INFO':
            return {
                ...user,
                reservation: {
                    ...user.reservation,
                    ...payload,
                },
            }

        default:
            return user
    }
}
