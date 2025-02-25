export default class Helpers {
    static clamp(val, min, max){
        return Math.max(min, Math.min(val, max));
    }
}