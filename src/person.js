console.log('person is running')

export const isAdult = (age)  =>{ 
    if(age>17){
        return true
    }
    return false
}
export const canDrink = (age) => {
    if(age>20){
        return true
    }
    return false
}

export default (age) => age>50