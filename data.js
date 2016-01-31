var scenes = {
    "default":{
        background:"face.png",
        items:{
            "cow":{
                attrs:{
                    src:"cow.jpeg"
                },
                pos:{
                    top:500,
                    left:300
                },
                callbacks:[
                    {
                        type:"click",
                        actor:"switchScene",
                        args:{
                            scene : "cow"
                        }
                    }
                ]
            },
            "dog":{
                type:"div",
                html:"dog",
                pos:{
                    top:100,
                    left:30
                },
                callbacks:[
                    {
                        type:"click",
                        actor:function(){
                            alert("DOGGGGGGGGGG");
                        }
                    }
                ]
            }
        }
    },
    "cow":{
        background:"cow.jpeg",
        items:{
            "cow":{
                type:"div",
                html:"COW",
                pos:{
                    top:200,
                    left:400,
                },
                css:{
                    color:"magenta",
                    "font-family": '"Comic Sans MS", cursive, sans-serif'
                },
                callbacks:[
                    {
                        type:"click",
                        actor:function(){
                            alert("THIS IS A COW");
                        }
                    }
                ]
            },
            "face":{
                type:"div",
                html:"Go back to the face",
                pos:{
                    top:100,
                    left:900
                },
                
                callbacks:[
                    {
                        type:"click",
                        actor:"switchScene",
                        args:{
                            scene:"default"
                        }
                    }
                ]
            }
        }
    }
}
var actions = {
    
}
var dialouges = {
    test:["this is message one", "this is message 2", {yes:function(){return "wat"},no:function(){return"why"}}]
}