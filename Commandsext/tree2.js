let fs=require('fs');
 const { METHODS } = require('http');
 let path=require('path');

function treeFunction_helper(srcPath,intent)
{
    let BaseName=path.basename(srcPath);
    console.log(intent+BaseName);
    let content=fs.readdirSync(srcPath);
    for(let i=0;i<content.length;i++)
    {
        let totpath=path.join(srcPath,content[i]);
        let stat=fs.lstatSync(totpath);
        if(stat.isFile()==true)
        {
            console.log(intent+"├──"+content[i]);
        }
        else{
            treeFunction_helper(totpath,intent+"  ");
        }
    }
}
function treeFunction(srcPath)
{
    treeFunction_helper(srcPath,"");
}
module.exports={
    treeFun:treeFunction
};



// let fs=require('fs');
// const { METHODS } = require('http');
// let path=require('path');

// function treeFunction(srcPath)
// {
//     let BaseName=path.basename(srcPath);
//     console.log("Folder:-"+BaseName);
//     let content=fs.readdirSync(srcPath);
//     let allEntities="";
//     for(let i=0;i<content.length;i++)
//     {
//         let totpath=path.join(srcPath,content[i]);
//         let stat=fs.lstatSync(totpath);
//         if(stat.isFile()==true)
//         {
//             allEntities+="File:-"+content[i]+"\r\n";
//         }
//         else{
//             treeFunction(totpath);
//         }
//     }
//        console.log(allEntities);
// }
// module.exports={
//     treeFun:treeFunction
// };

