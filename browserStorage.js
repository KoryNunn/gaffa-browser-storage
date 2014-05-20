var Gaffa = require('gaffa');

function BrowserStorage(actionDefinition){
}
BrowserStorage = Gaffa.createSpec(BrowserStorage, Gaffa.Action);
BrowserStorage.prototype._type = 'browserStorage';
BrowserStorage.prototype.trigger = function(parent, scope, event){

    var action = this,
        data = action.source.value;

    if(!action.method.value){
        console.warn('You should set the value of method.');
        return;
    }

    switch(action.method.value.toLowerCase()){
        case "get":
            data = window[action.type.value + 'Storage'].getItem(action.source.value);
            if(data === 'undefined'){
                data = undefined;
            }
            action.target.set(data ? JSON.parse(data) : undefined, !action.cleans.value);
            break;

        case "set":
            window[action.type.value + 'Storage'].setItem(action.target.value, JSON.stringify(data));
            break;

        case "remove":
            window[action.type.value + 'Storage'].removeItem(action.target.value);
            break;
    }

};
BrowserStorage.prototype.type = new Gaffa.Property({
    value: 'local'
});
BrowserStorage.prototype.method = new Gaffa.Property({
    value: 'get'
});
BrowserStorage.prototype.target = new Gaffa.Property();
BrowserStorage.prototype.cleans = new Gaffa.Property();
BrowserStorage.prototype.source = new Gaffa.Property();

module.exports = BrowserStorage;
