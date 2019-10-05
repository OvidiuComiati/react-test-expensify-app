export default (expenses) => {
    if(expenses.length === 0){
        return 0
    }else {
        return expenses.map((expenses) => expenses.amount)
                       .reduce((sum, value) => {
                            return sum+value
                       },0)
        //.map turns an array of obj into an array of numbers
    }
}