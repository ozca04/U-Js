let input = prompt ('waht would you like to do')
const todos = ['drink water', 'study codding']

while(input !== 'quit' && input !== 'q'){
    if (input === 'list'){
        console.log('****************')
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('****************')
    }else if(input === 'new'){
        const newTask = prompt('New task')
        todos.push(newTask)
        console.log(`${newTask} added to the list`)
    }else if (input === 'delete'){
        const index = parseInt(prompt('enter what to delete'))
        if (!Number.isNaN(index)){
            const deleted = todos.splice(index, 1)
            console.log(`${deleted[0]} is deleted`)
        }else{
            console.log('unkown index')
        }
    }
    let input = prompt ('waht would you like to do')
}

console.log('OK!!')