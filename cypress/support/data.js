import teamMembers from "../fixtures/team-members.json";

export const makeid = (length) => {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

export const makeRandomEmail = (email) => {
    const emailArray = email.split("@");
    return emailArray[0] + makeid(5) + "@" + emailArray[1]
}