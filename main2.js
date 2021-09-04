let helpObj=require('./Commandsext/help2.js');
let treeObj=require('./Commandsext/tree2.js');
let organizeObj=require('./Commandsext/organize2.js')
let inputargv=process.argv.slice(2);
let command=inputargv[0];
let pathnm=inputargv[1];
let path=require('path');
switch(command)
{
    case "help":
        helpObj.helpFun();
        break;
    case "tree":
        treeObj.treeFun(pathnm);
        break;
    case "organize":
        organizeObj.organizeFun(pathnm);
        break;
    default:
        console.log("Invalid Command");
        break;
}

