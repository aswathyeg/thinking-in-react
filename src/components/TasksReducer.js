
export default function TaskReducer(tasks,action){
    switch(action.type){
        case 'added':{
            return[...tasks,
            {
                id:action.id,
                text:action.text,
                done:false
            }
        ]

        }
        case 'deleted':{
            return
                tasks.filter((items)=>items.id!==action.id)
            
            
        }
        case 'changed':{
            return tasks.map((items)=> {
                if(items.id===action.task.id)
                {
                    return action.task;
                }
                else {return items}
             } );
            }
            
        
        default:{
            throw Error('Unknown action: ' + action.type);
        }
    }

}