const STROR__KEY = 'todos';

export function fetch() {
     let result = sessionStorage.getItem(STROR__KEY);
     if(result){
         return  JSON.parse(result)
     }
     return []
}
export function save(data) {

    if(data){
        console.log(data)
        sessionStorage.setItem(STROR__KEY,JSON.stringify(data))
    }

}

