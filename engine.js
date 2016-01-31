//hai guise
var engineActions = {
    "switchScene": function (data){
        var scene = scenes[data.scene];
        $("#background").attr("src",scene.background);
        $(".item").remove();
        for(var key in scene.items){
            var item = scene.items[key];
            var item_JQ = $("<img>")
            if(item.type){
                item_JQ = $("<" + item.type + "/>")
            }
                item_JQ
                .offset(item.pos)
                .addClass("item");
            if(item.html){
                item_JQ.html(item.html);
            }
            for(var action of item.callbacks){
                var type = action.type || "click";
                if(isFunction(action.actor)){
                    item_JQ.on(type, action.args, wrapFunction(action.actor));
                }else if(actions[action.actor]){
                    item_JQ.on(type, action.args, wrapFunction(actions[action.actor]));
                }else if(engineActions[action.actor]){
                    item_JQ.on(type, action.args, wrapFunction(engineActions[action.actor]));
                }
                else{
                    console.log("error: No such function");
                }
            }
            for(var key in item.css){
                item_JQ.css(key,item.css[key]);
            }
            for(var key in item.attrs){
                item_JQ.attr(key,item.attrs[key]);
            }
            $("body").append(item_JQ);
        }
    },
    "displayDialouge":function (data){
        var dialouge = dialouges[data.dialogue];
        
    }
}
function wrapFunction(func){
    return function(event){func(event.data);};
}

$(function(){
    engineActions.switchScene({scene:"default"});
})

function isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
}