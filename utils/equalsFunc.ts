
export default function equals(a: any, b: any){
    return a == b || (a != null && a.equals(b));
}