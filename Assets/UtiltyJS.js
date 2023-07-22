export function RandomNumber(from, till) {
    let random = Math.floor((Math.random() * till) + from);
    return random;
}